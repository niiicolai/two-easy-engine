import { Transform } from "./Transform.js";
import { v4 as uuidv4 } from "uuid";

/**
 * @class Object2D
 * @classdesc This class serves as a base for all 2D objects, providing a transform property.
 */
export class Object2D {
  /**
   * @constructor
   */
  constructor() {
    this.transform = new Transform();
    this.uuid = uuidv4();
    this.zIndex = 0;
    this.visible = true;
    this.scene = null;
    this.userData = {};
  }

  /**
   * @function setUserData
   * @description Sets the userData property reserved for custom user data
   * @param {object} userData - the userData object
   * @returns {void}
   */
  setUserData(userData) {
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
   */
  setVisible(visible) {
    if (typeof visible !== "boolean") {
      throw new Error("visible must be a boolean");
    }

    this.visible = visible;
  }

  /**
   * @function setZIndex
   * @description Sets the z-index of the object for rendering order
   * @param {number} zIndex - The z-index value
   * @returns {void}
   * @throws Will throw an error if zIndex is not a number
   */
  setZIndex(zIndex) {
    if (typeof zIndex !== "number") {
      throw new Error("zIndex must be a number");
    }

    this.zIndex = zIndex;

    if (this.scene) {
      this.scene.sortChildrenByZIndex();
    }
  }

  /**
   * @function draw
   * @description Renders the light effect on the given 2D rendering context.
   * @param {Renderer} renderer - The selected renderer
   * @returns {void}
   * @throws Will throw an error if the renderer.context is not supported
   */
  draw(renderer) {
    if (renderer.context === "2d") {
      this.drawContext2D(renderer.ctx);
    } else {
      throw new Error(`rendering context not supported: ${renderer.context}`);
    }
  }

  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D() {
    throw new Error("drawContext2D must be implemented in the subclass");
  }
}
