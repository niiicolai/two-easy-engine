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
}
