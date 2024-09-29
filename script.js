function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from(".line-p1", {
    onStart: function () {
      var h5timer = document.querySelector(".line-p1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 30);
    },
  });

  tl.from(".line h1", {
    y: 150,
    stagger: 0.2,
    duration: 0.5,
    delay: 0.1,
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
  });

  tl.from(".page1", {
    y: 1600,
    duration: 0.8,
    ease: "power4.out",
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });

  tl.from(".navbar", {
    opacity: 0,
  });

  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 110,
    satgger: 0.2,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dest) {
    gsap.to(".crsr", {
      left: dest.x,
      top: dest.y,
    });
  });

  Shery.makeMagnet(".nav-right a", ".menu-opener__square");
}

loadingAnimation();
// cursorAnimation();
