'use strict';
// Raw presentations and private review artifacts are forbidden in every build,
// including builds with RESEARCH_METRICS_PUBLIC enabled.
var fs = require('fs');
var path = require('path');
function inspect(roots) {
  var issues = [];
  function visit(file) {
    if (!fs.existsSync(file)) return;
    var stat = fs.lstatSync(file);
    if (stat.isSymbolicLink()) { issues.push(file + ': symbolic link requires review'); return; }
    if (stat.isDirectory()) {
      if (/^(?:__research_review|report-originals|research-review)$/i.test(path.basename(file))) {
        issues.push(file + ': private review directory');
        return;
      }
      fs.readdirSync(file).forEach(function (name) { visit(path.join(file, name)); });
    } else if (/\.(?:pptx?|pptm|ppsx?|ppsm|potx?|potm)$/i.test(file)) {
      issues.push(file + ': original presentation');
    } else if (/\.(?:html?|md|ejs|js|css|xml|json|ya?ml|txt)$/i.test(file)) {
      var content = fs.readFileSync(file, 'utf8');
      if (/__research_review|data-private-report|codex-file-preview-|private-extraction\.json/i.test(content)) {
        issues.push(file + ': private report reference');
      }
    }
  }
  roots.forEach(visit);
  return issues;
}
module.exports = inspect;
if (require.main === module) {
  var root = path.resolve(__dirname, '..');
  var issues = inspect([path.join(root, 'source'), path.join(root, 'public')]);
  if (issues.length) { console.error(issues.join('\n')); process.exit(1); }
  console.log('[research-report-policy] Passed: no original presentations or private review artifacts.');
}
