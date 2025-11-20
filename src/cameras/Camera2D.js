import { Transform } from "../core/Transform.js";

/** 
 * The class provides functionality to control the view of the scene, including position, rotation, and zoom. 
 * @class Camera2D
 */
export class Camera2D {
  /**
   * The default zoom value.
   * @static
   * @type {number} 
   */
  static DEFAULT_ZOOM = 1;

  /**
   * The camera's zoom value.
   * @private
   * @type {number}
   */
  #zoom;

  /**
   * The camera's transform.
   * @private
   * @type {Transform}
   */
  #transform;

  /**
   * Create a new Camera2D instance.
   * @param {Object} [options] - The camera options.
   * @param {number} [options.zoom=Camera2D.DEFAULT_ZOOM] - The zoom value.
   */
  constructor(options = {}) {
    const { zoom } = options;
    this.zoom = zoom ?? Camera2D.DEFAULT_ZOOM;
    this.transform = new Transform();
  }

  /**
   * Gets the zoom value.
   * @returns {number} A number representing the camera's zoom.
   */
  get zoom() {
    return this.#zoom;
  }

  /**
   * Sets the camera's zoom value.
   * @param {number} zoom - the new zoom value.
   * @returns {void}
   * @throws {Error} if the new zoom value is not a number.
   */
  set zoom(zoom) {
    if (typeof zoom !== "number") {
      throw new Error("zoom must be a number");
    }

    this.#zoom = zoom;
  }

  /**
   * Gets the camera's transform.
   * @returns {Transform} The Transform instance.
   */
  get transform() {
    return this.#transform;
  }

  /**
   * Sets the camera's transform.
   * @param {Transform} transform - the new transform.
   * @returns {void}
   * @throws {Error} if the new transform is not a Transform.
   */
  set transform(transform) {
    if (!(transform instanceof Transform)) {
      throw new Error("transform must be of type Transform");
    }

    this.#transform = transform;
  }
}
