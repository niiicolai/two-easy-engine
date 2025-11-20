import { Color } from "../colors/Color.js";
import { Renderer } from "./Renderer.js";

/** 
 * The base RendererOptions class 
 * @class RendererOptions
 */
export class RendererOptions {
  /**
   * The default renderer options.
   * @static
   * @private
   * @type {Object}
   */
  static #DEFAULT_OPTIONS = {
    DEVICE_PIXEL_RATIO: 1,
    BACKGROUND_COLOR: "transparent",
  };

  /**
   * A copy of the default renderer options.
   * @public
   * @static
   * @returns {Object}
   */
  static get DEFAULT_OPTIONS() {
    return { ...RendererOptions.#DEFAULT_OPTIONS };
  }

  /**
   * Cache object for computed values.
   * @private
   * @type {Object}
   */
  #cache = {
    halfWidth: 0,
    halfHeight: 0,
  };

  /**
   * The canvas' width.
   * @private
   * @type {number}
   */
  #width;

  /**
   * The canvas' height.
   * @private
   * @type {number}
   */
  #height;

  /**
   * The canvas' background color.
   * @private
   * @type {string|Color}
   */
  #backgroundColor;

  /**
   * The device pixel ratio.
   * @private
   * @type {number}
   */
  #devicePixelRatio;

  /**
   * The option's renderer instance.
   * @private
   * @type {Renderer}
   */
  #renderer;

  /**
   * A flag to indicate if batch setting is in progress.
   * @private
   * @type {Renderer}
   */
  #isBatchSetting = false;

  /**
   * Create a new RendererOptions instance.
   * @param {Object} [options] - Renderer options.
   * @param {number} [options.width] - The canvas width.
   * @param {number} [options.height] - The canvas height.
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO] - The device pixel ratio.
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR] - The canvas' background color.
   * @throws {Error} If renderer is not of type Renderer.
   * @throws {Error} If options.width or options.height is not a number.
   * @throws {Error} If options.devicePixelRatio is not a number.
   * @throws {Error} If options.backgroundColor is not a string or Color.
   */
  constructor(renderer, options = {}) {
    const { width, height, devicePixelRatio, backgroundColor } = options;

    if (!(renderer instanceof Renderer)) {
      throw new Error("renderer must be of type Renderer");
    }

    this.#renderer = renderer;
    this.#isBatchSetting = true;
    this.width = width;
    this.height = height;
    this.devicePixelRatio =
      devicePixelRatio ?? RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO;
    this.backgroundColor =
      backgroundColor ?? RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR;
    this.#isBatchSetting = false;
  }

  /**
   * Gets the cache object.
   * @returns {Object} An object specifying computed half width and height.
   */
  get cache() {
    return this.#cache;
  }

  /**
   * Gets the canvas' width.
   * @returns {number} The canvas' width.
   */
  get width() {
    return this.#width;
  }

  /**
   * Sets the canvas' width.
   * Side-effects: recalculates half width and device pixel ratio.
   * Tip: use set(width, height) for batch setting the canvas' dimensions.
   * @param {number} width - The new width.
   * @returns {void}
   * @throws {Error} if the width is not a positive number.
   */
  set width(width) {
    if (typeof width !== "number" || width <= 0) {
      throw new Error("width must be a positive number");
    }

    this.#width = width;
    this.#cache.halfWidth = width / 2;

    if (!this.#isBatchSetting) {
      this.#renderer.recalculateDevicePixelRatio();
    }
  }

  /**
   * Gets the canvas' height.
   * @returns {number} The canvas' height.
   */
  get height() {
    return this.#height;
  }

  /**
   * Sets the canvas' height.
   * Side-effects: recalculates half height and device pixel ratio.
   * Tip: use set(width, height) for batch setting the canvas' dimensions.
   * @param {number} height - The new height.
   * @returns {void}
   * @throws {Error} if the height is not a positive number.
   */
  set height(height) {
    if (typeof height !== "number" || height <= 0) {
      throw new Error("height must be a positive number");
    }

    this.#height = height;
    this.#cache.halfHeight = height / 2;

    if (!this.#isBatchSetting) {
      this.#renderer.recalculateDevicePixelRatio();
    }
  }

  /**
   * Gets the device pixel ratio.
   * @returns {number} The device pixel ratio.
   */
  get devicePixelRatio() {
    return this.#devicePixelRatio;
  }

  /**
   * Sets the device pixel ratio
   * @param {number} devicePixelRatio - The new device pixel ratio.
   * @returns {void}
   * @throws {Error} if the devicePixelRatio is not a positive number.
   */
  set devicePixelRatio(devicePixelRatio) {
    if (typeof devicePixelRatio !== "number" || devicePixelRatio <= 0) {
      throw new Error("devicePixelRatio must be a positive number");
    }

    this.#devicePixelRatio = devicePixelRatio;

    if (!this.#isBatchSetting) {
      this.#renderer.recalculateDevicePixelRatio();
    }
  }

  /**
   * Gets the canvas' background color.
   * @returns {string|Color} The canvas' background color.
   */
  get backgroundColor() {
    return this.#backgroundColor;
  }

  /**
   * Sets the canvas' background color
   * @param {string|Color} backgroundColor - The new background color.
   * @returns {void}
   * @throws {Error} if the backgroundColor is not a Color or string.
   */
  set backgroundColor(backgroundColor) {
    if (
      typeof backgroundColor !== "string" &&
      !(backgroundColor instanceof Color)
    ) {
      throw new Error("backgroundColor must be a Color or a string");
    }

    this.#backgroundColor = backgroundColor;
  }

  /**
   * Sets the size of the canvas.
   * @param {number} width - The new canvas width.
   * @param {number} height - The new canvas height.
   * @returns {void}
   * @throws {Error} If width is not a positive number.
   * @throws {Error} If height is not a positive number.
   */
  setSize(width, height) {
    try {
      this.#isBatchSetting = true;
      this.width = width;
      this.height = height;
      this.#renderer.recalculateDevicePixelRatio();
    } finally {
      this.#isBatchSetting = false;
    }
  }
}
