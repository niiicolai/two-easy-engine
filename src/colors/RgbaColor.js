import { Color } from "./Color.js";
import { deprecate } from "../utilities/deprecate.js";

/**
 * A color defined by red, green, blue, and alpha.
 * @class RgbaColor
 * @augments Color
 */
export class RgbaColor extends Color {
  /**
   * The red value (0-255).
   * @private
   * @type {number}
   */
  #r;

  /**
   * The green value (0-255).
   * @private
   * @type {number}
   */
  #g;

  /**
   * The blue value (0-255).
   * @private
   * @type {number}
   */
  #b;

  /**
   * The alpha value (0-1).
   * @private
   * @type {number}
   */
  #a;

  /**
   * A flag to indicate if batch setting is in progress.
   * @private
   * @type {boolean}
   */
  #isBatchSetting = false;

  /**
   * Create a new RgbaColor instance.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @param {number} a - The alpha value (0-1).
   * @throws {Error} if red, green, blue or alpha values are not numbers or out of range.
   */
  constructor(r, g, b, a = 1) {
    super(`rgba(${r}, ${g}, ${b}, ${a})`);
    this.set(r, g, b, a);
  }

  /**
   * Gets the color's red value (0-255).
   * @returns {number} A number representing the red value.
   */
  get r() {
    return this.#r;
  }

  /**
   * Sets the color's red value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} r - The new red value (0-255).
   * @returns {void}
   * @throws {Error} if the new red value is not a number or out of range.
   */
  set r(r) {
    if (typeof r !== "number" || r < 0 || r > 255) {
      throw new Error("r must be a number between 0 and 255");
    }

    this.#r = r;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Gets the color's green value (0-255).
   * @returns {number} A number representing the green value.
   */
  get g() {
    return this.#g;
  }

  /**
   * Sets the color's green value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} g - The new green value (0-255).
   * @returns {void}
   * @throws {Error} if the new green value is not a number or out of range.
   */
  set g(g) {
    if (typeof g !== "number" || g < 0 || g > 255) {
      throw new Error("g must be a number between 0 and 255");
    }

    this.#g = g;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Gets the color's blue value (0-255).
   * @returns {number} A number representing the blue value.
   */
  get b() {
    return this.#b;
  }

  /**
   * Sets the color's blue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} b - The new blue value (0-255).
   * @returns {void}
   * @throws {Error} if the new blue value is not a number or out of range.
   */
  set b(b) {
    if (typeof b !== "number" || b < 0 || b > 255) {
      throw new Error("b must be a number between 0 and 255");
    }

    this.#b = b;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Gets the color's alpha value (0-1).
   * @returns {number} A number representing the alpha value.
   */
  get a() {
    return this.#a;
  }

  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   */
  set a(a) {
    if (typeof a !== "number" || a < 0 || a > 1) {
      throw new Error("a must be a number between 0 and 1");
    }

    this.#a = a;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Sets the color's red, green, blue and alpha values.
   * @param {number} r - The new red value (0-255).
   * @param {number} g - The new green value (0-255).
   * @param {number} b - The new blue value (0-255).
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if red, green, blue or alpha values are not numbers or out of range.
   */
  set(r, g, b, a) {
    try {
      this.#isBatchSetting = true;
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      this.#updateColorStr();
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * update the colorStr property based on the rgba props.
   * @returns {void}
   */
  #updateColorStr() {
    this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * Sets the color's red value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} r - The new red value (0-255).
   * @returns {void}
   * @throws {Error} if the new red value is not a number or out of range.
   * @deprecated since version 0.1.0 - use r setter instead.
   */
  setRed(r) {
    deprecate("setRed()", "r setter", "0.1.0");
    this.r = r;
  }

  /**
   * Sets the color's green value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} g - The new green value (0-255).
   * @returns {void}
   * @throws {Error} if the new green value is not a number or out of range.
   * @deprecated since version 0.1.0 - use g setter instead.
   */
  setGreen(g) {
    deprecate("setGreen()", "g setter", "0.1.0");
    this.g = g;
  }

  /**
   * Sets the color's blue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} b - The new blue value (0-255).
   * @returns {void}
   * @throws {Error} if the new blue value is not a number or out of range.
   * @deprecated since version 0.1.0 - use b setter instead.
   */
  setBlue(b) {
    deprecate("setBlue()", "b setter", "0.1.0");
    this.b = b;
  }

  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   * @deprecated since version 0.1.0 - use a setter instead.
   */
  setAlpha(alpha) {
    deprecate("setAlpha()", "a setter", "0.1.0");
    this.a = alpha;
  }

  /**
   * Gets a string representation of the color in RGBA format.
   * @returns {string} The RGBA string representation of the color.
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * Gets a string representation of the color in RGB format.
   * @returns {string} The RGB string representation of the color.
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
