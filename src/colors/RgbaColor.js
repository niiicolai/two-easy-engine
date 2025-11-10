import { Color } from "./Color.js";
import { deprecate } from "../utilities/deprecate.js";

/**
 * A color defined by red, green, blue, and alpha
 * @class RgbaColor
 * @augments Color
 */
export class RgbaColor extends Color {
  /**
   * @private
   * @property {number} r - red (0-255)
   */
  #r;

  /**
   * @private
   * @property {number} g - green (0-255)
   */
  #g;

  /**
   * @private
   * @property {number} b - blue (0-255)
   */
  #b;

  /**
   * @private
   * @property {number} a - alpha (0-1)
   */
  #a;

  /**
   * @private
   * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
   */
  #isBatchSetting = false;

  /**
   * A color defined by red, green, blue, and alpha
   * @class
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
   * Get red
   * @returns {number} red (0-255)
   */
  get r() {
    return this.#r;
  }

  /**
   * Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   */
  set r(r) {
    if (typeof r !== "number" || r < 0 || r > 255) {
      throw new Error("r must be a number between 0 and 255");
    }

    this.#r = r;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Get green
   * @returns {number} green (0-255)
   */
  get g() {
    return this.#g;
  }

  /**
   * Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   */
  set g(g) {
    if (typeof g !== "number" || g < 0 || g > 255) {
      throw new Error("g must be a number between 0 and 255");
    }

    this.#g = g;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Get blue
   * @returns {number} blue (0-255)
   */
  get b() {
    return this.#b;
  }

  /**
   * Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   */
  set b(b) {
    if (typeof b !== "number" || b < 0 || b > 255) {
      throw new Error("b must be a number between 0 and 255");
    }

    this.#b = b;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Get alpha
   * @returns {number} alpha (0-1)
   */
  get a() {
    return this.#a;
  }

  /**
   * Set alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  set a(a) {
    if (typeof a !== "number" || a < 0 || a > 1) {
      throw new Error("a must be a number between 0 and 1");
    }

    this.#a = a;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Set the rgba color
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  set(r, g, b, a) {
    try {
      this.#isBatchSetting = true;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      this.updateColorStr();
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   * @deprecated since version 0.1.0 - use r setter instead
   */
  setRed(r) {
    deprecate("setRed()", "r setter", "0.1.0");
    this.r = r;
  }

  /**
   * Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   * @deprecated since version 0.1.0 - use g setter instead
   */
  setGreen(g) {
    deprecate("setGreen()", "g setter", "0.1.0");
    this.g = g;
  }

  /**
   * Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   * @deprecated since version 0.1.0 - use b setter instead
   */
  setBlue(b) {
    deprecate("setBlue()", "b setter", "0.1.0");
    this.b = b;
  }

  /**
   * Set the alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(alpha) {
    deprecate("setAlpha()", "a setter", "0.1.0");
    this.a = alpha;
  }

  /**
   * Returns a string representation of the color in rgba format
   * @returns {string}
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * Returns a string representation of the color in rgb format
   * @returns {string}
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
