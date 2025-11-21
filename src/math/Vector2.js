/** 
 * A mutable vector class implementing operations such as addition, subtraction, scaling, and normalization. 
 * @class Vector2
 */
export class Vector2 {
  /**
   * The x value.
   * @private
   * @type {number}
   */
  #x;

  /**
   * The y value.
   * @private
   * @type {number}
   */
  #y;

  /**
   * Create a new Vector2 instance.
   * @param {number} [x=0] - The x value.
   * @param {number} [y=0] - The y value.
   * @throws {Error} If the x or y value is not a number.
   */
  constructor(x = 0, y = 0) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("x and y must be numbers");
    }

    this.x = x;
    this.y = y;
  }

  /**
   * Get the x value.
   * @returns {number} The x value.
   */
  get x() {
    return this.#x;
  }

  /**
   * Sets the x value.
   * @param {number} x - The new value to assign.
   * @returns {void}
   * @throws {Error} If the x value is not a number.
   */
  set x(x) {
    if (typeof x !== "number") {
      throw new Error("x must be a number");
    }

    this.#x = x;
  }

  /**
   * Get the y value.
   * @returns {number} The y value.
   */
  get y() {
    return this.#y;
  }

  /**
   * Sets the y value.
   * @param {number} y - The new value to assign.
   * @returns {void}
   * @throws {Error} If the y value is not a number.
   */
  set y(y) {
    if (typeof y !== "number") {
      throw new Error("y must be a number");
    }

    this.#y = y;
  }

  /**
   * Creates a copy of the Vector2 instance.
   * @returns {Vector2} The new Vector2 instance.
   */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /**
   * Sets the vector's x and y values.
   * @param {number} x - The new x value to assign.
   * @param {number} y - The new y value to assign.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If the x or y value is not a number.
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
   * Translates the vector's x and y values by a given offset
   * @param {number} dx - The x value offset.
   * @param {number} dy - The y value offset.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If dx or dy are not numbers.
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
   * Copy the values of the given vector instance to this vector instance.
   * @param {Vector2} v - The vector instance to copy.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
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
   * Add the values of the given vector instance to this vector instance.
   * @param {Vector2} v - The vector instance to add.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
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
   * Subtract the values from this vector instance by a given vector instance.
   * @param {Vector2} v - The vector instance used for subtraction.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
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
   * Computes this and a given vector instance's dot product.
   * Formula: x1 * x2 + y1 * y2
   * @param {Vector2} v - The other vector instance. 
   * @returns {number} The resulting dot product (scalar value).
   * @throws {Error} If v is not of type Vector2.
   */
  dot(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return this.x * v.x + this.y * v.y;
  }

  /**
   * Computes the displacement vector from this vector instance to another vector instance.
   * Calculates: target - this
   * @param {Vector2} v - The target vector.
   * @returns {Vector2} A new instance defining the displacement vector.
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return new Vector2(v.x - this.x, v.y - this.y);
  }

  /**
   * Multiplies the vector's values by a scalar.
   * @param {number} s - The scalar.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If s is not a number.
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
   * Divides the vector's values by a scalar.
   * @param {number} s - The scalar.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If s is not a number.
   * @throws {Error} If division by zero is attempted.
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
   * Computes the magnitude (length) of the vector.
   * Formula: Math.sqrt(x * x + y * y)
   * @returns {number} The scalar length/magnitude of the vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Computes the squared magnitude (length) of the vector.
   * Formula: x * x + y * y
   * @returns {number} The squared scalar length/magnitude of the vector.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  /**
   * Normalizes the vector to a length of 1.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If attempting to normalize a zero-length vector.
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
   * Check if the vector's values are equal to another vector.
   * @param {Vector2} v - The other vector.
   * @returns {boolean} Returns true if they are equal.
   * @throws {Error} If v is not of type Vector2.
   */
  isEqual(v) {
    if (!(v instanceof Vector2)) {
      throw new Error("v must be of type Vector2");
    }

    return this.x === v.x && this.y === v.y;
  }

  /**
   * Rotate the vector's values by an angle (in radians) around the given point.
   * @param {number} px - the x value to rotate around.
   * @param {number} py - the y value to rotate around.
   * @param {number} angle - the angle in radians.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If px, py, or angle are not numbers.
   */
  rotateAround(px, py, angle) {
    if (typeof px !== 'number' || typeof py !== 'number' || typeof angle !== 'number') {
      throw new Error("px, py, and angle must be numbers");
    }

    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = this.x;
    const y = this.y;

    this.x = (x - px) * cos - (y - py) * sin + px;
    this.y = (x - px) * sin + (y - py) * cos + py;

    return this;
  }
}
