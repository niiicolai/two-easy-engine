import { deprecate } from "../utilities/deprecate.js";

/**
 * This class can be used to get elapsed and delta time (Remember to call clockObj.update at the beginning of the animation loop).
 * @class Clock
 */
export class Clock {
  /**
   * @private
   * @property {number} #startTime - when the object was created.
   */
  #startTime;

  /**
   * @private
   * @property {number} #oldTime - last frame time.
   */
  #oldTime;

  /**
   * @private
   * @property {number} #elapsedTime - time since instantiation.
   */
  #elapsedTime;

  /**
   * @private
   * @property {number} #deltaTime - time since last frame
   */
  #deltaTime;

  /**
   * @private
   * @property {number} #lastFrame - when the update method was last called.
   */
  #lastFrame;

  /**
   * This class can be used to get elapsed and delta time (Remember to call clockObj.update at the beginning of the animation loop).
   * @class
   */
  constructor() {
    this.restart();
  }

  /**
   * Get the time the object was instantiated.
   * @returns {number}
   */
  get startTime() {
    return this.#startTime;
  }

  /**
   * Get time since instantiation.
   * @returns {number}
   */
  get elapsedTime() {
    return this.#elapsedTime;
  }

  /**
   * Get time since last frame.
   * @returns {number}
   */
  get deltaTime() {
    return this.#deltaTime;
  }

  /**
   * Restart the start time
   * @returns {void}
   */
  restart() {
    this.#startTime = performance.now();
    this.#oldTime = this.#startTime;
    this.#elapsedTime = 0;
    this.#deltaTime = 0;
    this.#lastFrame = 0;
  }

  /**
   * Update the internal time values (call at the beginning of your animation loop)
   * @returns {void}
   */
  update() {
    const frame = performance.now();
    if (frame !== this.#lastFrame) {
      const newTime = frame;
      this.#deltaTime = (newTime - this.#oldTime) / 1000;
      this.#elapsedTime = (newTime - this.#startTime) / 1000;
      this.#oldTime = newTime;
      this.#lastFrame = frame;
    }
  }

  /**
   * Get the time elapsed (in seconds) since instantiation
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the elapsedTime getter instead
   */
  getElapsedTime() {
    deprecate("getElapsedTime()", "elapsedTime getter", "0.1.0");
    this.update();
    return this.#elapsedTime;
  }

  /**
   * Returns the time elapsed (in seconds) since the last frame or call.
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the deltaTime getter instead
   */
  getDeltaTime() {
    deprecate("getDeltaTime()", "deltaTime getter", "0.1.0");
    this.update();
    return this.#deltaTime;
  }
}
