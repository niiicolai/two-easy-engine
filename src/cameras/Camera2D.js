import { Transform } from "../core/Transform.js";

/**
 * @class Camera2D 
 * @classdesc This class provides functionality to control the view of the scene, including position, rotation, and zoom.
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
   * Create a new Camera2D instance.
   * @constructor
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
   * @function get zoom
   * @description Get the zoom
   * @returns {number} zoom
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * @function set zoom
   * @description Set zoom
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
   * @function get transform
   * @description Get the transform
   * @returns {Transform} transform
   */
  get transform() {
    return this.#transform;
  }

  /**
   * @function set transform
   * @description Set transform
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
