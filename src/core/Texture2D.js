import { deprecate } from "../utilities/deprecate.js";

/** 
 * Represents a pattern used for drawing geometries with an image texture. 
 * @class Texture2D
 */
export class Texture2D {
  /**
   * The valid image repeat types.
   * @static
   * @type {Object.<string, string>}
   */
  static IMAGE_REPEAT_TYPES = {
    repeat: "repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "no-repeat": "no-repeat",
  };

  /**
   * The default image repeat option.
   * @type {string}
   */
  static DEFAULT_IMAGE_REPEAT = "repeat";

  /**
   * The default image offset.
   * @type {Object}
   */
  static DEFAULT_IMAGE_OFFSET = {
    x: 0,
    y: 0,
  };

  /**
   * The default image dimensions.
   * @type {Object}
   */
  static DEFAULT_IMAGE_DIMENSIONS = {
    width: 1,
    height: 1,
  };

  /**
   * The current image repeat option.
   * @private
   * @type {string}
   */
  #imageRepeat;

  /**
   * The current image offset's x value.
   * @private
   * @type {number}
   */
  #imageOffsetX;

  /**
   * The current image offset's y value.
   * @private
   * @type {number}
   */
  #imageOffsetY;

  /**
   * The current width.
   * @private
   * @type {number}
   */
  #imageWidth;

  /**
   * The current height.
   * @private
   * @type {number}
   */
  #imageHeight;

  /**
   * The current image element.
   * @private
   * @type {HTMLImageElement}
   */
  #image;

  /**
   * The current pattern.
   * @private
   * @type {CanvasPattern|null|undefined}
   */
  #pattern;

  /**
   * The current pattern's transform.
   * @private
   * @type {DOMMatrix|undefined}
   */
  #patternTransform;

  /**
   * A flag determining if batch setting is in progress.
   * @private
   * @type {boolean}
   */
  #isBatchSetting;

  /**
   * Create a new Texture2D instance.
   * @param {Object} options - The Texture2D's options.
   * @param {HTMLImageElement|string} options.image - A HTML image element or a string representing the image source.
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"|null|undefined} [options.imageRepeat=Texture2D.DEFAULT_IMAGE_REPEAT] - The pattern repeat mode.
   * @param {number|null|undefined} [options.imageOffsetX=Texture2D.DEFAULT_IMAGE_OFFSET.x] - The image offset x.
   * @param {number|null|undefined} [options.imageOffsetY=Texture2D.DEFAULT_IMAGE_OFFSET.y] - the image offset y.
   * @param {number|null|undefined} [options.imageWidth=Texture2D.DEFAULT_IMAGE_DIMENSIONS.width] - The image width.
   * @param {number|null|undefined} [options.imageHeight=Texture2D.DEFAULT_IMAGE_DIMENSIONS.height] - The image height.
   * @throws {Error} If the options.image is not a string or HTMLImageElement.
   * @throws {Error} If the options.imageRepeat is not null, undefined, a string or a valid type.
   * @throws {Error} If the options.imageOffsetX is not null, undefined or a number.
   * @throws {Error} If the options.imageOffsetY is not null, undefined or a number.
   * @throws {Error} If the options.imageWidth is not null, undefined or a positive number.
   * @throws {Error} If the options.imageHeight is not null, undefined or a positive number.
   */
  constructor(options = {}) {
    const {
      image,
      imageRepeat,
      imageOffsetX,
      imageOffsetY,
      imageWidth,
      imageHeight,
    } = options;

    this.#isBatchSetting = true;
    this.imageRepeat = imageRepeat;
    this.imageOffsetX = imageOffsetX;
    this.imageOffsetY = imageOffsetY;
    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.image = image;
    this.#isBatchSetting = false;
  }

  /**
   * Gets the texture2D's image repeat option.
   * @returns {string} A string representing the image repeat option.
   */
  get imageRepeat() {
    return this.#imageRepeat;
  }

  /**
   * Sets the texture2D's image repeat option (Defaults to Texture2D.DEFAULT_IMAGE_REPEAT).
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"|null|undefined} imageRepeat - The new image repeat option.
   * @returns {void}
   * @throws {Error} If the new image repeat option is not null, undefined, a string or a valid type.
   */
  set imageRepeat(imageRepeat) {
    if (
      imageRepeat !== null &&
      imageRepeat !== undefined &&
      typeof imageRepeat !== "string" &&
      !Texture2D.IMAGE_REPEAT_TYPES[imageRepeat]
    ) {
      throw new Error(
        `imageRepeat must be string with value: ${Object.values(
          Texture2D.IMAGE_REPEAT_TYPES
        ).join(", ")}`
      );
    }

    this.#imageRepeat = imageRepeat ?? Texture2D.DEFAULT_IMAGE_REPEAT;
  }

  /**
   * Gets the texture2D's image offet's x value.
   * @returns {number} A number representing the x value.
   */
  get imageOffsetX() {
    return this.#imageOffsetX;
  }

  /**
   * Sets the texture2D's image offset's x value (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET.x).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageOffset(imageOffsetX, imageOffsetY) for batch setting the image offset.
   * @param {number|null|undefined} imageOffsetX - The new x value.
   * @returns {void}
   * @throws {Error} If the new x value is null undefined or not a number.
   */
  set imageOffsetX(imageOffsetX) {
    if (
      imageOffsetX !== null &&
      imageOffsetX !== undefined &&
      typeof imageOffsetX !== "number"
    ) {
      throw new Error("imageOffsetX must be a number");
    }

    this.#imageOffsetX = imageOffsetX ?? Texture2D.DEFAULT_IMAGE_OFFSET.x;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * Gets the texture2D's image offet's y value.
   * @returns {number} A number representing the y value.
   */
  get imageOffsetY() {
    return this.#imageOffsetY;
  }

  /**
   * Sets the texture2D's image offset's y value (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET.y).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageOffset(imageOffsetX, imageOffsetY) for batch setting the image offset.
   * @param {number|null|undefined} imageOffsetY - The new y value.
   * @returns {void}
   * @throws {Error} If the new y value is null undefined or not a number.
   */
  set imageOffsetY(imageOffsetY) {
    if (
      imageOffsetY !== null &&
      imageOffsetY !== undefined &&
      typeof imageOffsetY !== "number"
    ) {
      throw new Error("imageOffsetY must be a number");
    }

    this.#imageOffsetY = imageOffsetY ?? Texture2D.DEFAULT_IMAGE_OFFSET.y;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * Gets the texture2D's image width.
   * @returns {number}
   */
  get imageWidth() {
    return this.#imageWidth;
  }

  /**
   * Sets the texture2D's image width (Defaults to Texture2D.DEFAULT_IMAGE_DIMENSIONS.width).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageSize(imageWidth, imageHeight) for batch setting the image dimensions.
   * @param {number|null|undefined} imageWidth - The new width.
   * @returns {void}
   * @throws {Error} If the new width is not null, undefined or a positive number.
   */
  set imageWidth(imageWidth) {
    if (
      (imageWidth !== null &&
        imageWidth !== undefined &&
        typeof imageWidth !== "number") ||
      (imageWidth !== null &&
        imageWidth !== undefined &&
        typeof imageWidth === "number" &&
        imageWidth <= 0)
    ) {
      throw new Error("imageWidth must be a positive number or null");
    }

    this.#imageWidth = imageWidth ?? Texture2D.DEFAULT_IMAGE_DIMENSIONS.width;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * Gets the texture2D's image height.
   * @returns {number}
   */
  get imageHeight() {
    return this.#imageHeight;
  }

  /**
   * Sets the texture2D's image height (Defaults to Texture2D.DEFAULT_IMAGE_DIMENSIONS.height).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageSize(imageWidth, imageHeight) for batch setting the image dimensions.
   * @param {number|null|undefined} imageHeight - The new height.
   * @returns {void}
   * @throws {Error} If the new height is not null, undefined or a positive number.
   */
  set imageHeight(imageHeight) {
    if (
      (imageHeight !== null &&
        imageHeight !== undefined &&
        typeof imageHeight !== "number") ||
      (imageHeight !== null &&
        imageHeight !== undefined &&
        typeof imageHeight === "number" &&
        imageHeight <= 0)
    ) {
      throw new Error("imageHeight must be a positive number or null");
    }

    this.#imageHeight = imageHeight ?? Texture2D.DEFAULT_IMAGE_DIMENSIONS.height;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * Gets the texture2D's image element.
   * @returns {HTMLImageElement}
   */
  get image() {
    return this.#image;
  }

  /**
   * Sets the texture2D's image element.
   * @param {HTMLImageElement|string} image - A new HTML image element or a string representing the new image source.
   * @returns {void}
   * @throws {Error} If the new image is not a string or HTMLImageElement.
   */
  set image(image) {
    if (typeof image !== "string" && !(image instanceof HTMLImageElement)) {
      throw new Error("image must be a string or HTMLImageElement");
    }

    // Reset pattern to force the createPattern method
    // to create a new CanvasPattern instance.
    this.#pattern = null;

    if (typeof image === "string") {
      // Create a new HTML image element
      // and load the image by the given source.
      const img = new Image();
      img.src = image;
      img.onload = () => this.#image = img;

      this.#image = img;
    } else if (image instanceof HTMLImageElement) {
      // Simply use the HTML image element.
      this.#image = image;
    }
  }

  /**
   * Create and returns a canvas pattern if the internal image property is complete, otherwise it returns null.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {CanvasPattern|null} The CanvasPattern instance or null.
   */
  createPattern(ctx) {
    if (!this.#image || !this.#image.complete) return null;
    if (this.#pattern) return this.#pattern;

    this.#pattern = ctx.createPattern(this.#image, this.#imageRepeat);
    this.#rebuildTransform();

    return this.#pattern;
  }

  /**
   * Sets the texture2D's image offset (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET).
   * @param {number|null|undefined} [imageOffsetX] - The new image offset's x value.
   * @param {number|null|undefined} [imageOffsetY] - the new image offset's y value.
   * @returns {void}
   * @throws {Error} If the new image offset's x value is not null, undefined or a number.
   * @throws {Error} If the new image offset's y value is not null, undefined or a number.
   */
  setImageOffset(imageOffsetX, imageOffsetY) {
    try {
      this.#isBatchSetting = true;
      this.imageOffsetX = imageOffsetX;
      this.imageOffsetY = imageOffsetY;
      this.#rebuildTransform();
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * Sets the texture2D's image width and height (Defaults to Texture2D.DEFAULT_IMAGE_DIMENSIONS).
   * @param {number|null|undefined} [imageWidth] - The new image width.
   * @param {number|null|undefined} [imageHeight] - The new image height.
   * @returns {void}
   * @throws {Error} If the new image width is not null, undefined or a positive number.
   * @throws {Error} If the new image height is not null, undefined or a positive number.
   */
  setImageSize(imageWidth, imageHeight) {
    try {
      this.#isBatchSetting = true;
      this.imageWidth = imageWidth;
      this.imageHeight = imageHeight;
      this.#rebuildTransform();
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * Sets the texture2D's image element.
   * @param {HTMLImageElement|string} image - A new HTML image element or a string representing the new image source.
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"|null|undefined} [repeat="repeat"] - The new image repeat option.
   * @returns {void}
   * @throws {Error} If the new image is not a string or HTMLImageElement.
   * @throws {Error} If the new image repeat option is not a valid type.
   * @deprecated since version 0.1.0 - Use the image setter and imageRepeat setter instead.
   */
  setImage(image, repeat = "repeat") {
    deprecate("setImage()", "image setter", "0.1.0");

    try {
      this.#isBatchSetting = true;
      this.imageRepeat = repeat;
      this.image = image;
    } finally {
      this.#isBatchSetting = false;
    }
  }

  /**
   * Position and scale the canvas pattern's transform if the canvas pattern property is not undefined.
   * @returns {void}
   * @private
   */
  #rebuildTransform() {
    if (!this.#pattern) return;

    // Reuse existing matrix or create once if it doesn't exist
    this.#patternTransform ??= new DOMMatrix();

    // Reset to identity before applying new transforms
    this.#patternTransform.a = 1;
    this.#patternTransform.b = 0;
    this.#patternTransform.c = 0;
    this.#patternTransform.d = 1;
    this.#patternTransform.e = 0;
    this.#patternTransform.f = 0;

    // Apply new transform
    this.#patternTransform.translateSelf(
      this.#imageOffsetX,
      this.#imageOffsetY
    );
    this.#patternTransform.scaleSelf(
      this.#imageWidth / this.#image.naturalWidth, 
      this.#imageHeight / this.#image.naturalHeight
    );

    this.#pattern.setTransform(this.#patternTransform);
  }
}
