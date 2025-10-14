class o {
  /**
   * @constructor
   * @param {number} x - The x coordinate
   * @param {number} y - The y coordinate
   * @throws {Error} If x or y are not numbers.
   */
  constructor(t = 0, e = 0) {
    if (typeof t != "number" || typeof e != "number")
      throw new Error("x and y must be numbers");
    this.x = t, this.y = e;
  }
  /**
   * @function clone
   * @description Creates a copy of the vector
   * @returns {Vector2} A new Vector2 instance with the same x and y values
   */
  clone() {
    return new o(this.x, this.y);
  }
  /**
   * @function set
   * @description Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {void}
   * @throws {Error} If x or y is not a number
   */
  set(t, e) {
    if (typeof t != "number" || typeof e != "number")
      throw new Error("x and y must be numbers");
    this.x = t, this.y = e;
  }
  /**
   * @function translate
   * @description Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {void}
   * @throws {Error} If x or y is not a number
   */
  translate(t, e) {
    if (typeof t != "number" || typeof e != "number")
      throw new Error("dx and dy must be numbers");
    this.x += t, this.y += e;
  }
  /**
   * @function add
   * @description Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  add(t) {
    if (!(t instanceof o))
      throw new Error("v must be of type Vector2");
    this.x += t.x, this.y += t.y;
  }
  /**
   * @function subtract
   * @description Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  subtract(t) {
    if (!(t instanceof o))
      throw new Error("v must be of type Vector2");
    this.x -= t.x, this.y -= t.y;
  }
  /**
   * @function dot
   * @description Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number} The dot product
   * @throws {Error} If v is not of type Vector2
   */
  dot(t) {
    if (!(t instanceof o))
      throw new Error("v must be of type Vector2");
    return this.x * t.x + this.y * t.y;
  }
  /**
   * @function vectorTo
   * @description Computes the vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2} A new Vector2 representing the vector from this to v
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(t) {
    if (!(t instanceof o))
      throw new Error("v must be of type Vector2");
    return new o(t.x - this.x, t.y - this.y);
  }
  /**
   * @function multiplyScalar
   * @description Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {void}
   * @throws {Error} If s is not a number
   */
  multiplyScalar(t) {
    if (typeof t != "number")
      throw new Error("scalar must be a number");
    this.x *= t, this.y *= t;
  }
  /**
   * @function divideScalar
   * @description Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {void}
   * @throws {Error} If s is not a number
   * @throws {Error} If division by zero is attempted
   */
  divideScalar(t) {
    if (typeof t != "number")
      throw new Error("scalar must be a number");
    if (t === 0)
      throw new Error("Division by zero");
    this.x /= t, this.y /= t;
  }
  /**
   * @function length
   * @description Computes the length (magnitude) of the vector
   * @returns {number} The length of the vector
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * @function normalize
   * @description Normalizes the vector to have a length of 1
   * @returns {void}
   * @throws {Error} If attempting to normalize a zero-length vector
   */
  normalize() {
    const t = this.length();
    if (t === 0)
      throw new Error("Cannot normalize zero-length vector");
    this.divideScalar(t);
  }
}
class u {
  /**
   * @constructor
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(t = new o(), e = 0, r = new o(1, 1)) {
    if (!(t instanceof o))
      throw new Error("position must be of type Vector2");
    if (typeof e != "number")
      throw new Error("rotation must be a number");
    if (!(r instanceof o))
      throw new Error("scale must be of type Vector2");
    this.position = t, this.rotation = e, this.scale = r;
  }
}
class g {
  /**
   * Create a new Camera2D instance.
   * @constructor
   * @param {Object} [options] - Camera configuration options.
   * @param {number} [options.zoom=1] - Initial zoom level of the camera.
   */
  constructor(t = {
    zoom: 1
  }) {
    const { zoom: e } = t;
    if (typeof e != "number")
      throw new Error("options.zoom must be a number");
    this.zoom = e, this.transform = new u();
  }
  /**
   * @function apply
   * @description Applies the camera transformation to the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to apply the transformation to
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  apply(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    t.save(), t.scale(this.zoom, this.zoom), t.rotate(-this.transform.rotation), t.translate(-this.transform.position.x, -this.transform.position.y);
  }
  /**
   * @function restore
   * @description Restores the canvas context to its state before the camera transformation was applied
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to restore
   * @returns {void}
   */
  restore(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    t.restore();
  }
}
class b {
  /**
   * @constructor
   */
  constructor() {
    this.transform = new u(), this.zIndex = 0, this.visible = !0, this.scene = null, this.userData = {};
  }
  /**
   * @function setUserData
   * @description Sets the userData property reserved for custom user data
   * @param {object} userData - the userData object
   * @returns {void}
   */
  setUserData(t) {
    if (typeof t != "object")
      throw new Error("userData must be a object");
    this.userData = t;
  }
  /**
   * @function setVisible
   * @description Sets the visibility of the object
   * @param {boolean} visible - Whether the object should be visible
   * @returns {void}
   * @throws Will throw an error if visible is not a boolean
   */
  setVisible(t) {
    if (typeof t != "boolean")
      throw new Error("visible must be a boolean");
    this.visible = t;
  }
  /**
   * @function setZIndex
   * @description Sets the z-index of the object for rendering order
   * @param {number} zIndex - The z-index value
   * @returns {void}
   * @throws Will throw an error if zIndex is not a number
   */
  setZIndex(t) {
    if (typeof t != "number")
      throw new Error("zIndex must be a number");
    this.zIndex = t, this.scene && this.scene.sortChildrenByZIndex();
  }
  /**
   * @function onRender
   * @description Placeholder method to be overridden by subclasses for rendering
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   * @returns {void}
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D
   */
  onRender(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
  }
}
class E {
  constructor() {
    this.children = [];
  }
  /**
   * @function add
   * @description Adds a 2D object to the scene
   * @param {Object2D} child - The 2D object to add to the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  add(t) {
    if (!(t instanceof b))
      throw new Error("child must be of type Object2D");
    this.children.push(t), t.scene = this, this.sortChildrenByZIndex();
  }
  /**
   * @function remove
   * @description Removes a 2D object from the scene
   * @param {Object2D} child - The 2D object to remove from the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  remove(t) {
    if (!(t instanceof b))
      throw new Error("child must be of type Object2D");
    const e = this.children.indexOf(t);
    e !== -1 && (this.children.splice(e, 1), t.scene = null, this.sortChildrenByZIndex());
  }
  /**
   * @function sortChildrenByZIndex
   * @description Sorts the children based on their zIndex property
   * @returns {void}
   */
  sortChildrenByZIndex() {
    this.children.sort((t, e) => t.zIndex - e.zIndex);
  }
  /**
   * @function render
   * @description Renders all 2D objects in the scene onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to render the scene onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  render(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    this.children.forEach((e) => {
      e.visible && e.onRender(t);
    });
  }
}
class h {
  /**
   * @constructor
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(t) {
    if (typeof t != "string")
      throw new Error("colorStr must be a string");
    this.colorStr = t;
  }
  /**
   * @function toString
   * @description Returns the colorStr property
   * @returns {string}
   */
  toString() {
    return this.colorStr;
  }
}
class x {
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
  constructor(t, e, r, n = {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    backgroundColor: "transparent"
  }) {
    const { width: i, height: a, devicePixelRatio: f, backgroundColor: l } = n;
    if (!(t instanceof HTMLCanvasElement))
      throw new Error("canvas must be of type HTMLCanvasElement");
    if (!(e instanceof E))
      throw new Error("scene must be of type Scene");
    if (!(r instanceof g))
      throw new Error("camera must be of type Camera");
    if (typeof i != "number" || typeof a != "number")
      throw new Error("width and height must be numbers");
    if (typeof f != "number")
      throw new Error("devicePixelRatio must be a number");
    if (typeof l != "string" && !(l instanceof h))
      throw new Error("backgroundColor must be of type Color or string");
    this.canvas = t, this.ctx = t.getContext("2d"), this.scene = e, this.camera = r, this.options = n, this.recalculateDevicePixelRatio();
  }
  /**
   * @function setBackgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   */
  setBackgroundColor(t) {
    if (typeof t != "string" && !(t instanceof h))
      throw new Error("backgroundColor must be of type Color or string");
    this.options.backgroundColor = t;
  }
  /**
   * @function setSize
   * @description Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width or height is not a number
   */
  setSize(t, e) {
    if (typeof t != "number" || typeof e != "number")
      throw new Error("width and height must be numbers");
    this.options.width = t, this.options.height = e, this.recalculateDevicePixelRatio();
  }
  /**
   * @function setDevicePixelRatio
   * @description Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   */
  setDevicePixelRatio(t) {
    if (typeof t != "number")
      throw new Error("dpr must be a number");
    this.options.devicePixelRatio = t, this.recalculateDevicePixelRatio();
  }
  /**
   * @function recalculateDevicePixelRatio
   * @description Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const t = this.options.devicePixelRatio || 1, e = this.options.width * t, r = this.options.height * t;
    this.canvas.width = e, this.canvas.height = r, this.ctx.scale(t, t);
  }
  /**
   * @function render
   * @description Renders the scene onto the canvas using the camera
   * @returns {void}
   */
  render() {
    const t = this.ctx;
    t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.fillStyle = this.options.backgroundColor instanceof h ? this.options.backgroundColor.toString() : this.options.backgroundColor, t.fillRect(0, 0, this.canvas.width, this.canvas.height), this.camera.apply(t), this.scene.render(t), this.camera.restore(t);
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
  requestAnimationFrame(t = {
    beforeRender: null,
    afterRender: null
  }) {
    const { beforeRender: e, afterRender: r } = t;
    if (e && typeof e != "function")
      throw new Error("beforeRender must be a function");
    if (r && typeof r != "function")
      throw new Error("afterRender must be a function");
    function n() {
      e && e(), this.render(), r && r(), window.requestAnimationFrame(n.bind(this));
    }
    window.requestAnimationFrame(n.bind(this));
  }
}
const w = ["repeat", "repeat-x", "repeat-y", "no-repeat"];
class C {
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
  constructor(t = {
    image: null,
    imageRepeat: "repeat",
    imageOffsetX: 0,
    imageOffsetY: 0,
    imageWidth: null,
    imageHeight: null
  }) {
    const {
      image: e = null,
      imageRepeat: r = "repeat",
      imageOffsetX: n = 0,
      imageOffsetY: i = 0,
      imageWidth: a = null,
      imageHeight: f = null
    } = t;
    if (typeof e != "string" && !(e instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (typeof r != "string" && !w.includes(r))
      throw new Error(
        `imageRepeat must be string with value: ${w.join(
          ", "
        )}`
      );
    this.image = null, this.imageRepeat = r, this.pattern = null, this.patternTransform = null, this.setImageOffset(n, i), this.setImageSize(a, f), e && this.setImage(e, r);
  }
  /**
   * @function createPattern
   * @description Create the pattern based on the image and configuration
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {CanvasPattern|null}
   * @throws {Error} If the ctx is not of type CanvasRenderingContext2D.
   */
  createPattern(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    return !this.image || !this.image.complete ? null : this.pattern ? this.pattern : (this.pattern = t.createPattern(this.image, this.imageRepeat), this.rebuildTransform(), this.pattern);
  }
  /**
   * @function rebuildTransform
   * @description Position and scale the pattern's transform
   * @returns {void}
   */
  rebuildTransform() {
    if (!this.pattern) return;
    const t = this.imageWidth ? this.imageWidth / this.image.naturalWidth : 1, e = this.imageHeight ? this.imageHeight / this.image.naturalHeight : 1;
    this.patternTransform ?? (this.patternTransform = new DOMMatrix()), this.patternTransform.a = 1, this.patternTransform.b = 0, this.patternTransform.c = 0, this.patternTransform.d = 1, this.patternTransform.e = 0, this.patternTransform.f = 0, this.patternTransform.translateSelf(this.imageOffsetX, this.imageOffsetY), this.patternTransform.scaleSelf(t, e), this.pattern.setTransform(this.patternTransform);
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
  setImageOffset(t, e) {
    if (typeof t != "number")
      throw new Error("imageOffsetX must be a number");
    if (typeof e != "number")
      throw new Error("imageOffsetY must be a number");
    this.imageOffsetX = t, this.imageOffsetY = e, this.rebuildTransform();
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
  setImageSize(t, e) {
    if (t !== null && (typeof t != "number" || t <= 0))
      throw new Error("imageWidth must be a positive number or null");
    if (e !== null && (typeof e != "number" || e <= 0))
      throw new Error("imageHeight must be a positive number or null");
    this.imageWidth = t, this.imageHeight = e, this.rebuildTransform();
  }
  /**
   * @function setImage
   * @description Loads and sets an image.
   * @param {HTMLImageElement|string} image - An <img> element or a URL string
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"} [repeat="repeat"] - Pattern repeat mode
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   * @throws {Error} If the imageRepeat is not a string or valid type.
   */
  setImage(t, e = "repeat") {
    if (this.imageRepeat = e, typeof t != "string" && !(t instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (typeof e != "string" && !w.includes(e))
      throw new Error(
        `repeat must be string with value: ${w.join(", ")}`
      );
    if (this.pattern = null, typeof t == "string") {
      const r = new Image();
      r.src = t, r.onload = () => {
        this.image = r;
      }, this.image = r;
    } else t instanceof HTMLImageElement && (this.image = t);
  }
}
class S {
  /**
   * @constructor
   */
  constructor() {
    this.startTime = performance.now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.deltaTime = 0, this.lastFrame = 0;
  }
  /**
   * @function _updateTime
   * @description Update the internal time values
   * @returns {void}
   */
  _updateTime() {
    const t = performance.now();
    if (t !== this.lastFrame) {
      const e = t;
      this.deltaTime = (e - this.oldTime) / 1e3, this.elapsedTime = (e - this.startTime) / 1e3, this.oldTime = e, this.lastFrame = t;
    }
  }
  /**
   * @function getElapsedTime
   * @description Get the time elapsed (in seconds) since instantiation
   * @returns {number}
   */
  getElapsedTime() {
    return this._updateTime(), this.elapsedTime;
  }
  /**
   * @function getDeltaTime
   * @description Returns the time elapsed (in seconds) since the last frame or call.
   * @returns {number}
   */
  getDeltaTime() {
    return this._updateTime(), this.deltaTime;
  }
}
class m {
  /**
   * @function apply
   * @description Apply the draw style to the given ctx
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   * @throws {Error} If not implemented in subclass
   */
  apply(t) {
    throw t instanceof CanvasRenderingContext2D ? new Error("apply method must be implemented in subclass") : new Error("ctx must be of type CanvasRenderingContext2D");
  }
}
class R extends m {
  /**
   * @constructor
   * @param {Object} [options] - Material configuration options.
   * @param {string|Color|null} [options.fillStyle=null] - Initial fill style
   * @param {string|Color|null} [options.strokeStyle=null] - Initial stroke style
   * @param {number|null} [options.lineWidth=null] - Initial line width
   * @param {Texture2D|null} [options.texture2D=null] - Image texture
   * @throws {Error} If the fillStyle is not null or a string.
   * @throws {Error} If the strokeStyle is not null or a string.
   * @throws {Error} If the lineWidth is not null or a number.
   * @throws {Error} If the texture2D is not null or a Texture2D.
   */
  constructor(t = {
    fillStyle: null,
    strokeStyle: null,
    lineWidth: null,
    texture2D: null
  }) {
    super();
    const {
      fillStyle: e = null,
      strokeStyle: r = null,
      lineWidth: n = null,
      texture2D: i = null
    } = t;
    if (e !== null && typeof e != "string" && !(e instanceof h))
      throw new Error("fillStyle must be a Color, string or null");
    if (r !== null && typeof r != "string" && !(r instanceof h))
      throw new Error("strokeStyle must be a Color, string or null");
    if (n !== null && (typeof n != "number" || n <= 0))
      throw new Error("lineWidth must be a positive number or null");
    if (i !== null && !(i instanceof C))
      throw new Error("texture2D must be of type Texture2D or null");
    this.fillStyle = e, this.strokeStyle = r, this.lineWidth = n, this.texture2D = i;
  }
  /**
   * @function apply
   * @description Apply the draw style to the given ctx
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  apply(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    this.texture2D ? t.fillStyle = this.texture2D.createPattern(t) : this.fillStyle && (t.fillStyle = this.fillStyle instanceof h ? this.fillStyle.toString() : this.fillStyle), this.strokeStyle && (t.strokeStyle = this.strokeStyle instanceof h ? this.strokeStyle.toString() : this.strokeStyle), this.lineWidth && (t.lineWidth = this.lineWidth);
  }
}
class p {
  /**
   * @function draw
   * @description Draws the geometry onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the geometry
   * @param {Material} material - The material to use for rendering the geometry
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   * @throws {Error} If material is not of type Material
   * @throws {Error} If transform is not of type Transform
   * @throws {Error} If not implemented in subclass
   */
  draw(t, e, r) {
    throw t instanceof CanvasRenderingContext2D ? r instanceof m ? e instanceof u ? new Error("draw method must be implemented in subclass") : new Error("transform must be of type Transform") : new Error("material must be of type Material") : new Error("ctx must be of type CanvasRenderingContext2D");
  }
}
class v extends p {
  /**
   * @constructor
   * @param {number} width - The width of the rectangle (must be positive).
   * @param {number} height - The height of the rectangle (must be positive).
   * @throws {Error} If the width is not a positive number.
   * @throws {Error} If the height is not a positive number.
   */
  constructor(t, e) {
    if (super(), typeof t != "number" || t <= 0)
      throw new Error("width must be a positive number");
    if (typeof e != "number" || e <= 0)
      throw new Error("height must be a positive number");
    this.width = t, this.height = e;
  }
  /**
   * @function draw
   * @description Draws the rectangle onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  draw(t, e, r) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    if (!(r instanceof m))
      throw new Error("material must be of type Material");
    if (!(e instanceof u))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: i } = e, { x: a, y: f } = n, l = this.width * i.x, c = this.height * i.y, d = l / 2, y = c / 2;
    t.save(), t.translate(a + d, f + y), t.rotate(e.rotation), t.translate(-d, -y), r.fillStyle && t.fillRect(0, 0, l, c), r.strokeStyle && t.strokeRect(0, 0, l, c), t.restore();
  }
}
class T extends p {
  /**
   * @constructor
   * @param {number} radius - The radius of the circle (must be positive).
   * @throws {Error} If the radius is not a positive number.
   */
  constructor(t) {
    if (super(), typeof t != "number" || t <= 0)
      throw new Error("radius must be a positive number");
    this.radius = t;
  }
  /**
   * @function draw
   * @description Draws the circle onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   * @throws {Error} if ctx is not of type CanvasRenderingContext2D
   * @throws {Error} if material is not of type Material
   * @throws {Error} if transform is not of type Transform
   */
  draw(t, e, r) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    if (!(r instanceof m))
      throw new Error("material must be of type Material");
    if (!(e instanceof u))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: i } = e, { x: a, y: f } = n, l = this.radius * ((i.x + i.y) / 2);
    t.save(), t.translate(a, f), t.rotate(e.rotation), t.beginPath(), t.arc(0, 0, l, 0, Math.PI * 2), t.closePath(), r.fillStyle && t.fill(), r.strokeStyle && t.stroke(), t.restore();
  }
}
class D extends b {
  /**
   * @constructor
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(t, e) {
    if (super(), !(t instanceof p))
      throw new Error("geometry must be of type Geometry");
    if (!(e instanceof m))
      throw new Error("material must be of type Material");
    this.geometry = t, this.material = e;
  }
  /**
   * @function onRender
   * @description Draws the mesh onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   */
  onRender(t) {
    super.onRender(t), this.material.apply(t), this.geometry.draw(t, this.transform, this.material);
  }
}
class $ extends b {
  /**
   * @constructor
   * @param {number} radius - The radius of the light
   * @param {number} intensity - The intensity of the light
   * @param {string} color - The color of the light
   * @param {string} colorStop - The colorStop of the light
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a string.
   * @throws {Error} If the colorStop is not a string.
   */
  constructor(t = 100, e = 1, r = "rgba(255,255,200,1)", n = "rgba(255, 255, 200, 0.0)") {
    if (super(), typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    if (typeof e != "number" || t < 0)
      throw new Error("intensity must be a positive number");
    if (typeof r != "string")
      throw new Error("color must be a string");
    if (typeof n != "string")
      throw new Error("colorStop must be a string");
    this.radius = t, this.intensity = e, this.color = r, this.colorStop = n, this.zIndex = 1;
  }
  /**
   * @function onRender
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D.
   */
  onRender(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    const { x: e, y: r } = this.transform.position, n = t.createRadialGradient(e, r, 0, e, r, this.radius);
    n.addColorStop(0, this.color), n.addColorStop(1, this.colorStop), t.save(), t.globalAlpha = this.intensity, t.fillStyle = n, t.fillRect(e - this.radius, r - this.radius, this.radius * 2, this.radius * 2), t.restore();
  }
}
class I extends h {
  /**
   * @constructor
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, e, r, n = 1) {
    super(`rgba(${t}, ${e}, ${r}, ${n})`), this.set(t, e, r, n);
  }
  /**
   * @function set
   * @description Set the rgba color
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  set(t, e, r, n) {
    if ([t, e, r].forEach((i, a) => {
      if (typeof i != "number" || i < 0 || i > 255)
        throw new Error(["r", "g", "b"][a] + " must be a number between 0 and 255");
    }), typeof n != "number" || n < 0 || n > 1)
      throw new Error("a must be a number between 0 and 1");
    this.r = t, this.g = e, this.b = r, this.a = n, this.updateColorStr();
  }
  /**
   * @function updateColorStr
   * @description update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  /**
   * @function setRed
   * @description Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   */
  setRed(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("r must be a number between 0 and 255");
    this.r = t, this.updateColorStr();
  }
  /**
   * @function setGreen
   * @description Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   */
  setGreen(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("g must be a number between 0 and 255");
    this.g = t, this.updateColorStr();
  }
  /**
   * @function setBlue
   * @description Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   */
  setBlue(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("b must be a number between 0 and 255");
    this.b = t, this.updateColorStr();
  }
  /**
   * @function setAlpha
   * @description Set the alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  setAlpha(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("alpha must be a number between 0 and 1");
    this.a = t, this.updateColorStr();
  }
  /**
   * @function toRgbaString
   * @description Returns a string representation of the color in rgba format
   * @returns {string}
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  /**
   * @function toRgbString
   * @description Returns a string representation of the color in rgb format
   * @returns {string}
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
class k extends h {
  /**
   * @constructor
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, e, r, n = 1) {
    super(`hsla(${t}, ${e}%, ${r}%, ${n})`), this.set(t, e, r, n);
  }
  /**
   * @function set
   * @description Set the hsla color
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  set(t, e, r, n = 1) {
    if (typeof t != "number" || t < 0 || t > 360)
      throw new Error("h must be a number between 0 and 360");
    if (typeof e != "number" || e < 0 || e > 100)
      throw new Error("s must be a number between 0 and 100");
    if (typeof r != "number" || r < 0 || r > 100)
      throw new Error("l must be a number between 0 and 100");
    if (typeof n != "number" || n < 0 || n > 1)
      throw new Error("a must be a number between 0 and 1");
    this.h = t, this.s = e, this.l = r, this.a = n, this.updateColorStr();
  }
  /**
   * @function updateColorStr
   * @description update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }
  /**
   * @function setHue
   * @description Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   */
  setHue(t) {
    if (typeof t != "number" || t < 0 || t > 360)
      throw new Error("h must be a number between 0 and 360");
    this.h = t, this.updateColorStr();
  }
  /**
   * @function setSaturation
   * @description Set saturation
   * @param {number} s - saturation (0-100)
   * @returns {void}
   * @throws {Error} if s is not between 0 and 100
   */
  setSaturation(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("s must be a number between 0 and 100");
    this.s = t, this.updateColorStr();
  }
  /**
   * @function setLightness
   * @description Set saturation
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   */
  setLightness(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("l must be a number between 0 and 100");
    this.l = t, this.updateColorStr();
  }
  /**
   * @function setAlpha
   * @description Set the alpha value
   * @param {number} alpha - alpha (0-1)
   * @returns {void}
   * @throws {Error} if alpha is not between 0 and 1
   */
  setAlpha(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("alpha must be a number between 0 and 1");
    this.a = t, this.updateColorStr();
  }
  /**
   * @function toHslaString
   * @description Returns a string representation of the color in hsla format
   * @returns {string}
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }
  /**
   * @function toHslString
   * @description Returns a string representation of the color in hsl format
   * @returns {string}
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
export {
  R as BasicMaterial,
  g as Camera2D,
  T as CircleGeometry,
  S as Clock,
  h as Color,
  p as Geometry,
  k as HslaColor,
  m as Material,
  D as Mesh,
  b as Object2D,
  $ as PointLight2D,
  v as RectGeometry,
  x as Render2D,
  I as RgbaColor,
  E as Scene,
  C as Texture2D,
  u as Transform,
  o as Vector2
};
