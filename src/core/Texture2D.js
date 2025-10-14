
const IMAGE_REPEAT_TYPES = ["repeat", "repeat-x", "repeat-y", "no-repeat"];

/**
 * @class Texture2D
 * @classdesc Represents a pattern used for drawing an image on geometries.
 */
export class Texture2D {
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
  constructor(
    options = {
      image: null,
      imageRepeat: "repeat",
      imageOffsetX: 0,
      imageOffsetY: 0,
      imageWidth: null,
      imageHeight: null,
    }
  ) {
    const {
      image = null,
      imageRepeat = "repeat",
      imageOffsetX = 0,
      imageOffsetY = 0,
      imageWidth = null,
      imageHeight = null,
    } = options;

    if (typeof image !== "string" && !(image instanceof HTMLImageElement)) {
      throw new Error("image must be a string or HTMLImageElement");
    }
    if (
      typeof imageRepeat !== "string" &&
      !IMAGE_REPEAT_TYPES.includes(imageRepeat)
    ) {
      throw new Error(
        `imageRepeat must be string with value: ${IMAGE_REPEAT_TYPES.join(
          ", "
        )}`
      );
    }

    this.image = null;
    this.imageRepeat = imageRepeat;
    this.pattern = null;
    this.patternTransform = null;
    this.setImageOffset(imageOffsetX, imageOffsetY);
    this.setImageSize(imageWidth, imageHeight);

    if (image) {
      this.setImage(image, imageRepeat);
    }
  }

  /**
   * @function createPattern
   * @description Create the pattern based on the image and configuration
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {CanvasPattern|null}
   * @throws {Error} If the ctx is not of type CanvasRenderingContext2D.
   */
  createPattern(ctx) {
    if (!(ctx instanceof CanvasRenderingContext2D)) {
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    }

    if (!this.image || !this.image.complete) return null;
    if (this.pattern) return this.pattern;

    this.pattern = ctx.createPattern(this.image, this.imageRepeat);
    this.rebuildTransform();

    return this.pattern;
  }

  /**
   * @function rebuildTransform
   * @description Position and scale the pattern's transform
   * @returns {void}
   */
  rebuildTransform() {
    if (!this.pattern) return;

    const scaleX = this.imageWidth
      ? this.imageWidth / this.image.naturalWidth
      : 1;
    const scaleY = this.imageHeight
      ? this.imageHeight / this.image.naturalHeight
      : 1;

    // Reuse existing matrix or create once if it doesn't exist
    this.patternTransform ??= new DOMMatrix();

    // Reset to identity before applying new transforms
    this.patternTransform.a = 1;
    this.patternTransform.b = 0;
    this.patternTransform.c = 0;
    this.patternTransform.d = 1;
    this.patternTransform.e = 0;
    this.patternTransform.f = 0;

    // Apply new transform
    this.patternTransform.translateSelf(this.imageOffsetX, this.imageOffsetY);
    this.patternTransform.scaleSelf(scaleX, scaleY);

    this.pattern.setTransform(this.patternTransform);
  }

  /**
   * @function setImageOffset
   * @description Set the image's offset 
   * @param {number} [imageOffsetX] - image offset x
   * @param {number} [imageOffsetY] - image offset y
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
   * @throws {Error} If the imageOffsetY is not a number.
   */
  setImageOffset(imageOffsetX, imageOffsetY) {
    if (typeof imageOffsetX !== "number") {
      throw new Error("imageOffsetX must be a number");
    }
    if (typeof imageOffsetY !== "number") {
      throw new Error("imageOffsetY must be a number");
    }

    this.imageOffsetX = imageOffsetX;
    this.imageOffsetY = imageOffsetY;
    this.rebuildTransform();
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
    if (
      imageWidth !== null &&
      (typeof imageWidth !== "number" || imageWidth <= 0)
    ) {
      throw new Error("imageWidth must be a positive number or null");
    }
    if (
      imageHeight !== null &&
      (typeof imageHeight !== "number" || imageHeight <= 0)
    ) {
      throw new Error("imageHeight must be a positive number or null");
    }

    this.imageWidth = imageWidth;
    this.imageHeight = imageHeight;
    this.rebuildTransform();
  }

  /**
   * @function setImage
   * @description Loads and sets an image texture for this material.
   * @param {HTMLImageElement|string} image - An <img> element or a URL string
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"} [repeat="repeat"] - Pattern repeat mode
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   * @throws {Error} If the imageRepeat is not a string or valid type.
   */
  setImage(image, repeat = "repeat") {
    this.imageRepeat = repeat;

    if (typeof image !== "string" && !(image instanceof HTMLImageElement)) {
      throw new Error("image must be a string or HTMLImageElement");
    }
    if (typeof repeat !== "string" && !IMAGE_REPEAT_TYPES.includes(repeat)) {
      throw new Error(
        `repeat must be string with value: ${IMAGE_REPEAT_TYPES.join(", ")}`
      );
    }

    // Reset pattern
    this.pattern = null;

    if (typeof image === "string") {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        this.image = img;
      };
      this.image = img;
    } else if (image instanceof HTMLImageElement) {
      this.image = image;
    }
  }
}
