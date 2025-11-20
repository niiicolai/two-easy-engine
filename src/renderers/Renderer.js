import { Camera2D } from "../cameras/Camera2D.js";
import { RendererOptions } from "./RendererOptions.js";
import { deprecate } from "../utilities/deprecate.js";
import { Scene } from "../scenes/Scene.js";

// eslint-disable-next-line no-unused-vars
import { Color } from "../colors/Color.js";

/** 
 * The base renderer class 
 * @class Renderer
 * @abstract
 */
export class Renderer {
  /**
   * The canvas rendering context type.
   * @private
   * @type {string}
   */
  #contextType;

  /**
   * The canvas element.
   * @private
   * @type {HTMLCanvasElement}
   */
  #canvas;

  /**
   * The scene instance.
   * @private
   * @type {Scene}
   */
  #scene;

  /**
   * The camera instance.
   * @private
   * @type {Camera2D}
   */
  #camera;

  /**
   * The requestAnimationFrame ID.
   * @private
   * @type {number|null}
   */
  #animationFrameId = null;

  /**
   * The renderer options.
   * @private
   * @type {RendererOptions}
   */
  #options;

  /**
   * A flag specifying if the rendering context is initialized.
   * @private
   * @type {boolean} 
   */
  #initializedContext;

  /**
   * Create a new Renderer instance.
   * @param {string} contextType - The canvas rendering context type.
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {Scene} scene - The scene instance.
   * @param {Camera2D} camera - The camera instance.
   * @param {Object} [options] - The renderer options.
   * @param {number} [options.width] - The canvas width.
   * @param {number} [options.height] - The canvas height.
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO] - The device pixel ratio.
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR] - The canvas' background color.
   * @throws {Error} If contextType is not a string.
   * @throws {Error} If scene is not of type Scene.
   * @throws {Error} If camera is not of type Camera2D.
   * @throws {Error} If options.width or options.height is not a number.
   * @throws {Error} If options.devicePixelRatio is not a number.
   * @throws {Error} If options.backgroundColor is not a string or Color.
   */
  constructor(contextType, canvas, scene, camera, options = {}) {
    if (typeof contextType !== "string") {
      throw new Error("contextType must be a string");
    }

    // Use setters to validate.
    this.scene = scene;
    this.camera = camera;

    // Readonly properties.
    this.#contextType = contextType;
    this.#canvas = canvas;

    // Options
    this.#options = new RendererOptions(this, options);

    // Initialize context.
    this.initContext();
    this.#initializedContext = true;
  }

  /**
   * Gets the initialized context flag.
   * @returns {Boolean} Returns true if initContext() has been called.
   */
  get initializedContext() {
    return this.#initializedContext;
  }

  /**
   * Gets the renderer options.
   * @returns {RendererOptions} The renderer options instance.
   */
  get options() {
    return this.#options;
  }

  /**
   * Gets the rendering context type.
   * @returns {string} A string specifying the rendering context type.
   */
  get contextType() {
    return this.#contextType;
  }

  /**
   * Gets the canvas element.
   * @returns {HTMLCanvasElement} The canvas element.
   */
  get canvas() {
    return this.#canvas;
  }

  /**
   * Gets the scene.
   * @returns {Scene} The scene instance.
   */
  get scene() {
    return this.#scene;
  }

  /**
   * Sets the scene.
   * @param {Scene} scene - The new scene to assign.
   * @returns {void}
   * @throws {Error} If the new scene is not of type Scene.
   */
  set scene(scene) {
    if (!(scene instanceof Scene)) {
      throw new Error("scene must be of type Scene");
    }

    this.#scene = scene;
  }

  /**
   * Gets the camera.
   * @returns {Camera2D} The camera instance.
   */
  get camera() {
    return this.#camera;
  }

  /**
   * Sets the camera.
   * @param {Camera2D} camera - The new camera to assign.
   * @returns {void}
   * @throws {Error} If the new camera is not of type Camera2D.
   */
  set camera(camera) {
    if (!(camera instanceof Camera2D)) {
      throw new Error("camera must be of type Camera2D");
    }

    this.#camera = camera;
  }

  /**
   * Gets the canvas' center x value (half width).
   * @returns {number} The center x value.
   */
  get centerX() {
    return this.#options.cache.halfWidth;
  }

  /**
   * Gets the canvas' center y value (half height).
   * @returns {number} The center y value.
   */
  get centerY() {
    return this.#options.cache.halfHeight;
  }

  /**
   * Sets the canvas' background color.
   * @param {string|Color} backgroundColor - The new color to assign.
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   * @deprecated since version 0.1.0 - Use the options.backgroundColor setter instead.
   */
  setBackgroundColor(backgroundColor) {
    deprecate(
      "setBackgroundColor()",
      "options.backgroundColor setter",
      "0.1.0"
    );
    this.#options.backgroundColor = backgroundColor;
  }

  /**
   * Sets the canvas' size
   * @param {number} width - The new width of the canvas.
   * @param {number} height - The new height of the canvas.
   * @returns {void}
   * @throws {Error} If width is not a positive number.
   * @throws {Error} If height is not a positive number.
   * @deprecated since version 0.1.0 - Use the options.setSize() method instead.
   */
  setSize(width, height) {
    deprecate("setSize()", "options.setSize()", "0.1.0");
    this.#options.setSize(width, height);
  }

  /**
   * Sets the device pixel ratio for the canvas.
   * @param {number} dpr - The new device pixel ratio.
   * @returns {void}
   * @throws {Error} If dpr is not a number.
   * @deprecated since version 0.1.0 - Use the options.devicePixelRatio setter instead.
   */
  setDevicePixelRatio(dpr) {
    deprecate(
      "setDevicePixelRatio()",
      "options.devicePixelRatio setter",
      "0.1.0"
    );
    this.#options.devicePixelRatio = dpr;
    this.recalculateDevicePixelRatio();
  }

  /**
   * Gets the canvas' center x value (half width).
   * @returns {number} The center x value.
   * @deprecated since version 0.1.0 - Use the centerX getter instead.
   */
  getCenterX() {
    deprecate("getCenterX()", "centerX getter", "0.1.0");
    return this.#options.cache.halfWidth;
  }

  /**
   * Gets the canvas' center y value (half height).
   * @returns {number} The center y value.
   * @deprecated since version 0.1.0 - Use the centerY getter instead.
   */
  getCenterY() {
    deprecate("getCenterY()", "centerY getter", "0.1.0");
    return this.#options.cache.halfHeight;
  }

  /**
   * Init the canvas rendering context (used internal when creating a new instance).
   * @returns {void}
   */
  initContext() {
    throw new Error("initContext() is not implemented in the subclass");
  }

  /**
   * Recalculates the canvas' device pixel ratio based on width and height.
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    throw new Error(
      "recalculateDevicePixelRatio() is not implemented in the subclass"
    );
  }

  /**
   * Trigger a new render.
   * @returns {void}
   */
  render() {
    throw new Error("render() is not implemented in the subclass");
  }

  /**
   * A helper method that simplifies the use of requestAnimationFrame.
   * @param {Object} [options] - Options for beforeRender and afterRender callbacks.
   * @param {Function|null|undefined} [options.beforeRender] - A callback function to be called before each render.
   * @param {Function|null|undefined} [options.afterRender=null] - A callback function to be called after each render.
   * @returns {void}
   * @throws {Error} If options.beforeRender is not null, undefined or a function.
   * @throws {Error} If options.afterRender is not null, undefined or a function.
   */
  requestAnimationFrame(options = {}) {
    const { beforeRender, afterRender } = options;
    if (beforeRender && typeof beforeRender !== "function") {
      throw new Error("beforeRender must be a function");
    }
    if (afterRender && typeof afterRender !== "function") {
      throw new Error("afterRender must be a function");
    }

    // Cancel the animation loop if it's already running.
    if (this.#animationFrameId !== null) {
      this.cancelAnimationFrame();
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
   * Cancel the loop created from renderer.requestAnimationFrame().
   * @returns {void}
   */
  cancelAnimationFrame() {
    if (this.#animationFrameId === null) return;

    cancelAnimationFrame(this.#animationFrameId);
    this.#animationFrameId = null;
  }
}
