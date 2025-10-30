import { Camera2D } from "../cameras/Camera2D.js";
import { Color } from "../colors/Color.js";
import { Vector2 } from "../core/Vector2.js";
import { Scene } from "../scenes/Scene.js";

/**
 * @class Renderer
 * @classdesc The base renderer class
 */
export class Renderer {
  /**
   * @constructor
   * @param {string} context - The canvas rendering context
   * @param {HTMLCanvasElement} canvas - The canvas element
   * @param {Scene} scene - The scene
   * @param {Camera2D} camera - The camera
   * @param {Object} [options] - Render configuration options.
   * @param {number} [options.width=window.innerWidth] - Initial canvas width
   * @param {number} [options.height=window.innerHeight] - Initial canvas height
   * @param {number} [options.devicePixelRatio=window.devicePixelRatio] - Initial device pixel ratio
   * @param {string|Color} [options.backgroundColor='transparent'] - Initial background color
   * @throws {Error} If canvas is not of type HTMLCanvasElement
   * @throws {Error} If scene is not of type Scene
   * @throws {Error} If camera is not of type Camera2D
   * @throws {Error} If options.width or options.height is not a number
   * @throws {Error} If options.devicePixelRatio is not a number
   * @throws {Error} If options.backgroundColor is not a string or Color
   */
  constructor(
    context,
    canvas,
    scene,
    camera,
    options = {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      backgroundColor: "transparent",
    }
  ) {
    const { width, height, devicePixelRatio, backgroundColor } = options;
    if (typeof context !== "string") {
      throw new Error("context must be a string");
    }
    if (!(scene instanceof Scene)) {
      throw new Error("scene must be of type Scene");
    }
    if (!(camera instanceof Camera2D)) {
      throw new Error("camera must be of type Camera2D");
    }
    if (typeof width !== "number" || typeof height !== "number") {
      throw new Error("width and height must be numbers");
    }
    if (typeof devicePixelRatio !== "number") {
      throw new Error("devicePixelRatio must be a number");
    }
    if (
      typeof backgroundColor !== "string" &&
      !(backgroundColor instanceof Color)
    ) {
      throw new Error("backgroundColor must be of type Color or string");
    }

    this.context = context;
    this.canvas = canvas;
    this.scene = scene;
    this.camera = camera;
    this.options = options;
    this.cache = { halfWidth: width / 2, halfHeight: height / 2 };
    this.animationFrameId = null;
    this.initContext();
  }

  /**
   * @function setBackgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   */
  setBackgroundColor(backgroundColor) {
    if (
      typeof backgroundColor !== "string" &&
      !(backgroundColor instanceof Color)
    ) {
      throw new Error("backgroundColor must be of type Color or string");
    }

    this.options.backgroundColor = backgroundColor;
  }

  /**
   * @function setSize
   * @description Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width or height is not a number
   */
  setSize(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new Error("width and height must be numbers");
    }
    this.options.width = width;
    this.options.height = height;
    this.cache.halfWidth = width / 2;
    this.cache.halfHeight = height / 2;

    this.recalculateDevicePixelRatio();
  }

  /**
   * @function setDevicePixelRatio
   * @description Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   */
  setDevicePixelRatio(dpr) {
    if (typeof dpr !== "number") {
      throw new Error("dpr must be a number");
    }
    this.options.devicePixelRatio = dpr;

    this.recalculateDevicePixelRatio();
  }

  /**
   * @function getCenterX
   * @description Returns a numerical value specifying the center x value
   * @returns {number}
   */
  getCenterX() {
    return this.cache.halfWidth;
  }

  /**
   * @function getCenterY
   * @description Returns a numerical value specifying the center y value
   * @returns {number}
   */
  getCenterY() {
    return this.cache.halfHeight;
  }

  /**
   * @function initContext
   * @description Init the rendering context
   * @returns {void}
   */
  initContext() {
    throw new Error(
      "initContext() is not implemented in the subclass"
    );
  }

  /**
   * @function recalculateDevicePixelRatio
   * @description Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    throw new Error(
      "recalculateDevicePixelRatio() is not implemented in the subclass"
    );
  }

  /**
   * @function render
   * @description Trigger a new render
   * @returns {void}
   */
  render() {
    throw new Error(
      "render() is not implemented in the subclass"
    );
  }

  /**
   * @function requestAnimationFrame
   * @description A helper method that simplifies the use of requestAnimationFrame
   * @param {Object} [options] - Options for beforeRender and afterRender callbacks
   * @param {Function|null} [options.beforeRender] - A callback function to be called before each render
   * @param {Function|null} [options.afterRender] - A callback function to be called after each render
   * @returns {void}
   * @throws {Error} If options.beforeRender is not a function
   * @throws {Error} If options.afterRender is not a function
   */
  requestAnimationFrame(
    options = {
      beforeRender: null,
      afterRender: null,
    }
  ) {
    const { beforeRender, afterRender } = options;
    if (beforeRender && typeof beforeRender !== "function") {
      throw new Error("beforeRender must be a function");
    }
    if (afterRender && typeof afterRender !== "function") {
      throw new Error("afterRender must be a function");
    }

    function loop() {
      if (beforeRender) {
        beforeRender();
      }
      this.render();
      if (afterRender) {
        afterRender();
      }
      requestAnimationFrame(loop.bind(this));
    }

    this.animationFrameId = requestAnimationFrame(loop.bind(this));
  }

  /**
   * @function cancelAnimationFrame
   * @description A helper method that cancel the loop create from renderer.requestAnimationFrame
   * @returns {void}
   */
  cancelAnimationFrame() {
    if (!this.animationFrameId) return;

    cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = null;
  }
}
