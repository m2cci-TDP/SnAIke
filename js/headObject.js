class RingHead extends Ring {
  constructor (param) {
    super(param);
    this.course = param.course * Math.PI / 180;
  }

  set deltaCourse (dCourse) {
    this.course += dCourse * Math.PI / 180;
  }

  get direction () {
    return {
      x: this.x + this.radius * Math.cos(this.course),
      y: this.y + this.radius * Math.sin(this.course)
    };
  }

  moveOnCourse () {
    this.center = {
      x: this.direction.x,
      y: this.direction.y
    };
  }

  testCourse () {
    return this.direction.x > this.canvas.width || this.direction.x < 0 ||
      this.direction.y > this.canvas.height || this.direction.y < 0;
  }

  /**
  * Method to know if a collusion append in other same object
  * @param {Face} face other object of type face
  * @return bolean if collusion append
  */
  collusion (ring) {
    let distance = Math.sqrt(Math.pow(this.x - ring.x, 2) +
      Math.pow(this.y - ring.y, 2));
    return Math.floor(distance) <= this.radius + ring.radius;
  }
}
