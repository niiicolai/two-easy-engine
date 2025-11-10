import { Color } from "./Color.js";
import { deprecate } from "../utilities/deprecate.js";

/**
 * A color defined by hue, saturation, lightness, and alpha
 * @class HslaColor
 * @augments Color
 */
export class HslaColor extends Color {
  /**
   * @private
   * @property {number} #h - hue (0-360)
   */
  #h;

  /**
   * @private
   * @property {number} #s - saturation (0-100)
   */
  #s;

  /**
   * @private
   * @property {number} #l - lightness (0-100)
   */
  #l;

  /**
   * @private
   * @property {number} #a - alpha (0-1)
   */
  #a;

  /**
   * @private
   * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
   */
  #isBatchSetting = false;

  /**
   * A color defined by hue, saturation, lightness, and alpha
   * @class
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(h, s, l, a = 1) {
    super(`hsla(${h}, ${s}%, ${l}%, ${a})`);
    this.set(h, s, l, a);
  }

  /**
   * Get hue
   * @returns {number} hue (0-360)
   */
  get h() {
    return this.#h;
  }

  /**
   * Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   */
  set h(h) {
    if (typeof h !== "number" || h < 0 || h > 360) {
      throw new Error("h must be a number between 0 and 360");
    }
    this.#h = h;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Get saturation
   * @returns {number} saturation (0-100)
   */
  get s() {
    return this.#s;
  }
  
  /**
   * Set saturation
   * @param {number} s - saturation (0-100)
   */
  set s(s) {
    if (typeof s !== "number" || s < 0 || s > 100) {
      throw new Error("s must be a number between 0 and 100");
    }
    this.#s = s;

    if (!this.#isBatchSetting) this.updateColorStr();
  }

  /**
   * Get lightness
   * @returns {number} lightness (0-100)
   */
  get l() {
    return this.#l;
  }

  /**
   * Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   */
  set l(l) {
    if (typeof l !== "number" || l < 0 || l > 100) {
      throw new Error("l must be a number between 0 and 100");
    }
    this.#l = l;

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
   * Set the hsla color
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  set(h, s, l, a = 1) {
    try {
      this.#isBatchSetting = true;
      this.h = h;
      this.s = s;
      this.l = l;
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
    this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   * @deprecated since version 0.1.0 - use h setter instead
   */
  setHue(h) {
    deprecate("setHue()", "h setter", "0.1.0");
    this.h = h;
  }

  /**
   * Set saturation
   * @param {number} s - saturation (0-100)
   * @returns {void}
   * @throws {Error} if s is not between 0 and 100
   * @deprecated since version 0.1.0 - use s setter instead
   */
  setSaturation(s) {
    deprecate("setSaturation()", "s setter", "0.1.0");
    this.s = s;
  }

  /**
   * Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   * @deprecated since version 0.1.0 - use l setter instead
   */
  setLightness(l) {
    deprecate("setLightness()", "l setter", "0.1.0");
    this.l = l;
  }

  /**
   * Set the alpha value
   * @param {number} alpha - alpha (0-1)
   * @returns {void}
   * @throws {Error} if alpha is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(alpha) {
    deprecate("setAlpha()", "a setter", "0.1.0");
    this.a = alpha;
  }

  /**
   * Returns a string representation of the color in hsla format
   * @returns {string}
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * Returns a string representation of the color in hsl format
   * @returns {string}
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
