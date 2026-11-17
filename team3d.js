/**
 * OE VISUAL — Photorealistic Living Studio Loops (v6.4)
 * Uses the full-body Talking loop for each member:
 * - Calm micro-breathing idle (0.22x) in the exact same pose
 * - Resumes from current pose at natural speaking speed (1.05x) when speaking
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  const IDLE_RATE = 0.22;
  const ACTIVE_RATE = 1.05;

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
      const isTalking = card && card.classList.contains('is-talking');
      video.playbackRate = isTalking ? ACTIVE_RATE : IDLE_RATE;
    };

    const tryPlay = () => {
      syncRate();
      if (video.paused) {
        video.play().catch(() => perch.classList.add('is-fallback'));
      }
    };

    if (card) {
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
