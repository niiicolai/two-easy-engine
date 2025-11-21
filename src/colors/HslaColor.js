import { Color } from "./Color.js";
import { deprecate } from "../utilities/deprecate.js";

/**
 * A color defined by hue, saturation, lightness, and alpha.
 * @class HslaColor
 * @augments Color
 */
export class HslaColor extends Color {
  /**
   * The hue value (0-360).
   * @private
   * @type {number}
   */
  #h;

  /**
   * The saturation value (0-100).
   * @private
   * @type {number}
   */
  #s;

  /**
   * The lightness value (0-100).
   * @private
   * @type {number}
   */
  #l;

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
   * Create a new HslaColor instance.
   * @param {number} h - The hue value (0-360).
   * @param {number} s - The saturation value (0-100).
   * @param {number} l - The lightness value (0-100).
   * @param {number} a - The alpha value (0-1).
   * @throws {Error} if hue, saturation, lightness or alpha values are not numbers or out of range.
   */
  constructor(h, s, l, a = 1) {
    super(`hsla(${h}, ${s}%, ${l}%, ${a})`);
    this.set(h, s, l, a);
  }

  /**
   * Gets the color's hue value (0-360).
   * @returns {number} A number representing the hue value.
   */
  get h() {
    return this.#h;
  }

  /**
   * Sets the color's hue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} h - The new hue value (0-360).
   * @returns {void}
   * @throws {Error} if the new hue value is not a number or out of range.
   */
  set h(h) {
    if (typeof h !== "number" || h < 0 || h > 360) {
      throw new Error("h must be a number between 0 and 360");
    }
    this.#h = h;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Gets the color's saturation value (0-100).
   * @returns {number} A number representing the saturation value.
   */
  get s() {
    return this.#s;
  }
  
  /**
   * Sets the color's saturation value. 
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} s - The new saturation value (0-100).
   * @returns {void}
   * @throws {Error} if the new saturation value is not a number or out of range.
   */
  set s(s) {
    if (typeof s !== "number" || s < 0 || s > 100) {
      throw new Error("s must be a number between 0 and 100");
    }
    this.#s = s;

    if (!this.#isBatchSetting) this.#updateColorStr();
  }

  /**
   * Gets the color's lightness value (0-100).
   * @returns {number} A number representing the lightness value.
   */
  get l() {
    return this.#l;
  }

  /**
   * Sets the color's lightness value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} l - The new lightness value (0-100).
   * @returns {void}
   * @throws {Error} if the new lightness value is not a number or out of range.
   */
  set l(l) {
    if (typeof l !== "number" || l < 0 || l > 100) {
      throw new Error("l must be a number between 0 and 100");
    }
    this.#l = l;

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
   * Tip: use set(h, s, l, a) for batch setting the color values.
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
   * Sets the color's hue, saturation, lightness and alpha values.
   * @param {number} h - The new hue value (0-360).
   * @param {number} s - The new saturation value (0-100).
   * @param {number} l - The new lightness value (0-100).
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if hue, saturation, lightness or alpha values are not numbers or out of range.
   */
  set(h, s, l, a = 1) {
    try {
      this.#isBatchSetting = true;
      this.h = h;
      this.s = s;
      this.l = l;
      this.a = a;
      this.#updateColorStr();
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * Updates the colorStr property based on the h, s, l, and a properties.
   * @returns {void}
   * @private
   */
  #updateColorStr() {
    this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * Sets the color's hue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} h - The new hue value (0-360).
   * @returns {void}
   * @throws {Error} if the new hue value is not a number or out of range.
   * @deprecated since version 0.1.0 - use h setter instead.
   */
  setHue(h) {
    deprecate("setHue()", "h setter", "0.1.0");
    this.h = h;
  }

  /**
   * Sets the color's saturation value. 
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} s - The new saturation value (0-100).
   * @returns {void}
   * @throws {Error} if the new saturation value is not a number or out of range.
   * @deprecated since version 0.1.0 - use s setter instead.
   */
  setSaturation(s) {
    deprecate("setSaturation()", "s setter", "0.1.0");
    this.s = s;
  }

  /**
   * Sets the color's lightness value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} l - The new lightness value (0-100).
   * @returns {void}
   * @throws {Error} if the new lightness value is not a number or out of range.
   * @deprecated since version 0.1.0 - use l setter instead.
   */
  setLightness(l) {
    deprecate("setLightness()", "l setter", "0.1.0");
    this.l = l;
  }

  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   * @deprecated since version 0.1.0 - use a setter instead.
   */
  setAlpha(a) {
    deprecate("setAlpha()", "a setter", "0.1.0");
    this.a = a;
  }

  /**
   * Gets a string representation of the color in HSLA format.
   * @returns {string} The HSLA string representation of the color.
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * Gets a string representation of the color in HSL format.
   * @returns {string} The HSL string representation of the color.
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
