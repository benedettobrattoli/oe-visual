/**
 * OE VISUAL — Photorealistic Living Studio Loops (v6.2)
 * Smooth 0.45s cross-fade Idle <-> Talking, calm realistic talking speed (0.75x)
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

    idleVideo.playbackRate = 0.90;
    if (talkVideo) talkVideo.playbackRate = 0.72;

    idleVideo.addEventListener('error', () => {
      perch.classList.add('is-fallback');
    });

    const syncState = () => {
      const isTalking = card && card.classList.contains('is-talking');
      if (isTalking && talkVideo) {
        if (talkVideo.paused) {
          talkVideo.play().catch(() => {});
        }
        // Keep idle playing briefly during 0.45s cross-fade, then pause cleanly
        setTimeout(() => {
          if (card && card.classList.contains('is-talking') && !idleVideo.paused) {
            idleVideo.pause();
          }
        }, 460);
      } else {
        if (idleVideo.paused) {
          idleVideo.play().catch(() => perch.classList.add('is-fallback'));
        }
        if (talkVideo && !talkVideo.paused) {
          setTimeout(() => {
            if (!card || !card.classList.contains('is-talking')) {
              talkVideo.pause();
            }
          }, 460);
        }
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
