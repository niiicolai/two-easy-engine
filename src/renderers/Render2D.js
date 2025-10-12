import { Scene } from "../scenes/Scene.js";
import { Camera2D } from "../cameras/Camera2D.js";

/**
 * @class Render2D
 * @classdesc This class handles the rendering process, including setting up the canvas and drawing the scene using the camera.
 */
export class Render2D {
  /**
   * @constructor
   * @param {HTMLCanvasElement} canvas - The canvas element 
   * @param {Scene} scene - The scene
   * @param {Camera2D} camera - The camera
   * @param {Object} [options] - Render configuration options.
   * @param {number} [options.width=window.innerWidth] - Initial canvas width
   * @param {number} [options.height=window.innerHeight] - Initial canvas height
   * @param {number} [options.devicePixelRatio=window.devicePixelRatio] - Initial device pixel ratio
   * @param {string} [options.backgroundColor='transparent'] - Initial background color
   * @throws {Error} If canvas is not of type HTMLCanvasElement
   * @throws {Error} If scene is not of type Scene
   * @throws {Error} If camera is not of type Camera2D
   * @throws {Error} If options.width or options.height is not a number
   * @throws {Error} If options.devicePixelRatio is not a number
   * @throws {Error} If options.backgroundColor is not a string
   */
  constructor(
    canvas,
    scene,
    camera,
    options = {
      width: window.innerWidth,
      height: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      backgroundColor: 'transparent'
    }
  ) {
    const { width, height, devicePixelRatio, backgroundColor } = options;

    if (!(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas must be of type HTMLCanvasElement");
    }
    if (!(scene instanceof Scene)) {
      throw new Error("scene must be of type Scene");
    }
    if (!(camera instanceof Camera2D)) {
      throw new Error("camera must be of type Camera");
    }

    if (typeof width !== "number" || typeof height !== "number") {
      throw new Error("width and height must be numbers");
    }
    if (typeof devicePixelRatio !== "number") {
      throw new Error("devicePixelRatio must be a number");
    }
    if (typeof backgroundColor !== "string") {
      throw new Error("backgroundColor must be a number");
    }

    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.scene = scene;
    this.camera = camera;
    this.options = options;
    this.recalculateDevicePixelRatio();
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
   * @function recalculateDevicePixelRatio
   * @description Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const dpr = this.options.devicePixelRatio || 1;
    const width = this.options.width * dpr;
    const height = this.options.height * dpr;
    this.canvas.width = width;
    this.canvas.height = height;
    this.ctx.scale(dpr, dpr);
  }

  /**
   * @function render
   * @description Renders the scene onto the canvas using the camera
   * @returns {void}
   */
  render() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = this.options.backgroundColor || 'transparent';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.camera.apply(ctx);
    this.scene.render(ctx);
    this.camera.restore(ctx);
  }

  /**
   * @function requestAnimationFrame
   * @description A helper method that simplifies the use of requestAnimationFrame
   * @param {Object} options - Options for beforeRender and afterRender callbacks
   * @param {Function} options.beforeRender - A callback function to be called before each render
   * @param {Function} options.afterRender - A callback function to be called after each render
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
      window.requestAnimationFrame(loop.bind(this));
    }

    window.requestAnimationFrame(loop.bind(this));
  }
}
