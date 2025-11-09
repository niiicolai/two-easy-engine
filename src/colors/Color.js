/**
 * @class Color
 * @classdesc The base color class
 */
export class Color {
  /**
   * @private
   * @property {string} #colorStr - a string representation of the color
   */
  #colorStr;

  /**
   * @constructor
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(colorStr) {
    this.colorStr = colorStr;
  }

  /**
   * @function get colorStr
   * @description Get the string representation of the color
   * @returns {string} colorStr
   */
  get colorStr() {
    return this.#colorStr;
  }

  /**
   * @function set colorStr
   * @description Set colorStr
   * @param {string} colorStr
   * @returns {void}
   * @throws {Error} if colorStr is not a string
   */
  set colorStr(colorStr) {
    if (typeof colorStr !== "string") {
      throw new Error("colorStr must be a string");
    }

    this.#colorStr = colorStr;
  }

  /**
   * @function toString
   * @description Returns the colorStr property
   * @returns {string}
   */
  toString() {
    return this.colorStr;
  }
}
