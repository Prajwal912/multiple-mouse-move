$(document).ready(() => {
  let luffy = $("#luffy");
  let luffyIMG = $("#luffy img");

  luffy.on("mousemove", (dets) => {
    luffyIMG.css("left", dets.clientX + "px");
    luffyIMG.css("top", dets.clientY + "px");
  });

  luffy.on("mouseenter", () => {
    luffyIMG.css("opacity", 1);
    luffyIMG.css("transition", 'all linear 0.2s');
  });
  luffy.on("mouseleave", () => {
    luffyIMG.css("opacity", 0);
    luffyIMG.css("transition", 'all linear 0.6s');
  });
});
