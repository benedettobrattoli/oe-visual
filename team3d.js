/**
 * OE VISUAL — Photorealistic Living Studio Loops (v6.5)
 * Seamless Turn-to-Camera Continuity:
 * - At rest: holds cleanly at Frame 0 (working pose on tablet/blueprint/swatches/3D model, zero flicker)
 * - When clicked/speaking: starts smoothly from Frame 0, turns toward camera and speaks naturally!
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  perches.forEach((perch) => {
    const video = perch.querySelector('.avatar-perch-video');
    const card = perch.closest('.avatar-card');
    if (!video) return;

    const canPlayVp9 = !isSafari && video.canPlayType('video/webm; codecs="vp9"') !== '';
    if (!canPlayVp9) {
      perch.classList.add('is-fallback');
      return;
    }

    video.removeAttribute('autoplay');
    video.playbackRate = 0.72;

    video.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const syncState = () => {
      const isTalking = card && card.classList.contains('is-talking');
      if (isTalking) {
        if (video.paused) {
          video.currentTime = 0;
          video.play().catch(() => perch.classList.add('is-fallback'));
        }
      } else {
        if (!video.paused) video.pause();
        try { video.currentTime = 0; } catch (_) {}
      }
    };

    video.addEventListener('loadeddata', syncState, { once: true });

    if (card) {
      const mo = new MutationObserver(syncState);
      mo.observe(card, { attributes: true, attributeFilter: ['class'] });
    }
  });
})();
