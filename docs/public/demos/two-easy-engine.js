class u {
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
    return new u(this.x, this.y);
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
    return this.x = t, this.y = e, this;
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
    return this.x += t, this.y += e, this;
  }
  /**
   * @function add
   * @description Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  add(t) {
    if (!(t instanceof u))
      throw new Error("v must be of type Vector2");
    return this.x += t.x, this.y += t.y, this;
  }
  /**
   * @function subtract
   * @description Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  subtract(t) {
    if (!(t instanceof u))
      throw new Error("v must be of type Vector2");
    return this.x -= t.x, this.y -= t.y, this;
  }
  /**
   * @function dot
   * @description Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number} The dot product
   * @throws {Error} If v is not of type Vector2
   */
  dot(t) {
    if (!(t instanceof u))
      throw new Error("v must be of type Vector2");
    return this.x * t.x + this.y * t.y;
  }
  /**
   * @function vectorTo
   * @description Computes a new vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2} A new Vector2 representing the vector from this to v
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(t) {
    if (!(t instanceof u))
      throw new Error("v must be of type Vector2");
    return new u(t.x - this.x, t.y - this.y);
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
    return this.x *= t, this.y *= t, this;
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
    return this.x /= t, this.y /= t, this;
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
   * @function lengthSquared
   * @description Computes the squared length of the vector.
   * @returns {number} The squared length of the vector
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
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
    return this.divideScalar(t), this;
  }
}
class c {
  /**
   * @constructor
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(t = new u(), e = 0, r = new u(1, 1)) {
    if (!(t instanceof u))
      throw new Error("position must be of type Vector2");
    if (typeof e != "number")
      throw new Error("rotation must be a number");
    if (!(r instanceof u))
      throw new Error("scale must be of type Vector2");
    this.position = t, this.rotation = e, this.scale = r;
  }
}
class D {
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
    this.zoom = e, this.transform = new c();
  }
}
const h = [];
for (let i = 0; i < 256; ++i)
  h.push((i + 256).toString(16).slice(1));
function R(i, t = 0) {
  return (h[i[t + 0]] + h[i[t + 1]] + h[i[t + 2]] + h[i[t + 3]] + "-" + h[i[t + 4]] + h[i[t + 5]] + "-" + h[i[t + 6]] + h[i[t + 7]] + "-" + h[i[t + 8]] + h[i[t + 9]] + "-" + h[i[t + 10]] + h[i[t + 11]] + h[i[t + 12]] + h[i[t + 13]] + h[i[t + 14]] + h[i[t + 15]]).toLowerCase();
}
let y;
const I = new Uint8Array(16);
function $() {
  if (!y) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    y = crypto.getRandomValues.bind(crypto);
  }
  return y(I);
}
const P = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), x = { randomUUID: P };
function k(i, t, e) {
  var n;
  i = i || {};
  const r = i.random ?? ((n = i.rng) == null ? void 0 : n.call(i)) ?? $();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, R(r);
}
function A(i, t, e) {
  return x.randomUUID && !i ? x.randomUUID() : k(i);
}
class p {
  /**
   * @constructor
   */
  constructor() {
    this.transform = new c(), this.uuid = A(), this.zIndex = 0, this.visible = !0, this.scene = null, this.userData = {};
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
   * @function draw
   * @description Renders the light effect on the given 2D rendering context.
   * @param {Renderer} renderer - The selected renderer
   * @returns {void}
   * @throws Will throw an error if the renderer.context is not supported
   */
  draw(t) {
    if (t.context === "2d")
      this.drawContext2D(t.ctx);
    else
      throw new Error(`rendering context not supported: ${t.context}`);
  }
  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D() {
    throw new Error("drawContext2D must be implemented in the subclass");
  }
}
class M {
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
    if (!(t instanceof p))
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
    if (!(t instanceof p))
      throw new Error("child must be of type Object2D");
    const e = this.children.findIndex((r) => r.uuid === t.uuid);
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
}
class m {
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
class W {
  /**
   * @constructor
   * @param {string} context - The canvas rendering context
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
  constructor(t, e, r, n, o = {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    backgroundColor: "transparent"
  }) {
    const { width: s, height: a, devicePixelRatio: l, backgroundColor: f } = o;
    if (typeof t != "string")
      throw new Error("context must be a string");
    if (!(r instanceof M))
      throw new Error("scene must be of type Scene");
    if (!(n instanceof D))
      throw new Error("camera must be of type Camera2D");
    if (typeof s != "number" || typeof a != "number")
      throw new Error("width and height must be numbers");
    if (typeof l != "number")
      throw new Error("devicePixelRatio must be a number");
    if (typeof f != "string" && !(f instanceof m))
      throw new Error("backgroundColor must be of type Color or string");
    this.context = t, this.canvas = e, this.scene = r, this.camera = n, this.options = o, this.animationFrameId = null, this.initContext();
  }
  /**
   * @function setBackgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   */
  setBackgroundColor(t) {
    if (typeof t != "string" && !(t instanceof m))
      throw new Error("backgroundColor must be of type Color or string");
    this.options.backgroundColor = t, this.worker && this.worker.postMessage({ cmd: "update_options", options: this.options });
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
   * @function initContext
   * @description Init the rendering context
   */
  initContext() {
    throw new Error(
      "initContext() is not implemented in the subclass"
    );
  }
  /**
   * @function recalculateDevicePixelRatio
   * @description Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    throw new Error(
      "recalculateDevicePixelRatio() is not implemented in the subclass"
    );
  }
  /**
   * @function render
   * @description Trigger a new render
   * @returns {void}
   */
  render() {
    throw new Error(
      "render() is not implemented in the subclass"
    );
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
      e && e(), this.render(), r && r(), requestAnimationFrame(n.bind(this));
    }
    this.animationFrameId = requestAnimationFrame(n.bind(this));
  }
  /**
   * @function cancelAnimationFrame
   * @description A helper method that cancel the loop create from renderer.requestAnimationFrame
   * @returns {void}
   */
  cancelAnimationFrame() {
    this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null);
  }
}
class H extends W {
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
    super("2d", t, e, r, n);
  }
  /**
   * @function initContext
   * @description Init the rendering context
   */
  initContext() {
    this.ctx = this.canvas.getContext("2d"), this.recalculateDevicePixelRatio();
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
   * @description Trigger a new render
   * @returns {void}
   */
  render() {
    const t = this.ctx, e = this.options.backgroundColor instanceof m ? this.options.backgroundColor.toString() : this.options.backgroundColor;
    t.clearRect(0, 0, this.canvas.width, this.canvas.height), t.fillStyle = e, t.fillRect(0, 0, this.canvas.width, this.canvas.height), t.save(), t.scale(this.camera.zoom, this.camera.zoom), t.rotate(-this.camera.transform.rotation), t.translate(
      -this.camera.transform.position.x,
      -this.camera.transform.position.y
    ), this.scene.children.forEach((r) => {
      r.visible && r.draw(this);
    }), t.restore();
  }
}
const b = ["repeat", "repeat-x", "repeat-y", "no-repeat"];
class z {
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
      imageOffsetY: o = 0,
      imageWidth: s = null,
      imageHeight: a = null
    } = t;
    if (typeof e != "string" && !(e instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (typeof r != "string" && !b.includes(r))
      throw new Error(
        `imageRepeat must be string with value: ${b.join(
          ", "
        )}`
      );
    this.image = null, this.imageRepeat = r, this.pattern = null, this.patternTransform = null, this.setImageOffset(n, o), this.setImageSize(s, a), e && this.setImage(e, r);
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
    if (typeof e != "string" && !b.includes(e))
      throw new Error(
        `repeat must be string with value: ${b.join(", ")}`
      );
    if (this.pattern = null, typeof t == "string") {
      const r = new Image();
      r.src = t, r.onload = () => {
        this.image = r;
      }, this.image = r;
    } else t instanceof HTMLImageElement && (this.image = t);
  }
}
class O {
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
class w {
  /**
   * @constructor
   */
  constructor() {
  }
  /**
   * @function applyToContext2D
   * @description Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D() {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
class B extends w {
  /**
   * @constructor
   * @param {Object} [options] - Material configuration options.
   * @param {Color|null} [options.fillStyle=null] - Initial fill style
   * @param {Color|null} [options.strokeStyle=null] - Initial stroke style
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
      texture2D: o = null
    } = t;
    if (e !== null && !(e instanceof m))
      throw new Error("fillStyle must be a Color or null");
    if (r !== null && !(r instanceof m))
      throw new Error("strokeStyle must be a Color or null");
    if (n !== null && (typeof n != "number" || n <= 0))
      throw new Error("lineWidth must be a positive number or null");
    if (o !== null && !(o instanceof z))
      throw new Error("texture2D must be of type Texture2D or null");
    this.fillStyle = e, this.strokeStyle = r, this.lineWidth = n, this.texture2D = o;
  }
  /**
   * @function applyToContext2D
   * @description Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D(t) {
    this.texture2D ? t.fillStyle = this.texture2D.createPattern(t) : this.fillStyle && (t.fillStyle = this.fillStyle.toString()), this.strokeStyle && (t.strokeStyle = this.strokeStyle.toString()), this.lineWidth && (t.lineWidth = this.lineWidth);
  }
}
class d {
  /**
   * @constructor
   */
  constructor() {
  }
  /**
   * @function drawContext2D
   * @description Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D() {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
class F extends d {
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
   * @function drawContext2D
   * @description Draws the rectangle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D(t, e, r) {
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(e instanceof c))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: o } = e, { x: s, y: a } = n, l = this.width * o.x, f = this.height * o.y, g = l / 2, E = f / 2;
    t.save(), t.translate(s + g, a + E), t.rotate(e.rotation), t.translate(-g, -E), r.fillStyle && t.fillRect(0, 0, l, f), r.strokeStyle && t.strokeRect(0, 0, l, f), t.restore();
  }
}
class U extends d {
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
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   * @throws {Error} if material is not of type Material
   * @throws {Error} if transform is not of type Transform
   */
  drawContext2D(t, e, r) {
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(e instanceof c))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: o } = e, { x: s, y: a } = n, l = this.radius * ((o.x + o.y) / 2);
    t.save(), t.translate(s, a), t.rotate(e.rotation), t.beginPath(), t.arc(0, 0, l, 0, Math.PI * 2), t.closePath(), r.fillStyle && t.fill(), r.strokeStyle && t.stroke(), t.restore();
  }
}
const S = ["start", "end", "left", "right", "center"], C = [
  "top",
  "hanging",
  "middle",
  "alphabetic",
  "ideographic",
  "bottom"
], T = ["ltr", "rtl", "inherit"];
class j extends d {
  /**
   * @constructor
   * @param {string} text - The text content to generate geometry for.
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font=null] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null} [options.textAlign=null] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [options.textBaseline=null] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null} [options.direction=null] - The direction of the text content.
   * @throws {Error} If text is not a string.
   * @throws {Error} If maxWidth is not a positive number.
   * @throws {Error} If font is not a string.
   * @throws {Error} If textAlign is not a valid alignment keyword.
   * @throws {Error} If textBaseline is not a valid baseline keyword.
   * @throws {Error} If direction is not a valid direction keyword.
   */
  constructor(t, e = {
    maxWidth: null,
    font: null,
    textAlign: null,
    textBaseline: null,
    direction: null
  }) {
    super();
    const {
      maxWidth: r = null,
      font: n = null,
      textAlign: o = null,
      textBaseline: s = null,
      direction: a = null
    } = e;
    if (typeof t != "string")
      throw new Error("text must be a string");
    if (r !== null && typeof r != "number")
      throw new Error("maxWidth must be a number or null");
    if (n !== null && typeof n != "string")
      throw new Error("font must be a string or null");
    if (o !== null && typeof o != "string" && !S.includes(o))
      throw new Error(
        `textAlign must be a string with value: ${S.join(
          ", "
        )}`
      );
    if (s !== null && typeof s != "string" && !C.includes(s))
      throw new Error(
        `textBaseline must be a string with value: ${C.join(
          ", "
        )}`
      );
    if (a !== null && typeof a != "string" && !T.includes(a))
      throw new Error(
        `direction must be a string with value: ${T.join(
          ", "
        )}`
      );
    this.text = t, this.options = e;
  }
  /**
   * @function drawContext2D
   * @description Draws the text onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the text
   * @param {Material} material - The material to use for rendering the text
   * @returns {void}
   */
  drawContext2D(t, e, r) {
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(e instanceof c))
      throw new Error("transform must be of type Transform");
    t.save(), t.translate(e.position.x, e.position.y), t.rotate(e.rotation), this.options.font && (t.font = this.options.font), this.options.textAlign && (t.textAlign = this.options.textAlign), this.options.textBaseline && (t.textBaseline = this.options.textBaseline), this.options.direction && (t.direction = this.options.direction), r.fillStyle && t.fillText(this.text, 0, 0, this.options.maxWidth), r.strokeStyle && t.strokeText(this.text, 0, 0, this.options.maxWidth), t.restore();
  }
}
class L extends d {
  /**
   * @constructor
   * @param {Array.<[number, number, number, number]>} points - Array of 4-number arrays describing points/segments. Requires at least two entries.
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  constructor(t) {
    if (super(), !Array.isArray(t))
      throw new Error("points must be an array of 4-number arrays");
    if (t.length < 1)
      throw new Error("points must contain at least one 4-number arrays");
    if (t.some((e) => e.length !== 4))
      throw new Error("an array in points doesn't have a length of four");
    this.points = t;
  }
  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   * @throws {Error} if material is not of type Material
   * @throws {Error} if transform is not of type Transform
   */
  drawContext2D(t, e, r) {
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(e instanceof c))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: o } = e, { x: s, y: a } = n;
    t.save(), t.translate(s, a), t.rotate(e.rotation), t.beginPath(), this.points.forEach((l) => {
      t.moveTo(l[0] * o.x, l[1] * o.y), t.lineTo(l[2] * o.x, l[3] * o.y);
    }), r.strokeStyle && t.stroke(), t.closePath(), t.restore();
  }
}
class G extends p {
  /**
   * @constructor
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(t, e) {
    if (super("Mesh"), !(t instanceof d))
      throw new Error("geometry must be of type Geometry");
    if (!(e instanceof w))
      throw new Error("material must be of type Material");
    this.geometry = t, this.material = e;
  }
  /**
   * @function drawContext2D
   * @description Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  drawContext2D(t) {
    this.material.applyToContext2D(t), this.geometry.drawContext2D(t, this.transform, this.material);
  }
}
class v extends m {
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
    if ([t, e, r].forEach((o, s) => {
      if (typeof o != "number" || o < 0 || o > 255)
        throw new Error(["r", "g", "b"][s] + " must be a number between 0 and 255");
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
class Y extends p {
  /**
   * @constructor
   * @param {number} radius - The radius of the light
   * @param {number} intensity - The intensity of the light
   * @param {Color} color - The color of the light
   * @param {Color} colorStop - The colorStop of the light
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a Color.
   * @throws {Error} If the colorStop is not a Color.
   */
  constructor(t = 100, e = 1, r = new v(255, 255, 200, 1), n = new v(255, 255, 200, 0)) {
    if (super(), typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    if (typeof e != "number" || t < 0)
      throw new Error("intensity must be a positive number");
    if (!(r instanceof m))
      throw new Error("color must be a Color");
    if (!(n instanceof m))
      throw new Error("colorStop must be a Color");
    this.radius = t, this.intensity = e, this.color = r, this.colorStop = n, this.zIndex = 1;
  }
  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  drawContext2D(t) {
    if (!(t instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    const { radius: e, color: r, colorStop: n, intensity: o } = this, { x: s, y: a } = this.transform.position, l = t.createRadialGradient(s, a, 0, s, a, e);
    l.addColorStop(0, r.toString()), l.addColorStop(1, n.toString()), t.save(), t.globalAlpha = o, t.fillStyle = l, t.fillRect(s - e, a - e, e * 2, e * 2), t.restore();
  }
}
class X extends m {
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
  B as BasicMaterial,
  D as Camera2D,
  U as CircleGeometry,
  O as Clock,
  m as Color,
  d as Geometry,
  X as HslaColor,
  L as LineGeometry,
  w as Material,
  G as Mesh,
  p as Object2D,
  Y as PointLight2D,
  F as RectGeometry,
  W as Renderer,
  H as Renderer2D,
  v as RgbaColor,
  M as Scene,
  j as TextGeometry,
  z as Texture2D,
  c as Transform,
  u as Vector2
};
