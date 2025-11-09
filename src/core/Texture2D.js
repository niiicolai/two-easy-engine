import { deprecate } from "../utilities/deprecate.js";

/**
 * @class Texture2D
 * @classdesc Represents a pattern used for drawing an image on geometries.
 */
export class Texture2D {
  /**
   * @static
   * @property {string[]} [IMAGE_REPEAT_TYPES] - The valid image repeat types
   */
  static IMAGE_REPEAT_TYPES = {
    repeat: "repeat",
    "repeat-x": "repeat-x",
    "repeat-y": "repeat-y",
    "no-repeat": "no-repeat",
  };

  /**
   * @property {string} DEFAULT_IMAGE_REPEAT - the default image repeat option
   */
  static DEFAULT_IMAGE_REPEAT = "repeat";

  /**
   * @property {Object} DEFAULT_IMAGE_OFFSET - the default image offset
   */
  static DEFAULT_IMAGE_OFFSET = {
    x: 0,
    y: 0,
  };

  /**
   * @private
   * @property {string} #imageRepeat - the image repeat option
   */
  #imageRepeat;

  /**
   * @private
   * @property {number} #imageOffsetX - the image offset's x coordinate
   */
  #imageOffsetX;

  /**
   * @private
   * @property {number} #imageOffsetY - the image offset's y coordinate
   */
  #imageOffsetY;

  /**
   * @private
   * @property {number} #imageWidth - the image's width
   */
  #imageWidth;

  /**
   * @private
   * @property {number} #imageOffsetY - the image's height'
   */
  #imageHeight;

  /**
   * @private
   * @property {HTMLImageElement} #image - the image element
   */
  #image;

  /**
   * @private
   * @property {Object} #pattern - the pattern
   */
  #pattern;

  /**
   * @private
   * @property {DOMMatrix} #patternTransform - the pattern's transform
   */
  #patternTransform;

  /**
   * @private
   * @property {boolean} #isBatchSetting - a flag to determine if batch setting is in progress
   */
  #isBatchSetting;

  /**
   * @constructor
   * @param {Object} [options] - Texture2D configuration options.
   * @param {HTMLImageElement|string} [options.image] - Image or image URL for texture
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"} [options.imageRepeat="repeat"] - Pattern repeat mode
   * @param {number} [options.imageOffsetX=0] - image offset x
   * @param {number} [options.imageOffsetY=0] - image offset y
   * @param {number|null} [options.imageWidth=null] - image width
   * @param {number|null} [options.imageHeight=null] - image height
   * @throws {Error} If the image is not a string or HTMLImageElement.
   * @throws {Error} If the imageRepeat is not a string or valid type.
   * @throws {Error} If the imageOffsetX is not a number.
   * @throws {Error} If the imageWidth is not null or a number.
   * @throws {Error} If the imageHeight is not null or a number.
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
   * @function get imageRepeat
   * @description Get the imageRepeat option
   * @returns {string} the imageRepeat
   */
  get imageRepeat() {
    return this.#imageRepeat;
  }

  /**
   * @function set imageRepeat
   * @description Sets the object's imageRepeat
   * @param {string} imageRepeat - The new imageRepeat
   * @returns {void}
   * @throws {Error} If the imageRepeat is not a string.
   */
  set imageRepeat(imageRepeat) {
    if (
      imageRepeat &&
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
   * @function get imageOffsetX
   * @description Get the imageOffsetX
   * @returns {number} the imageOffsetX
   */
  get imageOffsetX() {
    return this.#imageOffsetX;
  }

  /**
   * @function set imageOffsetX
   * @description Sets the image offset's x coordinate
   * @param {number} imageOffsetX - The offset's new x coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
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
   * @function get imageOffsetY
   * @description Get the imageOffsetY
   * @returns {number} the imageOffsetY
   */
  get imageOffsetY() {
    return this.#imageOffsetY;
  }

  /**
   * @function set imageOffsetY
   * @description Sets the image offset's y coordinate
   * @param {number} imageOffsetY - The offset's new y coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetY is not a number.
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
   * @function get imageWidth
   * @description Get the imageWidth
   * @returns {number} the imageWidth
   */
  get imageWidth() {
    return this.#imageWidth;
  }

  /**
   * @function set imageWidth
   * @description Sets the image width
   * @param {number} imageWidth - The new width
   * @returns {void}
   * @throws {Error} If the imageWidth is not a number.
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

    this.#imageWidth = imageWidth;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * @function get imageHeight
   * @description Get the imageHeight
   * @returns {number} the imageHeight
   */
  get imageHeight() {
    return this.#imageHeight;
  }

  /**
   * @function set imageHeight
   * @description Sets the image height
   * @param {number} imageHeight - The new height
   * @returns {void}
   * @throws {Error} If the imageHeight is not a number.
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

    this.#imageHeight = imageHeight;
    if (!this.#isBatchSetting) this.#rebuildTransform();
  }

  /**
   * @function get image
   * @description Get the image
   * @returns {HTMLImageElement} the image
   */
  get image() {
    return this.#image;
  }

  /**
   * @function set image
   * @description Sets the image
   * @param {HTMLImageElement|string} image - The new image
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   */
  set image(image) {
    if (typeof image !== "string" && !(image instanceof HTMLImageElement)) {
      throw new Error("image must be a string or HTMLImageElement");
    }

    // Reset pattern
    this.#pattern = null;

    if (typeof image === "string") {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.#image = img;
      };
      this.#image = img;
    } else if (image instanceof HTMLImageElement) {
      this.#image = image;
    }
  }

  /**
   * @private
   * @function #rebuildTransform
   * @description Position and scale the pattern's transform
   * @returns {void}
   */
  #rebuildTransform() {
    if (!this.#pattern) return;

    const scaleX = this.#imageWidth
      ? this.#imageWidth / this.#image.naturalWidth
      : 1;
    const scaleY = this.#imageHeight
      ? this.#imageHeight / this.#image.naturalHeight
      : 1;

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
    this.#patternTransform.scaleSelf(scaleX, scaleY);

    this.#pattern.setTransform(this.#patternTransform);
  }

  /**
   * @function createPattern
   * @description Create the pattern based on the image and configuration (used by materials)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {CanvasPattern|null}
   */
  createPattern(ctx) {
    if (!this.#image || !this.#image.complete) return null;
    if (this.#pattern) return this.#pattern;

    this.#pattern = ctx.createPattern(this.#image, this.#imageRepeat);
    this.#rebuildTransform();

    return this.#pattern;
  }

  /**
   * @function setImageOffset
   * @description Set the image's offset
   * @param {number} imageOffsetX - image offset x
   * @param {number} imageOffsetY - image offset y
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
   * @throws {Error} If the imageOffsetY is not a number.
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
   * @function setImageSize
   * @description Set the image's width and height
   * @param {number|null} [imageWidth] - image width
   * @param {number|null} [imageHeight] - image height
   * @returns {void}
   * @throws {Error} If the imageWidth is not null or a number.
   * @throws {Error} If the imageHeight is not null or a number.
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
   * @function setImage
   * @description Loads and sets an image.
   * @param {HTMLImageElement|string} image - An <img> element or a URL string
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"} [repeat="repeat"] - Pattern repeat mode
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   * @deprecated since version 0.1.0 - Use the image setter instead
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
}
