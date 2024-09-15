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
    }, 25);
  },
});

tl.from(".line h1", {
  y: 150,
  stagger: 0.2,
  duration: 0.5,
  delay: 0.1,
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 2,
});

tl.from(".page1", {
  y: 1600,
  duration: 1.5,
  ease: "power4.out",
  delay: 0.2,
  opacity: 0,
});

tl.to("#loader", {
  display: "none",
});
