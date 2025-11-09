var me = Object.defineProperty;
var se = (o) => {
  throw TypeError(o);
};
var de = (o, e, t) => e in o ? me(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var S = (o, e, t) => de(o, typeof e != "symbol" ? e + "" : e, t), Qt = (o, e, t) => e.has(o) || se("Cannot " + t);
var r = (o, e, t) => (Qt(o, e, "read from private field"), t ? t.call(o) : e.get(o)), n = (o, e, t) => e.has(o) ? se("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(o) : e.set(o, t), s = (o, e, t, i) => (Qt(o, e, "write to private field"), i ? i.call(o, t) : e.set(o, t), t), p = (o, e, t) => (Qt(o, e, "access private method"), t);
var mt, dt;
const x = class x {
  /**
   * @constructor
   * @param {number} x - The x coordinate
   * @param {number} y - The y coordinate
   * @throws {Error} If x or y are not numbers.
   */
  constructor(e = 0, t = 0) {
    /**
     * @private
     * @property {number} #x - the x coordinate.
     */
    n(this, mt);
    /**
     * @private
     * @property {number} #y - the y coordinate.
     */
    n(this, dt);
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    this.x = e, this.y = t;
  }
  /**
   * @function get x
   * @description Get the x coordinate
   * @returns {Vector2} the x coordinate
   */
  get x() {
    return r(this, mt);
  }
  /**
   * @function set x
   * @description Sets the x coordinate
   * @param {number} x - The new value
   * @returns {void}
   * @throws {Error} If the x is not a number.
   */
  set x(e) {
    if (typeof e != "number")
      throw new Error("x must be a number");
    s(this, mt, e);
  }
  /**
   * @function get y
   * @description Get the y coordinate
   * @returns {Vector2} the y coordinate
   */
  get y() {
    return r(this, dt);
  }
  /**
   * @function set y
   * @description Sets the y coordinate
   * @param {number} y - The new value
   * @returns {void}
   * @throws {Error} If the y is not a number.
   */
  set y(e) {
    if (typeof e != "number")
      throw new Error("y must be a number");
    s(this, dt, e);
  }
  /**
   * @function clone
   * @description Creates a copy of the vector
   * @returns {Vector2} A new Vector2 instance with the same x and y values
   */
  clone() {
    return new x(this.x, this.y);
  }
  /**
   * @function set
   * @description Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {Vector2} This vector
   * @throws {Error} If x or y is not a number
   */
  set(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    return this.x = e, this.y = t, this;
  }
  /**
   * @function translate
   * @description Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {Vector2} This vector
   * @throws {Error} If x or y is not a number
   */
  translate(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("dx and dy must be numbers");
    return this.x += e, this.y += t, this;
  }
  /**
   * @function copy
   * @description Copy the values of the given vector to this.
   * @param {Vector2} v - The vector to copy
   * @returns {Vector2} This vector
   * @throws {Error} If v is not of type Vector2
   */
  copy(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * @function add
   * @description Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {Vector2} This vector
   * @throws {Error} If v is not of type Vector2
   */
  add(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * @function subtract
   * @description Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {Vector2} This vector
   * @throws {Error} If v is not of type Vector2
   */
  subtract(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * @function dot
   * @description Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number} The dot product
   * @throws {Error} If v is not of type Vector2
   */
  dot(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return this.x * e.x + this.y * e.y;
  }
  /**
   * @function vectorTo
   * @description Computes a new vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2} A new Vector2 representing the vector from this to v
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return new x(e.x - this.x, e.y - this.y);
  }
  /**
   * @function multiplyScalar
   * @description Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {Vector2} This vector
   * @throws {Error} If s is not a number
   */
  multiplyScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    return this.x *= e, this.y *= e, this;
  }
  /**
   * @function divideScalar
   * @description Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {Vector2} This vector
   * @throws {Error} If s is not a number
   * @throws {Error} If division by zero is attempted
   */
  divideScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    if (e === 0)
      throw new Error("Division by zero");
    return this.x /= e, this.y /= e, this;
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
   * @returns {Vector2} This vector
   * @throws {Error} If attempting to normalize a zero-length vector
   */
  normalize() {
    const e = this.length();
    if (e === 0)
      throw new Error("Cannot normalize zero-length vector");
    return this.divideScalar(e), this;
  }
  /**
   * @function isEqual
   * @description Check if the values of this vector is equal to another
   * @param {Vector2} v - The other vector
   * @returns {boolean} 
   */
  isEqual(e) {
    if (!(e instanceof x))
      throw new Error("v must be of type Vector2");
    return this.x === e.x && this.y === e.y;
  }
  /**
   * @function rotateAround
   * @description Rotate the coordinates the given radians around the given point
   * @param {number} px - the x coordinate of the point to rotate around
   * @param {number} py - the y coordinate of the point to rotate around
   * @param {number} angle - the rotation angle in radians
   * @returns {Vector2} the same vector
   */
  rotateAround(e, t, i) {
    const h = Math.cos(i), a = Math.sin(i), u = this.x, l = this.y;
    return this.x = (u - e) * h - (l - t) * a + e, this.y = (u - e) * a + (l - t) * h + t, this;
  }
};
mt = new WeakMap(), dt = new WeakMap();
let Y = x;
var wt, gt, bt;
class ft {
  /**
   * @constructor
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(e = new Y(), t = 0, i = new Y(1, 1)) {
    /**
     * @private
     * @property {Vector2} #position - the transform's position
     */
    n(this, wt);
    /**
     * @private
     * @property {number} #rotation - the transform's rotation
     */
    n(this, gt);
    /**
     * @private
     * @property {Vector2} #scale - the transform's scale
     */
    n(this, bt);
    this.position = e, this.rotation = t, this.scale = i;
  }
  /**
   * @function get position
   * @description Get transform position
   * @returns {Vector2} the position
   */
  get position() {
    return r(this, wt);
  }
  /**
   * @function set position
   * @description Set position
   * @param {Vector2} position - the position
   * @returns {void}
   * @throws {Error} if position is not a Vector2
   */
  set position(e) {
    if (!(e instanceof Y))
      throw new Error("position must be of type Vector2");
    s(this, wt, e);
  }
  /**
   * @function get rotation
   * @description Get transform rotation
   * @returns {number} the rotation
   */
  get rotation() {
    return r(this, gt);
  }
  /**
   * @function set rotation
   * @description Set rotation
   * @param {number} rotation - the rotation
   * @returns {void}
   * @throws {Error} if rotation is not a number
   */
  set rotation(e) {
    if (typeof e != "number")
      throw new Error("rotation must be a number");
    s(this, gt, e);
  }
  /**
   * @function get scale
   * @description Get transform scale
   * @returns {Vector2} the scale
   */
  get scale() {
    return r(this, bt);
  }
  /**
   * @function set scale
   * @description Set scale
   * @param {Vector2} scale - the scale
   * @returns {void}
   * @throws {Error} if scale is not a Vector2
   */
  set scale(e) {
    if (!(e instanceof Y))
      throw new Error("scale must be of type Vector2");
    s(this, bt, e);
  }
}
wt = new WeakMap(), gt = new WeakMap(), bt = new WeakMap();
var pt, yt;
class we {
  /**
   * Create a new Camera2D instance.
   * @constructor
   * @param {Object} [options] - Camera configuration options.
   * @param {number} [options.zoom=1] - Initial zoom level of the camera.
   */
  constructor(e = {
    zoom: 1
  }) {
    /**
     * @private
     * @property {number} zoom - the camera's zoom
     */
    n(this, pt);
    /**
     * @private
     * @property {Transform} transform - the camera's transform
     */
    n(this, yt);
    const { zoom: t } = e;
    this.zoom = t, this.transform = new ft();
  }
  /**
   * @function get zoom
   * @description Get the zoom
   * @returns {number} zoom
   */
  get zoom() {
    return r(this, pt);
  }
  /**
   * @function set zoom
   * @description Set zoom
   * @param {number} zoom - the new zoom
   * @returns {void}
   * @throws {Error} if zoom is not a number
   */
  set zoom(e) {
    if (typeof e != "number")
      throw new Error("zoom must be a number");
    s(this, pt, e);
  }
  /**
   * @function get transform
   * @description Get the transform
   * @returns {Transform} transform
   */
  get transform() {
    return r(this, yt);
  }
  /**
   * @function set transform
   * @description Set transform
   * @param {number} transform - the new transform
   * @returns {void}
   * @throws {Error} if transform is not a Transform
   */
  set transform(e) {
    if (!(e instanceof ft))
      throw new Error("transform must be of type Transform");
    s(this, yt, e);
  }
}
pt = new WeakMap(), yt = new WeakMap();
const ne = /* @__PURE__ */ new Set();
function f(o, e, t) {
  const i = `${o}:${e}`;
  if (ne.has(i))
    return;
  const h = `[DEPRECATION] '${o}' is deprecated since version ${t}. Please use '${e}' instead. This feature will be removed in a future release.`;
  console.warn(h), ne.add(i);
}
const m = [];
for (let o = 0; o < 256; ++o)
  m.push((o + 256).toString(16).slice(1));
function ge(o, e = 0) {
  return (m[o[e + 0]] + m[o[e + 1]] + m[o[e + 2]] + m[o[e + 3]] + "-" + m[o[e + 4]] + m[o[e + 5]] + "-" + m[o[e + 6]] + m[o[e + 7]] + "-" + m[o[e + 8]] + m[o[e + 9]] + "-" + m[o[e + 10]] + m[o[e + 11]] + m[o[e + 12]] + m[o[e + 13]] + m[o[e + 14]] + m[o[e + 15]]).toLowerCase();
}
let te;
const be = new Uint8Array(16);
function pe() {
  if (!te) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    te = crypto.getRandomValues.bind(crypto);
  }
  return te(be);
}
const ye = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), oe = { randomUUID: ye };
function Ee(o, e, t) {
  var h;
  o = o || {};
  const i = o.random ?? ((h = o.rng) == null ? void 0 : h.call(o)) ?? pe();
  if (i.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return i[6] = i[6] & 15 | 64, i[8] = i[8] & 63 | 128, ge(i);
}
function Se(o, e, t) {
  return oe.randomUUID && !o ? oe.randomUUID() : Ee(o);
}
var Et;
class z {
  /**
   * @constructor
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(e) {
    /**
     * @private
     * @property {string} #colorStr - a string representation of the color
     */
    n(this, Et);
    this.colorStr = e;
  }
  /**
   * @function get colorStr
   * @description Get the string representation of the color
   * @returns {string} colorStr
   */
  get colorStr() {
    return r(this, Et);
  }
  /**
   * @function set colorStr
   * @description Set colorStr
   * @param {string} colorStr
   * @returns {void}
   * @throws {Error} if colorStr is not a string
   */
  set colorStr(e) {
    if (typeof e != "string")
      throw new Error("colorStr must be a string");
    s(this, Et, e);
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
Et = new WeakMap();
var Zt, Q, St, Tt, xt, vt, O, C;
const J = class J {
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
  constructor(e, t = {}) {
    /**
     * @private
     * @property {Object} #cache - Cache for computed values
     */
    n(this, Q, {
      halfWidth: 0,
      halfHeight: 0
    });
    /**
     * @private
     * @property {number} #width - The canvas width
     */
    n(this, St);
    /**
     * @private
     * @property {number} #height - The canvas height
     */
    n(this, Tt);
    /**
     * @private
     * @property {string|Color} #backgroundColor - The background color
     */
    n(this, xt);
    /**
     * @private
     * @property {number} #devicePixelRatio - The device pixel ratio
     */
    n(this, vt);
    /**
     * @private
     * @property {Renderer} #renderer - The renderer instance
     */
    n(this, O);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, C, !1);
    const { width: i, height: h, devicePixelRatio: a, backgroundColor: u } = t;
    if (!(e instanceof ue))
      throw new Error("renderer must be of type Renderer");
    s(this, O, e), s(this, C, !0), this.width = i, this.height = h, this.devicePixelRatio = a ?? J.DEFAULT_OPTIONS.devicePixelRatio, this.backgroundColor = u ?? J.DEFAULT_OPTIONS.backgroundColor, s(this, C, !1);
  }
  /**
   * @public
   * @static
   * @returns {Object} The default renderer options
   */
  static get DEFAULT_OPTIONS() {
    return r(J, Zt);
  }
  /**
   * @function get cache
   * @description Gets the cache object
   * @returns {Object} The cache object
   */
  get cache() {
    return r(this, Q);
  }
  /**
   * @function get width
   * @description Gets the canvas width
   * @returns {number} The canvas width
   */
  get width() {
    return r(this, St);
  }
  /**
   * @function set width
   * @description Sets the canvas width
   * @param {number} width - The new width
   */
  set width(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("width must be a positive number");
    s(this, St, e), r(this, Q).halfWidth = e / 2, r(this, C) || r(this, O).recalculateDevicePixelRatio();
  }
  /**
   * @function get height
   * @description Gets the canvas height
   * @returns {number} The canvas height
   */
  get height() {
    return r(this, Tt);
  }
  /**
   * @function set height
   * @description Sets the canvas height
   * @param {number} height - The new height
   */
  set height(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("height must be a positive number");
    s(this, Tt, e), r(this, Q).halfHeight = e / 2, r(this, C) || r(this, O).recalculateDevicePixelRatio();
  }
  /**
   * @function get devicePixelRatio
   * @description Gets the device pixel ratio
   * @returns {number} The device pixel ratio
   */
  get devicePixelRatio() {
    return r(this, vt);
  }
  /**
   * @function set devicePixelRatio
   * @description Sets the device pixel ratio
   * @param {number} dpr - The new device pixel ratio
   */
  set devicePixelRatio(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("devicePixelRatio must be a positive number");
    s(this, vt, e), r(this, C) || r(this, O).recalculateDevicePixelRatio();
  }
  /**
   * @function get backgroundColor
   * @description Gets the background color
   * @returns {string|Color} The background color
   */
  get backgroundColor() {
    return r(this, xt);
  }
  /**
   * @function set backgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The new background color
   */
  set backgroundColor(e) {
    if (typeof e != "string" && !(e instanceof z))
      throw new Error("backgroundColor must be a Color or a string");
    s(this, xt, e);
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
  setSize(e, t) {
    try {
      s(this, C, !0), this.width = e, this.height = t, r(this, O).recalculateDevicePixelRatio();
    } finally {
      s(this, C, !1);
    }
  }
};
Zt = new WeakMap(), Q = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), xt = new WeakMap(), vt = new WeakMap(), O = new WeakMap(), C = new WeakMap(), /**
 * @static
 * @private
 * @property {Object} DEFAULT_OPTIONS - The default renderer options
 */
n(J, Zt, {
  devicePixelRatio: 1,
  backgroundColor: "transparent"
});
let ee = J;
var Ct, Dt, At, Rt, L, y;
class ue {
  /**
   * @constructor
   * @param {string} contextType - The canvas rendering context type
   * @param {HTMLCanvasElement} canvas - The canvas element
   * @param {Scene} scene - The scene
   * @param {Camera2D} camera - The camera
   * @param {Object} [options] - Render configuration options.
   * @param {number} [options.width] - Initial canvas width
   * @param {number} [options.height] - Initial canvas height
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS] - Initial device pixel ratio
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS] - Initial background color
   * @throws {Error} If scene is not of type Scene
   * @throws {Error} If camera is not of type Camera2D
   * @throws {Error} If options.width or options.height is not a number
   * @throws {Error} If options.devicePixelRatio is not a number
   * @throws {Error} If options.backgroundColor is not a string or Color
   */
  constructor(e, t, i, h, a = {}) {
    /**
     * @private
     * @property {string} #contextType - The canvas rendering context type
     */
    n(this, Ct);
    /**
     * @private
     * @property {HTMLCanvasElement} #canvas - The canvas element
     */
    n(this, Dt);
    /**
     * @private
     * @property {Scene} #scene - The scene
     */
    n(this, At);
    /**
     * @private
     * @property {Camera2D} #camera - The camera
     */
    n(this, Rt);
    /**
     * @private
     * @property {number|null} #animationFrameId - The requestAnimationFrame ID
     */
    n(this, L, null);
    /**
     * @private
     * @property {RendererOptions} #options - The renderer options
     */
    n(this, y);
    if (typeof e != "string")
      throw new Error("contextType must be a string");
    this.scene = i, this.camera = h, s(this, Ct, e), s(this, Dt, t), s(this, y, new ee(this, a)), this._initContext();
  }
  /**
   * @function get options
   * @description Gets the renderer options
   * @returns {RendererOptions} The renderer options
   */
  get options() {
    return r(this, y);
  }
  /**
   * @function get contextType
   * @description Gets the rendering context type
   * @returns {string} The rendering context type
   */
  get contextType() {
    return r(this, Ct);
  }
  /**
   * @function get canvas
   * @description Gets the canvas element
   * @returns {HTMLCanvasElement} The canvas element
   */
  get canvas() {
    return r(this, Dt);
  }
  /**
   * @function get scene
   * @description Gets the scene
   * @returns {Scene} The scene
   */
  get scene() {
    return r(this, At);
  }
  /**
   * @function set scene
   * @description Sets the scene
   * @param {Scene} scene - The new scene to set
   */
  set scene(e) {
    if (!(e instanceof Te))
      throw new Error("scene must be of type Scene");
    s(this, At, e);
  }
  /**
   * @function get camera
   * @description Gets the camera
   * @returns {Camera2D} The camera
   */
  get camera() {
    return r(this, Rt);
  }
  /**
   * @function set camera
   * @description Sets the camera
   * @param {Camera2D} camera - The new camera to set
   */
  set camera(e) {
    if (!(e instanceof we))
      throw new Error("camera must be of type Camera2D");
    s(this, Rt, e);
  }
  /**
   * @function get centerX
   * @description Gets the center x value
   * @returns {number} The center x value
   */
  get centerX() {
    return r(this, y).cache.halfWidth;
  }
  /**
   * @function get centerY
   * @description Gets the center y value
   * @returns {number} The center y value
   */
  get centerY() {
    return r(this, y).cache.halfHeight;
  }
  /**
   * @function setBackgroundColor
   * @description Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   * @deprecated since version 0.1.0 - Use the options.backgroundColor setter instead
   */
  setBackgroundColor(e) {
    f("setBackgroundColor()", "options.backgroundColor setter", "0.1.0"), r(this, y).backgroundColor = e;
  }
  /**
   * @function setSize
   * @description Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width is not a positive number
   * @throws {Error} If height is not a positive number
   * @deprecated since version 0.1.0 - Use the options.setSize() method instead
   */
  setSize(e, t) {
    f("setSize()", "options.setSize()", "0.1.0"), r(this, y).setSize(e, t);
  }
  /**
   * @function setDevicePixelRatio
   * @description Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   * @deprecated since version 0.1.0 - Use the options.devicePixelRatio setter instead
   */
  setDevicePixelRatio(e) {
    f("setDevicePixelRatio()", "options.devicePixelRatio setter", "0.1.0"), r(this, y).devicePixelRatio = e, this.recalculateDevicePixelRatio();
  }
  /**
   * @function getCenterX
   * @description Returns a numerical value specifying the center x value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerX getter instead
   */
  getCenterX() {
    return f("getCenterX()", "centerX getter", "0.1.0"), r(this, y).cache.halfWidth;
  }
  /**
   * @function getCenterY
   * @description Returns a numerical value specifying the center y value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerY getter instead
   */
  getCenterY() {
    return f("getCenterY()", "centerY getter", "0.1.0"), r(this, y).cache.halfHeight;
  }
  /**
   * @function _initContext
   * @description Init the rendering context
   * @returns {void}
   */
  _initContext() {
    throw new Error("_initContext() is not implemented in the subclass");
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
    throw new Error("render() is not implemented in the subclass");
  }
  /**
   * @function requestAnimationFrame
   * @description A helper method that simplifies the use of requestAnimationFrame
   * @param {Object} [options] - Options for beforeRender and afterRender callbacks
   * @param {Function|null} [options.beforeRender] - A callback function to be called before each render
   * @param {Function|null} [options.afterRender] - A callback function to be called after each render
   * @returns {void}
   * @throws {Error} If options.beforeRender is not a function
   * @throws {Error} If options.afterRender is not a function
   */
  requestAnimationFrame(e = {
    beforeRender: null,
    afterRender: null
  }) {
    const { beforeRender: t, afterRender: i } = e;
    if (t && typeof t != "function")
      throw new Error("beforeRender must be a function");
    if (i && typeof i != "function")
      throw new Error("afterRender must be a function");
    const h = () => {
      t && t(), this.render(), i && i(), s(this, L, requestAnimationFrame(h.bind(this)));
    };
    s(this, L, requestAnimationFrame(h.bind(this)));
  }
  /**
   * @function cancelAnimationFrame
   * @description A helper method that cancel the loop create from renderer.requestAnimationFrame
   * @returns {void}
   */
  cancelAnimationFrame() {
    r(this, L) !== null && (cancelAnimationFrame(r(this, L)), s(this, L, null));
  }
}
Ct = new WeakMap(), Dt = new WeakMap(), At = new WeakMap(), Rt = new WeakMap(), L = new WeakMap(), y = new WeakMap();
var tt, et, rt, Pt;
class K {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @private
     * @property {number} #userData - custom user data
     */
    n(this, tt);
    /**
     * @private
     * @property {Transform} #transform - the object's transform
     */
    n(this, et);
    /**
     * @private
     * @property {boolean} #visible - a flag to determine object visibility
     */
    n(this, rt);
    /**
     * @private
     * @property {string} #uuid - an universal unique identifier
     */
    n(this, Pt);
    s(this, et, new ft()), s(this, Pt, Se()), s(this, rt, !0), s(this, tt, {});
  }
  /**
   * @function get uuid
   * @description Get the uuid
   * @returns {string} the uuid
   */
  get uuid() {
    return r(this, Pt);
  }
  /**
   * @function get visible
   * @description Get the visible flag
   * @returns {boolean} the flag
   */
  get visible() {
    return r(this, rt);
  }
  /**
   * @function set visible
   * @description Sets the object's visibility
   * @param {Boolean} visible - The new state
   * @returns {void}
   * @throws {Error} If the visible is not a boolean.
   */
  set visible(e) {
    if (typeof e != "boolean")
      throw new Error("visible must be a boolean");
    s(this, rt, e);
  }
  /**
   * @function get userData
   * @description Get the custom userData
   * @returns {Object} the userData
   */
  get userData() {
    return r(this, tt);
  }
  /**
   * @function set userData
   * @description Sets custom user data
   * @param {Boolean} userData - The user data
   * @returns {void}
   */
  set userData(e) {
    s(this, tt, e);
  }
  /**
   * @function get transform
   * @description Get the transform
   * @returns {Transform} the transform
   */
  get transform() {
    return r(this, et);
  }
  /**
   * @function set transform
   * @description Sets the object's transform
   * @param {Transform} transform - The new transform
   * @returns {void}
   * @throws {Error} If the transform is not a Transform.
   */
  set transform(e) {
    if (!(e instanceof ft))
      throw new Error("transform must be of type Transform");
    s(this, et, e);
  }
  /**
   * @function setUserData
   * @description Sets the userData property reserved for custom user data
   * @param {object} userData - the userData object
   * @returns {void}
   * @deprecated since version 0.1.0 - Use the userData setter instead
   */
  setUserData(e) {
    if (f("setUserData()", "userData setter", "0.1.0"), typeof e != "object")
      throw new Error("userData must be a object");
    this.userData = e;
  }
  /**
   * @function setVisible
   * @description Sets the visibility of the object
   * @param {boolean} visible - Whether the object should be visible
   * @returns {void}
   * @throws Will throw an error if visible is not a boolean
   * @deprecated since version 0.1.0 - Use the visible setter instead
   */
  setVisible(e) {
    if (f("setVisible()", "visible setter", "0.1.0"), typeof e != "boolean")
      throw new Error("visible must be a boolean");
    this.visible = e;
  }
  /**
   * @function draw
   * @description Renders the light effect on the given 2D rendering context.
   * @param {Renderer} renderer - The selected renderer
   * @returns {void}
   * @throws Will throw an error if the renderer.context is not supported
   */
  draw(e) {
    if ((e == null ? void 0 : e.contextType) === "2d")
      this.drawContext2D(e.ctx);
    else
      throw new Error(`rendering context not supported: ${e.contextType}`);
  }
  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e) {
  }
}
tt = new WeakMap(), et = new WeakMap(), rt = new WeakMap(), Pt = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 0)
 */
S(K, "Z_INDEX", 0);
var F, T, it, qt;
class Te {
  constructor() {
    n(this, it);
    /**
     * @private
     * @property {Object2D[]} #children - The scene object2Ds
     */
    n(this, F, []);
    /**
     * @private
     * @property {Map<string, number>} #zIndexes - Holds object and z-index values
     */
    n(this, T, /* @__PURE__ */ new Map());
  }
  /**
   * @function get children
   * @description Gets a copy of scene's children
   * @returns {Object2D[]} The children
   */
  get children() {
    return [...r(this, F)];
  }
  /**
   * @function get zIndexes
   * @description Gets a copy of the scene's uuid-zIndex map
   * @returns {Map<string, number>} The map object
   */
  get zIndexes() {
    return new Map(r(this, T));
  }
  /**
   * @function add
   * @description Adds one or more 2D objects to the scene
   * @param {...Object2D} children - The 2D object(s) to add to the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
   */
  add(...e) {
    for (const t of e) {
      if (!(t instanceof K))
        throw new Error("All arguments to add() must be of type Object2D");
      r(this, F).push(t), r(this, T).set(t.uuid, t.constructor.Z_INDEX ?? 0);
    }
    p(this, it, qt).call(this);
  }
  /**
   * @function remove
   * @description Removes one or more 2D objects from the scene
   * @param {...Object2D} children - The 2D object(s) to remove from the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
   */
  remove(...e) {
    for (const t of e) {
      if (!(t instanceof K))
        throw new Error("All children arguments must be of type Object2D");
      const { uuid: i } = t, h = r(this, F).indexOf(t);
      h !== -1 && r(this, F).splice(h, 1), r(this, T).has(i) && r(this, T).delete(i);
    }
    p(this, it, qt).call(this);
  }
  /**
   * @function #setZIndex
   * @description Change one or more object2D's z-index value
   * @param {number} zIndex - the new z-index value
   * @param {...Object2D} children - the children
   * @returns {void}
   * @throws {Error} if zIndex is not a number.
   * @throws {Error} If any child is not of type Object2D
   */
  setZIndex(e, ...t) {
    if (typeof e != "number")
      throw new Error("zIndex must be a number");
    for (const i of t) {
      if (!(i instanceof K))
        throw new Error("All arguments to remove() must be of type Object2D");
      const { uuid: h } = i;
      r(this, T).has(h) && r(this, T).set(h, e);
    }
    p(this, it, qt).call(this);
  }
}
F = new WeakMap(), T = new WeakMap(), it = new WeakSet(), /**
 * @private
 * @function #sortChildrenByZIndex
 * @description Sorts the children based on their zIndex property
 * @returns {void}
 */
qt = function() {
  r(this, F).sort((e, t) => {
    const i = r(this, T).get(e.uuid) ?? 0, h = r(this, T).get(t.uuid) ?? 0;
    return i - h;
  });
};
class De extends ue {
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
  constructor(e, t, i, h = {}) {
    super("2d", e, t, i, h);
  }
  /**
   * @function _initContext
   * @description Init the rendering context
   * @returns {void}
   */
  _initContext() {
    this.ctx = this.canvas.getContext("2d"), this.recalculateDevicePixelRatio();
  }
  /**
   * @function recalculateDevicePixelRatio
   * @description Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const e = this.options.devicePixelRatio || 1, t = this.options.width * e, i = this.options.height * e;
    this.canvas.width = t, this.canvas.height = i, this.ctx.scale(e, e);
  }
  /**
   * @function render
   * @description Trigger a new render
   * @returns {void}
   */
  render() {
    const e = this.ctx, t = this.options.backgroundColor instanceof z ? this.options.backgroundColor.toString() : this.options.backgroundColor;
    e.clearRect(0, 0, this.canvas.width, this.canvas.height), e.fillStyle = t, e.fillRect(0, 0, this.canvas.width, this.canvas.height), e.save(), e.scale(this.camera.zoom, this.camera.zoom), e.rotate(-this.camera.transform.rotation), e.translate(
      -this.camera.transform.position.x,
      -this.camera.transform.position.y
    );
    for (let i = 0; i < this.scene.children.length; i++) {
      const h = this.scene.children[i];
      h.visible && h.draw(this);
    }
    e.restore();
  }
}
var st, nt, ot, _, B, E, D, b, d, A, k;
const v = class v {
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
  constructor(e = {}) {
    n(this, A);
    /**
     * @private
     * @property {string} #imageRepeat - the image repeat option
     */
    n(this, st);
    /**
     * @private
     * @property {number} #imageOffsetX - the image offset's x coordinate
     */
    n(this, nt);
    /**
     * @private
     * @property {number} #imageOffsetY - the image offset's y coordinate
     */
    n(this, ot);
    /**
     * @private
     * @property {number} #imageWidth - the image's width
     */
    n(this, _);
    /**
     * @private
     * @property {number} #imageOffsetY - the image's height'
     */
    n(this, B);
    /**
     * @private
     * @property {HTMLImageElement} #image - the image element
     */
    n(this, E);
    /**
     * @private
     * @property {Object} #pattern - the pattern
     */
    n(this, D);
    /**
     * @private
     * @property {DOMMatrix} #patternTransform - the pattern's transform
     */
    n(this, b);
    /**
     * @private
     * @property {boolean} #isBatchSetting - a flag to determine if batch setting is in progress
     */
    n(this, d);
    const {
      image: t,
      imageRepeat: i,
      imageOffsetX: h,
      imageOffsetY: a,
      imageWidth: u,
      imageHeight: l
    } = e;
    s(this, d, !0), this.imageRepeat = i, this.imageOffsetX = h, this.imageOffsetY = a, this.imageWidth = u, this.imageHeight = l, this.image = t, s(this, d, !1);
  }
  /**
   * @function get imageRepeat
   * @description Get the imageRepeat option
   * @returns {string} the imageRepeat
   */
  get imageRepeat() {
    return r(this, st);
  }
  /**
   * @function set imageRepeat
   * @description Sets the object's imageRepeat
   * @param {string} imageRepeat - The new imageRepeat
   * @returns {void}
   * @throws {Error} If the imageRepeat is not a string.
   */
  set imageRepeat(e) {
    if (e && typeof e != "string" && !v.IMAGE_REPEAT_TYPES[e])
      throw new Error(
        `imageRepeat must be string with value: ${Object.values(
          v.IMAGE_REPEAT_TYPES
        ).join(", ")}`
      );
    s(this, st, e ?? v.DEFAULT_IMAGE_REPEAT);
  }
  /**
   * @function get imageOffsetX
   * @description Get the imageOffsetX
   * @returns {number} the imageOffsetX
   */
  get imageOffsetX() {
    return r(this, nt);
  }
  /**
   * @function set imageOffsetX
   * @description Sets the image offset's x coordinate
   * @param {number} imageOffsetX - The offset's new x coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
   */
  set imageOffsetX(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetX must be a number");
    s(this, nt, e ?? v.DEFAULT_IMAGE_OFFSET.x), r(this, d) || p(this, A, k).call(this);
  }
  /**
   * @function get imageOffsetY
   * @description Get the imageOffsetY
   * @returns {number} the imageOffsetY
   */
  get imageOffsetY() {
    return r(this, ot);
  }
  /**
   * @function set imageOffsetY
   * @description Sets the image offset's y coordinate
   * @param {number} imageOffsetY - The offset's new y coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetY is not a number.
   */
  set imageOffsetY(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetY must be a number");
    s(this, ot, e ?? v.DEFAULT_IMAGE_OFFSET.y), r(this, d) || p(this, A, k).call(this);
  }
  /**
   * @function get imageWidth
   * @description Get the imageWidth
   * @returns {number} the imageWidth
   */
  get imageWidth() {
    return r(this, _);
  }
  /**
   * @function set imageWidth
   * @description Sets the image width
   * @param {number} imageWidth - The new width
   * @returns {void}
   * @throws {Error} If the imageWidth is not a number.
   */
  set imageWidth(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageWidth must be a positive number or null");
    s(this, _, e), r(this, d) || p(this, A, k).call(this);
  }
  /**
   * @function get imageHeight
   * @description Get the imageHeight
   * @returns {number} the imageHeight
   */
  get imageHeight() {
    return r(this, B);
  }
  /**
   * @function set imageHeight
   * @description Sets the image height
   * @param {number} imageHeight - The new height
   * @returns {void}
   * @throws {Error} If the imageHeight is not a number.
   */
  set imageHeight(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageHeight must be a positive number or null");
    s(this, B, e), r(this, d) || p(this, A, k).call(this);
  }
  /**
   * @function get image
   * @description Get the image
   * @returns {HTMLImageElement} the image
   */
  get image() {
    return r(this, E);
  }
  /**
   * @function set image
   * @description Sets the image
   * @param {HTMLImageElement|string} image - The new image
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   */
  set image(e) {
    if (typeof e != "string" && !(e instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (s(this, D, null), typeof e == "string") {
      const t = new Image();
      t.src = e, t.onload = () => {
        s(this, E, t);
      }, s(this, E, t);
    } else e instanceof HTMLImageElement && s(this, E, e);
  }
  /**
   * @function createPattern
   * @description Create the pattern based on the image and configuration (used by materials)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {CanvasPattern|null}
   */
  createPattern(e) {
    return !r(this, E) || !r(this, E).complete ? null : r(this, D) ? r(this, D) : (s(this, D, e.createPattern(r(this, E), r(this, st))), p(this, A, k).call(this), r(this, D));
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
  setImageOffset(e, t) {
    try {
      s(this, d, !0), this.imageOffsetX = e, this.imageOffsetY = t, p(this, A, k).call(this);
    } finally {
      s(this, d, !1);
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
  setImageSize(e, t) {
    try {
      s(this, d, !0), this.imageWidth = e, this.imageHeight = t, p(this, A, k).call(this);
    } finally {
      s(this, d, !1);
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
  setImage(e, t = "repeat") {
    f("setImage()", "image setter", "0.1.0");
    try {
      s(this, d, !0), this.imageRepeat = t, this.image = e;
    } finally {
      s(this, d, !1);
    }
  }
};
st = new WeakMap(), nt = new WeakMap(), ot = new WeakMap(), _ = new WeakMap(), B = new WeakMap(), E = new WeakMap(), D = new WeakMap(), b = new WeakMap(), d = new WeakMap(), A = new WeakSet(), /**
 * @private
 * @function #rebuildTransform
 * @description Position and scale the pattern's transform
 * @returns {void}
 */
k = function() {
  if (!r(this, D)) return;
  const e = r(this, _) ? r(this, _) / r(this, E).naturalWidth : 1, t = r(this, B) ? r(this, B) / r(this, E).naturalHeight : 1;
  r(this, b) ?? s(this, b, new DOMMatrix()), r(this, b).a = 1, r(this, b).b = 0, r(this, b).c = 0, r(this, b).d = 1, r(this, b).e = 0, r(this, b).f = 0, r(this, b).translateSelf(
    r(this, nt),
    r(this, ot)
  ), r(this, b).scaleSelf(e, t), r(this, D).setTransform(r(this, b));
}, /**
 * @static
 * @property {string[]} [IMAGE_REPEAT_TYPES] - The valid image repeat types
 */
S(v, "IMAGE_REPEAT_TYPES", {
  repeat: "repeat",
  "repeat-x": "repeat-x",
  "repeat-y": "repeat-y",
  "no-repeat": "no-repeat"
}), /**
 * @property {string} DEFAULT_IMAGE_REPEAT - the default image repeat option
 */
S(v, "DEFAULT_IMAGE_REPEAT", "repeat"), /**
 * @property {Object} DEFAULT_IMAGE_OFFSET - the default image offset
 */
S(v, "DEFAULT_IMAGE_OFFSET", {
  x: 0,
  y: 0
});
let re = v;
var H, ht, G, j, at;
class Ae {
  /**
   * @constructor
   */
  constructor() {
    /**
     * @private
     * @property {number} #startTime - when the object was created.
     */
    n(this, H);
    /**
     * @private
     * @property {number} #oldTime - last frame time.
     */
    n(this, ht);
    /**
     * @private
     * @property {number} #elapsedTime - time since instantiation.
     */
    n(this, G);
    /**
     * @private
     * @property {number} #deltaTime - time since last frame
     */
    n(this, j);
    /**
     * @private
     * @property {number} #lastFrame - when the update method was last called.
     */
    n(this, at);
    this.restart();
  }
  /**
   * @function get startTime
   * @description Get the time the object was instantiated.
   * @returns {number} the time
   */
  get startTime() {
    return r(this, H);
  }
  /**
   * @function get elapsedTime
   * @description Get time since instantiation.
   * @returns {number} the time
   */
  get elapsedTime() {
    return r(this, G);
  }
  /**
   * @function get deltaTime
   * @description Get time since last frame.
   * @returns {number} the time
   */
  get deltaTime() {
    return r(this, j);
  }
  /**
   * @function restart
   * @description Restart the start time
   * @returns {void}
   */
  restart() {
    s(this, H, performance.now()), s(this, ht, r(this, H)), s(this, G, 0), s(this, j, 0), s(this, at, 0);
  }
  /**
   * @function update
   * @description Update the internal time values (call at the beginning of your animation loop)
   * @returns {void}
   */
  update() {
    const e = performance.now();
    if (e !== r(this, at)) {
      const t = e;
      s(this, j, (t - r(this, ht)) / 1e3), s(this, G, (t - r(this, H)) / 1e3), s(this, ht, t), s(this, at, e);
    }
  }
  /**
   * @function getElapsedTime
   * @description Get the time elapsed (in seconds) since instantiation
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the elapsedTime getter instead
   */
  getElapsedTime() {
    return f("getElapsedTime()", "elapsedTime getter", "0.1.0"), this.update(), r(this, G);
  }
  /**
   * @function getDeltaTime
   * @description Returns the time elapsed (in seconds) since the last frame or call.
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the deltaTime getter instead
   */
  getDeltaTime() {
    return f("getDeltaTime()", "deltaTime getter", "0.1.0"), this.update(), r(this, j);
  }
}
H = new WeakMap(), ht = new WeakMap(), G = new WeakMap(), j = new WeakMap(), at = new WeakMap();
class ie {
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
  // eslint-disable-next-line no-unused-vars
  applyToContext2D(e) {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
var Jt, M, U, W, V, q;
const ct = class ct extends ie {
  /**
   * @constructor
   * @param {Object} [options] - Material configuration options.
   * @param {Color|null} [options.fillStyle=null] - Initial fill style
   * @param {Color|null} [options.strokeStyle=null] - Initial stroke style
   * @param {number|null} [options.lineWidth=BasicMaterial.DEFAULT_LINE_WIDTH] - Initial line width
   * @param {Texture2D|null} [options.texture2D=null] - Image texture
   * @throws {Error} If the fillStyle is not null or a string.
   * @throws {Error} If the strokeStyle is not null or a string.
   * @throws {Error} If the lineWidth is not null or a number.
   * @throws {Error} If the texture2D is not null or a Texture2D.
   */
  constructor(t = {}) {
    super();
    /**
     * @private
     * @property {Color} #fillStyle - The material's fillStyle
     */
    n(this, M);
    /**
     * @private
     * @property {Color} #strokeStyle - The material's strokeStyle
     */
    n(this, U);
    /**
     * @private
     * @property {number} #lineWidth - The material's lineWidth
     */
    n(this, W);
    /**
     * @private
     * @property {Texture2D} #texture2D - The material's texture2D
     */
    n(this, V);
    /**
     * @private
     * @property {boolean} #isBatchSetting - Flag indicating if batch setting is active
     */
    n(this, q, !1);
    const { fillStyle: i, strokeStyle: h, lineWidth: a, texture2D: u } = t;
    if (!i && !h)
      throw new Error("Either fillStyle or strokeStyle must be provided");
    s(this, q, !0), this.fillStyle = i, this.strokeStyle = h, this.lineWidth = a, this.texture2D = u, s(this, q, !1);
  }
  /**
   * @public
   * @static
   * @returns {number} The default line width.
   */
  static get DEFAULT_LINE_WIDTH() {
    return r(ct, Jt);
  }
  /**
   * @function get fillStyle
   * @description Gets the material's fillStyle
   * @returns {Color} The fillStyle
   */
  get fillStyle() {
    return r(this, M);
  }
  /**
   * @function set fillStyle
   * @description Sets the material's fillStyle
   * @param {Color|null} fillStyle - The new fillStyle to set
   * @returns {void}
   * @throws {Error} If fillStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set fillStyle(t) {
    if (t && !(t instanceof z))
      throw new Error("fillStyle must be a Color or null");
    if (!r(this, q) && !t && !r(this, U))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    s(this, M, t);
  }
  /**
   * @function get strokeStyle
   * @description Gets the material's strokeStyle
   * @returns {Color|null|undefined} The strokeStyle
   */
  get strokeStyle() {
    return r(this, U);
  }
  /**
   * @function set strokeStyle
   * @description Sets the material's strokeStyle
   * @param {Color|null} strokeStyle - The new strokeStyle to set
   * @returns {void}
   * @throws {Error} If strokeStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set strokeStyle(t) {
    if (t && !(t instanceof z))
      throw new Error("strokeStyle must be a Color or null");
    if (!r(this, q) && !t && !r(this, M))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    s(this, U, t);
  }
  /**
   * @function get lineWidth
   * @description Gets the material's lineWidth
   * @returns {number|null|undefined} The lineWidth
   */
  get lineWidth() {
    return r(this, W);
  }
  /**
   * @function set lineWidth
   * @description Sets the material's lineWidth
   * @param {number|null} lineWidth - The new lineWidth to set (defaults to BasicMaterial.DEFAULT_LINE_WIDTH if null)
   * @returns {void}
   * @throws {Error} If lineWidth is not null or a number.
   */
  set lineWidth(t) {
    if (t != null && (typeof t != "number" || t <= 0))
      throw new Error("lineWidth must be a positive number or null");
    s(this, W, t ?? ct.DEFAULT_LINE_WIDTH);
  }
  /**
   * @function get texture2D
   * @description Gets the material's texture2D
   * @returns {Texture2D|null|undefined} The texture2D
   */
  get texture2D() {
    return r(this, V);
  }
  /**
   * @function set texture2D
   * @description Sets the material's texture2D
   * @param {Texture2D|null} texture2D - The new texture2D to set
   * @returns {void}
   * @throws {Error} If texture2D is not null or of type Texture2D
   */
  set texture2D(t) {
    if (t && !(t instanceof re))
      throw new Error("texture2D must be of type Texture2D or null");
    s(this, V, t);
  }
  /**
   * @function applyToContext2D
   * @description Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D(t) {
    r(this, V) ? t.fillStyle = r(this, V).createPattern(t) : r(this, M) && (t.fillStyle = r(this, M).toString()), r(this, U) && (t.strokeStyle = r(this, U).toString()), r(this, W) && (t.lineWidth = r(this, W));
  }
};
Jt = new WeakMap(), M = new WeakMap(), U = new WeakMap(), W = new WeakMap(), V = new WeakMap(), q = new WeakMap(), /**
 * @private
 * @property {number} #DEFAULT_LINE_WIDTH - The default line width
 */
n(ct, Jt, 1);
let he = ct;
class ut {
  /**
   * @constructor
   */
  constructor() {
  }
  /**
   * @function checkMaterialConflicts
   * @description Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  checkMaterialConflicts(e) {
  }
  /**
   * @function drawContext2D
   * @description Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e, t, i) {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
var It, $t;
class Re extends ut {
  /**
   * @constructor
   * @param {number} width - The width of the rectangle (must be positive).
   * @param {number} height - The height of the rectangle (must be positive).
   * @throws {Error} If the width is not a positive number.
   * @throws {Error} If the height is not a positive number.
   */
  constructor(t, i) {
    super();
    /**
     * @private
     * @property {number} width - the rectangle's width
     */
    n(this, It);
    /**
     * @private
     * @property {number} height - the rectangle's height
     */
    n(this, $t);
    this.width = t, this.height = i;
  }
  /**
   * @function get width
   * @description Get the width
   * @returns {number} width
   */
  get width() {
    return r(this, It);
  }
  /**
   * @function set width
   * @description Set width
   * @param {number} width - the new width
   * @returns {void}
   * @throws {Error} if width is not a positive number
   */
  set width(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("width must be a positive number");
    s(this, It, t);
  }
  /**
   * @function get height
   * @description Get the height
   * @returns {number} height
   */
  get height() {
    return r(this, $t);
  }
  /**
   * @function set height
   * @description Set height
   * @param {number} height - the new height
   * @returns {void}
   * @throws {Error} if height is not a positive number
   */
  set height(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("height must be a positive number");
    s(this, $t, t);
  }
  /**
   * @function drawContext2D
   * @description Draws the rectangle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D(t, i, h) {
    if (!(h instanceof ie))
      throw new Error("material must be of type Material");
    if (!(i instanceof ft))
      throw new Error("transform must be of type Transform");
    const { scale: a, position: u, rotation: l } = i, c = this.width * a.x, w = this.height * a.y, I = c / 2, $ = w / 2;
    t.save(), t.translate(u.x + I, u.y + $), t.rotate(l), t.translate(-I, -$), h.fillStyle && t.fillRect(0, 0, c, w), h.strokeStyle && t.strokeRect(0, 0, c, w), t.restore();
  }
}
It = new WeakMap(), $t = new WeakMap();
var kt;
class Pe extends ut {
  /**
   * @constructor
   * @param {number} radius - The radius of the circle (must be positive).
   * @throws {Error} If the radius is not a positive number.
   */
  constructor(t) {
    super();
    /**
     * @private
     * @property {number} radius - the circle's radius
     */
    n(this, kt);
    this.radius = t;
  }
  /**
   * @function get radius
   * @description Get the radius
   * @returns {number} radius
   */
  get radius() {
    return r(this, kt);
  }
  /**
   * @function set radius
   * @description Set radius
   * @param {number} radius - the new radius
   * @returns {void}
   * @throws {Error} if radius is not a positive number
   */
  set radius(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    s(this, kt, t);
  }
  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(t, i, h) {
    const { position: a, rotation: u, scale: l } = i, c = this.radius * ((l.x + l.y) / 2);
    t.save(), t.translate(a.x, a.y), t.rotate(u), t.beginPath(), t.arc(0, 0, c, 0, Math.PI * 2), t.closePath(), h.fillStyle && t.fill(), h.strokeStyle && t.stroke(), t.restore();
  }
}
kt = new WeakMap();
var Ot, Lt;
const g = class g extends ut {
  /**
   * @constructor
   * @param {string} text - The text content to generate geometry for.
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font="14px Arial"] - The font family used for the text content.
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
  constructor(t, i = {}) {
    super();
    /**
     * @private
     * @property {number} #text - the text to be displayed
     */
    n(this, Ot);
    /**
     * @private
     * @property {number} #options - the options
     */
    n(this, Lt);
    this.text = t, this.options = i;
  }
  /**
   * @function get text
   * @description Get the text
   * @returns {string} text
   */
  get text() {
    return r(this, Ot);
  }
  /**
   * @function set text
   * @description Set text
   * @param {number} text - the new text
   * @returns {void}
   * @throws {Error} if text is not a string
   */
  set text(t) {
    if (typeof t != "string")
      throw new Error("text must be a string");
    s(this, Ot, t);
  }
  /**
   * @function get options
   * @description Get the options
   * @returns {Object} options
   */
  get options() {
    return r(this, Lt);
  }
  /**
   * @function set options
   * @description Set options
   * @param {Object} [options] - The geometry options.
   * @param {number|null} [options.maxWidth=null] - The maximum width allowed for the text layout.
   * @param {string|null} [options.font="14px Arial"] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null} [options.textAlign=null] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [options.textBaseline=null] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null} [options.direction=null] - The direction of the text content.
   * @throws {Error} If maxWidth is not a positive number.
   * @throws {Error} If font is not a string.
   * @throws {Error} If textAlign is not a valid alignment keyword.
   * @throws {Error} If textBaseline is not a valid baseline keyword.
   * @throws {Error} If direction is not a valid direction keyword.
   */
  set options(t) {
    const { maxWidth: i, textAlign: h, textBaseline: a, direction: u, font: l } = t;
    if (i !== void 0 && typeof i != "number")
      throw new Error("maxWidth must be a number or undefined");
    if (l && typeof l != "string")
      throw new Error("font must be a string or null");
    if (h && typeof h != "string" && !g.TEXT_ALIGNMENT_TYPES[h])
      throw new Error(
        `textAlign must be a string with value: ${Object.values(g.TEXT_ALIGNMENT_TYPES).join(
          ", "
        )}`
      );
    if (a && typeof a != "string" && !g.TEXT_BASELINE_TYPES[a])
      throw new Error(
        `textBaseline must be a string with value: ${Object.values(g.TEXT_BASELINE_TYPES).join(
          ", "
        )}`
      );
    if (u && typeof u != "string" && !g.TEXT_DIRECTION_TYPES[u])
      throw new Error(
        `direction must be a string with value: ${Object.values(g.TEXT_DIRECTION_TYPES).join(
          ", "
        )}`
      );
    s(this, Lt, {
      ...g.DEFAULT_OPTIONS,
      ...t
    });
  }
  /**
   * @function drawContext2D
   * @description Draws the text onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the text
   * @param {Material} material - The material to use for rendering the text
   * @returns {void}
   */
  drawContext2D(t, i, h) {
    const { maxWidth: a, textAlign: u, textBaseline: l, direction: c, font: w } = this.options, { position: I, rotation: $ } = i, { fillStyle: Vt, strokeStyle: fe } = h;
    w && t.font !== w && (t.font = w), u && t.textAlign !== u && (t.textAlign = u), l && t.textBaseline !== l && (t.textBaseline = l), c && t.direction !== c && (t.direction = c), t.save(), t.translate(I.x, I.y), t.rotate($), Vt && t.fillText(this.text, 0, 0, a), fe && t.strokeText(this.text, 0, 0, a), t.restore();
  }
};
Ot = new WeakMap(), Lt = new WeakMap(), /**
 * @static
 * @property {string[]} [TEXT_ALIGNMENT_TYPES] - The valid text alignment types
 */
S(g, "TEXT_ALIGNMENT_TYPES", {
  start: "start",
  end: "end",
  left: "left",
  right: "right",
  center: "center"
}), /**
 * @static
 * @property {string[]} [TEXT_DIRECTION_TYPES] - The valid text direction types
 */
S(g, "TEXT_DIRECTION_TYPES", {
  ltr: "ltr",
  rtl: "rtl",
  inherit: "inherit"
}), /**
 * @static
 * @property {string[]} [TEXT_BASELINE_TYPES] - The valid text baseline types
 */
S(g, "TEXT_BASELINE_TYPES", {
  top: "top",
  hanging: "hanging",
  middle: "middle",
  alphabetic: "alphabetic",
  ideographic: "ideographic",
  bottom: "bottom"
}), /**
 * @static
 * @property {Object} [DEFAULT_OPTIONS] - The default options for TextGeometry
 * @property {number|null} [DEFAULT_OPTIONS.maxWidth=undefined] - The default maximum width for the text layout
 * @property {string} [DEFAULT_OPTIONS.font="14px Arial"] - The default font family for the text content
 * @property {"start"|"end"|"left"|"right"|"center"|null} [DEFAULT_OPTIONS.textAlign=null] - The default horizontal alignment for the text content
 * @property {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [DEFAULT_OPTIONS.textBaseline=null] - The default vertical alignment for the text content
 * @property {"ltr"|"rtl"|"inherit"|null} [DEFAULT_OPTIONS.direction=null] - The default direction for the text content
 */
S(g, "DEFAULT_OPTIONS", {
  // maxWidth: null, Setting default maxWidth to null can cause issues
  font: "14px Arial",
  textAlign: null,
  textBaseline: null,
  direction: null
});
let ae = g;
var Ft;
class Ie extends ut {
  /**
   * @constructor
   * @param {Array.<Array<number>>} points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  constructor(t) {
    super();
    /**
     * @private
     * @property {Array.<Array<number>>} #points - Array of 4-number arrays describing points/segments. Requires at least one entry.
     */
    n(this, Ft);
    this.points = t;
  }
  /**
   * @function get points
   * @description Gets the lines' points
   * @returns {Array.<Array<number>>} The lines' points
   */
  get points() {
    return r(this, Ft);
  }
  /**
   * @function set points
   * @description Sets the lines points
   * @param {Array.<Array<number>>} points - The lines points
   * @returns {void}
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than one 4-number arrays
   * @throws {Error} If points has an array with less or more than four numbers
   */
  set points(t) {
    if (!Array.isArray(t))
      throw new Error("points must be an array");
    if (t.length < 1)
      throw new Error("points must contain at least one 4-number arrays");
    if (t.some((i) => !Array.isArray(i) || i.length !== 4))
      throw new Error(
        "an array in points must be an array with a length of four numbers"
      );
    s(this, Ft, t);
  }
  /**
   * @function checkMaterialConflicts
   * @description Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   * @throws {Error} If material does not have a strokeStyle
   */
  checkMaterialConflicts(t) {
    if (!t.strokeStyle)
      throw new Error("LineGeometry requires a strokeStyle in the material");
  }
  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(t, i, h) {
    const { position: a, rotation: u, scale: l } = i;
    t.save(), t.translate(a.x, a.y), t.rotate(u), t.beginPath(), this.points.forEach((c) => {
      t.moveTo(c[0] * l.x, c[1] * l.y), t.lineTo(c[2] * l.x, c[3] * l.y);
    }), t.closePath(), h.strokeStyle && t.stroke(), t.restore();
  }
}
Ft = new WeakMap();
var Z, lt, Kt, ce;
class $e extends ut {
  /**
   * @constructor
   * @param {Array.<Array<number>>} points - Array of 4-number arrays describing points/segments. Requires at least one entry.
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than three 2-number arrays
   * @throws {Error} If points has an array with less or more than two numbers
   */
  constructor(t) {
    super();
    n(this, Kt);
    /**
     * @private
     * @property {Array.<Array<number>>} #points - Array of 2-number arrays describing points/segments.
     */
    n(this, Z);
    /**
     * @private
     * @property {Array<number>} #center - The center point of the polygon.
     */
    n(this, lt);
    this.points = t;
  }
  /**
   * @function get points
   * @description Gets the polygons's points
   * @returns {Array.<Array<number>>} The polygons's points
   */
  get points() {
    return r(this, Z);
  }
  /**
   * @function set points
   * @description Sets the polgyon's points
   * @param {Array.<Array<number>>} points - The polgyon's points
   * @returns {void}
   * @throws {Error} If points is not an array
   * @throws {Error} If points has less than three 2-number arrays
   * @throws {Error} If points has an array with less or more than two numbers
   */
  set points(t) {
    if (!Array.isArray(t))
      throw new Error("points must be an array");
    if (t.length < 3)
      throw new Error("points must contain at least three 2-number arrays");
    if (t.some((i) => !Array.isArray(i) || i.length !== 2))
      throw new Error(
        "an array in points must be an array with a length of two numbers"
      );
    s(this, Z, t), p(this, Kt, ce).call(this);
  }
  /**
   * @function drawContext2D
   * @description Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(t, i, h) {
    const { position: a, rotation: u, scale: l } = i, c = r(this, lt).x * l.x, w = r(this, lt).y * l.y;
    t.save(), t.translate(a.x + c, a.y + w), t.rotate(u), t.translate(-c, -w), t.beginPath();
    const I = this.points[0];
    t.moveTo(I[0] * l.x, I[1] * l.y);
    for (let $ = 1; $ < this.points.length; $++) {
      const Vt = this.points[$];
      t.lineTo(Vt[0] * l.x, Vt[1] * l.y);
    }
    h.strokeStyle && t.stroke(), h.fillStyle && t.fill(), t.restore();
  }
}
Z = new WeakMap(), lt = new WeakMap(), Kt = new WeakSet(), /**
 * @function #calculateCenter
 * @description Calculates the center point of the polygon
 * @returns {void}
 * @private
 */
ce = function() {
  const t = r(this, Z), i = new Y(), h = r(this, Z).length;
  t.forEach((a) => {
    i.x += a[0], i.y += a[1];
  }), i.x = i.x / h, i.y = i.y / h, s(this, lt, i);
};
var N, X;
class xe extends K {
  /**
   * @constructor
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(t, i) {
    super();
    /**
     * @private
     * @property {Geometry} #geometry - The mesh's geometry
     */
    n(this, N);
    /**
     * @private
     * @property {Material} #material - The mesh's material
     */
    n(this, X);
    this.geometry = t, this.material = i;
  }
  /**
   * @function set geometry
   * @description Sets the mesh's geometry
   * @param {Geometry} newGeometry - The new geometry to set
   * @returns {void}
   * @throws {Error} If newGeometry is not of type Geometry
   */
  set geometry(t) {
    if (!(t instanceof ut))
      throw new Error("geometry must be of type Geometry");
    s(this, N, t), r(this, X) && r(this, N).checkMaterialConflicts(r(this, X));
  }
  /**
   * @function get geometry
   * @description Gets the mesh's geometry
   * @returns {Geometry} The mesh's geometry
   */
  get geometry() {
    return r(this, N);
  }
  /**
   * @function set material
   * @description Sets the mesh's material
   * @param {Material} newMaterial - The new material to set
   * @returns {void}
   * @throws {Error} If newMaterial is not of type Material
   */
  set material(t) {
    if (!(t instanceof ie))
      throw new Error("material must be of type Material");
    s(this, X, t), r(this, N) && r(this, N).checkMaterialConflicts(r(this, X));
  }
  /**
   * @function get material
   * @description Gets the mesh's material
   * @returns {Material} The mesh's material
   */
  get material() {
    return r(this, X);
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
N = new WeakMap(), X = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 1000)
 */
S(xe, "Z_INDEX", 1e3);
var Mt, Ut, Nt, Xt, R;
class le extends z {
  /**
   * @constructor
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, i, h, a = 1) {
    super(`rgba(${t}, ${i}, ${h}, ${a})`);
    /**
     * @private
     * @property {number} r - red (0-255)
     */
    n(this, Mt);
    /**
     * @private
     * @property {number} g - green (0-255)
     */
    n(this, Ut);
    /**
     * @private
     * @property {number} b - blue (0-255)
     */
    n(this, Nt);
    /**
     * @private
     * @property {number} a - alpha (0-1)
     */
    n(this, Xt);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, R, !1);
    this.set(t, i, h, a);
  }
  /**
   * @function get r
   * @description Get red
   * @returns {number} red (0-255)
   */
  get r() {
    return r(this, Mt);
  }
  /**
   * @function set r
   * @description Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   */
  set r(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("r must be a number between 0 and 255");
    s(this, Mt, t), r(this, R) || this.updateColorStr();
  }
  /**
   * @function get g
   * @description Get green
   * @returns {number} green (0-255)
   */
  get g() {
    return r(this, Ut);
  }
  /**
   * @function set g
   * @description Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   */
  set g(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("g must be a number between 0 and 255");
    s(this, Ut, t), r(this, R) || this.updateColorStr();
  }
  /**
   * @function get b
   * @description Get blue
   * @returns {number} blue (0-255)
   */
  get b() {
    return r(this, Nt);
  }
  /**
   * @function set b
   * @description Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   */
  set b(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("b must be a number between 0 and 255");
    s(this, Nt, t), r(this, R) || this.updateColorStr();
  }
  /**
   * @function get a
   * @description Get alpha
   * @returns {number} alpha (0-1)
   */
  get a() {
    return r(this, Xt);
  }
  /**
   * @function set a
   * @description Set alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    s(this, Xt, t), r(this, R) || this.updateColorStr();
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
  set(t, i, h, a) {
    try {
      s(this, R, !0), this.r = t, this.g = i, this.b = h, this.a = a, this.updateColorStr();
    } finally {
      s(this, R, !1);
    }
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
   * @deprecated since version 0.1.0 - use r setter instead
   */
  setRed(t) {
    f("setRed()", "r setter", "0.1.0"), this.r = t;
  }
  /**
   * @function setGreen
   * @description Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   * @deprecated since version 0.1.0 - use g setter instead
   */
  setGreen(t) {
    f("setGreen()", "g setter", "0.1.0"), this.g = t;
  }
  /**
   * @function setBlue
   * @description Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   * @deprecated since version 0.1.0 - use b setter instead
   */
  setBlue(t) {
    f("setBlue()", "b setter", "0.1.0"), this.b = t;
  }
  /**
   * @function setAlpha
   * @description Set the alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(t) {
    f("setAlpha()", "a setter", "0.1.0"), this.a = t;
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
Mt = new WeakMap(), Ut = new WeakMap(), Nt = new WeakMap(), Xt = new WeakMap(), R = new WeakMap();
var zt, Yt, _t, Bt;
class ve extends K {
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
  constructor(t = 100, i = 1, h = new le(255, 255, 200, 1), a = new le(255, 255, 200, 0)) {
    super();
    /**
     * @private
     * @property {number} #radius - The light's radius
     */
    n(this, zt);
    /**
     * @private
     * @property {number} #intensity - The light's intensity
     */
    n(this, Yt);
    /**
     * @private
     * @property {Color} #color - The light's color
     */
    n(this, _t);
    /**
     * @private
     * @property {Color} #intensity - The light's colorStop
     */
    n(this, Bt);
    this.radius = t, this.intensity = i, this.color = h, this.colorStop = a, this.zIndex = 1;
  }
  /**
   * @function get radius
   * @description Gets the light's radius
   * @returns {number} The radius
   */
  get radius() {
    return r(this, zt);
  }
  /**
   * @function set radius
   * @description Sets the light's radius
   * @param {number} radius - The light's radius
   * @returns {void}
   * @throws {Error} If the radius is not a positive number.
   */
  set radius(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    s(this, zt, t);
  }
  /**
   * @function get intensity
   * @description Gets the light's intensity
   * @returns {number} The intensity
   */
  get intensity() {
    return r(this, Yt);
  }
  /**
   * @function set intensity
   * @description Sets the light's intensity
   * @param {number} intensity - The light's intensity
   * @returns {void}
   * @throws {Error} If the intensity is not a positive number.
   */
  set intensity(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("intensity must be a positive number");
    s(this, Yt, t);
  }
  /**
   * @function get color
   * @description Gets the light's color
   * @returns {Color} The color
   */
  get color() {
    return r(this, _t);
  }
  /**
   * @function set color
   * @description Sets the light's color
   * @param {Color} color - The light's color
   * @returns {void}
   * @throws {Error} If the color is not a Color.
   */
  set color(t) {
    if (!(t instanceof z))
      throw new Error("color must be a Color");
    s(this, _t, t);
  }
  /**
   * @function get colorStop
   * @description Gets the light's colorStop
   * @returns {Color} The colorStop
   */
  get colorStop() {
    return r(this, Bt);
  }
  /**
   * @function set colorStop
   * @description Sets the light's colorStop
   * @param {Color} color - The light's colorStop
   * @returns {void}
   * @throws {Error} If the colorStop is not a Color.
   */
  set colorStop(t) {
    if (!(t instanceof z))
      throw new Error("colorStop must be a Color");
    s(this, Bt, t);
  }
  /**
   * @function drawContext2D
   * @description Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D(t) {
    const { radius: i, color: h, colorStop: a, intensity: u } = this, { x: l, y: c } = this.transform.position, w = t.createRadialGradient(l, c, 0, l, c, i);
    w.addColorStop(0, h.toString()), w.addColorStop(1, a.toString()), t.save(), t.globalAlpha = u, t.fillStyle = w, t.fillRect(l - i, c - i, i * 2, i * 2), t.restore();
  }
}
zt = new WeakMap(), Yt = new WeakMap(), _t = new WeakMap(), Bt = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 2000)
 */
S(ve, "Z_INDEX", 2e3);
var Ht, Gt, jt, Wt, P;
class ke extends z {
  /**
   * @constructor
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, i, h, a = 1) {
    super(`hsla(${t}, ${i}%, ${h}%, ${a})`);
    /**
     * @private
     * @property {number} #h - hue (0-360)
     */
    n(this, Ht);
    /**
     * @private
     * @property {number} #s - saturation (0-100)
     */
    n(this, Gt);
    /**
     * @private
     * @property {number} #l - lightness (0-100)
     */
    n(this, jt);
    /**
     * @private
     * @property {number} #a - alpha (0-1)
     */
    n(this, Wt);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, P, !1);
    this.set(t, i, h, a);
  }
  /**
   * @function get h
   * @description Get hue
   * @returns {number} hue (0-360)
   */
  get h() {
    return r(this, Ht);
  }
  /**
   * @function set h
   * @description Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   */
  set h(t) {
    if (typeof t != "number" || t < 0 || t > 360)
      throw new Error("h must be a number between 0 and 360");
    s(this, Ht, t), r(this, P) || this.updateColorStr();
  }
  /**
   * @function get s
   * @description Get saturation
   * @returns {number} saturation (0-100)
   */
  get s() {
    return r(this, Gt);
  }
  /**
   * @function set s
   * @description Set saturation
   * @param {number} s - saturation (0-100)
   */
  set s(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("s must be a number between 0 and 100");
    s(this, Gt, t), r(this, P) || this.updateColorStr();
  }
  /**
   * @function get l
   * @description Get lightness
   * @returns {number} lightness (0-100)
   */
  get l() {
    return r(this, jt);
  }
  /**
   * @function set l
   * @description Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   */
  set l(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("l must be a number between 0 and 100");
    s(this, jt, t), r(this, P) || this.updateColorStr();
  }
  /**
   * @function get a
   * @description Get alpha
   * @returns {number} alpha (0-1)
   */
  get a() {
    return r(this, Wt);
  }
  /**
   * @function set a
   * @description Set alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    s(this, Wt, t), r(this, P) || this.updateColorStr();
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
  set(t, i, h, a = 1) {
    try {
      s(this, P, !0), this.h = t, this.s = i, this.l = h, this.a = a, this.updateColorStr();
    } finally {
      s(this, P, !1);
    }
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
   * @deprecated since version 0.1.0 - use h setter instead
   */
  setHue(t) {
    f("setHue()", "h setter", "0.1.0"), this.h = t;
  }
  /**
   * @function setSaturation
   * @description Set saturation
   * @param {number} s - saturation (0-100)
   * @returns {void}
   * @throws {Error} if s is not between 0 and 100
   * @deprecated since version 0.1.0 - use s setter instead
   */
  setSaturation(t) {
    f("setSaturation()", "s setter", "0.1.0"), this.s = t;
  }
  /**
   * @function setLightness
   * @description Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   * @deprecated since version 0.1.0 - use l setter instead
   */
  setLightness(t) {
    f("setLightness()", "l setter", "0.1.0"), this.l = t;
  }
  /**
   * @function setAlpha
   * @description Set the alpha value
   * @param {number} alpha - alpha (0-1)
   * @returns {void}
   * @throws {Error} if alpha is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(t) {
    f("setAlpha()", "a setter", "0.1.0"), this.a = t;
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
Ht = new WeakMap(), Gt = new WeakMap(), jt = new WeakMap(), Wt = new WeakMap(), P = new WeakMap();
export {
  he as BasicMaterial,
  we as Camera2D,
  Pe as CircleGeometry,
  Ae as Clock,
  z as Color,
  ut as Geometry,
  ke as HslaColor,
  Ie as LineGeometry,
  ie as Material,
  xe as Mesh,
  K as Object2D,
  ve as PointLight2D,
  $e as PolygonGeometry,
  Re as RectGeometry,
  ue as Renderer,
  De as Renderer2D,
  ee as RendererOptions,
  le as RgbaColor,
  Te as Scene,
  ae as TextGeometry,
  re as Texture2D,
  ft as Transform,
  Y as Vector2
};
