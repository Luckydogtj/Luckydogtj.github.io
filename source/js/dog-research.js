/**
 * 科研项目详情页交互：章节目录高亮 + 图表灯箱
 * 仅用于 /research/ 下的两个项目详情页，不依赖第三方库。
 */
(function () {
  'use strict';

  /* ---------- 章节目录高亮 ---------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.dog-research-toc a[href^="#"]'));
  var sections = tocLinks
    .map(function (link) {
      var id = link.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      return el ? { link: link, el: el } : null;
    })
    .filter(Boolean);

  if (sections.length) {
    var setActive = function (activeLink) {
      sections.forEach(function (item) {
        item.link.classList.toggle('is-active', item.link === activeLink);
      });
    };

    var updateActive = function () {
      var offset = 96;
      var current = sections[0];
      var atBottom = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        current = sections[sections.length - 1];
      } else {
        sections.forEach(function (item) {
          if (item.el.getBoundingClientRect().top - offset <= 0) {
            current = item;
          }
        });
      }
      if (current) {
        setActive(current.link);
      }
    };

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        updateActive();
        ticking = false;
      });
    }, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();
  }

  /* ---------- 图表灯箱（仅对已获准公开、实际存在的图片生效） ---------- */
  var figureImages = Array.prototype.slice.call(document.querySelectorAll('.dog-figure img'));
  if (!figureImages.length) return;

  var overlay = null;
  var overlayImg = null;

  var closeLightbox = function () {
    if (!overlay) return;
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  var openLightbox = function (img) {
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'dog-lightbox';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('role', 'dialog');
      overlay.setAttribute('aria-label', '图表放大');

      overlayImg = document.createElement('img');
      overlay.appendChild(overlayImg);

      var closeBtn = document.createElement('button');
      closeBtn.type = 'button';
      closeBtn.className = 'dog-lightbox-close';
      closeBtn.setAttribute('aria-label', '关闭放大图表');
      closeBtn.textContent = '×';
      overlay.appendChild(closeBtn);

      overlay.addEventListener('click', function (event) {
        if (event.target === overlay || event.target === closeBtn) {
          closeLightbox();
        }
      });
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeLightbox();
      });
      document.body.appendChild(overlay);
    }

    overlayImg.src = img.currentSrc || img.src;
    overlayImg.alt = img.alt || '';
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  figureImages.forEach(function (img) {
    img.setAttribute('tabindex', '0');
    img.setAttribute('role', 'button');
    img.addEventListener('click', function () { openLightbox(img); });
    img.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });
})();
