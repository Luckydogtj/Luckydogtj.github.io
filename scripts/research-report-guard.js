'use strict';
var path = require('path');
var inspect = require('../tools/research-report-policy');
function check(roots) {
  var issues = inspect(roots);
  if (issues.length) throw new Error('[research-report-guard] 构建阻断：\n' + issues.join('\n'));
}
hexo.extend.filter.register('before_generate', function () {
  check([hexo.source_dir]);
}, 1);
hexo.extend.filter.register('after_generate', function () {
  // Inspect virtual routes as well as copied files; output may not yet be on disk.
  var blocked = hexo.route.list().filter(function (route) {
    return /(?:^|\/)(?:__research_review|report-originals|research-review)(?:\/|$)|\.(?:pptx?|pptm|ppsx?|ppsm|potx?|potm)$/i.test(route);
  });
  if (blocked.length) throw new Error('[research-report-guard] 私有资料路由：' + blocked.join(', '));
});
