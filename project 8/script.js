document.addEventListener("DOMContentLoaded", function () {
  locoScroll();
  textSplitting();
  gsapAnimation();
});

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
  });

  // Sync Locomotive Scroll and ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  // Proxy for ScrollTrigger
  ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  // Refresh ScrollTrigger and update LocomotiveScroll
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function textSplitting() {
  const allH1 = document.querySelectorAll("#page2 h1");

  allH1.forEach(function (elem) {
      let clutter = "";
      let h1Text = elem.textContent;
      let splittedText = h1Text.split("");
      splittedText.forEach(function (e) {
          clutter += `<span>${e}</span>`;
      });
      elem.innerHTML = clutter;
  });
}

function gsapAnimation() {
  gsap.to("#page2 h1 span", {
      color: "#E3E3C4",
      stagger: 0.1,
      scrollTrigger: {
          trigger: "#page2 h1",
          scroller: "#main",
          markers: true,
          start: "top 50%",
          end: "top -10%",
          scrub: 2
      }
  });
}

