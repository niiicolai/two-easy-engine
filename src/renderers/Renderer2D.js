import { Renderer } from "./Renderer.js";
import { Color } from "../colors/Color.js";
// eslint-disable-next-line no-unused-vars
import { Camera2D } from "../cameras/Camera2D.js";
// eslint-disable-next-line no-unused-vars
import { Scene } from "../scenes/Scene.js";

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
   * @param {number} [options.width] - Initial canvas width
   * @param {number} [options.height] - Initial canvas height
   * @param {number} [options.devicePixelRatio] - Initial device pixel ratio
   * @param {string|Color} [options.backgroundColor] - Initial background color
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
    options = {}
  ) {
    super("2d", canvas, scene, camera, options);
  }

  /**
   * @function _initContext
   * @description Init the rendering context
   * @returns {void}
   */
  _initContext() {
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
    for (let i = 0; i < this.scene.children.length; i++) {
      const child = this.scene.children[i];
      if (child.visible) {
        child.draw(this);
      }
    }

    // Restore
    ctx.restore();
  }
}
