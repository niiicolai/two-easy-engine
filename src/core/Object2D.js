import { Transform } from "./Transform.js";
import { deprecate } from "../utilities/deprecate.js";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line no-unused-vars
import { Renderer } from "../renderers/Renderer.js";

/** 
 * The class serves as the base class for all 2D objects. 
 * @class Object2D
 */
export class Object2D {

  /**
   * Defines the class' default z-index (default: 0).
   * @static
   * @type {number}
   */
  static Z_INDEX = 0;

  /**
   * An object that can be used to store custom user data.
   * @private
   * @type {Object}
   */
  #userData;

  /**
   * The object's transform.
   * @private
   * @type {Transform}
   */
  #transform;

  /**
   * A flag determining if the object should be visible when drawing the scene.
   * @private
   * @type {boolean}
   */
  #visible;

  /**
   * An universal unique identifier (UUID v4).
   * @private
   * @type {string}
   */
  #uuid;

  /** Create a new Object2D instance. */
  constructor() {
    this.#transform = new Transform();
    this.#uuid = uuidv4();
    this.#visible = true;
    this.#userData = {};
  }

  /**
   * Gets the object's UUID.
   * @returns {string} A string representing the UUID.
   */
  get uuid() {
    return this.#uuid;
  }

  /**
   * Gets the object's visible flag.
   * @returns {boolean} Returns true if the object is visible.
   */
  get visible() {
    return this.#visible;
  }

  /**
   * Sets the object's visible flag.
   * @param {boolean} visible - The new visible flag.
   * @returns {void}
   * @throws {Error} If the visible flag is not a boolean.
   */
  set visible(visible) {
    if (typeof visible !== "boolean") {
      throw new Error("visible must be a boolean");
    }

    this.#visible = visible;
  }

  /**
   * Gets the object's custom user data object.
   * @returns {Object} An object containing custom user data.
   */
  get userData() {
    return this.#userData;
  }

  /**
   * Sets the object's custom user data.
   * @param {Object} userData - The new custom user data object.
   * @returns {void}
   */
  set userData(userData) {
    this.#userData = userData;
  }

  /**
   * Gets the object's transform.
   * @returns {Transform} The Transform instance.
   */
  get transform() {
    return this.#transform;
  }

  /**
   * Sets the object's transform.
   * @param {Transform} transform - The new transform.
   * @returns {void}
   * @throws {Error} If the new transform is not a Transform.
   */
  set transform(transform) {
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    this.#transform = transform;
  }

  /**
   * Sets the object's custom user data.
   * @param {Object} userData - The new custom user data object.
   * @returns {void}
   * @deprecated since version 0.1.0 - Use the userData setter instead.
   */
  setUserData(userData) {
    deprecate("setUserData()", "userData setter", "0.1.0");
    this.userData = userData;
  }

  /**
   * Sets the object's visible flag.
   * @param {boolean} visible - The new visible flag.
   * @returns {void}
   * @throws {Error} If the visible flag is not a boolean.
   * @deprecated since version 0.1.0 - Use the visible setter instead.
   */
  setVisible(visible) {
    deprecate("setVisible()", "visible setter", "0.1.0");
    this.visible = visible;
  }

  /**
   * Draws the Object2D onto the canvas based on the given renderer.
   * @param {Renderer} renderer - The renderer.
   * @returns {void}
   * @throws if the renderer's contextType is not supported (i.e., not "2d").
   */
  draw(renderer) {
    if (renderer?.contextType === "2d") {
      this.drawContext2D(renderer.ctx);
    } else {
      throw new Error(`rendering context not supported: ${renderer.contextType}`);
    }
  }

  /**
   * Draws the Object2D onto the canvas using the 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(ctx) {}
}
