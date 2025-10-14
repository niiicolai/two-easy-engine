import { Color } from "./Color.js";

/**
 * @class HslaColor
 * @extends Color
 * @classdesc A color defined by hue, saturation, lightness, and alpha
 */
export class HslaColor extends Color {
  /**
   * @constructor
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
   * @function set
   * @description Set the hsla color
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  set(h, s, l, a = 1) {
    if (typeof h !== "number" || h < 0 || h > 360) {
      throw new Error("h must be a number between 0 and 360");
    }
    if (typeof s !== "number" || s < 0 || s > 100) {
      throw new Error("s must be a number between 0 and 100");
    }
    if (typeof l !== "number" || l < 0 || l > 100) {
      throw new Error("l must be a number between 0 and 100");
    }
    if (typeof a !== "number" || a < 0 || a > 1) {
      throw new Error("a must be a number between 0 and 1");
    }

    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;

    this.updateColorStr();
  }

  /**
   * @function updateColorStr
   * @description update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * @function setHue
   * @description Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   */
  setHue(h) {
    if (typeof h !== "number" || h < 0 || h > 360) {
      throw new Error("h must be a number between 0 and 360");
    }
    this.h = h;
    this.updateColorStr();
  }

  /**
   * @function setSaturation
   * @description Set saturation
   * @param {number} s - saturation (0-100)
   * @returns {void}
   * @throws {Error} if s is not between 0 and 100
   */
  setSaturation(s) {
    if (typeof s !== "number" || s < 0 || s > 100) {
      throw new Error("s must be a number between 0 and 100");
    }
    this.s = s;
    this.updateColorStr();
  }

  /**
   * @function setLightness
   * @description Set saturation
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   */
  setLightness(l) {
    if (typeof l !== "number" || l < 0 || l > 100) {
      throw new Error("l must be a number between 0 and 100");
    }
    this.l = l;
    this.updateColorStr();
  }

  /**
   * @function setAlpha
   * @description Set the alpha value
   * @param {number} alpha - alpha (0-1)
   * @returns {void}
   * @throws {Error} if alpha is not between 0 and 1
   */
  setAlpha(alpha) {
    if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
      throw new Error("alpha must be a number between 0 and 1");
    }
    this.a = alpha;
    this.updateColorStr();
  }

  /**
   * @function toHslaString
   * @description Returns a string representation of the color in hsla format
   * @returns {string}
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }

  /**
   * @function toHslString
   * @description Returns a string representation of the color in hsl format
   * @returns {string}
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
