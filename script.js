document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.left = dets.x + 30 + "px"
  document.querySelector("#cursor").style.top = dets.y + "px"
  console.log("dets.x");
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    document.querySelector("#cursor").style.scale = 3
    document.querySelector("#cursor").style.border = "1px solid #fff"
    document.querySelector("#cursor").style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave", function () {
    document.querySelector("#cursor").style.scale = 1
    document.querySelector("#cursor").style.border = "0px solid #95C11E"
    document.querySelector("#cursor").style.backgroundColor = "#95C11E"
  })

})

document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor-blur").style.left = dets.x - 150 + "px"
  document.querySelector("#cursor-blur").style.top = dets.y - 150 + "px"
  console.log("dets.x");
})

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "110px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }

})

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }

})

gsap.from("#about-us img,#about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 60%",
    scrub: 1
  }

})

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }

})

// Hover animation with GSAP
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      rotateX: -20,
      rotateY: 20,
      duration: 0.5,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }

})

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }

})

