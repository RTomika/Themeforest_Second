document.addEventListener("DOMContentLoaded", () => {

const lenis = new Lenis({
  duration: 1.4,
  easing: t => t * (2 - t),
  smooth: true,
  smoothTouch: false
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

let latestScrollTop = 0;
let ticking = false;

window.addEventListener('scroll', () => {
  latestScrollTop = window.scrollY || window.pageYOffset;
  requestTick();
});

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateParallax();
      updateStarScale();
      ticking = false;
    });
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

//Stars Scale Animation
 function updateStarScale() {
  const scrollTop = latestScrollTop;

  const stars = document.getElementById('starsPicture');
  const container = document.querySelector('.starsCont');

  if (stars && container) {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate scroll progress
    const visibleDistance = windowHeight + rect.height;
    const scrollDistance = windowHeight - rect.top;

    const progress = Math.min(1, Math.max(0, scrollDistance / visibleDistance));

    // Scale from 2 to 1.25
    const scale = 2 - (progress * 0.75);

    stars.style.transform = `scale(${scale})`;
  }

  ticking = false;
}


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

    //Navbar
    const navbar = document.getElementById("mainNav");
    setTimeout(() => {
      navbar.style.transform = "translate(-50%, 0)";
      navbar.style.opacity = "1";
    }, 2200);
    let lastScrollY = window.scrollY;

    function handleScrollDirection() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        navbar.style.transform = 'translate(-50%, -50px)';
        navbar.style.opacity = "0";
      } else {
        navbar.style.transform = 'translate(-50%, 0)';
        navbar.style.opacity = "1";
      }

      lastScrollY = currentScrollY;
    }

    const cardIcons = document.querySelectorAll(".cardIcons");
    cardIcons.forEach(cardIcon => {
      cardIcon.parentElement.addEventListener("mouseover", () => {
        cardIcon.style.color = "var(--mainColorHover)";
      })
      cardIcon.parentElement.addEventListener("mouseleave", () => {
        cardIcon.style.color = "var(--mainColor)";
      })
    })

// Optional: debounce or throttle this for performance
window.addEventListener('scroll', handleScrollDirection);

const boxBtns = document.querySelectorAll(".boxBtns");
boxBtns.forEach(boxBtn => {
  boxBtn.parentElement.addEventListener("mouseover", () => {
    boxBtn.classList.add("visible");
  })
  boxBtn.parentElement.addEventListener("mouseleave", () => {
    boxBtn.classList.remove("visible");
  })
})

const optionTextCont = document.querySelectorAll(".optionTextCont");
optionTextCont.forEach(optionTextC => {
  optionTextC.parentElement.addEventListener("mouseover", () => {
    optionTextC.classList.add("visible");
  })
  optionTextC.parentElement.addEventListener("mouseleave", () => {
    optionTextC.classList.remove("visible");
  })
})


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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                entry.target.classList.add("dropShow");
            }
        });
    }, { threshold: 0.7 });

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
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                entry.target.classList.add("fancyShow");
            }
        });
    }, { threshold: 0.5 });

    texts.forEach(text => observer5.observe(text));


    const skillList = document.querySelectorAll(".skillList");
    const observer6 = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 1) {
              setTimeout(() => {
                entry.target.classList.add("skillListShow");
              }, 1200);
            }
        });
    }, { threshold: 1 });

    skillList.forEach(skill => observer6.observe(skill));


    const heroBtn = document.getElementById("heroBtn");
    const arrowRight = document.getElementById("arrowRight");
    const heroBtnH3 = document.getElementById("heroBtnH3");
    heroBtn.addEventListener("mouseover", () => {
      arrowRight.classList.add("arrowRightShow");
      heroBtnH3.classList.add("H3Show");
    });
    heroBtn.addEventListener("mouseleave", () => {
      arrowRight.classList.remove("arrowRightShow");
      heroBtnH3.classList.remove("H3Show");
    });

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