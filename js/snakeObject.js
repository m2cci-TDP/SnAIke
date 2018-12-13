class Snake {
  constructor (param) {
    this.canvas = param.canvas;
    this.body = new Array(10);
    this.body[0] = new RingHead(param);
    for (let i = 1; i < this.body.length; i++) {
      this.body[i] = new Ring(param);

      this.body[i].center = {
        x: this.body[i-1].center.x - this.body[i-1].radius,
        y: this.body[i-1].center.y
      };
    }
  }

  draw (ctx) {
    this.body[0].draw(ctx, '#5fd146', '#760d81');
    for (let i = 1; i < this.body.length; i++) {
      this.body[i].draw(ctx, '#72b488', '#760d81');
    }
  }

  move (ctx) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.body[0].testCourse()) {
      this.body[0].deltaCourse = 180;
    } else {
      this.body[0].deltaCourse = Math.floor(Math.random() * 60) - 30;
    }

    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].center = {
        x: this.body[i-1].center.x,
        y: this.body[i-1].center.y
      };
    }
    this.body[0].moveOnCourse();

    this.draw(ctx);
  }
}
