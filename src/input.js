export class InputHandler {
  constructor(gameClass) {
    this.game = gameClass;
    window.addEventListener(
      "keydown",
      function (e) {
        if (
          (e.key === "ArrowUp" || e.key === "ArrowDown") &&
          this.game.keys.indexOf(e.key) === -1
        ) {
          this.game.keys.push(e.key);
          // console.log(this.game.keys);
        } else if (e.key === " ") {
          this.game.player.shootTop();
        }
      }.bind(this)
    );

    window.addEventListener(
      "keyup",
      function (e) {
        if (this.game.keys.indexOf(e.key) > -1) {
          this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
        }
        //   console.log(this.game.keys);
      }.bind(this)
    );
  }
}
