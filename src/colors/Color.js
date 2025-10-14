/**
 * @class Color
 * @classdesc The base color class
 */
export class Color {
  /**
   * @constructor
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(colorStr) {
    if (typeof colorStr !== "string") {
      throw new Error("colorStr must be a string");
    }
    this.colorStr = colorStr;
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
