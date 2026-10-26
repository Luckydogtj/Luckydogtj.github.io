/**
 * 科研受限数据注入器（本地预览专用）
 *
 * 未经公开授权的指标保存在仓库之外的私有目录（默认 ../Dog_blog_private/research-restricted），
 * 公开源码中只保留 <!-- DOG-RESTRICTED:SLOT:名称 --> 占位与默认的“数据发布限制”提示。
 *
 * 在 HTML 渲染阶段（after_render:html）：
 * - 本地构建/预览且私有数据存在时，用真实内容替换占位；
 * - CI 未授权或私有数据缺失时，保留占位内的默认安全提示。
 * 无论是否注入，占位注释都会被移除，产物中不出现 DOG-RESTRICTED 标记。
 *
 * 授权发布方式：取得书面授权后，在部署环境设置 RESEARCH_METRICS_PUBLIC=true。
 */
'use strict';

var fs = require('fs');
var path = require('path');

var privateDir = process.env.DOG_PRIVATE_DIR
  || path.join(hexo.base_dir, '..', 'Dog_blog_private', 'research-restricted');

var SLOT_PATTERN = /<!--\s*DOG-RESTRICTED:SLOT:([\w-]+)\s*-->([\s\S]*?)<!--\s*\/DOG-RESTRICTED:SLOT\s*-->/g;

function isApproved() {
  return process.env.RESEARCH_METRICS_PUBLIC === 'true';
}

function isCiBuild() {
  return process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';
}

function canInject() {
  return !isCiBuild() || isApproved();
}

function loadSlots() {
  var blocksFile = path.join(privateDir, 'uhvdc-oscillation.blocks.json');
  if (!fs.existsSync(blocksFile)) {
    return null;
  }
  try {
    return JSON.parse(fs.readFileSync(blocksFile, 'utf8')).slots || null;
  } catch (err) {
    hexo.log.warn('[research-inject] 私有数据文件解析失败：' + err.message);
    return null;
  }
}

hexo.extend.filter.register('after_render:html', function (str) {
  if (!str || str.indexOf('DOG-RESTRICTED:SLOT') === -1) {
    return str;
  }

  var slots = canInject() ? loadSlots() : null;
  var injected = 0;
  var kept = 0;

  var out = str.replace(SLOT_PATTERN, function (match, name, inner) {
    if (slots && slots[name]) {
      injected += 1;
      return slots[name];
    }
    kept += 1;
    return inner;
  });

  if (injected > 0) {
    hexo.log.info('[research-inject] 本地预览：已注入 ' + injected + ' 处受限数据区块（数据来自仓库外私有目录）');
  }
  if (kept > 0) {
    hexo.log.info('[research-inject] 保留 ' + kept + ' 处“数据发布限制”提示（未授权公开）');
  }

  return out;
}, 5);
