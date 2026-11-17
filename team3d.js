/**
 * OE VISUAL — Photorealistic Living Studio Loops (v6.0)
 * Dual-state transparent VP9 WebM (Idle <-> Talking) + Animated WebP Alpha Fallback (Safari/iOS)
 */
(() => {
  'use strict';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const perches = document.querySelectorAll('.avatar-card-perch');
  if (!perches.length) return;

  perches.forEach((perch) => {
    const idleVideo = perch.querySelector('.avatar-perch-video.is-idle');
    const talkVideo = perch.querySelector('.avatar-perch-video.is-talk');
    const card = perch.closest('.avatar-card');
    if (!idleVideo) return;

    const canPlayVp9 = !isSafari && idleVideo.canPlayType('video/webm; codecs="vp9"') !== '';
    if (!canPlayVp9) {
      perch.classList.add('is-fallback');
      return;
    }

    idleVideo.playbackRate = 1.0;
    if (talkVideo) talkVideo.playbackRate = 1.15;

    idleVideo.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const syncState = () => {
      const isTalking = card && card.classList.contains('is-talking');
      if (isTalking && talkVideo) {
        if (talkVideo.paused) {
          talkVideo.play().catch(() => {});
        }
        if (!idleVideo.paused) idleVideo.pause();
      } else {
        if (idleVideo.paused) {
          idleVideo.play().catch(() => perch.classList.add('is-fallback'));
        }
        if (talkVideo && !talkVideo.paused) talkVideo.pause();
      }
    };

    if (card) {
      const mo = new MutationObserver(syncState);
      mo.observe(card, { attributes: true, attributeFilter: ['class'] });
    }

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            syncState();
          } else {
            if (!idleVideo.paused) idleVideo.pause();
            if (talkVideo && !talkVideo.paused) talkVideo.pause();
          }
        });
      }, { rootMargin: '120px' });
      io.observe(perch);
    } else {
      syncState();
    }
  });
})();
