$(document).ready(() => {
  let elem = $(".elem");

  elem.forEach(function () {
    let val = $(this);

    val.on("mousemove", (dets) => {
     elemIMG.css("left", dets.clientX + "px");
     elemIMG.css("top", dets.clientY + "px");
    });

    val.on("mouseenter", () => {
     elemIMG.css("opacity", 1);
     elemIMG.css("transition", "all linear 0.2s");
    });
    val.on("mouseleave", () => {
     elemIMG.css("opacity", 0);
     elemIMG.css("transition", "all linear 0.6s");
    });
  });
});
