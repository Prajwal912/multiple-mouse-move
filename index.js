// $(document).ready(() => {
//   let elem = $(".elem");

//   elem.each(function (index) {
//     let val = $(this);

//     let elemIMG = val.find("img");

//     val.on("mousemove", (dets) => {
//       elemIMG.css("left", dets.clientX + "px");
//       elemIMG.css("top", dets.clientY + "px");
//     });

//     val.on("mouseenter", () => {
//       elemIMG.css("opacity", 1);
//       elemIMG.css("transition", "all linear 0.2s");
//     });
//     val.on("mouseleave", () => {
//       elemIMG.css("opacity", 0);
//       elemIMG.css("transition", "all linear 0.6s");
//     });
//   });
// });
let elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
    // val.childNodes[3].style.transition = "all linear 0.2s";
  });
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 0;
    // val.childNodes[3].style.transition = "all linear 0.6s";
  });
//   val.addEventListener("mouse", (dets) => {
//     val.childNodes[3].style.left = dets.x + "px";
//     val.childNodes[3].style.top = dets.y + "px";
//   });
});
