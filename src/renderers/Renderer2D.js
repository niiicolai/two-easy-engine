import { Renderer } from "./Renderer.js";
import { Color } from "../colors/Color.js";

// eslint-disable-next-line no-unused-vars
import { RendererOptions } from "./RendererOptions.js";

// eslint-disable-next-line no-unused-vars
import { Camera2D } from "../cameras/Camera2D.js";

// eslint-disable-next-line no-unused-vars
import { Scene } from "../scenes/Scene.js";

/**
 * The class represents the renderer for the Canvas 2D rendering context API.
 * @class Renderer2D
 * @augments Renderer
 */
export class Renderer2D extends Renderer {
  /**
   * Defines the renderer context type.
   * @static
   * @private
   * @type {string}
   */
  static #RENDERER_CONTEXT_TYPE = "2d";

  /**
   * Create a new Renderer2D instance.
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {Scene} scene - The scene instance.
   * @param {Camera2D} camera - The camera instance.
   * @param {Object} [options] - The renderer options.
   * @param {number} [options.width] - The canvas width.
   * @param {number} [options.height] - The canvas height.
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO] - The device pixel ratio.
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR] - The canvas' background color.
   * @throws {Error} If scene is not of type Scene.
   * @throws {Error} If camera is not of type Camera2D.
   * @throws {Error} If options.width or options.height is not a number.
   * @throws {Error} If options.devicePixelRatio is not a number.
   * @throws {Error} If options.backgroundColor is not a string or Color.
   */
  constructor(canvas, scene, camera, options = {}) {
    super(Renderer2D.#RENDERER_CONTEXT_TYPE, canvas, scene, camera, options);
  }

  /**
   * Init the canvas rendering context (used internal when creating a new instance).
   * @returns {void}
   */
  initContext() {
    if (this.initializedContext) return;
    this.ctx = this.canvas.getContext("2d");
    this.recalculateDevicePixelRatio();
  }

  /**
   * Recalculates the canvas' device pixel ratio based on width and height.
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const { devicePixelRatio: dpr, width, height } = this.options;

    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  /**
   * Trigger a new render.
   * @returns {void}
   */
  render() {
    const { ctx, camera, scene } = this;
    const { backgroundColor, width, height } = this.options;
    
    const fillStyle =
      backgroundColor instanceof Color
        ? backgroundColor.toString()
        : backgroundColor;

    // Clear the canvas and draw bgg
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);

    // Apply camera transform and zoom
    ctx.save();
    ctx.scale(camera.zoom, camera.zoom);
    ctx.rotate(-camera.transform.rotation);
    ctx.translate(
      -camera.transform.position.x,
      -camera.transform.position.y
    );

    // Draw object 2Ds
    for (let i = 0; i < scene.children.length; i++) {
      const child = scene.children[i];
      if (child.visible) {
        child.draw(this);
      }
    }

    // Restore
    ctx.restore();
  }
}
