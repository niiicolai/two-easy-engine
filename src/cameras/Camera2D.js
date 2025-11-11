import { Transform } from "../core/Transform.js";

/**
 * This class provides functionality to control the view of the scene, including position, rotation, and zoom.
 * @class Camera2D 
 */
export class Camera2D {
  /**
   * @private
   * @property {number} zoom - the camera's zoom
   */
  #zoom;

  /**
   * @private
   * @property {Transform} transform - the camera's transform
   */
  #transform;

  /**
   * This class provides functionality to control the view of the scene, including position, rotation, and zoom.
   * @class
   * @param {Object} [options] - Camera configuration options.
   * @param {number} [options.zoom=1] - Initial zoom level of the camera.
   */
  constructor(options = {
    zoom: 1,
  }) {
    const { zoom } = options;
    this.zoom = zoom;
    this.transform = new Transform();
  }

  /**
   * Get the zoom
   * @returns {number}
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * Set zoom
   * @param {number} zoom - the new zoom
   * @returns {void}
   * @throws {Error} if zoom is not a number
   */
  set zoom(zoom) {
    if (typeof zoom !== "number") {
      throw new Error("zoom must be a number");
    }

    this.#zoom = zoom;
  }

  /**
   * Get the transform
   * @returns {Transform}
   */
  get transform() {
    return this.#transform;
  }

  /**
   * Set transform
   * @param {number} transform - the new transform
   * @returns {void}
   * @throws {Error} if transform is not a Transform
   */
  set transform(transform) {
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    this.#transform = transform;
  }
}
