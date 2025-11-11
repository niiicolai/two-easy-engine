/**
 * This class provides basic vector operations such as addition, subtraction, scaling, and normalization.
 * @class Vector2
 */
export class Vector2 {
  /**
   * @private
   * @property {number} #x - the x coordinate.
   */
  #x;

  /**
   * @private
   * @property {number} #y - the y coordinate.
   */
  #y;
  
  /**
   * This class provides basic vector operations such as addition, subtraction, scaling, and normalization.
   * @class
   * @param {number} x - The x coordinate
   * @param {number} y - The y coordinate
   * @throws {Error} If x or y are not numbers.
   */
  constructor(x = 0, y = 0) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("x and y must be numbers");
    }

    this.x = x;
    this.y = y;
  }

  /**
   * Get the x coordinate
   * @returns {Vector2}
   */
  get x() {
    return this.#x;
  }

  /**
   * Sets the x coordinate
   * @param {number} x - The new value
   * @returns {void}
   * @throws {Error} If the x is not a number.
   */
  set x(x) {
    if (typeof x !== "number") {
      throw new Error("x must be a number");
    }

    this.#x = x;
  }

  /**
   * Get the y coordinate
   * @returns {Vector2}
   */
  get y() {
    return this.#y;
  }

  /**
   * Sets the y coordinate
   * @param {number} y - The new value
   * @returns {void}
   * @throws {Error} If the y is not a number.
   */
  set y(y) {
    if (typeof y !== "number") {
      throw new Error("y must be a number");
    }

    this.#y = y;
  }

  /**
   * Creates a copy of the vector
   * @returns {Vector2}
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {Vector2}
   * @throws {Error} If x or y is not a number
   */
  set(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("x and y must be numbers");
    }

    this.x = x;
    this.y = y;

    return this;
  }

  /**
   * Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {Vector2}
   * @throws {Error} If x or y is not a number
   */
  translate(dx, dy) {
    if (typeof dx !== "number" || typeof dy !== "number") {
      throw new Error("dx and dy must be numbers");
    }

    this.x += dx;
    this.y += dy;

    return this;
  }

  /**
   * Copy the values of the given vector to this.
   * @param {Vector2} v - The vector to copy
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  copy(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    this.x = v.x;
    this.y = v.y;

    return this;
  }

  /**
   * Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  add(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    this.x += v.x;
    this.y += v.y;

    return this;
  }

  /**
   * Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  subtract(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    this.x -= v.x;
    this.y -= v.y;

    return this;
  }

  /**
   * Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number}
   * @throws {Error} If v is not of type Vector2
   */
  dot(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return this.x * v.x + this.y * v.y;
  }

  /**
   * Computes a new vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return new Vector2(v.x - this.x, v.y - this.y);
  }

  /**
   * Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {Vector2}
   * @throws {Error} If s is not a number
   */
  multiplyScalar(s) {
    if (typeof s !== "number") {
      throw new Error("scalar must be a number");
    }

    this.x *= s;
    this.y *= s;

    return this;
  }

  /**
   * Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {Vector2}
   * @throws {Error} If s is not a number
   * @throws {Error} If division by zero is attempted
   */
  divideScalar(s) {
    if (typeof s !== "number") {
      throw new Error("scalar must be a number");
    }
    if (s === 0) {
      throw new Error("Division by zero");
    }
    this.x /= s;
    this.y /= s;

    return this;
  }

  /**
   * Computes the length (magnitude) of the vector
   * @returns {number}
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Computes the squared length of the vector.
   * @returns {number}
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Normalizes the vector to have a length of 1
   * @returns {Vector2}
   * @throws {Error} If attempting to normalize a zero-length vector
   */
  normalize() {
    const len = this.length();
    if (len === 0) {
      throw new Error("Cannot normalize zero-length vector");
    }

    this.divideScalar(len);

    return this;
  }

  /**
   * Check if the values of this vector is equal to another
   * @param {Vector2} v - The other vector
   * @returns {boolean} 
   */
  isEqual(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }
    
    return this.x === v.x && this.y === v.y;
  }

  /**
   * Rotate the coordinates the given radians around the given point
   * @param {number} px - the x coordinate of the point to rotate around
   * @param {number} py - the y coordinate of the point to rotate around
   * @param {number} angle - the rotation angle in radians
   * @returns {Vector2}
   */
  rotateAround(px, py, angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = this.x;
    const y = this.y;

    this.x = ((x - px) * cos - (y - py) * sin) + px;
    this.y = ((x - px) * sin + (y - py) * cos) + py;

    return this;
  }
}
