class Ring {
  /**
  * crée un Anneau en fixant sa position initiale et son rayon
  * @param {HTMLCanvasElement} canvas
  * @param {number} xCenter abscisse du centre de l'anneau
  * @param {number} yCenter ordonnée du centre de l'anneau
  * @param {number} radius rayon initial de l'anneau
  * @returns {Ring}
  */
  constructor (param) {
    // attributes
    this.canvas = param.canvas;
    this.radius = param.radius;
    this.y = param.yCenter;
    this.x = param.xCenter;
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

  get center () {
    return {
      x: this.x,
      y: this.y
    };
  }

  /*
    get radius () {
    return this.radius;
  } */

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
}
