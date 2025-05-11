const video = document.getElementById('heroVideo');

video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
  });

  document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);

    /*Text Loading From Left Side Animation*/

      document.querySelectorAll('.textLoad').forEach(el => {
        const letters = el.textContent.trim().split('');
        el.textContent = '';

        letters.forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.animationDelay = `${2 + i * 0.05}s`; // ← Start at 1s, then stagger
          span.classList.add('letter');
          el.appendChild(span);
        });
      });

    /*Scroll Animation*/

    const dropElements = document.querySelectorAll(".dropScroll");
    const observer2 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                entry.target.classList.add("dropShow");
            }
        });
    }, { threshold: 1 });

    dropElements.forEach(dropElement => observer2.observe(dropElement));

  })