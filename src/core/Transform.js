import { Vector2 } from "../math/Vector2.js";
import { AnchorPoint2D } from "./AnchorPoint2D.js";

/**
 * This class encapsulates the transformation properties of an object in 2D space.
 * @class Transform
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
   * @private
   * @property {Vector2} #localAnchorPoint - the transform's localAnchorPoint
   */
  #localAnchorPoint;

  /**
   * This class encapsulates the transformation properties of an object in 2D space.
   * @class
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
    localAnchorPoint = new AnchorPoint2D(AnchorPoint2D.ANCHOR_POINT_TYPES.midCenter)
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.localAnchorPoint = localAnchorPoint;
  }

  /**
   * Get transform's localAnchorPoint
   * @returns {AnchorPoint2D}
   */
  get localAnchorPoint() {
    return this.#localAnchorPoint;
  }

  /**
   * Set the localAnchorPoint
   * @param {AnchorPoint2D} localAnchorPoint - the new localAnchorPoint
   * @returns {void}
   * @throws {Error} if localAnchorPoint is not a AnchorPoint2D
   */
  set localAnchorPoint(localAnchorPoint) {
    if (!(localAnchorPoint instanceof AnchorPoint2D)) {
      throw new Error("localAnchorPoint must be of type AnchorPoint2D");
    }

    this.#localAnchorPoint = localAnchorPoint;
  }

  /**
   * Get transform position
   * @returns {Vector2}
   */
  get position() {
    return this.#position;
  }

  /**
   * Set the position
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
   * Get the rotation
   * @returns {number}
   */
  get rotation() {
    return this.#rotation;
  }

  /**
   * Set the rotation
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
   * Get the scale
   * @returns {Vector2}
   */
  get scale() {
    return this.#scale;
  }

  /**
   * Set the scale
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
