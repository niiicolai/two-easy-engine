import { Color } from "./Color.js";

/**
 * @class RgbaColor
 * @extends Color
 * @classdesc A color defined by red, green, blue, and alpha
 */
export class RgbaColor extends Color {
  /**
   * @constructor
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(r, g, b, a = 1) {
    super(`rgba(${r}, ${g}, ${b}, ${a})`);
    this.set(r, g, b, a);
  }

  /**
   * @function set
   * @description Set the rgba color
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  set(r, g, b, a) {
    [r, g, b].forEach((val, i) => {
      if (typeof val !== "number" || val < 0 || val > 255) {
        throw new Error(["r", "g", "b"][i] + " must be a number between 0 and 255");
      }
    });
    if (typeof a !== "number" || a < 0 || a > 1) {
      throw new Error("a must be a number between 0 and 1");
    }

    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;

    this.updateColorStr();
  }

  /**
   * @function updateColorStr
   * @description update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * @function setRed
   * @description Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   */
  setRed(r) {
    if (typeof r !== "number" || r < 0 || r > 255) {
      throw new Error("r must be a number between 0 and 255");
    }
    this.r = r;
    this.updateColorStr();
  }

  /**
   * @function setGreen
   * @description Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   */
  setGreen(g) {
    if (typeof g !== "number" || g < 0 || g > 255) {
      throw new Error("g must be a number between 0 and 255");
    }
    this.g = g;
    this.updateColorStr();
  }

  /**
   * @function setBlue
   * @description Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   */
  setBlue(b) {
    if (typeof b !== "number" || b < 0 || b > 255) {
      throw new Error("b must be a number between 0 and 255");
    }
    this.b = b;
    this.updateColorStr();
  }

  /**
   * @function setAlpha
   * @description Set the alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  setAlpha(alpha) {
    if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
      throw new Error("alpha must be a number between 0 and 1");
    }
    this.a = alpha;
    this.updateColorStr();
  }

  /**
   * @function toRgbaString
   * @description Returns a string representation of the color in rgba format
   * @returns {string}
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * @function toRgbString
   * @description Returns a string representation of the color in rgb format
   * @returns {string}
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
