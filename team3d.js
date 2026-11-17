/**
 * OE VISUAL — Photorealistic Living Studio Loops (v6.3)
 * Single seamless video per member: continues smoothly from exact current pose (zero jump, zero ghosting).
 * Calm slow idle (0.4x) -> natural active motion (1.15x) when speaking.
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  const IDLE_RATE = 0.42;
  const ACTIVE_RATE = 1.15;

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
