class Snake {
  constructor (param) {
    this.canvas = param.canvas;
    this.body = new Array(3);
    this.body[0] = new RingHead(param);
    for (let i = 1; i < this.body.length; i++) {
      this.body[i] = new Ring(param);

      this.body[i].center = {
        x: this.body[i - 1].center.x - this.body[i - 1].radius,
        y: this.body[i - 1].center.y
      };
    }
  }

  draw (ctx) {
    this.body[0].draw(ctx, '#5fd146', '#760d81');
    for (let i = 1; i < this.body.length; i++) {
      this.body[i].draw(ctx, '#72b488', '#760d81');
    }
  }

  move (ctx, apple) {
    let appleAngle = this.body[0].course -
      Math.atan(Math.abs(apple.center.y - this.body[0].center.y) /
      Math.abs(apple.center.x - this.body[0].center.x)); // radian
    appleAngle *= 180 / Math.PI; // degree
    this.body[0].deltaCourse = appleAngle + Math.floor(Math.random() * 30) - 15;

    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].center = {
        x: this.body[i - 1].center.x,
        y: this.body[i - 1].center.y
      };
    }

    if (this.body[0].collusion(apple)) {
      this.addRing();
      apple.generate();
    }

    this.body[0].moveOnCourse();

    this.draw(ctx);
  }

  addRing () {
    this.body.push();
    this.body[this.body.length] = new Ring({
      canvas: this.canvas,
      xCenter: this.body[this.body.length - 1].center.x - this.body[this.body.length - 1].radius,
      yCenter: this.body[this.body.length - 1].center.y,
      radius: this.body[this.body.length - 1].radius
    });
  }
}
