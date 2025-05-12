  document.addEventListener("DOMContentLoaded", () => {

    const textLoad = document.querySelectorAll(".textLoad");
    textLoad.forEach(textSingleLoad => {
      textSingleLoad.style.opacity = "1";
    })

    const video = document.getElementById('heroVideo');

    video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);

    const navbar = document.getElementById("mainNav");
    setTimeout(() => {
      navbar.style.transform = "translate(-50%, 0)";
      navbar.style.opacity = "1";
    }, 2200);

    /*Text Loading From Left Side Animation*/

      document.querySelectorAll('.textLoad').forEach(el => {
        const letters = el.textContent.trim().split('');
        el.textContent = '';

        letters.forEach((char, i) => {
          const span = document.createElement('span');
          span.textContent = char === ' ' ? '\u00A0' : char;
          span.style.animationDelay = `${2 + i * 0.05}s`;
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

  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var fadeDistance = 700;

    // Parallax
    $('#heroVideo').css({
      transform: 'translate(-50%, -50%) translateY(' + scrollTop * 0.4 + 'px)'
    });

    // Overlay Fade In
    var overlayOpacity = scrollTop / fadeDistance;
    overlayOpacity = Math.max(0, Math.min(1, overlayOpacity));

    $('.firstThing').css('opacity', overlayOpacity);
  });
