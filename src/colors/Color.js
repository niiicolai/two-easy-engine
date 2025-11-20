/** 
 * The base color class.
 * @class Color 
 */
export class Color {
  /**
   * A string representation of the color.
   * @private
   * @type {string}
   */
  #colorStr;

  /**
   * Create a new Color instance.
   * @param {string} colorStr - a string representation of the color.
   * @throws {Error} if the colorStr is not a string.
   */
  constructor(colorStr) {
    this.colorStr = colorStr;
  }

  /**
   * Gets the string representation of the color.
   * @returns {string} The color string representation.
   */
  get colorStr() {
    return this.#colorStr;
  }

  /**
   * Sets the color's colorStr property.
   * @param {string} colorStr - the new colorStr.
   * @returns {void}
   * @throws {Error} if the new colorStr is not a string.
   */
  set colorStr(colorStr) {
    if (typeof colorStr !== "string") {
      throw new Error("colorStr must be a string");
    }

    this.#colorStr = colorStr;
  }

  /**
   * Gets the string representation of the Color instance.
   * @returns {string} A string representing the color.
   */
  toString() {
    return this.colorStr;
  }
}
