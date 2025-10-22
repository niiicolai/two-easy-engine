/**
 * @class Vector2
 * @classdesc This class provides basic vector operations such as addition, subtraction, scaling, and normalization.
 */
export class Vector2 {
  /**
   * @constructor
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
   * @function clone
   * @description Creates a copy of the vector
   * @returns {Vector2} A new Vector2 instance with the same x and y values
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * @function set
   * @description Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {void}
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
   * @function translate
   * @description Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {void}
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
   * @function add
   * @description Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {void}
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
   * @function subtract
   * @description Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {void}
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
   * @function dot
   * @description Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number} The dot product
   * @throws {Error} If v is not of type Vector2
   */
  dot(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return this.x * v.x + this.y * v.y;
  }

  /**
   * @function vectorTo
   * @description Computes a new vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2} A new Vector2 representing the vector from this to v
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return new Vector2(v.x - this.x, v.y - this.y);
  }

  /**
   * @function multiplyScalar
   * @description Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {void}
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
   * @function divideScalar
   * @description Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {void}
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
   * @function length
   * @description Computes the length (magnitude) of the vector
   * @returns {number} The length of the vector
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * @function lengthSquared
   * @description Computes the squared length of the vector.
   * @returns {number} The squared length of the vector
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * @function normalize
   * @description Normalizes the vector to have a length of 1
   * @returns {void}
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
}
