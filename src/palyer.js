import { ProjectTile } from "./project-tile.js";

export class Player {
  constructor(gameClass) {
    this.game = gameClass;
    this.width = 120;
    this.height = 190;
    this.x = 20;
    this.y = 120;
    this.speedY = 0;
    this.maxSpeed = 2;
    this.projectile = [];
  }

  update() {
    if (this.game.keys.includes("ArrowUp")) this.speedY = -this.maxSpeed;
    else if (this.game.keys.includes("ArrowDown")) this.speedY = this.maxSpeed;
    else this.speedY = 0;
    this.y += this.speedY;
    //Projectile
    this.projectile.forEach((pj) => {
      pj.update();
    });
    this.projectile = this.projectile.filter((pj) => !pj.markedForDetection);
  }
  draw(context) {
    context.fillStyle = "yellow";
    context.fillRect(this.x, this.y, this.width, this.height);
    //Projectile
    this.projectile.forEach((pj) => {
      pj.draw(context);
    });
  }
  shootTop() {
    if (this.game.ammo > 0) {
      console.log("สุนไม่หมด");
      this.projectile.push(new ProjectTile(this.game, this.x, this.y + 30));
      this.game.ammo--;
      console.log(this.projectile);
    } else if (this.game.ammo === 0) {
      console.log("reload!");
    }
  }
}
