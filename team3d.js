/**
 * OE VISUAL — Photorealistic Team Perch Loops (v5.1)
 * Transparent VP9 WebM (Chrome/Edge/Firefox) + Animated WebP Alpha Fallback (Safari/iOS)
 * Calm slow idle by default; realistic livelier motion when card is clicked/active.
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  const IDLE_RATE = 0.65;
  const HOVER_RATE = 0.95;
  const ACTIVE_RATE = 1.35;

  perches.forEach((perch) => {
    const video = perch.querySelector('.avatar-perch-video');
    const card = perch.closest('.avatar-card');
    if (!video) return;

    const canPlayVp9 = !isSafari && video.canPlayType('video/webm; codecs="vp9"') !== '';
    if (!canPlayVp9) {
      perch.classList.add('is-fallback');
      return;
    }

    video.playbackRate = IDLE_RATE;

    video.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const syncRate = () => {
      if (card && card.classList.contains('active-speaker')) {
        video.playbackRate = ACTIVE_RATE;
      } else {
        video.playbackRate = IDLE_RATE;
      }
    };

    const tryPlay = () => {
      syncRate();
      const p = video.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => perch.classList.add('is-fallback'));
      }
    };

    if (card) {
      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('active-speaker')) {
          video.playbackRate = HOVER_RATE;
        }
      });
      card.addEventListener('mouseleave', syncRate);
      card.addEventListener('click', () => {
        video.playbackRate = ACTIVE_RATE;
      });

      const mo = new MutationObserver(syncRate);
      mo.observe(card, { attributes: true, attributeFilter: ['class'] });
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
