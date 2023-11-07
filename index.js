let elem = document.querySelectorAll(".elem");
let elemIMG = document.querySelector(".elem img");

elem.forEach(function (val) {
  console.log(val.childNodes[3])
  val.addEventListener("mouseenter", (dets) => {
    val.childNodes[3].style.opacity = "1";
  });
  val.addEventListener("mouseleave", (dets) => {
    val.childNodes[3].style.opacity = "0";
  });
  val.addEventListener("mousemove", (dets) => {
    val.childNodes[3].style.left = dets.x + "px";
  });
});


