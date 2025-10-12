import { Transform } from "./Transform.js";

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
    this.zIndex = 0;
    this.visible = true;
    this.scene = null;
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
   * @function onRender
   * @description Placeholder method to be overridden by subclasses for rendering
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   * @returns {void}
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D
   */
  onRender(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }
  }
}
