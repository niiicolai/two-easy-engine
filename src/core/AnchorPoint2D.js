
/**
 * This class is used to control the transform's anchor point
 * @class AnchorPoint2D
 */
export class AnchorPoint2D {
  /**
   * @property {Object} ANCHOR_POINT_TYPES - the valid anchor point types.
   */
  static ANCHOR_POINT_TYPES = {
    topLeft: "topLeft",
    topCenter: "topCenter",
    topRight: "topRight",
    midLeft: "midLeft",
    midCenter: "midCenter",
    midRight: "midRight",
    bottomLeft: "bottomLeft",
    bottomCenter: "bottomCenter",
    bottomRight: "bottomRight",
  };

  /**
   * @private
   * @property {Object} #ANCHOR_OFFSETS - the offsets returned by type.
   */
  static #ANCHOR_OFFSETS = {
    topLeft: [-1, -1],
    topCenter: [0, -1],
    topRight: [1, -1],
    midLeft: [-1, 0],
    midCenter: [0, 0],
    midRight: [1, 0],
    bottomLeft: [-1, 1],
    bottomCenter: [0, 1],
    bottomRight: [1, 1],
  };

  /**
   * @private
   * @property {Array} #offset - the current offest.
   */
  #offset;

  /**
   * @private
   * @property {string} #anchorType - the current anchor type.
   */
  #anchorType;

  /**
   * This class can be used to get elapsed and delta time (Remember to call clockObj.update at the beginning of the animation loop).
   * @class
   */
  constructor(anchorType) {
    this.anchorType = anchorType;
  }

  /**
   * Get the anchor type.
   * @returns {string}
   */
  get anchorType() {
    return this.#anchorType;
  }

  /**
   * Get the offset.
   * @returns {number}
   */
  get offset() {
    return this.#offset;
  }

  /**
   * Sets the anchor type
   * @param {string} anchorType - The new type
   * @returns {void}
   * @throws {Error} If the anchorType is not a valid type.
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
