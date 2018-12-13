class Ring {
  /**
  * Create a Ring object with initial position and radius fixed
  * @param {HTMLCanvasElement} canvas
  * @param {number} xCenter ring's abscissa center
  * @param {number} yCenter ring's ordinate center
  * @param {number} radius ring's initial radius
  * @returns {Ring}
  */
  constructor (param) {
    // attributes
    this.canvas = param.canvas;
    this.radius = param.radius || 5;
    this.y = param.yCenter || 0;
    this.x = param.xCenter || 0;
  }

  /**
  * Method to place a ring into a point
  * @param {number} x
  * @param {number} y
  */
  set center (center) {
    this.x = center.x;
    this.y = center.y;
  }

  /**
  * Getter of ring coordinates
  * @return {x, y} structure with the x-abscissa and the y-ordinate
  */
  get center () {
    return {
      x: this.x,
      y: this.y
    };
  }

  /**
  * Method to draw a ring
  * @param {contexte} ctx
  * @param {character} fillCol
  * @param {character} strokeCol
  * @see {HTML} canvas arc() Method
  */
  draw (ctx, fillCol, strokeCol) {
    ctx.strokeStyle = strokeCol;
    ctx.fillStyle = fillCol;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  generate () {
    this.center = {
      x: Math.floor(Math.random() * (this.canvas.width - 2 * this.radius)) + this.radius,
      y: Math.floor(Math.random() * (this.canvas.height - 2 * this.radius)) + this.radius
    };
  }
}
