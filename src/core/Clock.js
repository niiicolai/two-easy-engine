import { deprecate } from "../utilities/deprecate.js";

/**
 * The class can be used to get elapsed- and delta time.
 * Note: the update method must be called at the beginning of the animation loop.
 * @class Clock
 */
export class Clock {
  /**
   * When the object was created.
   * @private
   * @type {number}
   */
  #startTime;

  /**
   * The last frame time.
   * @private
   * @type {number}
   */
  #oldTime;

  /**
   * The time since instantiation.
   * @private
   * @type {number}
   */
  #elapsedTime;

  /**
   * The time since last frame.
   * @private
   * @type {number}
   */
  #deltaTime;

  /**
   * When the update method was last called.
   * @private
   * @type {number}
   */
  #lastFrame;

  /** Create a new Clock instance. */
  constructor() {
    this.restart();
  }

  /**
   * Gets the time the object was instantiated or last restarted.
   * @returns {number} A number representing the time.
   */
  get startTime() {
    return this.#startTime;
  }

  /**
   * Gets the time since instantiation or last restart.
   * @returns {number} A number representing the time.
   */
  get elapsedTime() {
    return this.#elapsedTime;
  }

  /**
   * Gets the time since last frame.
   * @returns {number} A number representing the time.
   */
  get deltaTime() {
    return this.#deltaTime;
  }

  /**
   * Restarts the clock time.
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
   * Updates the internal time values.
   * Note: the method must be called at the beginning of the animation loop.
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
   * Gets the time elapsed since instantiation or last restart.
   * @returns {number} A number representing the time.
   * @deprecated since version 0.1.0 - Use the elapsedTime getter instead.
   */
  getElapsedTime() {
    deprecate("getElapsedTime()", "elapsedTime getter", "0.1.0");
    this.update();
    return this.#elapsedTime;
  }

  /**
   * Gets the time elapsed since the last update call.
   * @returns {number} A number representing the time.
   * @deprecated since version 0.1.0 - Use the deltaTime getter instead.
   */
  getDeltaTime() {
    deprecate("getDeltaTime()", "deltaTime getter", "0.1.0");
    this.update();
    return this.#deltaTime;
  }
}
