
/** 
 * The class is used to control the transform's anchor point. 
 * @class AnchorPoint2D
 */
export class AnchorPoint2D {
  /**
   * The valid anchor point types.
   * @static
   * @type {Object.<string, string>}
   */
  static ANCHOR_POINT_TYPES = {
    TOP_LEFT: "TOP_LEFT",
    TOP_CENTER: "TOP_CENTER",
    TOP_RIGHT: "TOP_RIGHT",
    MID_LEFT: "MID_LEFT",
    MID_CENTER: "MID_CENTER",
    MID_RIGHT: "MID_RIGHT",
    BOTTOM_LEFT: "BOTTOM_LEFT",
    BOTTOM_CENTER: "BOTTOM_CENTER",
    BOTTOM_RIGHT: "BOTTOM_RIGHT",
  };

  /**
   * The offsets defined for each anchor type.
   * @private
   * @type {Object.<string, number[]>}
   */
  static #ANCHOR_OFFSETS = {
    TOP_LEFT: [-1, -1],
    TOP_CENTER: [0, -1],
    TOP_RIGHT: [1, -1],
    MID_LEFT: [-1, 0],
    MID_CENTER: [0, 0],
    MID_RIGHT: [1, 0],
    BOTTOM_LEFT: [-1, 1],
    BOTTOM_CENTER: [0, 1],
    BOTTOM_RIGHT: [1, 1],
  };

  /**
   * The current offset.
   * @private
   * @type {Array}
   */
  #offset;

  /**
   * The current anchor type.
   * @private
   * @type {string}
   */
  #anchorType;

  /**
   * Create a new AnchorPoint2D instance.
   * @param {string} anchorType - The anchor type.
   * @throws {Error} If the anchorType is not a valid type.
   */
  constructor(anchorType) {
    this.anchorType = anchorType;
  }

  /**
   * Gets the current anchor type.
   * @returns {string} A string representing the current anchor type.
   */
  get anchorType() {
    return this.#anchorType;
  }

  /**
   * Gets the current offset.
   * @returns {Array} An array containing the x and y values of the offset (e.g. offset[0]=x, offset[1]=y).
   */
  get offset() {
    return this.#offset;
  }

  /**
   * Sets the anchor type.
   * Side-effects: updates the offset.
   * @param {string} anchorType - The new anchor type.
   * @returns {void}
   * @throws {Error} If the new anchor type is not a valid type.
   */
  set anchorType(anchorType) {
    if (!AnchorPoint2D.ANCHOR_POINT_TYPES[anchorType]) {
      throw new Error(
        `Anchor type: ${anchorType}; is not a valid type. It must be: ${Object.values(
          AnchorPoint2D.ANCHOR_POINT_TYPES
        ).join(", ")}`
      );
    }

    this.#anchorType = anchorType;
    this.#offset = AnchorPoint2D.#ANCHOR_OFFSETS[anchorType];
  }
}
