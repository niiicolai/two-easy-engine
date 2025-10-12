import { Object2D } from "../core/Object2D.js";

/**
 * @class Scene
 * @classdesc This class manages a list of 2D objects and provides methods to add, remove, and render them.
 */
export class Scene {
  constructor() {
    this.children = [];
  }

  /**
   * @function add
   * @description Adds a 2D object to the scene
   * @param {Object2D} child - The 2D object to add to the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  add(child) {
    if (!(child instanceof Object2D)) {
      throw new Error("child must be of type Object2D");
    }

    this.children.push(child);
    child.scene = this;
    this.sortChildrenByZIndex();
  }

  /**
   * @function remove
   * @description Removes a 2D object from the scene
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
      child.scene = null;
      this.sortChildrenByZIndex();
    }
  }

  /**
   * @function sortChildrenByZIndex
   * @description Sorts the children based on their zIndex property
   * @returns {void}
   */
  sortChildrenByZIndex() {
    this.children.sort((a, b) => a.zIndex - b.zIndex);
  }

  /**
   * @function render
   * @description Renders all 2D objects in the scene onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to render the scene onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  render(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    this.children.forEach((child) => {
      if (child.visible) {
        child.onRender(ctx);
      }
    });
  }
}
