import { Vector2 } from "../math/Vector2.js";
import { AnchorPoint2D } from "./AnchorPoint2D.js";

/** 
 * The class encapsulates the transformation properties of an object in 2D space. 
 * @class Transform
 */
export class Transform {
  /**
   * The transform's position.
   * @private
   * @type {Vector2}
   */
  #position;

  /**
   * The transform's rotation in radians.
   * @private
   * @type {number} 
   */
  #rotation;

  /**
   * The transform's scale.
   * @private
   * @type {Vector2}
   */
  #scale;

  /**
   * The transform's local anchor point.
   * @private
   * @type {Vector2} 
   */
  #localAnchorPoint;

  /**
   * Create a new Transform instance.
   * @param {Vector2} [position=new Vector2()] - The position.
   * @param {number} [rotation=0] - The rotation in radians.
   * @param {Vector2} [scale=new Vector2(1, 1)] - The scale.
   * @param {AnchorPoint2D} [localAnchorPoint=new AnchorPoint2D(AnchorPoint2D.ANCHOR_POINT_TYPES.MID_CENTER)] - The local anchor point.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   * @throws {Error} If the local anchor point is not an AnchorPoint2D.
   */
  constructor(
    position = new Vector2(),
    rotation = 0,
    scale = new Vector2(1, 1),
    localAnchorPoint = new AnchorPoint2D(AnchorPoint2D.ANCHOR_POINT_TYPES.MID_CENTER)
  ) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
    this.localAnchorPoint = localAnchorPoint;
  }

  /**
   * Gets the transform's local anchor point.
   * @returns {AnchorPoint2D} The AnchorPoint2D instance.
   */
  get localAnchorPoint() {
    return this.#localAnchorPoint;
  }

  /**
   * Sets the transform's local anchor point.
   * @param {AnchorPoint2D} localAnchorPoint - the new local anchor point.
   * @returns {void}
   * @throws {Error} if the new local anchor point is not an AnchorPoint2D.
   */
  set localAnchorPoint(localAnchorPoint) {
    if (!(localAnchorPoint instanceof AnchorPoint2D)) {
      throw new Error("localAnchorPoint must be of type AnchorPoint2D");
    }

    this.#localAnchorPoint = localAnchorPoint;
  }

  /**
   * Gets the transform's position.
   * @returns {Vector2} The Vector2 instance.
   */
  get position() {
    return this.#position;
  }

  /**
   * Sets the transform's position.
   * @param {Vector2} position - the new position.
   * @returns {void}
   * @throws {Error} if the new position is not a Vector2.
   */
  set position(position) {
    if (!(position instanceof Vector2)) {
      throw new Error("position must be of type Vector2");
    }

    this.#position = position;
  }

  /**
   * Gets the transform's rotation.
   * @returns {number} A number representing the rotation angle in radians.
   */
  get rotation() {
    return this.#rotation;
  }

  /**
   * Sets the transform's rotation.
   * @param {number} rotation - the new rotation in radians.
   * @returns {void}
   * @throws {Error} if the new rotation is not a number.
   */
  set rotation(rotation) {
    if (typeof rotation !== "number") {
      throw new Error("rotation must be a number");
    }

    this.#rotation = rotation;
  }

  /**
   * Gets the transform's scale.
   * @returns {Vector2} The Vector2 instance.
   */
  get scale() {
    return this.#scale;
  }

  /**
   * Sets the transform's scale.
   * @param {Vector2} scale - the new scale.
   * @returns {void}
   * @throws {Error} if the new scale is not a Vector2.
   */
  set scale(scale) {
    if (!(scale instanceof Vector2)) {
      throw new Error("scale must be of type Vector2");
    }

    this.#scale = scale;
  }
}
