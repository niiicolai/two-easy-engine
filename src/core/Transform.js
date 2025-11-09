import { Vector2 } from "./Vector2.js";

/**
 * @class Transform
 * @classdesc This class encapsulates the transformation properties of an object in 2D space.
 */
export class Transform {
  /**
   * @private
   * @property {Vector2} #position - the transform's position
   */
  #position;

  /**
   * @private
   * @property {number} #rotation - the transform's rotation
   */
  #rotation;

  /**
   * @private
   * @property {Vector2} #scale - the transform's scale
   */
  #scale;

  /**
   * @constructor
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(
    position = new Vector2(),
    rotation = 0,
    scale = new Vector2(1, 1),
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  /**
   * @function get position
   * @description Get transform position
   * @returns {Vector2} the position
   */
  get position() {
    return this.#position;
  }

  /**
   * @function set position
   * @description Set position
   * @param {Vector2} position - the position
   * @returns {void}
   * @throws {Error} if position is not a Vector2
   */
  set position(position) {
    if (!(position instanceof Vector2)) {
      throw new Error("position must be of type Vector2");
    }

    this.#position = position;
  }

  /**
   * @function get rotation
   * @description Get transform rotation
   * @returns {number} the rotation
   */
  get rotation() {
    return this.#rotation;
  }

  /**
   * @function set rotation
   * @description Set rotation
   * @param {number} rotation - the rotation
   * @returns {void}
   * @throws {Error} if rotation is not a number
   */
  set rotation(rotation) {
    if (typeof rotation !== "number") {
      throw new Error("rotation must be a number");
    }

    this.#rotation = rotation;
  }

  /**
   * @function get scale
   * @description Get transform scale
   * @returns {Vector2} the scale
   */
  get scale() {
    return this.#scale;
  }

  /**
   * @function set scale
   * @description Set scale
   * @param {Vector2} scale - the scale
   * @returns {void}
   * @throws {Error} if scale is not a Vector2
   */
  set scale(scale) {
    if (!(scale instanceof Vector2)) {
      throw new Error("scale must be of type Vector2");
    }

    this.#scale = scale;
  }
}
