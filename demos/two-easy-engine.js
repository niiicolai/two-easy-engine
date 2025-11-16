var _e = Object.defineProperty;
var De = (h) => {
  throw TypeError(h);
};
var Ze = (h, e, t) => e in h ? _e(h, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : h[e] = t;
var E = (h, e, t) => Ze(h, typeof e != "symbol" ? e + "" : e, t), Ee = (h, e, t) => e.has(h) || De("Cannot " + t);
var r = (h, e, t) => (Ee(h, e, "read from private field"), t ? t.call(h) : e.get(h)), n = (h, e, t) => e.has(h) ? De("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(h) : e.set(h, t), o = (h, e, t, s) => (Ee(h, e, "write to private field"), s ? s.call(h, t) : e.set(h, t), t), w = (h, e, t) => (Ee(h, e, "access private method"), t);
var Pt, Ot;
const P = class P {
  /**
   * This class provides basic vector operations such as addition, subtraction, scaling, and normalization.
   * @class
   * @param {number} x - The x coordinate
   * @param {number} y - The y coordinate
   * @throws {Error} If x or y are not numbers.
   */
  constructor(e = 0, t = 0) {
    /**
     * @private
     * @property {number} #x - the x coordinate.
     */
    n(this, Pt);
    /**
     * @private
     * @property {number} #y - the y coordinate.
     */
    n(this, Ot);
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    this.x = e, this.y = t;
  }
  /**
   * Get the x coordinate
   * @returns {Vector2}
   */
  get x() {
    return r(this, Pt);
  }
  /**
   * Sets the x coordinate
   * @param {number} x - The new value
   * @returns {void}
   * @throws {Error} If the x is not a number.
   */
  set x(e) {
    if (typeof e != "number")
      throw new Error("x must be a number");
    o(this, Pt, e);
  }
  /**
   * Get the y coordinate
   * @returns {Vector2}
   */
  get y() {
    return r(this, Ot);
  }
  /**
   * Sets the y coordinate
   * @param {number} y - The new value
   * @returns {void}
   * @throws {Error} If the y is not a number.
   */
  set y(e) {
    if (typeof e != "number")
      throw new Error("y must be a number");
    o(this, Ot, e);
  }
  /**
   * Creates a copy of the vector
   * @returns {Vector2}
   */
  clone() {
    return new P(this.x, this.y);
  }
  /**
   * Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {Vector2}
   * @throws {Error} If x or y is not a number
   */
  set(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    return this.x = e, this.y = t, this;
  }
  /**
   * Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {Vector2}
   * @throws {Error} If x or y is not a number
   */
  translate(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("dx and dy must be numbers");
    return this.x += e, this.y += t, this;
  }
  /**
   * Copy the values of the given vector to this.
   * @param {Vector2} v - The vector to copy
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  copy(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  add(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  subtract(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number}
   * @throws {Error} If v is not of type Vector2
   */
  dot(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Computes a new vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2}
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return new P(e.x - this.x, e.y - this.y);
  }
  /**
   * Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {Vector2}
   * @throws {Error} If s is not a number
   */
  multiplyScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {Vector2}
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
   * Computes the length (magnitude) of the vector
   * @returns {number}
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the squared length of the vector.
   * @returns {number}
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Normalizes the vector to have a length of 1
   * @returns {Vector2}
   * @throws {Error} If attempting to normalize a zero-length vector
   */
  normalize() {
    const e = this.length();
    if (e === 0)
      throw new Error("Cannot normalize zero-length vector");
    return this.divideScalar(e), this;
  }
  /**
   * Check if the values of this vector is equal to another
   * @param {Vector2} v - The other vector
   * @returns {boolean}
   */
  isEqual(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x === e.x && this.y === e.y;
  }
  /**
   * Rotate the coordinates the given radians around the given point
   * @param {number} px - the x coordinate of the point to rotate around
   * @param {number} py - the y coordinate of the point to rotate around
   * @param {number} angle - the rotation angle in radians
   * @returns {Vector2}
   */
  rotateAround(e, t, s) {
    const i = Math.cos(s), a = Math.sin(s), l = this.x, u = this.y;
    return this.x = (l - e) * i - (u - t) * a + e, this.y = (l - e) * a + (u - t) * i + t, this;
  }
};
Pt = new WeakMap(), Ot = new WeakMap();
let J = P;
var mt, dt;
const ge = class ge {
  /**
   * This class is responsible for polygon calculations.
   * @class Polygon2D
   * @param {Float32Array} vertices - the polygon's vertices
   */
  constructor(e) {
    /**
     * @property {Vector2} #centroid - Defines the polygon's centeroid
     */
    n(this, mt);
    /**
     * @private
     * @property {Float32Array} #vertices - A flat array of vertices.
     */
    n(this, dt);
    o(this, mt, new J()), this.vertices = e;
  }
  /**
   * Get the centroid
   * @returns {Vector2}
   */
  get centroid() {
    return r(this, mt);
  }
  /**
   * Get the vertices
   * @returns {Float32Array}
   */
  get vertices() {
    return r(this, dt);
  }
  /**
   * Set the vertices
   * @returns {Float32Array}
   */
  set vertices(e) {
    o(this, dt, e);
  }
  /**
   * Calculate the centroid of a simple polygon
   * @returns {void}
   */
  calculateCentroid() {
    const e = r(this, dt), t = e.length;
    let s = 0, i = 0, a = 0;
    for (let l = 0; l < t; l += ge.COORDINATES_SIZE) {
      const u = e[l], d = e[l + 1], c = e[(l + 2) % t], m = e[(l + 3) % t], f = u * m - c * d;
      s += f, i += (u + c) * f, a += (d + m) * f;
    }
    s /= 2, i = i / (6 * s), a = a / (6 * s), r(this, mt).set(i, a);
  }
};
mt = new WeakMap(), dt = new WeakMap(), /**
 * @property {number} #COORDINATES_SIZE - Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
 */
E(ge, "COORDINATES_SIZE", 2);
let Te = ge;
var we, Nt, $t;
const W = class W {
  /**
   * This class can be used to get elapsed and delta time (Remember to call clockObj.update at the beginning of the animation loop).
   * @class
   */
  constructor(e) {
    /**
     * @private
     * @property {Array} #offset - the current offest.
     */
    n(this, Nt);
    /**
     * @private
     * @property {string} #anchorType - the current anchor type.
     */
    n(this, $t);
    this.anchorType = e;
  }
  /**
   * Get the anchor type.
   * @returns {string}
   */
  get anchorType() {
    return r(this, $t);
  }
  /**
   * Get the offset.
   * @returns {number}
   */
  get offset() {
    return r(this, Nt);
  }
  /**
   * Sets the anchor type
   * @param {string} anchorType - The new type
   * @returns {void}
   * @throws {Error} If the anchorType is not a valid type.
   */
  set anchorType(e) {
    if (!W.ANCHOR_POINT_TYPES[e])
      throw new Error(
        `Anchor type: ${e}; is not a valid type. It must be: ${Object.values(
          W.ANCHOR_POINT_TYPES
        ).join(", ")}`
      );
    o(this, $t, e), o(this, Nt, r(W, we)[e]);
  }
};
we = new WeakMap(), Nt = new WeakMap(), $t = new WeakMap(), /**
 * @property {Object} ANCHOR_POINT_TYPES - the valid anchor point types.
 */
E(W, "ANCHOR_POINT_TYPES", {
  topLeft: "topLeft",
  topCenter: "topCenter",
  topRight: "topRight",
  midLeft: "midLeft",
  midCenter: "midCenter",
  midRight: "midRight",
  bottomLeft: "bottomLeft",
  bottomCenter: "bottomCenter",
  bottomRight: "bottomRight"
}), /**
 * @private
 * @property {Object} #ANCHOR_OFFSETS - the offsets returned by type.
 */
n(W, we, {
  topLeft: [-1, -1],
  topCenter: [0, -1],
  topRight: [1, -1],
  midLeft: [-1, 0],
  midCenter: [0, 0],
  midRight: [1, 0],
  bottomLeft: [-1, 1],
  bottomCenter: [0, 1],
  bottomRight: [1, 1]
});
let It = W;
var Ft, Lt, kt, Mt;
class Rt {
  /**
   * This class encapsulates the transformation properties of an object in 2D space.
   * @class
   * @param {Vector2} position - The position of the transform.
   * @param {number} rotation - The rotation of the transform.
   * @param {Vector2} scale - The scale of the transform.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   */
  constructor(e = new J(), t = 0, s = new J(1, 1), i = new It(It.ANCHOR_POINT_TYPES.midCenter)) {
    /**
     * @private
     * @property {Vector2} #position - the transform's position
     */
    n(this, Ft);
    /**
     * @private
     * @property {number} #rotation - the transform's rotation
     */
    n(this, Lt);
    /**
     * @private
     * @property {Vector2} #scale - the transform's scale
     */
    n(this, kt);
    /**
     * @private
     * @property {Vector2} #localAnchorPoint - the transform's localAnchorPoint
     */
    n(this, Mt);
    this.position = e, this.rotation = t, this.scale = s, this.localAnchorPoint = i;
  }
  /**
   * Get transform's localAnchorPoint
   * @returns {AnchorPoint2D}
   */
  get localAnchorPoint() {
    return r(this, Mt);
  }
  /**
   * Set the localAnchorPoint
   * @param {AnchorPoint2D} localAnchorPoint - the new localAnchorPoint
   * @returns {void}
   * @throws {Error} if localAnchorPoint is not a AnchorPoint2D
   */
  set localAnchorPoint(e) {
    if (!(e instanceof It))
      throw new Error("localAnchorPoint must be of type AnchorPoint2D");
    o(this, Mt, e);
  }
  /**
   * Get transform position
   * @returns {Vector2}
   */
  get position() {
    return r(this, Ft);
  }
  /**
   * Set the position
   * @param {Vector2} position - the position
   * @returns {void}
   * @throws {Error} if position is not a Vector2
   */
  set position(e) {
    if (!(e instanceof J))
      throw new Error("position must be of type Vector2");
    o(this, Ft, e);
  }
  /**
   * Get the rotation
   * @returns {number}
   */
  get rotation() {
    return r(this, Lt);
  }
  /**
   * Set the rotation
   * @param {number} rotation - the rotation
   * @returns {void}
   * @throws {Error} if rotation is not a number
   */
  set rotation(e) {
    if (typeof e != "number")
      throw new Error("rotation must be a number");
    o(this, Lt, e);
  }
  /**
   * Get the scale
   * @returns {Vector2}
   */
  get scale() {
    return r(this, kt);
  }
  /**
   * Set the scale
   * @param {Vector2} scale - the scale
   * @returns {void}
   * @throws {Error} if scale is not a Vector2
   */
  set scale(e) {
    if (!(e instanceof J))
      throw new Error("scale must be of type Vector2");
    o(this, kt, e);
  }
}
Ft = new WeakMap(), Lt = new WeakMap(), kt = new WeakMap(), Mt = new WeakMap();
var Yt, Xt;
class Ve {
  /**
   * This class provides functionality to control the view of the scene, including position, rotation, and zoom.
   * @class
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
    n(this, Yt);
    /**
     * @private
     * @property {Transform} transform - the camera's transform
     */
    n(this, Xt);
    const { zoom: t } = e;
    this.zoom = t, this.transform = new Rt();
  }
  /**
   * Get the zoom
   * @returns {number}
   */
  get zoom() {
    return r(this, Yt);
  }
  /**
   * Set zoom
   * @param {number} zoom - the new zoom
   * @returns {void}
   * @throws {Error} if zoom is not a number
   */
  set zoom(e) {
    if (typeof e != "number")
      throw new Error("zoom must be a number");
    o(this, Yt, e);
  }
  /**
   * Get the transform
   * @returns {Transform}
   */
  get transform() {
    return r(this, Xt);
  }
  /**
   * Set transform
   * @param {number} transform - the new transform
   * @returns {void}
   * @throws {Error} if transform is not a Transform
   */
  set transform(e) {
    if (!(e instanceof Rt))
      throw new Error("transform must be of type Transform");
    o(this, Xt, e);
  }
}
Yt = new WeakMap(), Xt = new WeakMap();
const Re = /* @__PURE__ */ new Set();
function b(h, e, t) {
  const s = `${h}:${e}`;
  if (Re.has(s))
    return;
  const i = `[DEPRECATION] '${h}' is deprecated since version ${t}. Please use '${e}' instead. This feature will be removed in a future release.`;
  console.warn(i), Re.add(s);
}
const y = [];
for (let h = 0; h < 256; ++h)
  y.push((h + 256).toString(16).slice(1));
function je(h, e = 0) {
  return (y[h[e + 0]] + y[h[e + 1]] + y[h[e + 2]] + y[h[e + 3]] + "-" + y[h[e + 4]] + y[h[e + 5]] + "-" + y[h[e + 6]] + y[h[e + 7]] + "-" + y[h[e + 8]] + y[h[e + 9]] + "-" + y[h[e + 10]] + y[h[e + 11]] + y[h[e + 12]] + y[h[e + 13]] + y[h[e + 14]] + y[h[e + 15]]).toLowerCase();
}
let Se;
const Ge = new Uint8Array(16);
function We() {
  if (!Se) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Se = crypto.getRandomValues.bind(crypto);
  }
  return Se(Ge);
}
const qe = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Pe = { randomUUID: qe };
function Je(h, e, t) {
  var i;
  h = h || {};
  const s = h.random ?? ((i = h.rng) == null ? void 0 : i.call(h)) ?? We();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, je(s);
}
function Ke(h, e, t) {
  return Pe.randomUUID && !h ? Pe.randomUUID() : Je(h);
}
var Ut;
class V {
  /**
   * The base color class
   * @class
   * @param {string} colorStr - a string representation of the color
   * @throws {Error} if the colorStr is not a string
   */
  constructor(e) {
    /**
     * @private
     * @property {string} #colorStr - a string representation of the color
     */
    n(this, Ut);
    this.colorStr = e;
  }
  /**
   * Get the string representation of the color
   * @returns {string}
   */
  get colorStr() {
    return r(this, Ut);
  }
  /**
   * Set colorStr
   * @param {string} colorStr
   * @returns {void}
   * @throws {Error} if colorStr is not a string
   */
  set colorStr(e) {
    if (typeof e != "string")
      throw new Error("colorStr must be a string");
    o(this, Ut, e);
  }
  /**
   * Returns the colorStr property
   * @returns {string}
   */
  toString() {
    return this.colorStr;
  }
}
Ut = new WeakMap();
var be, gt, zt, Bt, Ht, _t, X, N;
const ct = class ct {
  /**
   * Configuration options for the Renderer.
   * @class
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
    n(this, gt, {
      halfWidth: 0,
      halfHeight: 0
    });
    /**
     * @private
     * @property {number} #width - The canvas width
     */
    n(this, zt);
    /**
     * @private
     * @property {number} #height - The canvas height
     */
    n(this, Bt);
    /**
     * @private
     * @property {string|Color} #backgroundColor - The background color
     */
    n(this, Ht);
    /**
     * @private
     * @property {number} #devicePixelRatio - The device pixel ratio
     */
    n(this, _t);
    /**
     * @private
     * @property {Renderer} #renderer - The renderer instance
     */
    n(this, X);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, N, !1);
    const { width: s, height: i, devicePixelRatio: a, backgroundColor: l } = t;
    if (!(e instanceof ke))
      throw new Error("renderer must be of type Renderer");
    o(this, X, e), o(this, N, !0), this.width = s, this.height = i, this.devicePixelRatio = a ?? ct.DEFAULT_OPTIONS.devicePixelRatio, this.backgroundColor = l ?? ct.DEFAULT_OPTIONS.backgroundColor, o(this, N, !1);
  }
  /**
   * The default renderer options
   * @public
   * @static
   * @returns {Object}
   */
  static get DEFAULT_OPTIONS() {
    return r(ct, be);
  }
  /**
   * Gets the cache object
   * @returns {Object}
   */
  get cache() {
    return r(this, gt);
  }
  /**
   * Gets the canvas width
   * @returns {number}
   */
  get width() {
    return r(this, zt);
  }
  /**
   * Sets the canvas width
   * @param {number} width - The new width
   */
  set width(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("width must be a positive number");
    o(this, zt, e), r(this, gt).halfWidth = e / 2, r(this, N) || r(this, X).recalculateDevicePixelRatio();
  }
  /**
   * Gets the canvas height
   * @returns {number}
   */
  get height() {
    return r(this, Bt);
  }
  /**
   * Sets the canvas height
   * @param {number} height - The new height
   */
  set height(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("height must be a positive number");
    o(this, Bt, e), r(this, gt).halfHeight = e / 2, r(this, N) || r(this, X).recalculateDevicePixelRatio();
  }
  /**
   * Gets the device pixel ratio
   * @returns {number}
   */
  get devicePixelRatio() {
    return r(this, _t);
  }
  /**
   * Sets the device pixel ratio
   * @param {number} dpr - The new device pixel ratio
   */
  set devicePixelRatio(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("devicePixelRatio must be a positive number");
    o(this, _t, e), r(this, N) || r(this, X).recalculateDevicePixelRatio();
  }
  /**
   * Gets the background color
   * @returns {string|Color}
   */
  get backgroundColor() {
    return r(this, Ht);
  }
  /**
   * Sets the background color
   * @param {string|Color} backgroundColor - The new background color
   */
  set backgroundColor(e) {
    if (typeof e != "string" && !(e instanceof V))
      throw new Error("backgroundColor must be a Color or a string");
    o(this, Ht, e);
  }
  /**
   * Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width is not a positive number
   * @throws {Error} If height is not a positive number
   */
  setSize(e, t) {
    try {
      o(this, N, !0), this.width = e, this.height = t, r(this, X).recalculateDevicePixelRatio();
    } finally {
      o(this, N, !1);
    }
  }
};
be = new WeakMap(), gt = new WeakMap(), zt = new WeakMap(), Bt = new WeakMap(), Ht = new WeakMap(), _t = new WeakMap(), X = new WeakMap(), N = new WeakMap(), /**
 * The default renderer options
 * @static
 * @private
 * @property {Object} DEFAULT_OPTIONS
 */
n(ct, be, {
  devicePixelRatio: 1,
  backgroundColor: "transparent"
});
let xe = ct;
var Zt, Vt, jt, Gt, U, A, Wt;
class ke {
  /**
   * The base renderer class
   * @class
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
  constructor(e, t, s, i, a = {}) {
    /**
     * @private
     * @property {string} #contextType - The canvas rendering context type
     */
    n(this, Zt);
    /**
     * @private
     * @property {HTMLCanvasElement} #canvas - The canvas element
     */
    n(this, Vt);
    /**
     * @private
     * @property {Scene} #scene - The scene
     */
    n(this, jt);
    /**
     * @private
     * @property {Camera2D} #camera - The camera
     */
    n(this, Gt);
    /**
     * @private
     * @property {number|null} #animationFrameId - The requestAnimationFrame ID
     */
    n(this, U, null);
    /**
     * @private
     * @property {RendererOptions} #options - The renderer options
     */
    n(this, A);
    /**
     * @private
     * @property {number|null} #initializedContext - A flag determine if the context is initialized
     */
    n(this, Wt);
    if (typeof e != "string")
      throw new Error("contextType must be a string");
    this.scene = s, this.camera = i, o(this, Zt, e), o(this, Vt, t), o(this, A, new xe(this, a)), this.initContext(), o(this, Wt, !0);
  }
  /**
   * Check if the context is initialized.
   * @returns {Boolean}
   */
  get initializedContext() {
    return r(this, Wt);
  }
  /**
   * Gets the renderer options
   * @returns {RendererOptions}
   */
  get options() {
    return r(this, A);
  }
  /**
   * Gets the rendering context type
   * @returns {string}
   */
  get contextType() {
    return r(this, Zt);
  }
  /**
   * Gets the canvas element
   * @returns {HTMLCanvasElement}
   */
  get canvas() {
    return r(this, Vt);
  }
  /**
   * Gets the scene
   * @returns {Scene}
   */
  get scene() {
    return r(this, jt);
  }
  /**
   * Sets the scene
   * @param {Scene} scene - The new scene to set
   */
  set scene(e) {
    if (!(e instanceof Qe))
      throw new Error("scene must be of type Scene");
    o(this, jt, e);
  }
  /**
   * Gets the camera
   * @returns {Camera2D}
   */
  get camera() {
    return r(this, Gt);
  }
  /**
   * Sets the camera
   * @param {Camera2D} camera - The new camera to set
   */
  set camera(e) {
    if (!(e instanceof Ve))
      throw new Error("camera must be of type Camera2D");
    o(this, Gt, e);
  }
  /**
   * Gets the center x value
   * @returns {number}
   */
  get centerX() {
    return r(this, A).cache.halfWidth;
  }
  /**
   * Gets the center y value
   * @returns {number}
   */
  get centerY() {
    return r(this, A).cache.halfHeight;
  }
  /**
   * Sets the background color
   * @param {string|Color} backgroundColor - The color
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   * @deprecated since version 0.1.0 - Use the options.backgroundColor setter instead
   */
  setBackgroundColor(e) {
    b(
      "setBackgroundColor()",
      "options.backgroundColor setter",
      "0.1.0"
    ), r(this, A).backgroundColor = e;
  }
  /**
   * Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width is not a positive number
   * @throws {Error} If height is not a positive number
   * @deprecated since version 0.1.0 - Use the options.setSize() method instead
   */
  setSize(e, t) {
    b("setSize()", "options.setSize()", "0.1.0"), r(this, A).setSize(e, t);
  }
  /**
   * Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   * @deprecated since version 0.1.0 - Use the options.devicePixelRatio setter instead
   */
  setDevicePixelRatio(e) {
    b(
      "setDevicePixelRatio()",
      "options.devicePixelRatio setter",
      "0.1.0"
    ), r(this, A).devicePixelRatio = e, this.recalculateDevicePixelRatio();
  }
  /**
   * Returns a numerical value specifying the center x value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerX getter instead
   */
  getCenterX() {
    return b("getCenterX()", "centerX getter", "0.1.0"), r(this, A).cache.halfWidth;
  }
  /**
   * Returns a numerical value specifying the center y value
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the centerY getter instead
   */
  getCenterY() {
    return b("getCenterY()", "centerY getter", "0.1.0"), r(this, A).cache.halfHeight;
  }
  /**
   * Init the rendering context
   * @returns {void}
   */
  initContext() {
    throw new Error("initContext() is not implemented in the subclass");
  }
  /**
   * Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    throw new Error(
      "recalculateDevicePixelRatio() is not implemented in the subclass"
    );
  }
  /**
   * Trigger a new render
   * @returns {void}
   */
  render() {
    throw new Error("render() is not implemented in the subclass");
  }
  /**
   * A helper method that simplifies the use of requestAnimationFrame
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
    const { beforeRender: t, afterRender: s } = e;
    if (t && typeof t != "function")
      throw new Error("beforeRender must be a function");
    if (s && typeof s != "function")
      throw new Error("afterRender must be a function");
    const i = () => {
      t && t(), this.render(), s && s(), o(this, U, requestAnimationFrame(i.bind(this)));
    };
    o(this, U, requestAnimationFrame(i.bind(this)));
  }
  /**
   * A helper method that cancel the loop create from renderer.requestAnimationFrame
   * @returns {void}
   */
  cancelAnimationFrame() {
    r(this, U) !== null && (cancelAnimationFrame(r(this, U)), o(this, U, null));
  }
}
Zt = new WeakMap(), Vt = new WeakMap(), jt = new WeakMap(), Gt = new WeakMap(), U = new WeakMap(), A = new WeakMap(), Wt = new WeakMap();
var wt, bt, pt, qt;
class ft {
  /**
   * This class serves as a base for all 2D objects, providing a transform property.
   * @class
   */
  constructor() {
    /**
     * @private
     * @property {number} #userData - custom user data
     */
    n(this, wt);
    /**
     * @private
     * @property {Transform} #transform - the object's transform
     */
    n(this, bt);
    /**
     * @private
     * @property {boolean} #visible - a flag to determine object visibility
     */
    n(this, pt);
    /**
     * @private
     * @property {string} #uuid - an universal unique identifier
     */
    n(this, qt);
    o(this, bt, new Rt()), o(this, qt, Ke()), o(this, pt, !0), o(this, wt, {});
  }
  /**
   * Get the uuid
   * @returns {string}
   */
  get uuid() {
    return r(this, qt);
  }
  /**
   * Get the visible flag
   * @returns {boolean}
   */
  get visible() {
    return r(this, pt);
  }
  /**
   * Sets the object's visibility
   * @param {Boolean} visible - The new state
   * @returns {void}
   * @throws {Error} If the visible is not a boolean.
   */
  set visible(e) {
    if (typeof e != "boolean")
      throw new Error("visible must be a boolean");
    o(this, pt, e);
  }
  /**
   * Get the custom userData
   * @returns {Object}
   */
  get userData() {
    return r(this, wt);
  }
  /**
   * Sets custom user data
   * @param {Object} userData - The user data
   * @returns {void}
   */
  set userData(e) {
    o(this, wt, e);
  }
  /**
   * Get the transform
   * @returns {Transform}
   */
  get transform() {
    return r(this, bt);
  }
  /**
   * Sets the object's transform
   * @param {Transform} transform - The new transform
   * @returns {void}
   * @throws {Error} If the transform is not a Transform.
   */
  set transform(e) {
    if (!(e instanceof Rt))
      throw new Error("transform must be of type Transform");
    o(this, bt, e);
  }
  /**
   * Sets the userData property reserved for custom user data
   * @param {object} userData - the userData object
   * @returns {void}
   * @deprecated since version 0.1.0 - Use the userData setter instead
   */
  setUserData(e) {
    if (b("setUserData()", "userData setter", "0.1.0"), typeof e != "object")
      throw new Error("userData must be a object");
    this.userData = e;
  }
  /**
   * Sets the visibility of the object
   * @param {boolean} visible - Whether the object should be visible
   * @returns {void}
   * @throws Will throw an error if visible is not a boolean
   * @deprecated since version 0.1.0 - Use the visible setter instead
   */
  setVisible(e) {
    if (b("setVisible()", "visible setter", "0.1.0"), typeof e != "boolean")
      throw new Error("visible must be a boolean");
    this.visible = e;
  }
  /**
   * Renders the light effect on the given 2D rendering context.
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
   * Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e) {
  }
}
wt = new WeakMap(), bt = new WeakMap(), pt = new WeakMap(), qt = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 0)
 */
E(ft, "Z_INDEX", 0);
var z, D, yt, de;
class Qe {
  constructor() {
    n(this, yt);
    /**
     * @private
     * @property {Object2D[]} #children - The scene object2Ds
     */
    n(this, z, []);
    /**
     * @private
     * @property {Map<string, number>} #zIndexes - Holds object and z-index values
     */
    n(this, D, /* @__PURE__ */ new Map());
  }
  /**
   * Gets a copy of scene's children
   * @returns {Object2D[]}
   */
  get children() {
    return [...r(this, z)];
  }
  /**
   * Gets a copy of the scene's uuid-zIndex map
   * @returns {Map<string, number>}
   */
  get zIndexes() {
    return new Map(r(this, D));
  }
  /**
   * Adds one or more 2D objects to the scene
   * @param {...Object2D} children - The 2D object(s) to add to the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
   */
  add(...e) {
    for (const t of e) {
      if (!(t instanceof ft))
        throw new Error("All arguments to add() must be of type Object2D");
      r(this, z).push(t), r(this, D).set(t.uuid, t.constructor.Z_INDEX ?? 0);
    }
    w(this, yt, de).call(this);
  }
  /**
   * Removes one or more 2D objects from the scene
   * @param {...Object2D} children - The 2D object(s) to remove from the scene
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D
   */
  remove(...e) {
    for (const t of e) {
      if (!(t instanceof ft))
        throw new Error("All children arguments must be of type Object2D");
      const { uuid: s } = t, i = r(this, z).indexOf(t);
      i !== -1 && r(this, z).splice(i, 1), r(this, D).has(s) && r(this, D).delete(s);
    }
    w(this, yt, de).call(this);
  }
  /**
   * Change one or more object2D's z-index value
   * @param {number} zIndex - the new z-index value
   * @param {...Object2D} children - the children 
   * @returns {void}
   * @throws {Error} if zIndex is not a number.
   * @throws {Error} If any child is not of type Object2D
   */
  setZIndex(e, ...t) {
    if (typeof e != "number")
      throw new Error("zIndex must be a number");
    for (const s of t) {
      if (!(s instanceof ft))
        throw new Error("All arguments to remove() must be of type Object2D");
      const { uuid: i } = s;
      r(this, D).has(i) && r(this, D).set(i, e);
    }
    w(this, yt, de).call(this);
  }
}
z = new WeakMap(), D = new WeakMap(), yt = new WeakSet(), /**
 * Sorts the children based on their zIndex property
 * @private
 * @returns {void}
 */
de = function() {
  r(this, z).sort((e, t) => {
    const s = r(this, D).get(e.uuid) ?? 0, i = r(this, D).get(t.uuid) ?? 0;
    return s - i;
  });
};
class sr extends ke {
  /**
   * The 2D context renderer
   * @class
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
  constructor(e, t, s, i = {}) {
    super("2d", e, t, s, i);
  }
  /**
   * Init the rendering context
   * @returns {void}
   */
  initContext() {
    this.initializedContext || (this.ctx = this.canvas.getContext("2d"), this.recalculateDevicePixelRatio());
  }
  /**
   * Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const e = this.options.devicePixelRatio || 1, t = this.options.width * e, s = this.options.height * e;
    this.canvas.width = t, this.canvas.height = s, this.ctx.scale(e, e);
  }
  /**
   * Trigger a new render
   * @returns {void}
   */
  render() {
    const e = this.ctx, t = this.options.backgroundColor instanceof V ? this.options.backgroundColor.toString() : this.options.backgroundColor;
    e.clearRect(0, 0, this.options.width, this.options.height), e.fillStyle = t, e.fillRect(0, 0, this.options.width, this.options.height), e.save(), e.scale(this.camera.zoom, this.camera.zoom), e.rotate(-this.camera.transform.rotation), e.translate(
      -this.camera.transform.position.x,
      -this.camera.transform.position.y
    );
    for (let s = 0; s < this.scene.children.length; s++) {
      const i = this.scene.children[s];
      i.visible && i.draw(this);
    }
    e.restore();
  }
}
var Et, St, Tt, K, Q, I, $, v, S, F, M;
const O = class O {
  /**
   * Represents a pattern used for drawing an image on geometries.
   * @class
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
    n(this, F);
    /**
     * @private
     * @property {string} #imageRepeat - the image repeat option
     */
    n(this, Et);
    /**
     * @private
     * @property {number} #imageOffsetX - the image offset's x coordinate
     */
    n(this, St);
    /**
     * @private
     * @property {number} #imageOffsetY - the image offset's y coordinate
     */
    n(this, Tt);
    /**
     * @private
     * @property {number} #imageWidth - the image's width
     */
    n(this, K);
    /**
     * @private
     * @property {number} #imageOffsetY - the image's height'
     */
    n(this, Q);
    /**
     * @private
     * @property {HTMLImageElement} #image - the image element
     */
    n(this, I);
    /**
     * @private
     * @property {Object} #pattern - the pattern
     */
    n(this, $);
    /**
     * @private
     * @property {DOMMatrix} #patternTransform - the pattern's transform
     */
    n(this, v);
    /**
     * @private
     * @property {boolean} #isBatchSetting - a flag to determine if batch setting is in progress
     */
    n(this, S);
    const {
      image: t,
      imageRepeat: s,
      imageOffsetX: i,
      imageOffsetY: a,
      imageWidth: l,
      imageHeight: u
    } = e;
    o(this, S, !0), this.imageRepeat = s, this.imageOffsetX = i, this.imageOffsetY = a, this.imageWidth = l, this.imageHeight = u, this.image = t, o(this, S, !1);
  }
  /**
   * Get the imageRepeat option
   * @returns {string}
   */
  get imageRepeat() {
    return r(this, Et);
  }
  /**
   * Sets the object's imageRepeat
   * @param {string} imageRepeat - The new imageRepeat
   * @returns {void}
   * @throws {Error} If the imageRepeat is not a string.
   */
  set imageRepeat(e) {
    if (e && typeof e != "string" && !O.IMAGE_REPEAT_TYPES[e])
      throw new Error(
        `imageRepeat must be string with value: ${Object.values(
          O.IMAGE_REPEAT_TYPES
        ).join(", ")}`
      );
    o(this, Et, e ?? O.DEFAULT_IMAGE_REPEAT);
  }
  /**
   * Get the imageOffsetX
   * @returns {number}
   */
  get imageOffsetX() {
    return r(this, St);
  }
  /**
   * Sets the image offset's x coordinate
   * @param {number} imageOffsetX - The offset's new x coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
   */
  set imageOffsetX(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetX must be a number");
    o(this, St, e ?? O.DEFAULT_IMAGE_OFFSET.x), r(this, S) || w(this, F, M).call(this);
  }
  /**
   * Get the imageOffsetY
   * @returns {number}
   */
  get imageOffsetY() {
    return r(this, Tt);
  }
  /**
   * Sets the image offset's y coordinate
   * @param {number} imageOffsetY - The offset's new y coordinate
   * @returns {void}
   * @throws {Error} If the imageOffsetY is not a number.
   */
  set imageOffsetY(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetY must be a number");
    o(this, Tt, e ?? O.DEFAULT_IMAGE_OFFSET.y), r(this, S) || w(this, F, M).call(this);
  }
  /**
   * Get the imageWidth
   * @returns {number}
   */
  get imageWidth() {
    return r(this, K);
  }
  /**
   * Sets the image width
   * @param {number} imageWidth - The new width
   * @returns {void}
   * @throws {Error} If the imageWidth is not a number.
   */
  set imageWidth(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageWidth must be a positive number or null");
    o(this, K, e), r(this, S) || w(this, F, M).call(this);
  }
  /**
   * Get the imageHeight
   * @returns {number}
   */
  get imageHeight() {
    return r(this, Q);
  }
  /**
   * Sets the image height
   * @param {number} imageHeight - The new height
   * @returns {void}
   * @throws {Error} If the imageHeight is not a number.
   */
  set imageHeight(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageHeight must be a positive number or null");
    o(this, Q, e), r(this, S) || w(this, F, M).call(this);
  }
  /**
   * Get the image
   * @returns {HTMLImageElement}
   */
  get image() {
    return r(this, I);
  }
  /**
   * Sets the image
   * @param {HTMLImageElement|string} image - The new image
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   */
  set image(e) {
    if (typeof e != "string" && !(e instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (o(this, $, null), typeof e == "string") {
      const t = new Image();
      t.src = e, t.onload = () => {
        o(this, I, t);
      }, o(this, I, t);
    } else e instanceof HTMLImageElement && o(this, I, e);
  }
  /**
   * Create the pattern based on the image and configuration (used by materials)
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {CanvasPattern|null}
   */
  createPattern(e) {
    return !r(this, I) || !r(this, I).complete ? null : r(this, $) ? r(this, $) : (o(this, $, e.createPattern(r(this, I), r(this, Et))), w(this, F, M).call(this), r(this, $));
  }
  /**
   * Set the image's offset
   * @param {number} imageOffsetX - image offset x
   * @param {number} imageOffsetY - image offset y
   * @returns {void}
   * @throws {Error} If the imageOffsetX is not a number.
   * @throws {Error} If the imageOffsetY is not a number.
   */
  setImageOffset(e, t) {
    try {
      o(this, S, !0), this.imageOffsetX = e, this.imageOffsetY = t, w(this, F, M).call(this);
    } finally {
      o(this, S, !1);
    }
  }
  /**
   * Set the image's width and height
   * @param {number|null} [imageWidth] - image width
   * @param {number|null} [imageHeight] - image height
   * @returns {void}
   * @throws {Error} If the imageWidth is not null or a number.
   * @throws {Error} If the imageHeight is not null or a number.
   */
  setImageSize(e, t) {
    try {
      o(this, S, !0), this.imageWidth = e, this.imageHeight = t, w(this, F, M).call(this);
    } finally {
      o(this, S, !1);
    }
  }
  /**
   * Loads and sets an image.
   * @param {HTMLImageElement|string} image - An <img> element or a URL string
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"} [repeat="repeat"] - Pattern repeat mode
   * @returns {void}
   * @throws {Error} If the image is not a string or HTMLImageElement.
   * @deprecated since version 0.1.0 - Use the image setter instead
   */
  setImage(e, t = "repeat") {
    b("setImage()", "image setter", "0.1.0");
    try {
      o(this, S, !0), this.imageRepeat = t, this.image = e;
    } finally {
      o(this, S, !1);
    }
  }
};
Et = new WeakMap(), St = new WeakMap(), Tt = new WeakMap(), K = new WeakMap(), Q = new WeakMap(), I = new WeakMap(), $ = new WeakMap(), v = new WeakMap(), S = new WeakMap(), F = new WeakSet(), /**
 * Position and scale the pattern's transform
 * @private
 * @returns {void}
 */
M = function() {
  if (!r(this, $)) return;
  const e = r(this, K) ? r(this, K) / r(this, I).naturalWidth : 1, t = r(this, Q) ? r(this, Q) / r(this, I).naturalHeight : 1;
  r(this, v) ?? o(this, v, new DOMMatrix()), r(this, v).a = 1, r(this, v).b = 0, r(this, v).c = 0, r(this, v).d = 1, r(this, v).e = 0, r(this, v).f = 0, r(this, v).translateSelf(
    r(this, St),
    r(this, Tt)
  ), r(this, v).scaleSelf(e, t), r(this, $).setTransform(r(this, v));
}, /**
 * The valid image repeat types
 * @static
 * @property {string[]} [IMAGE_REPEAT_TYPES]
 */
E(O, "IMAGE_REPEAT_TYPES", {
  repeat: "repeat",
  "repeat-x": "repeat-x",
  "repeat-y": "repeat-y",
  "no-repeat": "no-repeat"
}), /**
 * The default image repeat option
 * @property {string} DEFAULT_IMAGE_REPEAT
 */
E(O, "DEFAULT_IMAGE_REPEAT", "repeat"), /**
 * The default image offset
 * @property {Object} DEFAULT_IMAGE_OFFSET 
 */
E(O, "DEFAULT_IMAGE_OFFSET", {
  x: 0,
  y: 0
});
let Ce = O;
var tt, xt, et, rt, Ct;
class ir {
  /**
   * This class can be used to get elapsed and delta time (Remember to call clockObj.update at the beginning of the animation loop).
   * @class
   */
  constructor() {
    /**
     * @private
     * @property {number} #startTime - when the object was created.
     */
    n(this, tt);
    /**
     * @private
     * @property {number} #oldTime - last frame time.
     */
    n(this, xt);
    /**
     * @private
     * @property {number} #elapsedTime - time since instantiation.
     */
    n(this, et);
    /**
     * @private
     * @property {number} #deltaTime - time since last frame
     */
    n(this, rt);
    /**
     * @private
     * @property {number} #lastFrame - when the update method was last called.
     */
    n(this, Ct);
    this.restart();
  }
  /**
   * Get the time the object was instantiated.
   * @returns {number}
   */
  get startTime() {
    return r(this, tt);
  }
  /**
   * Get time since instantiation.
   * @returns {number}
   */
  get elapsedTime() {
    return r(this, et);
  }
  /**
   * Get time since last frame.
   * @returns {number}
   */
  get deltaTime() {
    return r(this, rt);
  }
  /**
   * Restart the start time
   * @returns {void}
   */
  restart() {
    o(this, tt, performance.now()), o(this, xt, r(this, tt)), o(this, et, 0), o(this, rt, 0), o(this, Ct, 0);
  }
  /**
   * Update the internal time values (call at the beginning of your animation loop)
   * @returns {void}
   */
  update() {
    const e = performance.now();
    if (e !== r(this, Ct)) {
      const t = e;
      o(this, rt, (t - r(this, xt)) / 1e3), o(this, et, (t - r(this, tt)) / 1e3), o(this, xt, t), o(this, Ct, e);
    }
  }
  /**
   * Get the time elapsed (in seconds) since instantiation
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the elapsedTime getter instead
   */
  getElapsedTime() {
    return b("getElapsedTime()", "elapsedTime getter", "0.1.0"), this.update(), r(this, et);
  }
  /**
   * Returns the time elapsed (in seconds) since the last frame or call.
   * @returns {number}
   * @deprecated since version 0.1.0 - Use the deltaTime getter instead
   */
  getDeltaTime() {
    return b("getDeltaTime()", "deltaTime getter", "0.1.0"), this.update(), r(this, rt);
  }
}
tt = new WeakMap(), xt = new WeakMap(), et = new WeakMap(), rt = new WeakMap(), Ct = new WeakMap();
class ve {
  /**
   * Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  applyToContext2D(e) {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
var pe, B, H, st, it, ot;
const Dt = class Dt extends ve {
  /**
   * A basic material that implements fillStyle, strokeStyle and lineWidth
   * @class
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
    n(this, B);
    /**
     * @private
     * @property {Color} #strokeStyle - The material's strokeStyle
     */
    n(this, H);
    /**
     * @private
     * @property {number} #lineWidth - The material's lineWidth
     */
    n(this, st);
    /**
     * @private
     * @property {Texture2D} #texture2D - The material's texture2D
     */
    n(this, it);
    /**
     * @private
     * @property {boolean} #isBatchSetting - Flag indicating if batch setting is active
     */
    n(this, ot, !1);
    const { fillStyle: s, strokeStyle: i, lineWidth: a, texture2D: l } = t;
    if (!s && !i)
      throw new Error("Either fillStyle or strokeStyle must be provided");
    o(this, ot, !0), this.fillStyle = s, this.strokeStyle = i, this.lineWidth = a, this.texture2D = l, o(this, ot, !1);
  }
  /**
   * The default line width.
   * @public
   * @static
   * @returns {number}
   */
  static get DEFAULT_LINE_WIDTH() {
    return r(Dt, pe);
  }
  /**
   * Gets the material's fillStyle
   * @returns {Color}
   */
  get fillStyle() {
    return r(this, B);
  }
  /**
   * Sets the material's fillStyle
   * @param {Color|null} fillStyle - The new fillStyle to set
   * @returns {void}
   * @throws {Error} If fillStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set fillStyle(t) {
    if (t && !(t instanceof V))
      throw new Error("fillStyle must be a Color or null");
    if (!r(this, ot) && !t && !r(this, H))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    o(this, B, t);
  }
  /**
   * Gets the material's strokeStyle
   * @returns {Color|null|undefined}
   */
  get strokeStyle() {
    return r(this, H);
  }
  /**
   * Sets the material's strokeStyle
   * @param {Color|null} strokeStyle - The new strokeStyle to set
   * @returns {void}
   * @throws {Error} If strokeStyle is not of type Color
   * @throws {Error} If both fillStyle and strokeStyle are null
   */
  set strokeStyle(t) {
    if (t && !(t instanceof V))
      throw new Error("strokeStyle must be a Color or null");
    if (!r(this, ot) && !t && !r(this, B))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    o(this, H, t);
  }
  /**
   * Gets the material's lineWidth
   * @returns {number|null|undefined}
   */
  get lineWidth() {
    return r(this, st);
  }
  /**
   * Sets the material's lineWidth
   * @param {number|null} lineWidth - The new lineWidth to set (defaults to BasicMaterial.DEFAULT_LINE_WIDTH if null)
   * @returns {void}
   * @throws {Error} If lineWidth is not null or a number.
   */
  set lineWidth(t) {
    if (t != null && (typeof t != "number" || t <= 0))
      throw new Error("lineWidth must be a positive number or null");
    o(this, st, t ?? Dt.DEFAULT_LINE_WIDTH);
  }
  /**
   * Gets the material's texture2D 
   * @returns {Texture2D|null|undefined}
   */
  get texture2D() {
    return r(this, it);
  }
  /**
   * Sets the material's texture2D
   * @param {Texture2D|null} texture2D - The new texture2D to set
   * @returns {void}
   * @throws {Error} If texture2D is not null or of type Texture2D
   */
  set texture2D(t) {
    if (t && !(t instanceof Ce))
      throw new Error("texture2D must be of type Texture2D or null");
    o(this, it, t);
  }
  /**
   * Apply the material configuration to the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  applyToContext2D(t) {
    r(this, it) ? t.fillStyle = r(this, it).createPattern(t) : r(this, B) && (t.fillStyle = r(this, B).toString()), r(this, H) && (t.strokeStyle = r(this, H).toString()), r(this, st) && (t.lineWidth = r(this, st));
  }
};
pe = new WeakMap(), B = new WeakMap(), H = new WeakMap(), st = new WeakMap(), it = new WeakMap(), ot = new WeakMap(), /**
 * The default line width
 * @private
 * @property {number} #DEFAULT_LINE_WIDTH
 */
n(Dt, pe, 1);
let Oe = Dt;
class At {
  /**
   * Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  checkMaterialConflicts(e) {
  }
  /**
   * Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e, t, s) {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
var Jt, Kt;
class or extends At {
  /**
   * This class provides a rectangle shape with width and height properties.
   * @class
   * @param {number} width - The width of the rectangle (must be positive).
   * @param {number} height - The height of the rectangle (must be positive).
   * @throws {Error} If the width is not a positive number.
   * @throws {Error} If the height is not a positive number.
   */
  constructor(t, s) {
    super();
    /**
     * @private
     * @property {number} width - the rectangle's width
     */
    n(this, Jt);
    /**
     * @private
     * @property {number} height - the rectangle's height
     */
    n(this, Kt);
    this.width = t, this.height = s;
  }
  /**
   * Get the width
   * @returns {number}
   */
  get width() {
    return r(this, Jt);
  }
  /**
   * Set the width
   * @param {number} width - the new width
   * @returns {void}
   * @throws {Error} if width is not a positive number
   */
  set width(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("width must be a positive number");
    o(this, Jt, t);
  }
  /**
   * Get the height
   * @returns {number}
   */
  get height() {
    return r(this, Kt);
  }
  /**
   * Set the height
   * @param {number} height - the new height
   * @returns {void}
   * @throws {Error} if height is not a positive number
   */
  set height(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("height must be a positive number");
    o(this, Kt, t);
  }
  /**
   * Draws the rectangle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  drawContext2D(t, s, i) {
    if (!(i instanceof ve))
      throw new Error("material must be of type Material");
    if (!(s instanceof Rt))
      throw new Error("transform must be of type Transform");
    const { scale: a, position: l, rotation: u, localAnchorPoint: d } = s, c = d.offset, m = this.width * a.x, f = this.height * a.y, x = m / 2, p = f / 2, R = -c[0] * x, ut = -c[1] * p;
    t.save(), t.translate(l.x - R, l.y - ut), t.rotate(u), t.translate(R - x, ut - p), i.fillStyle && t.fillRect(0, 0, m, f), i.strokeStyle && t.strokeRect(0, 0, m, f), t.restore();
  }
}
Jt = new WeakMap(), Kt = new WeakMap();
var Qt;
class nr extends At {
  /**
   * This class provides a circle shape with a radius property.
   * @class
   * @param {number} radius - The radius of the circle (must be positive).
   * @throws {Error} If the radius is not a positive number.
   */
  constructor(t) {
    super();
    /**
     * @private
     * @property {number} radius - the circle's radius
     */
    n(this, Qt);
    this.radius = t;
  }
  /**
   * Get the radius
   * @returns {number}
   */
  get radius() {
    return r(this, Qt);
  }
  /**
   * Set the radius
   * @param {number} radius - the new radius
   * @returns {void}
   * @throws {Error} if radius is not a positive number
   */
  set radius(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    o(this, Qt, t);
  }
  /**
   * Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(t, s, i) {
    const { position: a, rotation: l, scale: u, localAnchorPoint: d } = s, c = d.offset, m = (u.x + u.y) / 2, f = this.radius * m, x = c[0] * f, p = c[1] * f;
    t.save(), t.translate(a.x + x, a.y + p), t.rotate(l), t.translate(-x, -p), t.beginPath(), t.arc(0, 0, f, 0, Math.PI * 2), t.closePath(), i.fillStyle && t.fill(), i.strokeStyle && t.stroke(), t.restore();
  }
}
Qt = new WeakMap();
var vt, te, nt, ht, ye, Me;
const C = class C extends At {
  /**
   * This class provides functionality for creating and managing text-based geometry.
   * @class
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
  constructor(t, s = {}) {
    super();
    n(this, ye);
    /**
     * @private
     * @property {number} #text - the text to be displayed
     */
    n(this, vt);
    /**
     * @private
     * @property {number} #options - the options
     */
    n(this, te);
    /**
     * @private
     * @property {number} width - the text's width
     */
    n(this, nt);
    /**
     * @private
     * @property {number} height - the text's height
     */
    n(this, ht);
    this.text = t, this.options = s;
  }
  /**
   * Get the text
   * @returns {string}
   */
  get text() {
    return r(this, vt);
  }
  /**
   * Set the text
   * @param {number} text - the new text
   * @returns {void}
   * @throws {Error} if text is not a string
   */
  set text(t) {
    if (typeof t != "string")
      throw new Error("text must be a string");
    o(this, vt, t), o(this, nt, null), o(this, ht, null);
  }
  /**
   * Get the options
   * @returns {Object}
   */
  get options() {
    return r(this, te);
  }
  /**
   * Set the options
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
    const { maxWidth: s, textAlign: i, textBaseline: a, direction: l, font: u } = t;
    if (s !== void 0 && typeof s != "number")
      throw new Error("maxWidth must be a number or undefined");
    if (u && typeof u != "string")
      throw new Error("font must be a string or null");
    if (i && typeof i != "string" && !C.TEXT_ALIGNMENT_TYPES[i])
      throw new Error(
        `textAlign must be a string with value: ${Object.values(
          C.TEXT_ALIGNMENT_TYPES
        ).join(", ")}`
      );
    if (a && typeof a != "string" && !C.TEXT_BASELINE_TYPES[a])
      throw new Error(
        `textBaseline must be a string with value: ${Object.values(
          C.TEXT_BASELINE_TYPES
        ).join(", ")}`
      );
    if (l && typeof l != "string" && !C.TEXT_DIRECTION_TYPES[l])
      throw new Error(
        `direction must be a string with value: ${Object.values(
          C.TEXT_DIRECTION_TYPES
        ).join(", ")}`
      );
    o(this, te, {
      ...C.DEFAULT_OPTIONS,
      ...t
    });
  }
  /**
   * Draws the text onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the text
   * @param {Material} material - The material to use for rendering the text
   * @returns {void}
   */
  drawContext2D(t, s, i) {
    const { maxWidth: a, textAlign: l, textBaseline: u, direction: d, font: c } = this.options, { fillStyle: m, strokeStyle: f } = i;
    c && t.font !== c && (t.font = c), l && t.textAlign !== l && (t.textAlign = l), u && t.textBaseline !== u && (t.textBaseline = u), d && t.direction !== d && (t.direction = d), (!r(this, nt) || !r(this, ht)) && w(this, ye, Me).call(this, t);
    const { position: x, rotation: p, scale: R, localAnchorPoint: ut } = s, me = ut.offset, Ae = r(this, nt) / 2 * me[0] * R.x, Ie = r(this, ht) / 2 * me[1] * R.y;
    t.save(), t.translate(x.x + Ae, x.y + Ie), t.rotate(p), t.translate(-Ae, -Ie), m && t.fillText(this.text, 0, 0, a), f && t.strokeText(this.text, 0, 0, a), t.restore();
  }
};
vt = new WeakMap(), te = new WeakMap(), nt = new WeakMap(), ht = new WeakMap(), ye = new WeakSet(), /**
 * Recalculate width and height based on text.
 * @returns {void}
 */
Me = function(t) {
  const { width: s, actualBoundingBoxAscent: i, actualBoundingBoxDescent: a } = t.measureText(r(this, vt));
  o(this, nt, s), o(this, ht, i + a);
}, /**
 * The valid text alignment types
 * @static
 * @property {string[]} [TEXT_ALIGNMENT_TYPES]
 */
E(C, "TEXT_ALIGNMENT_TYPES", {
  start: "start",
  end: "end",
  left: "left",
  right: "right",
  center: "center"
}), /**
 * The valid text direction types
 * @static
 * @property {string[]} [TEXT_DIRECTION_TYPES]
 */
E(C, "TEXT_DIRECTION_TYPES", {
  ltr: "ltr",
  rtl: "rtl",
  inherit: "inherit"
}), /**
 * @static
 * @property {string[]} [TEXT_BASELINE_TYPES] - The valid text baseline types
 */
E(C, "TEXT_BASELINE_TYPES", {
  top: "top",
  hanging: "hanging",
  middle: "middle",
  alphabetic: "alphabetic",
  ideographic: "ideographic",
  bottom: "bottom"
}), /**
 * The default options for TextGeometry
 * @static
 * @property {Object} [DEFAULT_OPTIONS]
 * @property {number|null} [DEFAULT_OPTIONS.maxWidth=undefined] - The default maximum width for the text layout
 * @property {string} [DEFAULT_OPTIONS.font="14px Arial"] - The default font family for the text content
 * @property {"start"|"end"|"left"|"right"|"center"|null} [DEFAULT_OPTIONS.textAlign=null] - The default horizontal alignment for the text content
 * @property {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null} [DEFAULT_OPTIONS.textBaseline=null] - The default vertical alignment for the text content
 * @property {"ltr"|"rtl"|"inherit"|null} [DEFAULT_OPTIONS.direction=null] - The default direction for the text content
 */
E(C, "DEFAULT_OPTIONS", {
  // maxWidth: null, Setting default maxWidth to null can cause issues
  font: "14px Arial",
  textAlign: null,
  textBaseline: null,
  direction: null
});
let Ne = C;
var T, at, j, Ye, Xe, Ue;
const Y = class Y extends At {
  /**
   * This class provides a way to draw a custom shape using lines.
   * @class
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array must contain at least one 4-number arrays
   * @throws {Error} If vertices as array must contain arrays with a length of four numbers
   * @throws {Error} If vertices as Float32Array must have a length of 4
   * @throws {Error} If vertices as Float32Array must contain an even number of values
   */
  constructor(t) {
    super();
    n(this, j);
    /**
     * @private
     * @property {Float32Array} #vertices - Flat array of lines.
     */
    n(this, T);
    /**
     * @private
     * @property {Array<number>} #centroid - The centroid point of the polygon.
     */
    n(this, at);
    this.vertices = t;
  }
  /**
   * Gets the lines' vertices
   * @returns {Float32Array}
   */
  get vertices() {
    return r(this, T);
  }
  /**
   * Set vertices.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices
   * @returns {void}
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array must contain at least one 4-number arrays
   * @throws {Error} If vertices as array must contain arrays with a length of four numbers
   * @throws {Error} If vertices as Float32Array must have a length of 4
   * @throws {Error} If vertices as Float32Array must contain an even number of values
   */
  set vertices(t) {
    const s = Array.isArray(t);
    if (!s && !(t instanceof Float32Array))
      throw new Error("vertices must be a array or Float32Array");
    if (s) {
      if (t.length < 1)
        throw new Error(
          "vertices as array must contain at least one 4-number arrays"
        );
      if (t.some((i) => !Array.isArray(i) || i.length !== 4))
        throw new Error(
          "vertices as array must contain arrays with a length of four numbers"
        );
      w(this, j, Ye).call(this, t);
    } else {
      if (t.length < 4)
        throw new Error("vertices as Float32Array must have a length of 4");
      if (t.length % 2 === 1)
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      o(this, T, t);
    }
    w(this, j, Xe).call(this), w(this, j, Ue).call(this);
  }
  /**
   * Check for any conflicts between the geometry and the provided material
   * @param {Material} material - The material to check against
   * @returns {void}
   * @throws {Error} If material does not have a strokeStyle
   */
  checkMaterialConflicts(t) {
    if (!t.strokeStyle)
      throw new Error("LineGeometry requires a strokeStyle in the material");
  }
  /**
   * Draws the lines onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the line
   * @param {Material} material - The material to use for rendering the line
   * @returns {void}
   */
  drawContext2D(t, s, i) {
    const { position: a, rotation: l, scale: u, localAnchorPoint: d } = s, { offset: c } = d, m = r(this, T), f = r(this, at)[0] * c[0] * u.x, x = r(this, at)[1] * c[1] * u.y;
    t.save(), t.translate(a.x + f, a.y + x), t.rotate(l), t.translate(-f, -x), t.beginPath();
    for (let p = 0; p < m.length; p += Y.SEGMENT_SIZE)
      t.moveTo(m[p] * u.x, m[p + 1] * u.y), t.lineTo(m[p + 2] * u.x, m[p + 3] * u.y);
    i.strokeStyle && t.stroke(), t.restore();
  }
};
T = new WeakMap(), at = new WeakMap(), j = new WeakSet(), /**
 * Convert the nested array to Float32Array and set the vertices.
 * @returns {void}
 */
Ye = function(t) {
  const s = t.length * Y.SEGMENT_SIZE;
  (!r(this, T) || r(this, T).length !== s) && o(this, T, new Float32Array(s));
  let i = 0;
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    r(this, T)[i] = l[0], r(this, T)[i + 1] = l[1], r(this, T)[i + 2] = l[2], r(this, T)[i + 3] = l[3], i += Y.SEGMENT_SIZE;
  }
}, /**
 * Calculates the centroid
 * @private
 */
Xe = function() {
  const t = r(this, T), s = t.length, i = s / 2, a = [0, 0];
  for (let l = 0; l < s; l += Y.SEGMENT_SIZE) {
    const u = t[l], d = t[l + 1], c = t[l + 2], m = t[l + 3];
    a[0] += u + c, a[1] += d + m;
  }
  a[0] = a[0] / i, a[1] = a[1] / i, o(this, at, a);
}, /**
 * Translates all points so the geometry is centered around [0, 0].
 * @private
 */
Ue = function() {
  const t = r(this, T), s = r(this, at);
  for (let i = 0; i < t.length; i += Y.SEGMENT_SIZE)
    t[i] -= s[0], t[i + 1] -= s[1], t[i + 2] -= s[0], t[i + 3] -= s[1];
}, /**
 * @property {number} #SEGMENT_SIZE - Defines the number of coordinates stored in the flat array for line segments (e.g. 1=x1, 2=y1, 3=x2, 4=y2).
 */
E(Y, "SEGMENT_SIZE", 4);
let $e = Y;
var g, lt, G, ze, Be, He;
const q = class q extends At {
  /**
   * This class provides a way to draw a custom polygon.
   * @class
   * @param {Array.<Array<number>>|Float32Array} vertices - Array of 4-number arrays or a Float32Array describing vertices.
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array has less than three 2-number arrays
   * @throws {Error} If vertices as array has an array with less or more than two numbers
   * @throws {Error} If the length of vertices as Float32Array is less than 6
   * @throws {Error} If points has an array with less or more than two numbers
   */
  constructor(t) {
    super();
    n(this, G);
    /**
     * @private
     * @property {Float32Array} #vertices - A flat array of vertices.
     */
    n(this, g);
    /**
     * @private
     * @property {Polygon2D} #shape - The polygon object is used to calculate center.
     */
    n(this, lt);
    this.vertices = t;
  }
  /**
   * Sets the polgyon's points
   * Note: The setter recalculate the shape and its center.
   * Note: The setter automatically adds the first point as the last if they are not equal to ensure the polygon close.
   * @param {Array.<Array<number>>|Float32Array} vertices - The polgyon's points
   * @returns {void}
   * @throws {Error} If vertices is not an array or Float32Array
   * @throws {Error} If vertices as array has less than three 2-number arrays
   * @throws {Error} If vertices as array has an array with less or more than two numbers
   * @throws {Error} If the length of vertices as Float32Array is less than 6
   * @throws {Error} If points has an array with less or more than two numbers
   */
  set vertices(t) {
    const s = Array.isArray(t);
    if (!s && !(t instanceof Float32Array))
      throw new Error("vertices must be a array or Float32Array");
    if (s) {
      if (t.length < 3)
        throw new Error(
          "vertices as array must contain at least three 2-number arrays"
        );
      if (t.some((i) => !Array.isArray(i) || i.length !== 2))
        throw new Error(
          "vertices as array must contain arrays with a length of two numbers"
        );
      w(this, G, ze).call(this, t);
    } else {
      if (t.length < 6)
        throw new Error("vertices as Float32Array must have a length of 6");
      if (t.length % 2 === 1)
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      o(this, g, t);
    }
    w(this, G, Be).call(this), o(this, lt, new Te(r(this, g))), r(this, lt).calculateCentroid(), w(this, G, He).call(this);
  }
  /**
   * Gets the polygons's vertices
   * @returns {Float32Array}
   */
  get vertices() {
    return r(this, g);
  }
  /**
   * Draws the circle onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  drawContext2D(t, s, i) {
    const { position: a, rotation: l, scale: u, localAnchorPoint: d } = s, { offset: c } = d, { centroid: m } = r(this, lt), f = r(this, g), x = m.x * u.x * c[0], p = m.y * u.y * c[1];
    t.save(), t.translate(a.x + x, a.y + p), t.rotate(l), t.translate(-x, -p), t.beginPath(), t.moveTo(f[0] * u.x, f[1] * u.y);
    for (
      let R = 2;
      // Skip the first two.
      R < f.length;
      R += q.COORDINATES_SIZE
    ) {
      const ut = f[R] * u.x, me = f[R + 1] * u.y;
      t.lineTo(ut, me);
    }
    t.closePath(), i.strokeStyle && t.stroke(), i.fillStyle && t.fill(), t.restore();
  }
};
g = new WeakMap(), lt = new WeakMap(), G = new WeakSet(), /**
 * Convert the nested array to Float32Array and set the vertices.
 * @returns {void}
 */
ze = function(t) {
  const s = t.length * q.COORDINATES_SIZE;
  (!r(this, g) || r(this, g).length !== s) && o(this, g, new Float32Array(s));
  let i = 0;
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    r(this, g)[i] = l[0], r(this, g)[i + 1] = l[1], i += q.COORDINATES_SIZE;
  }
}, /**
 * Ensure the first and last coordinate is the same values.
 * The first and last point must be the same for the polygon to close.
 * 
 * @returns {void}
 */
Be = function() {
  const t = r(this, g), s = t.length, i = t[0], a = t[1], l = t[s - 2], u = t[s - 1];
  (i !== l || a !== u) && (o(this, g, new Float32Array(s + 2)), r(this, g).set(t, 0), r(this, g)[s] = i, r(this, g)[s + 1] = a);
}, /**
 * Move the vertices toward the center to ensure the anchor point can be calculated correct.
 * @throws {Error} If the #shape is undefined.
 * @throws {Error} If the #shape.center is undefined.
 */
He = function() {
  const t = r(this, lt);
  if (!t)
    throw new Error(
      "#polygon2 is undefined (It is created when using the points setter)."
    );
  const { centroid: s } = t;
  if (!s)
    throw new Error(
      "#polygon2.centroid is undefined. #polygon2.calculateCentroid() must be called before correcting points."
    );
  for (let i = 0; i < this.vertices.length; i += q.COORDINATES_SIZE)
    r(this, g)[i] -= s.x, r(this, g)[i + 1] -= s.y;
}, /**
 * @property {number} #COORDINATES_SIZE - Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
 */
E(q, "COORDINATES_SIZE", 2);
let Fe = q;
var _, Z;
class tr extends ft {
  /**
   * This class combines geometry and material to create a drawable object.
   * @class
   * @param {Geometry} geometry - The mesh's geometry
   * @param {Material} material - The mesh's material
   * @throws {Error} If geometry is not of type Geometry
   * @throws {Error} If material  is not of type Material
   */
  constructor(t, s) {
    super();
    /**
     * @private
     * @property {Geometry} #geometry - The mesh's geometry
     */
    n(this, _);
    /**
     * @private
     * @property {Material} #material - The mesh's material
     */
    n(this, Z);
    this.geometry = t, this.material = s;
  }
  /**
   * Sets the mesh's geometry
   * @param {Geometry} newGeometry - The new geometry to set
   * @returns {void}
   * @throws {Error} If newGeometry is not of type Geometry
   */
  set geometry(t) {
    if (!(t instanceof At))
      throw new Error("geometry must be of type Geometry");
    o(this, _, t), r(this, Z) && r(this, _).checkMaterialConflicts(r(this, Z));
  }
  /**
   * Gets the mesh's geometry
   * @returns {Geometry}
   */
  get geometry() {
    return r(this, _);
  }
  /**
   * Sets the mesh's material
   * @param {Material} newMaterial - The new material to set
   * @returns {void}
   * @throws {Error} If newMaterial is not of type Material
   */
  set material(t) {
    if (!(t instanceof ve))
      throw new Error("material must be of type Material");
    o(this, Z, t), r(this, _) && r(this, _).checkMaterialConflicts(r(this, Z));
  }
  /**
   * Gets the mesh's material
   * @returns {Material}
   */
  get material() {
    return r(this, Z);
  }
  /**
   * Draws the mesh onto the given canvas 2D context
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw onto
   * @returns {void}
   */
  drawContext2D(t) {
    this.material.applyToContext2D(t), this.geometry.drawContext2D(t, this.transform, this.material);
  }
}
_ = new WeakMap(), Z = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 1000)
 */
E(tr, "Z_INDEX", 1e3);
var ee, re, se, ie, L;
class Le extends V {
  /**
   * A color defined by red, green, blue, and alpha
   * @class
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, s, i, a = 1) {
    super(`rgba(${t}, ${s}, ${i}, ${a})`);
    /**
     * @private
     * @property {number} r - red (0-255)
     */
    n(this, ee);
    /**
     * @private
     * @property {number} g - green (0-255)
     */
    n(this, re);
    /**
     * @private
     * @property {number} b - blue (0-255)
     */
    n(this, se);
    /**
     * @private
     * @property {number} a - alpha (0-1)
     */
    n(this, ie);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, L, !1);
    this.set(t, s, i, a);
  }
  /**
   * Get red (0-255)
   * @returns {number}
   */
  get r() {
    return r(this, ee);
  }
  /**
   * Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   */
  set r(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("r must be a number between 0 and 255");
    o(this, ee, t), r(this, L) || this.updateColorStr();
  }
  /**
   * Get green (0-255)
   * @returns {number}
   */
  get g() {
    return r(this, re);
  }
  /**
   * Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   */
  set g(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("g must be a number between 0 and 255");
    o(this, re, t), r(this, L) || this.updateColorStr();
  }
  /**
   * Get blue (0-255)
   * @returns {number}
   */
  get b() {
    return r(this, se);
  }
  /**
   * Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   */
  set b(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("b must be a number between 0 and 255");
    o(this, se, t), r(this, L) || this.updateColorStr();
  }
  /**
   * Get alpha (0-1)
   * @returns {number}
   */
  get a() {
    return r(this, ie);
  }
  /**
   * Set alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    o(this, ie, t), r(this, L) || this.updateColorStr();
  }
  /**
   * Set the rgba color
   * @param {number} r - red (0-255)
   * @param {number} g - green (0-255)
   * @param {number} b - blue (0-255)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if r, g, or b is not between 0 and 255
   * @throws {Error} if a is not between 0 and 1
   */
  set(t, s, i, a) {
    try {
      o(this, L, !0), this.r = t, this.g = s, this.b = i, this.a = a, this.updateColorStr();
    } finally {
      o(this, L, !1);
    }
  }
  /**
   * update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  /**
   * Set red
   * @param {number} r - red (0-255)
   * @returns {void}
   * @throws {Error} if r is not between 0 and 255
   * @deprecated since version 0.1.0 - use r setter instead
   */
  setRed(t) {
    b("setRed()", "r setter", "0.1.0"), this.r = t;
  }
  /**
   * Set green
   * @param {number} g - green (0-255)
   * @returns {void}
   * @throws {Error} if g is not between 0 and 255
   * @deprecated since version 0.1.0 - use g setter instead
   */
  setGreen(t) {
    b("setGreen()", "g setter", "0.1.0"), this.g = t;
  }
  /**
   * Set blue
   * @param {number} b - blue (0-255)
   * @returns {void}
   * @throws {Error} if b is not between 0 and 255
   * @deprecated since version 0.1.0 - use b setter instead
   */
  setBlue(t) {
    b("setBlue()", "b setter", "0.1.0"), this.b = t;
  }
  /**
   * Set the alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(t) {
    b("setAlpha()", "a setter", "0.1.0"), this.a = t;
  }
  /**
   * Returns a string representation of the color in rgba format
   * @returns {string}
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  /**
   * Returns a string representation of the color in rgb format
   * @returns {string}
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
ee = new WeakMap(), re = new WeakMap(), se = new WeakMap(), ie = new WeakMap(), L = new WeakMap();
var oe, ne, he, ae;
class er extends ft {
  /**
   * A simple 2D light source for Canvas rendering.
   * @class
   * @param {number} radius - The radius of the light
   * @param {number} intensity - The intensity of the light
   * @param {Color} color - The color of the light
   * @param {Color} colorStop - The colorStop of the light
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a Color.
   * @throws {Error} If the colorStop is not a Color.
   */
  constructor(t = 100, s = 1, i = new Le(255, 255, 200, 1), a = new Le(255, 255, 200, 0)) {
    super();
    /**
     * @private
     * @property {number} #radius - The light's radius
     */
    n(this, oe);
    /**
     * @private
     * @property {number} #intensity - The light's intensity
     */
    n(this, ne);
    /**
     * @private
     * @property {Color} #color - The light's color
     */
    n(this, he);
    /**
     * @private
     * @property {Color} #intensity - The light's colorStop
     */
    n(this, ae);
    this.radius = t, this.intensity = s, this.color = i, this.colorStop = a, this.zIndex = 1;
  }
  /**
   * Gets the light's radius
   * @returns {number}
   */
  get radius() {
    return r(this, oe);
  }
  /**
   * Sets the light's radius
   * @param {number} radius - The light's radius
   * @returns {void}
   * @throws {Error} If the radius is not a positive number.
   */
  set radius(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    o(this, oe, t);
  }
  /**
   * Gets the light's intensity
   * @returns {number}
   */
  get intensity() {
    return r(this, ne);
  }
  /**
   * Sets the light's intensity
   * @param {number} intensity - The light's intensity
   * @returns {void}
   * @throws {Error} If the intensity is not a positive number.
   */
  set intensity(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("intensity must be a positive number");
    o(this, ne, t);
  }
  /**
   * Gets the light's color
   * @returns {Color}
   */
  get color() {
    return r(this, he);
  }
  /**
   * Sets the light's color
   * @param {Color} color - The light's color
   * @returns {void}
   * @throws {Error} If the color is not a Color.
   */
  set color(t) {
    if (!(t instanceof V))
      throw new Error("color must be a Color");
    o(this, he, t);
  }
  /**
   * Gets the light's colorStop
   * @returns {Color}
   */
  get colorStop() {
    return r(this, ae);
  }
  /**
   * Sets the light's colorStop
   * @param {Color} color - The light's colorStop
   * @returns {void}
   * @throws {Error} If the colorStop is not a Color.
   */
  set colorStop(t) {
    if (!(t instanceof V))
      throw new Error("colorStop must be a Color");
    o(this, ae, t);
  }
  /**
   * Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D(t) {
    const { radius: s, color: i, colorStop: a, intensity: l } = this, { x: u, y: d } = this.transform.position, c = t.createRadialGradient(u, d, 0, u, d, s);
    c.addColorStop(0, i.toString()), c.addColorStop(1, a.toString()), t.save(), t.globalAlpha = l, t.fillStyle = c, t.fillRect(u - s, d - s, s * 2, s * 2), t.restore();
  }
}
oe = new WeakMap(), ne = new WeakMap(), he = new WeakMap(), ae = new WeakMap(), /**
 * @static
 * @property {number} Z_INDEX - defines the class' default z-index (default: 2000)
 */
E(er, "Z_INDEX", 2e3);
var le, ue, ce, fe, k;
class hr extends V {
  /**
   * A color defined by hue, saturation, lightness, and alpha
   * @class
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  constructor(t, s, i, a = 1) {
    super(`hsla(${t}, ${s}%, ${i}%, ${a})`);
    /**
     * @private
     * @property {number} #h - hue (0-360)
     */
    n(this, le);
    /**
     * @private
     * @property {number} #s - saturation (0-100)
     */
    n(this, ue);
    /**
     * @private
     * @property {number} #l - lightness (0-100)
     */
    n(this, ce);
    /**
     * @private
     * @property {number} #a - alpha (0-1)
     */
    n(this, fe);
    /**
     * @private
     * @property {Renderer} #isBatchSetting - A flag to indicate if batch setting is in progress
     */
    n(this, k, !1);
    this.set(t, s, i, a);
  }
  /**
   * Get hue (0-360)
   * @returns {number}
   */
  get h() {
    return r(this, le);
  }
  /**
   * Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   */
  set h(t) {
    if (typeof t != "number" || t < 0 || t > 360)
      throw new Error("h must be a number between 0 and 360");
    o(this, le, t), r(this, k) || this.updateColorStr();
  }
  /**
   * Get saturation (0-100)
   * @returns {number}
   */
  get s() {
    return r(this, ue);
  }
  /**
   * Set saturation
   * @param {number} s - saturation (0-100)
   */
  set s(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("s must be a number between 0 and 100");
    o(this, ue, t), r(this, k) || this.updateColorStr();
  }
  /**
   * Get lightness (0-100)
   * @returns {number}
   */
  get l() {
    return r(this, ce);
  }
  /**
   * Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   */
  set l(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("l must be a number between 0 and 100");
    o(this, ce, t), r(this, k) || this.updateColorStr();
  }
  /**
   * Get alpha (0-1)
   * @returns {number}
   */
  get a() {
    return r(this, fe);
  }
  /**
   * Set alpha
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if a is not between 0 and 1
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    o(this, fe, t), r(this, k) || this.updateColorStr();
  }
  /**
   * Set the hsla color
   * @param {number} h - hue (0-360)
   * @param {number} s - saturation (0-100)
   * @param {number} l - lightness (0-100)
   * @param {number} a - alpha (0-1)
   * @returns {void}
   * @throws {Error} if h, s, or l are out of range
   * @throws {Error} if a is not between 0 and 1
   */
  set(t, s, i, a = 1) {
    try {
      o(this, k, !0), this.h = t, this.s = s, this.l = i, this.a = a, this.updateColorStr();
    } finally {
      o(this, k, !1);
    }
  }
  /**
   * update the colorStr property based on the rgba props.
   * @returns {void}
   */
  updateColorStr() {
    this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }
  /**
   * Set hue
   * @param {number} h - hue (0-360)
   * @returns {void}
   * @throws {Error} if h is not between 0 and 360
   * @deprecated since version 0.1.0 - use h setter instead
   */
  setHue(t) {
    b("setHue()", "h setter", "0.1.0"), this.h = t;
  }
  /**
   * Set saturation
   * @param {number} s - saturation (0-100)
   * @returns {void}
   * @throws {Error} if s is not between 0 and 100
   * @deprecated since version 0.1.0 - use s setter instead
   */
  setSaturation(t) {
    b("setSaturation()", "s setter", "0.1.0"), this.s = t;
  }
  /**
   * Set lightness
   * @param {number} l - lightness (0-100)
   * @returns {void}
   * @throws {Error} if l is not between 0 and 100
   * @deprecated since version 0.1.0 - use l setter instead
   */
  setLightness(t) {
    b("setLightness()", "l setter", "0.1.0"), this.l = t;
  }
  /**
   * Set the alpha value
   * @param {number} alpha - alpha (0-1)
   * @returns {void}
   * @throws {Error} if alpha is not between 0 and 1
   * @deprecated since version 0.1.0 - use a setter instead
   */
  setAlpha(t) {
    b("setAlpha()", "a setter", "0.1.0"), this.a = t;
  }
  /**
   * Returns a string representation of the color in hsla format
   * @returns {string}
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }
  /**
   * Returns a string representation of the color in hsl format
   * @returns {string}
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
le = new WeakMap(), ue = new WeakMap(), ce = new WeakMap(), fe = new WeakMap(), k = new WeakMap();
export {
  It as AnchorPoint2D,
  Oe as BasicMaterial,
  Ve as Camera2D,
  nr as CircleGeometry,
  ir as Clock,
  V as Color,
  At as Geometry,
  hr as HslaColor,
  $e as LineGeometry,
  ve as Material,
  tr as Mesh,
  ft as Object2D,
  er as PointLight2D,
  Te as Polygon2D,
  Fe as PolygonGeometry,
  or as RectGeometry,
  ke as Renderer,
  sr as Renderer2D,
  xe as RendererOptions,
  Le as RgbaColor,
  Qe as Scene,
  Ne as TextGeometry,
  Ce as Texture2D,
  Rt as Transform,
  J as Vector2
};
