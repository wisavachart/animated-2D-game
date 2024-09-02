export class ProjectTile {
  constructor(gameClass, x, y) {
    this.game = gameClass;
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 3;
    this.speed = 3;
    this.markedForDetection = false;
  }

  update() {
    this.x += this.speed;
    if (this.x > this.game.width * 0.8) this.markedForDetection = true;
  }
  draw(ctx) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
