/**
 * OE VISUAL — Photorealistic Team Perch Loops (v5.2)
 * Transparent VP9 WebM (Chrome/Edge/Firefox) + Animated WebP Alpha Fallback (Safari/iOS)
 * Balanced per-member speeds: slower calm walk for Benedetto, livelier micro-actions for Michele/Marco/Angelo.
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  const SPEED_PROFILE = {
    benedetto: { idle: 1.05, hover: 1.30, active: 1.60 },
    michele:   { idle: 1.05, hover: 1.30, active: 1.60 },
    marco:     { idle: 1.05, hover: 1.30, active: 1.60 },
    angelo:    { idle: 1.05, hover: 1.30, active: 1.60 }
  };

  perches.forEach((perch) => {
    const member = perch.dataset.member || 'marco';
    const rates = SPEED_PROFILE[member] || SPEED_PROFILE.marco;
    const video = perch.querySelector('.avatar-perch-video');
    const card = perch.closest('.avatar-card');
    if (!video) return;

    const canPlayVp9 = !isSafari && video.canPlayType('video/webm; codecs="vp9"') !== '';
    if (!canPlayVp9) {
      perch.classList.add('is-fallback');
      return;
    }

    video.playbackRate = rates.idle;

    video.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const syncRate = () => {
      if (card && card.classList.contains('active-speaker')) {
        video.playbackRate = rates.active;
      } else {
        video.playbackRate = rates.idle;
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
          video.playbackRate = rates.hover;
        }
      });
      card.addEventListener('mouseleave', syncRate);
      card.addEventListener('click', () => {
        video.playbackRate = rates.active;
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
