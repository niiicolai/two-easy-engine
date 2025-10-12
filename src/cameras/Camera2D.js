import { Transform } from "../core/Transform.js";

/**
 * @class Camera2D 
 * @classdesc This class provides functionality to control the view of the scene, including position, rotation, and zoom.
 */
export class Camera2D {
  /**
   * Create a new Camera2D instance.
   * @constructor
   * @param {Object} [options] - Camera configuration options.
   * @param {number} [options.zoom=1] - Initial zoom level of the camera.
   */
  constructor(options = {
    zoom: 1,
  }) {
    const { zoom } = options;

    if (typeof zoom !== "number") {
      throw new Error("options.zoom must be a number");
    }

    this.zoom = zoom;
    this.transform = new Transform();
  }

  /**
   * @function apply
   * @description Applies the camera transformation to the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to apply the transformation to
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  apply(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }
    ctx.save();
    // Apply zoom
    ctx.scale(this.zoom, this.zoom);
    // Apply rotation
    ctx.rotate(-this.transform.rotation);
    // Move world in opposite direction of camera position
    ctx.translate(-this.transform.position.x, -this.transform.position.y);
  }

  /**
   * @function restore
   * @description Restores the canvas context to its state before the camera transformation was applied
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to restore
   * @returns {void}
   */
  restore(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    ctx.restore();
  }
}
