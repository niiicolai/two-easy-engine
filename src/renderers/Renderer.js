import { Camera2D } from "../cameras/Camera2D.js";
import { Scene } from "../scenes/Scene.js";
import { RendererOptions } from "./RendererOptions.js";
import { deprecate } from "../utilities/deprecate.js";
// eslint-disable-next-line no-unused-vars
import { Color } from "../colors/Color.js";

/**
 * @class Renderer
 * @classdesc The base renderer class
 */
export class Renderer {
  /**
   * @private
   * @property {string} #contextType - The canvas rendering context type
   */
  #contextType;

  /**
   * @private
   * @property {HTMLCanvasElement} #canvas - The canvas element
   */
  #canvas;

  /**
   * @private
   * @property {Scene} #scene - The scene
   */
  #scene;

  /**
   * @private
   * @property {Camera2D} #camera - The camera
   */
  #camera;

  /**
   * @private
   * @property {number|null} #animationFrameId - The requestAnimationFrame ID
   */
  #animationFrameId = null;

  /**
   * @private
   * @property {RendererOptions} #options - The renderer options
   */
  #options;

  /**
   * @constructor
   * @param {string} contextType - The canvas rendering context type
   * @param {HTMLCanvasElement} canvas - The canvas element
   * @param {Scene} scene - The scene
   * @param {Camera2D} camera - The camera
   * @param {Object} [options] - Render configuration options.
   * @param {number} [options.width] - Initial canvas width
   * @param {number} [options.height] - Initial canvas height
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS] - Initial device pixel ratio
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS] - Initial background color
   * @throws {Error} If scene is not of type Scene
   * @throws {Error} If camera is not of type Camera2D
   * @throws {Error} If options.width or options.height is not a number
   * @throws {Error} If options.devicePixelRatio is not a number
   * @throws {Error} If options.backgroundColor is not a string or Color
   */
  constructor(contextType, canvas, scene, camera, options = {}) {
    if (typeof contextType !== "string") {
      throw new Error("contextType must be a string");
    }

    // Use setters to validate
    this.scene = scene;
    this.camera = camera;

    // Readonly properties
    this.#contextType = contextType;
    this.#canvas = canvas;
    
    // Options
    this.#options = new RendererOptions(this, options);
    
    // Initialize context
    this._initContext();
  }

  /**
   * @function get options
   * @description Gets the renderer options
   * @returns {RendererOptions} The renderer options
   */
  get options() {
    return this.#options;
  }

  /**
   * @function get contextType
   * @description Gets the rendering context type
   * @returns {string} The rendering context type
   */
  get contextType() {
    return this.#contextType;
  }

  /**
   * @function get canvas
   * @description Gets the canvas element
   * @returns {HTMLCanvasElement} The canvas element
   */
  get canvas() {
    return this.#canvas;
  }

  /**
   * @function get scene
   * @description Gets the scene
   * @returns {Scene} The scene
   */
  get scene() {
    return this.#scene;
  }

  /**
   * @function set scene
   * @description Sets the scene
   * @param {Scene} scene - The new scene to set
   */
  set scene(scene) {
    if (!(scene instanceof Scene)) {
      throw new Error("scene must be of type Scene");
    }

    this.#scene = scene;
  }

  /**
   * @function get camera
   * @description Gets the camera
   * @returns {Camera2D} The camera
   */
  get camera() {
    return this.#camera;
  }

  /**
   * @function set camera
   * @description Sets the camera
   * @param {Camera2D} camera - The new camera to set
   */
  set camera(camera) {
    if (!(camera instanceof Camera2D)) {
      throw new Error("camera must be of type Camera2D");
    }

    this.#camera = camera;
  }

  /**
   * @function get centerX
   * @description Gets the center x value
   * @returns {number} The center x value
   */
  get centerX() {
    return this.#options.cache.halfWidth;
  }

  /**
   * @function get centerY
   * @description Gets the center y value
   * @returns {number} The center y value
   */
  get centerY() {
    return this.#options.cache.halfHeight;
  }

  /**
   * @function setBackgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   * @deprecated since version 0.1.0 - Use the options.backgroundColor setter instead
   */
  setBackgroundColor(backgroundColor) {
    deprecate("setBackgroundColor()", "options.backgroundColor setter", "0.1.0");
    this.#options.backgroundColor = backgroundColor;
  }

  /**
   * @function setSize
   * @description Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width is not a positive number
   * @throws {Error} If height is not a positive number
   * @deprecated since version 0.1.0 - Use the options.setSize() method instead
   */
  setSize(width, height) {
    deprecate("setSize()", "options.setSize()", "0.1.0");
    this.#options.setSize(width, height);
  }

  /**
   * @function setDevicePixelRatio
   * @description Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   * @deprecated since version 0.1.0 - Use the options.devicePixelRatio setter instead
   */
  setDevicePixelRatio(dpr) {
    deprecate("setDevicePixelRatio()", "options.devicePixelRatio setter", "0.1.0");
    this.#options.devicePixelRatio = dpr;
    this.recalculateDevicePixelRatio();
  }

  /**
   * @function getCenterX
   * @description Returns a numerical value specifying the center x value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerX getter instead
   */
  getCenterX() {
    deprecate("getCenterX()", "centerX getter", "0.1.0");
    return this.#options.cache.halfWidth;
  }

  /**
   * @function getCenterY
   * @description Returns a numerical value specifying the center y value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerY getter instead
   */
  getCenterY() {
    deprecate("getCenterY()", "centerY getter", "0.1.0");
    return this.#options.cache.halfHeight;
  }

  /**
   * @function _initContext
   * @description Init the rendering context
   * @returns {void}
   */
  _initContext() {
    throw new Error("_initContext() is not implemented in the subclass");
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
    throw new Error("render() is not implemented in the subclass");
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

    const loop = () => {
      if (beforeRender) beforeRender();
      this.render();
      if (afterRender) afterRender();
      this.#animationFrameId = requestAnimationFrame(loop.bind(this));
    };

    this.#animationFrameId = requestAnimationFrame(loop.bind(this));
  }

  /**
   * @function cancelAnimationFrame
   * @description A helper method that cancel the loop create from renderer.requestAnimationFrame
   * @returns {void}
   */
  cancelAnimationFrame() {
    if (this.#animationFrameId === null) return;

    cancelAnimationFrame(this.#animationFrameId);
    this.#animationFrameId = null;
  }
}
