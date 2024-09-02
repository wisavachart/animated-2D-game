import { InputHandler } from "./input.js";
import { Player } from "./palyer.js";
import { UI } from "./ui.js";

export class Game {
  constructor(width, height) {
    this.ui = new UI(this);
    this.width = width;
    this.height = height;
    this.player = new Player(this);
    this.input = new InputHandler(this);
    this.keys = [];
    this.ammo = 20;
    this.maxammo = 50;
    this.ammoTimer = 0;
    this.ammoInterval = 500;
  }
  update(deltaTime) {
    this.player.update();
    if (this.ammoTimer > this.ammoInterval) {
      if (this.ammo < this.maxammo) this.ammo++;
      this.ammoTimer = 0;
    } else {
      this.ammoTimer += deltaTime;
    }
  }
  draw(context) {
    this.player.draw(context);
    this.ui.draw(context);
  }
}
