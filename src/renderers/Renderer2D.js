import { Renderer } from "./Renderer.js";
import { Color } from "../colors/Color.js";

/**
 * @class Renderer2D
 * @extends Renderer
 * @classdesc This class handles the rendering process, including setting up the canvas and drawing the scene using the camera.
 */
export class Renderer2D extends Renderer {
  /**
   * @constructor
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
    super("2d", canvas, scene, camera, options);
  }

  /**
   * @function initContext
   * @description Init the rendering context
   */
  initContext() {
    this.ctx = this.canvas.getContext("2d");
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
   * @description Trigger a new render
   * @returns {void}
   */
  render() {
    const ctx = this.ctx;
    const bgg =
      this.options.backgroundColor instanceof Color
        ? this.options.backgroundColor.toString()
        : this.options.backgroundColor;

    // Clear the canvas and draw bgg
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = bgg;
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Apply camera transform and zoom
    ctx.save();
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.rotate(-this.camera.transform.rotation);
    ctx.translate(
      -this.camera.transform.position.x,
      -this.camera.transform.position.y
    );

    // Draw object 2Ds
    this.scene.children.forEach((child) => {
      if (child.visible) {
        child.draw(this);
      }
    });

    // Restore
    ctx.restore();
  }
}
