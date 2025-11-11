import { Color } from "../colors/Color.js";
import { Renderer } from "./Renderer.js";

/**
 * The base RendererOptions class
 * @class RendererOptions
 */
export class RendererOptions {
  /**
   * The default renderer options
   * @static
   * @private
   * @property {Object} DEFAULT_OPTIONS
   */
  static #DEFAULT_OPTIONS = {
    devicePixelRatio: 1,
    backgroundColor: "transparent",
  };

  /**
   * The default renderer options
   * @public
   * @static
   * @returns {Object}
   */
  static get DEFAULT_OPTIONS() {
    return RendererOptions.#DEFAULT_OPTIONS;
  }

  /**
   * @private
   * @property {Object} #cache - Cache for computed values
   */
  #cache = {
    halfWidth: 0,
    halfHeight: 0,
  };

  /**
   * @private
   * @property {number} #width - The canvas width
   */
  #width;

  /**
   * @private
   * @property {number} #height - The canvas height
   */
  #height;

  /**
   * @private
   * @property {string|Color} #backgroundColor - The background color
   */
  #backgroundColor;

  /**
   * @private
   * @property {number} #devicePixelRatio - The device pixel ratio
   */
  #devicePixelRatio;

  /**
   * @private
   * @property {Renderer} #renderer - The renderer instance
   */
  #renderer;

  /**
   * @private
   * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
   */
  #isBatchSetting = false;

  /**
   * Configuration options for the Renderer.
   * @class
   * @param {Object} [options] - Render configuration options.
   * @param {number} [options.width] - Initial canvas width
   * @param {number} [options.height] - Initial canvas height
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS] - Initial device pixel ratio
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS] - Initial background color
   * @throws {Error} If options.width is not a positive number
   * @throws {Error} If options.height is not a positive number
   * @throws {Error} If options.devicePixelRatio is not a number
   * @throws {Error} If options.backgroundColor is not a string or Color
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
      devicePixelRatio ?? RendererOptions.DEFAULT_OPTIONS.devicePixelRatio;
    this.backgroundColor =
      backgroundColor ?? RendererOptions.DEFAULT_OPTIONS.backgroundColor;
    this.#isBatchSetting = false;
  }

  /**
   * Gets the cache object
   * @returns {Object}
   */
  get cache() {
    return this.#cache;
  }

  /**
   * Gets the canvas width
   * @returns {number}
   */
  get width() {
    return this.#width;
  }

  /**
   * Sets the canvas width
   * @param {number} width - The new width
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
   * Gets the canvas height
   * @returns {number}
   */
  get height() {
    return this.#height;
  }

  /**
   * Sets the canvas height
   * @param {number} height - The new height
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
   * Gets the device pixel ratio
   * @returns {number}
   */
  get devicePixelRatio() {
    return this.#devicePixelRatio;
  }

  /**
   * Sets the device pixel ratio
   * @param {number} dpr - The new device pixel ratio
   */
  set devicePixelRatio(dpr) {
    if (typeof dpr !== "number" || dpr <= 0) {
      throw new Error("devicePixelRatio must be a positive number");
    }

    this.#devicePixelRatio = dpr;

    if (!this.#isBatchSetting) {
      this.#renderer.recalculateDevicePixelRatio();
    }
  }

  /**
   * Gets the background color
   * @returns {string|Color}
   */
  get backgroundColor() {
    return this.#backgroundColor;
  }

  /**
   * Sets the background color
   * @param {string|Color} backgroundColor - The new background color
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
   * Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width is not a positive number
   * @throws {Error} If height is not a positive number
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
