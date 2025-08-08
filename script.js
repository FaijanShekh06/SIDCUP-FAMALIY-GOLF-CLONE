document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.left = dets.x + "px"
  document.querySelector("#cursor").style.top = dets.y + "px"
  console.log("dets.x");
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