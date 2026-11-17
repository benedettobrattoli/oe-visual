/**
 * OE VISUAL — Photorealistic Team Perch Loops (v5.0)
 * Transparent VP9 WebM (Chrome/Edge/Firefox) + Animated WebP Alpha Fallback (Safari/iOS)
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  perches.forEach((perch) => {
    const video = perch.querySelector('.avatar-perch-video');
    const card = perch.closest('.team-avatar-card');
    if (!video) return;

    const canPlayVp9 = !isSafari && video.canPlayType('video/webm; codecs="vp9"') !== '';
    if (!canPlayVp9) {
      perch.classList.add('is-fallback');
      return;
    }

    video.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const tryPlay = () => {
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => perch.classList.add('is-fallback'));
      }
    };

    if (card) {
      card.addEventListener('mouseenter', () => { video.playbackRate = 1.25; });
      card.addEventListener('mouseleave', () => { video.playbackRate = 1.0; });
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tryPlay();
          } else if (!video.paused) {
            video.pause();
          }
        });
      }, { rootMargin: '120px' });
      io.observe(perch);
    } else {
      tryPlay();
    }
  });
})();
