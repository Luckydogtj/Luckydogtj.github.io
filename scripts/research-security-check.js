/**
 * 科研内容发布安全检查（渲染阶段阻断）
 *
 * 在 HTML 渲染阶段检查每一份产物：
 * 1. 不得残留 DOG-RESTRICTED 占位标记；
 * 2. CI/部署环境且未授权（RESEARCH_METRICS_PUBLIC!==true）时，
 *    不得出现受限内容结构（KPI 数值、损耗百分比、仿真模型规模）。
 *
 * 另有 after_generate 源码扫描：公开源码命中私有监视清单即中断构建，
 * 并在构建完成后由 scripts/research-security-scan.js 做文件级终检。
 */
'use strict';

var fs = require('fs');
var path = require('path');

var privateDir = process.env.DOG_PRIVATE_DIR
  || path.join(hexo.base_dir, '..', 'Dog_blog_private', 'research-restricted');

/* 不含明文数值的结构特征：受限组件 + 数字 */
var STRUCTURE_PATTERNS = [
  { name: 'KPI 数值卡', re: /dog-kpi-value[^<]*\d/ },
  { name: '损耗百分比', re: /dog-loss-value[^<]*\d[^<]*%/ },
  { name: '仿真模型规模', re: /dog-condition-card[\s\S]{0,400}?\d+\s*MW/ }
];

function fail(message) {
  throw new Error('[research-security-check] 发布阻断：' + message);
}

function loadWatchPatterns() {
  var watchFile = path.join(privateDir, 'watchlist.txt');
  if (!fs.existsSync(watchFile)) {
    return null;
  }
  return fs.readFileSync(watchFile, 'utf8')
    .split(/\r?\n/)
    .filter(function (line) { return line.trim() && line.indexOf('#') !== 0; })
    .map(function (line) { return new RegExp(line.trim()); });
}

function walk(dir, ext, out) {
  if (!fs.existsSync(dir)) return out;
  fs.readdirSync(dir).forEach(function (name) {
    var file = path.join(dir, name);
    if (fs.statSync(file).isDirectory()) {
      walk(file, ext, out);
    } else if (ext.test(name)) {
      out.push(file);
    }
  });
  return out;
}

/* 1. 公开源码不得出现监视清单中的明文数值 */
hexo.extend.filter.register('before_generate', function () {
  var patterns = loadWatchPatterns();
  if (!patterns) {
    return;
  }
  walk(path.join(hexo.source_dir), /\.(md|html|ejs|js|css)$/, []).forEach(function (file) {
    var text = fs.readFileSync(file, 'utf8');
    patterns.forEach(function (re) {
      if (re.test(text)) {
        fail('公开源码 ' + path.relative(hexo.base_dir, file) + ' 命中监视清单 /' + re.source + '/，请将明文数值移回私有目录');
      }
    });
  });
});

/* 2. 渲染产物不得残留标记；部署环境未授权时不得出现受限结构 */
hexo.extend.filter.register('after_render:html', function (str) {
  if (!str) {
    return str;
  }

  if (str.indexOf('DOG-RESTRICTED') !== -1) {
    fail('构建产物残留 DOG-RESTRICTED 占位标记，注入/替换流程异常');
  }

  var approved = process.env.RESEARCH_METRICS_PUBLIC === 'true';
  var isCi = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';
  if (isCi && !approved) {
    STRUCTURE_PATTERNS.forEach(function (p) {
      if (p.re.test(str)) {
        fail('部署产物出现未授权的受限内容（' + p.name + '）');
      }
    });
  }

  return str;
}, 6);
