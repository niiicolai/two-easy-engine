/**
 * The base color class
 * @class Color
 */
export class Color {
  /**
   * @private
   * @property {string} #colorStr - a string representation of the color
   */
  #colorStr;

  /**
   * The base color class
   * @class
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(colorStr) {
    this.colorStr = colorStr;
  }

  /**
   * Get the string representation of the color
   * @returns {string}
   */
  get colorStr() {
    return this.#colorStr;
  }

  /**
   * Set colorStr
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
   * Returns the colorStr property
   * @returns {string}
   */
  toString() {
    return this.colorStr;
  }
}
