import { Transform } from "./Transform.js";
import { deprecate } from "../utilities/deprecate.js";
import { v4 as uuidv4 } from "uuid";
// eslint-disable-next-line no-unused-vars
import { Renderer } from "../renderers/Renderer.js";

/**
 * @class Object2D
 * @classdesc This class serves as a base for all 2D objects, providing a transform property.
 */
export class Object2D {

  /**
   * @static
   * @property {number} Z_INDEX - defines the class' default z-index (default: 0)
   */
  static Z_INDEX = 0;

  /**
   * @private
   * @property {number} #userData - custom user data
   */
  #userData;

  /**
   * @private
   * @property {Transform} #transform - the object's transform
   */
  #transform;

  /**
   * @private
   * @property {boolean} #visible - a flag to determine object visibility
   */
  #visible;

  /**
   * @private
   * @property {string} #uuid - an universal unique identifier
   */
  #uuid;

  /**
   * @constructor
   */
  constructor() {
    this.#transform = new Transform();
    this.#uuid = uuidv4();
    this.#visible = true;
    this.#userData = {};
  }

  /**
   * @function get uuid
   * @description Get the uuid
   * @returns {string} the uuid
   */
  get uuid() {
    return this.#uuid;
  }

  /**
   * @function get visible
   * @description Get the visible flag
   * @returns {boolean} the flag
   */
  get visible() {
    return this.#visible;
  }

  /**
   * @function set visible
   * @description Sets the object's visibility
   * @param {Boolean} visible - The new state
   * @returns {void}
   * @throws {Error} If the visible is not a boolean.
   */
  set visible(visible) {
    if (typeof visible !== "boolean") {
      throw new Error("visible must be a boolean");
    }

    this.#visible = visible;
  }

  /**
   * @function get userData
   * @description Get the custom userData
   * @returns {Object} the userData
   */
  get userData() {
    return this.#userData;
  }

  /**
   * @function set userData
   * @description Sets custom user data
   * @param {Boolean} userData - The user data
   * @returns {void}
   */
  set userData(userData) {
    this.#userData = userData;
  }

  /**
   * @function get transform
   * @description Get the transform
   * @returns {Transform} the transform
   */
  get transform() {
    return this.#transform;
  }

  /**
   * @function set transform
   * @description Sets the object's transform
   * @param {Transform} transform - The new transform
   * @returns {void}
   * @throws {Error} If the transform is not a Transform.
   */
  set transform(transform) {
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    this.#transform = transform;
  }

  /**
   * @function setUserData
   * @description Sets the userData property reserved for custom user data
   * @param {object} userData - the userData object
   * @returns {void}
   * @deprecated since version 0.1.0 - Use the userData setter instead
   */
  setUserData(userData) {
    deprecate("setUserData()", "userData setter", "0.1.0");

    if (typeof userData !== "object") {
      throw new Error("userData must be a object");
    }

    this.userData = userData;
  }

  /**
   * @function setVisible
   * @description Sets the visibility of the object
   * @param {boolean} visible - Whether the object should be visible
   * @returns {void}
   * @throws Will throw an error if visible is not a boolean
   * @deprecated since version 0.1.0 - Use the visible setter instead
   */
  setVisible(visible) {
    deprecate("setVisible()", "visible setter", "0.1.0");

    if (typeof visible !== "boolean") {
      throw new Error("visible must be a boolean");
    }

    this.visible = visible;
  }

  /**
   * @function draw
   * @description Renders the light effect on the given 2D rendering context.
   * @param {Renderer} renderer - The selected renderer
   * @returns {void}
   * @throws Will throw an error if the renderer.context is not supported
   */
  draw(renderer) {
    if (renderer?.contextType === "2d") {
      this.drawContext2D(renderer.ctx);
    } else {
      throw new Error(`rendering context not supported: ${renderer.contextType}`);
    }
  }

  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(ctx) {}
}
