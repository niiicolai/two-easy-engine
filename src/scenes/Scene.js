import { Object2D } from "../core/Object2D.js";

/**
 * @class Scene - Represents a collection of 2D objects to be rendered
 * @description This class manages a list of 2D objects and provides methods to add, remove, and render them.
 */
export class Scene {
  constructor() {
    this.children = [];
  }

  /**
   * @function add - Adds a 2D object to the scene
   * @param {Object2D} child - The 2D object to add to the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  add(child) {
    if (!(child instanceof Object2D)) {
      throw new Error("child must be of type Object2D");
    }

    this.children.push(child);
  }

  /**
   * @function remove - Removes a 2D object from the scene
   * @param {Object2D} child - The 2D object to remove from the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  remove(child) {
    if (!(child instanceof Object2D)) {
      throw new Error("child must be of type Object2D");
    }

    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  /**
   * @function render - Renders all 2D objects in the scene onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to render the scene onto
   * @returns {void}
   */
  render(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    this.children.forEach((child) => child.onRender(ctx));
  }
}
