/**
 * 科研内容发布安全终检（构建后文件级检查）
 *
 * 用法：
 *   node scripts/research-security-scan.js
 *   node scripts/research-security-scan.js --deploy   # 模拟部署：禁止任何受限内容
 *
 * 检查对象：
 * - public/research/*.html、public/search.xml、RSS/Atom 等构建产物：不得残留占位标记；
 *   部署模式下不得出现受限内容结构（KPI/损耗百分比/仿真规模）。
 * - 公开源码 source/ 与三份公开文档：若本机存在私有监视清单，不得出现明文敏感数值。
 *
 * 任一问题以非零状态退出，供 npm run build / GitHub Actions 中断部署。
 */
'use strict';

var fs = require('fs');
var path = require('path');

var root = path.resolve(__dirname, '..');
var publicDir = path.join(root, 'public');
var sourceDir = path.join(root, 'source');
var privateDir = process.env.DOG_PRIVATE_DIR
  || path.join(root, '..', 'Dog_blog_private', 'research-restricted');

var approved = process.env.RESEARCH_METRICS_PUBLIC === 'true';
var isCi = process.env.GITHUB_ACTIONS === 'true' || process.env.CI === 'true';
var deployMode = process.argv.indexOf('--deploy') !== -1 || (isCi && !approved);

var issues = [];
var checked = [];

function rel(file) {
  return path.relative(root, file);
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

/* ---------- 1. 构建产物：标记残留 + 受限结构 ---------- */
var outputFiles = walk(path.join(publicDir, 'research'), /\.html$/, []);
var homeFile = path.join(publicDir, 'index.html');
if (fs.existsSync(homeFile)) outputFiles.push(homeFile);
['search.xml', 'atom.xml', 'rss.xml', 'feed.xml'].forEach(function (name) {
  var file = path.join(publicDir, name);
  if (fs.existsSync(file)) outputFiles.push(file);
});

var STRUCTURE_PATTERNS = [
  { name: 'KPI 数值卡', re: /dog-kpi-value[^<]*\d/ },
  { name: '损耗百分比', re: /dog-loss-value[^<]*\d[^<]*%/ },
  { name: '仿真模型规模', re: /dog-condition-card[\s\S]{0,400}?\d+\s*MW/ }
];

outputFiles.forEach(function (file) {
  var text = fs.readFileSync(file, 'utf8');
  checked.push(rel(file));

  if (text.indexOf('DOG-RESTRICTED') !== -1) {
    issues.push(rel(file) + '：残留 DOG-RESTRICTED 占位标记');
  }

  if (deployMode) {
    STRUCTURE_PATTERNS.forEach(function (p) {
      if (p.re.test(text)) {
        issues.push(rel(file) + '：出现未授权的受限内容（' + p.name + '）');
      }
    });
  }
});

/* ---------- 2. 公开源码：明文敏感数值（需私有监视清单） ---------- */
var watchFile = path.join(privateDir, 'watchlist.txt');
if (fs.existsSync(watchFile)) {
  var patterns = fs.readFileSync(watchFile, 'utf8')
    .split(/\r?\n/)
    .filter(function (line) { return line.trim() && line.indexOf('#') !== 0; })
    .map(function (line) { return { raw: line.trim(), re: new RegExp(line.trim()) }; });

  var sourceFiles = walk(sourceDir, /\.(md|html|ejs|js|css)$/, []);
  sourceFiles.push(path.join(root, 'themes', 'matery', '_config.yml'));
  sourceFiles = sourceFiles.concat(walk(path.join(root, 'themes', 'matery', 'layout'), /\.(ejs|yml|json)$/, []));
  ['DOG_BLOG_AUDIT.md', 'DOG_RESEARCH_IMPLEMENTATION_REPORT.md', 'RESEARCH_ASSET_REVIEW.md', 'DOG_SECURITY_CHECK.md'].forEach(function (name) {
    var file = path.join(root, name);
    if (fs.existsSync(file)) sourceFiles.push(file);
  });

  sourceFiles.forEach(function (file) {
    if (!fs.existsSync(file)) {
      return;
    }
    var text = fs.readFileSync(file, 'utf8');
    checked.push(rel(file));
    patterns.forEach(function (p) {
      if (p.re.test(text)) {
        issues.push(rel(file) + '：命中敏感数值模式 /' + p.raw + '/');
      }
    });
  });
} else {
  console.log('[research-security-scan] 未找到私有监视清单，跳过明文数值扫描（CI 环境正常现象）');
}

/* ---------- 3. 结果 ---------- */
console.log('[research-security-scan] 模式：' + (deployMode ? '部署检查' : '本地检查')
  + '，已检查 ' + checked.length + ' 个文件');

if (issues.length > 0) {
  console.error('[research-security-scan] 检查未通过，禁止发布：');
  issues.forEach(function (msg) { console.error(' - ' + msg); });
  process.exit(1);
}

console.log('[research-security-scan] 通过：未发现未授权的科研数据泄漏');
