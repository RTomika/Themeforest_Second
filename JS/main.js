//Smooth Parallax

let latestScrollTop = 0;
let ticking = false;
window.addEventListener('scroll', function () {
  latestScrollTop = window.scrollY || window.pageYOffset;
  requestTick();
});
function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}
function updateParallax() {
  const scrollTop = latestScrollTop;
  const fadeDistance = 800;
  // Parallax effect
  const video = document.getElementById('heroVideo');
  if (video) {
    video.style.transform = `translate(-50%, -50%) translateY(${scrollTop * 0.5}px)`;
  }
  // Overlay fade-in
  const overlayElements = document.querySelectorAll('.firstThing');
  let overlayOpacity = scrollTop / fadeDistance;
  overlayOpacity = Math.max(0, Math.min(1, overlayOpacity));
  overlayElements.forEach(el => {
    el.style.opacity = overlayOpacity;
  });
  ticking = false;
}

  
  document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; 
    }
    window.scrollTo(0, 0);

    const textLoad = document.querySelectorAll(".textLoad");
    textLoad.forEach(textSingleLoad => {
      textSingleLoad.style.opacity = "1";
    })

    //Loop Video
      const video = document.getElementById('heroVideo');
  
      video.addEventListener("timeupdate", () => {
        const duration = video.duration;
        const currentTime = video.currentTime;

        if (currentTime < 0.03 * duration) {
          video.style.opacity = (currentTime / (0.03 * duration)).toFixed(2);
        } else if (currentTime > 0.91 * duration) {
          video.style.opacity = ((duration - currentTime) / (0.09 * duration)).toFixed(2);
        } else {
          video.style.opacity = 1;
        }
      });

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


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const el = entry.target;
          const letters = el.textContent.trim().split('');
          el.textContent = '';

          letters.forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${i * 0.1}s`;
            span.classList.add('letter');
            el.appendChild(span);
          });

          observer.unobserve(el);
        }
      });
    }, { threshold: 1 });

    document.querySelectorAll('.loadRight').forEach(el => {
      observer.observe(el);
    });


    const lines = document.querySelectorAll(".lines");
    const observer4 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
              setTimeout(() => {
                entry.target.classList.add("loadShow");
              }, 400);
            }
        });
    }, { threshold: 1 });

    lines.forEach(line => observer4.observe(line));


    const texts = document.querySelectorAll(".texts");
    const observer5 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
                entry.target.classList.add("fancyShow");
            }
        });
    }, { threshold: 1 });

    texts.forEach(text => observer5.observe(text));
  })

//Arrow Down

let arrow = document.querySelector('.arrowDown');
let arrowShown = false;
let userHasScrolled = false;
let arrowTimeout;

window.addEventListener('load', () => {
  arrowTimeout = setTimeout(() => {
    if (!userHasScrolled) {
      arrow.classList.add('arrowShow');
      arrowShown = true;
    }
  }, 6000);
});

window.addEventListener('scroll', () => {
  userHasScrolled = true;

  if (arrowShown) {
    arrow.classList.remove('arrowShow');
    arrowShown = false;
  }

  clearTimeout(arrowTimeout);
});

