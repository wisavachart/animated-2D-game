import { Game } from "./src/game.js";

window.addEventListener("load", function () {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 500;
  canvas.height = 500;
  const game = new Game(canvas.width, canvas.height);
  //animation loop
  function init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(init);
  }
  init();
});

// class ProjectTile {}
// class Particle {}
// class Enemy {}
// class Layer {}
// class Background {}
// class UI {}
