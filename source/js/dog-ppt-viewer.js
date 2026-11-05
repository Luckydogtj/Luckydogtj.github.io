(function () {
  'use strict';
  var root = document.querySelector('[data-report-viewer][data-deck]');
  if (!root) return;
  var key = root.dataset.deck, count = Number(root.dataset.count), current = 1;
  var dialog = root.querySelector('dialog'), opener = null;
  function render() {
    var src = root.dataset.slideBase + '/slide-' + String(current).padStart(2, '0') + '.png';
    root.querySelectorAll('[data-slide-image]').forEach(function (img) { img.src = src; img.alt = '项目汇报第 ' + current + ' 页'; });
    root.querySelectorAll('[data-page-label]').forEach(function (el) { el.textContent = '第 ' + current + ' / ' + count + ' 页'; });
    root.querySelectorAll('[data-action="prev"]').forEach(function (el) { el.disabled = current === 1; });
    root.querySelectorAll('[data-action="next"]').forEach(function (el) { el.disabled = current === count; });
    root.querySelectorAll('[data-page]').forEach(function (el) { if (Number(el.dataset.page) === current) el.setAttribute('aria-current', 'page'); else el.removeAttribute('aria-current'); });
  }
  root.addEventListener('click', function (event) {
    var button = event.target.closest('button');
    if (!button) return;
    var action = button.dataset.action;
    if (button.dataset.page) current = Number(button.dataset.page);
    if (action === 'prev') current = Math.max(1, current - 1);
    if (action === 'next') current = Math.min(count, current + 1);
    if (action === 'zoom') { opener = button; dialog.showModal(); }
    if (action === 'close') dialog.close();
    render();
  });
  root.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') { current = Math.min(count, current + 1); event.preventDefault(); render(); }
    if (event.key === 'ArrowLeft') { current = Math.max(1, current - 1); event.preventDefault(); render(); }
  });
  dialog.addEventListener('close', function () { if (opener) opener.focus(); });
  render();
})();
