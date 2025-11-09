import { Color } from "../colors/Color.js";
import { Renderer } from "./Renderer.js";

/**
 * @class RendererOptions
 * @classdesc The base RendererOptions class
 */
export class RendererOptions {
  /**
   * @static
   * @private
   * @property {Object} DEFAULT_OPTIONS - The default renderer options
   */
  static #DEFAULT_OPTIONS = {
    devicePixelRatio: 1,
    backgroundColor: "transparent",
  };

  /**
   * @public
   * @static
   * @returns {Object} The default renderer options
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
   * @constructor
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
   * @function get cache
   * @description Gets the cache object
   * @returns {Object} The cache object
   */
  get cache() {
    return this.#cache;
  }

  /**
   * @function get width
   * @description Gets the canvas width
   * @returns {number} The canvas width
   */
  get width() {
    return this.#width;
  }

  /**
   * @function set width
   * @description Sets the canvas width
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
   * @function get height
   * @description Gets the canvas height
   * @returns {number} The canvas height
   */
  get height() {
    return this.#height;
  }

  /**
   * @function set height
   * @description Sets the canvas height
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
   * @function get devicePixelRatio
   * @description Gets the device pixel ratio
   * @returns {number} The device pixel ratio
   */
  get devicePixelRatio() {
    return this.#devicePixelRatio;
  }

  /**
   * @function set devicePixelRatio
   * @description Sets the device pixel ratio
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
   * @function get backgroundColor
   * @description Gets the background color
   * @returns {string|Color} The background color
   */
  get backgroundColor() {
    return this.#backgroundColor;
  }

  /**
   * @function set backgroundColor
   * @description Sets the background color
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
   * @function setSize
   * @description Sets the size of the canvas
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
