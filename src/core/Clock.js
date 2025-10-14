/**
 * @class Clock
 * @classdesc This class can be used to get elapsed and delta time.
 */
export class Clock {
  /**
   * @constructor
   */
  constructor() {
    this.startTime = performance.now();
    this.oldTime = this.startTime;
    this.elapsedTime = 0;
    this.deltaTime = 0;
    this.lastFrame = 0;
  }

  /**
   * @function _updateTime
   * @description Update the internal time values
   * @returns {void}
   */
  _updateTime() {
    const frame = performance.now();
    if (frame !== this.lastFrame) {
      const newTime = frame;
      this.deltaTime = (newTime - this.oldTime) / 1000;
      this.elapsedTime = (newTime - this.startTime) / 1000;
      this.oldTime = newTime;
      this.lastFrame = frame;
    }
  }

  /**
   * @function getElapsedTime
   * @description Get the time elapsed (in seconds) since instantiation
   * @returns {number}
   */
  getElapsedTime() {
    this._updateTime();
    return this.elapsedTime;
  }

  /**
   * @function getDeltaTime
   * @description Returns the time elapsed (in seconds) since the last frame or call.
   * @returns {number}
   */
  getDeltaTime() {
    this._updateTime();
    return this.deltaTime;
  }
}
