export class UI {
  constructor(gameClass) {
    this.game = gameClass;
    this.fontsize = 25;
    this.color = "white";
  }

  draw(context) {
    //ammo
    context.filStyle = this.color;
    for (let i = 0; i < this.game.ammo; i++) {
      context.fillRect(20 + 5 * i, 50, 3, 20);
    }
  }
}
