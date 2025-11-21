var Ke = Object.defineProperty;
var Me = (a) => {
  throw TypeError(a);
};
var Je = (a, e, t) => e in a ? Ke(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var b = (a, e, t) => Je(a, typeof e != "symbol" ? e + "" : e, t), Oe = (a, e, t) => e.has(a) || Me("Cannot " + t);
var r = (a, e, t) => (Oe(a, e, "read from private field"), t ? t.call(a) : e.get(a)), o = (a, e, t) => e.has(a) ? Me("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(a) : e.set(a, t), i = (a, e, t, s) => (Oe(a, e, "write to private field"), s ? s.call(a, t) : e.set(a, t), t), c = (a, e, t) => (Oe(a, e, "access private method"), t);
var Pt, Nt;
const P = class P {
  /**
   * Create a new Vector2 instance.
   * @param {number} [x=0] - The x value.
   * @param {number} [y=0] - The y value.
   * @throws {Error} If the x or y value is not a number.
   */
  constructor(e = 0, t = 0) {
    /**
     * The x value.
     * @private
     * @type {number}
     */
    o(this, Pt);
    /**
     * The y value.
     * @private
     * @type {number}
     */
    o(this, Nt);
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    this.x = e, this.y = t;
  }
  /**
   * Get the x value.
   * @returns {number} The x value.
   */
  get x() {
    return r(this, Pt);
  }
  /**
   * Sets the x value.
   * @param {number} x - The new value to assign.
   * @returns {void}
   * @throws {Error} If the x value is not a number.
   */
  set x(e) {
    if (typeof e != "number")
      throw new Error("x must be a number");
    i(this, Pt, e);
  }
  /**
   * Get the y value.
   * @returns {number} The y value.
   */
  get y() {
    return r(this, Nt);
  }
  /**
   * Sets the y value.
   * @param {number} y - The new value to assign.
   * @returns {void}
   * @throws {Error} If the y value is not a number.
   */
  set y(e) {
    if (typeof e != "number")
      throw new Error("y must be a number");
    i(this, Nt, e);
  }
  /**
   * Creates a copy of the Vector2 instance.
   * @returns {Vector2} The new Vector2 instance.
   */
  clone() {
    return new P(this.x, this.y);
  }
  /**
   * Sets the vector's x and y values.
   * @param {number} x - The new x value to assign.
   * @param {number} y - The new y value to assign.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If the x or y value is not a number.
   */
  set(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    return this.x = e, this.y = t, this;
  }
  /**
   * Translates the vector's x and y values by a given offset
   * @param {number} dx - The x value offset.
   * @param {number} dy - The y value offset.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If dx or dy are not numbers.
   */
  translate(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("dx and dy must be numbers");
    return this.x += e, this.y += t, this;
  }
  /**
   * Copy the values of the given vector instance to this vector instance.
   * @param {Vector2} v - The vector instance to copy.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
   */
  copy(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x = e.x, this.y = e.y, this;
  }
  /**
   * Add the values of the given vector instance to this vector instance.
   * @param {Vector2} v - The vector instance to add.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
   */
  add(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x += e.x, this.y += e.y, this;
  }
  /**
   * Subtract the values from this vector instance by a given vector instance.
   * @param {Vector2} v - The vector instance used for subtraction.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If v is not of type Vector2.
   */
  subtract(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x -= e.x, this.y -= e.y, this;
  }
  /**
   * Computes this and a given vector instance's dot product.
   * Formula: x1 * x2 + y1 * y2
   * @param {Vector2} v - The other vector instance. 
   * @returns {number} The resulting dot product (scalar value).
   * @throws {Error} If v is not of type Vector2.
   */
  dot(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x * e.x + this.y * e.y;
  }
  /**
   * Computes the displacement vector from this vector instance to another vector instance.
   * Calculates: target - this
   * @param {Vector2} v - The target vector.
   * @returns {Vector2} A new instance defining the displacement vector.
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return new P(e.x - this.x, e.y - this.y);
  }
  /**
   * Multiplies the vector's values by a scalar.
   * @param {number} s - The scalar.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If s is not a number.
   */
  multiplyScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    return this.x *= e, this.y *= e, this;
  }
  /**
   * Divides the vector's values by a scalar.
   * @param {number} s - The scalar.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If s is not a number.
   * @throws {Error} If division by zero is attempted.
   */
  divideScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    if (e === 0)
      throw new Error("Division by zero");
    return this.x /= e, this.y /= e, this;
  }
  /**
   * Computes the magnitude (length) of the vector.
   * Formula: Math.sqrt(x * x + y * y)
   * @returns {number} The scalar length/magnitude of the vector.
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * Computes the squared magnitude (length) of the vector.
   * Formula: x * x + y * y
   * @returns {number} The squared scalar length/magnitude of the vector.
   */
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Normalizes the vector to a length of 1.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If attempting to normalize a zero-length vector.
   */
  normalize() {
    const e = this.length();
    if (e === 0)
      throw new Error("Cannot normalize zero-length vector");
    return this.divideScalar(e), this;
  }
  /**
   * Check if the vector's values are equal to another vector.
   * @param {Vector2} v - The other vector.
   * @returns {boolean} Returns true if they are equal.
   * @throws {Error} If v is not of type Vector2.
   */
  isEqual(e) {
    if (!(e instanceof P))
      throw new Error("v must be of type Vector2");
    return this.x === e.x && this.y === e.y;
  }
  /**
   * Rotate the vector's values by an angle (in radians) around the given point.
   * @param {number} px - the x value to rotate around.
   * @param {number} py - the y value to rotate around.
   * @param {number} angle - the angle in radians.
   * @returns {Vector2} This vector instance for chaining.
   * @throws {Error} If px, py, or angle are not numbers.
   */
  rotateAround(e, t, s) {
    if (typeof e != "number" || typeof t != "number" || typeof s != "number")
      throw new Error("px, py, and angle must be numbers");
    const n = Math.cos(s), h = Math.sin(s), l = this.x, u = this.y;
    return this.x = (l - e) * n - (u - t) * h + e, this.y = (l - e) * h + (u - t) * n + t, this;
  }
};
Pt = new WeakMap(), Nt = new WeakMap();
let et = P;
const ge = class ge {
  /**
   * Calculate the centroid of the provided vertices.
   * @param {Float32Array} vertices - the polygon's vertices.
   * @returns {Vector2} A new Vector2 instance representing the centroid.
   * @throws {Error} If the vertices is not a Float32Array.
   * @throws {Error} If the polygon has a calculated area of zero (division by zero).
   * @static
   */
  static calculateCentroid(e) {
    if (!(e instanceof Float32Array))
      throw new Error("vertices must be a Float32Array");
    const t = e.length;
    let s = 0, n = 0, h = 0;
    for (let l = 0; l < t; l += ge.COORDINATES_SIZE) {
      const u = e[l], m = e[l + 1], f = e[(l + 2) % t], E = e[(l + 3) % t], d = u * E - f * m;
      s += d, n += (u + f) * d, h += (m + E) * d;
    }
    if (s /= 2, s === 0)
      throw new Error("Cannot calculate centroid for a zero-area polygon (e.g., a line segment).");
    return n = n / (6 * s), h = h / (6 * s), new et(n, h);
  }
};
/**
 * The number of components (coordinates) in the vector (e.g., 2 for x and y).
 * @static
 * @type {number} 
 */
b(ge, "COORDINATES_SIZE", 2);
let Ce = ge;
var ye, Mt, _t;
const Q = class Q {
  /**
   * Create a new AnchorPoint2D instance.
   * @param {string} anchorType - The anchor type.
   * @throws {Error} If the anchorType is not a valid type.
   */
  constructor(e) {
    /**
     * The current offset.
     * @private
     * @type {Array}
     */
    o(this, Mt);
    /**
     * The current anchor type.
     * @private
     * @type {string}
     */
    o(this, _t);
    this.anchorType = e;
  }
  /**
   * Gets the current anchor type.
   * @returns {string} A string representing the current anchor type.
   */
  get anchorType() {
    return r(this, _t);
  }
  /**
   * Gets the current offset.
   * @returns {Array} An array containing the x and y values of the offset (e.g. offset[0]=x, offset[1]=y).
   */
  get offset() {
    return r(this, Mt);
  }
  /**
   * Sets the anchor type.
   * Side-effects: updates the offset.
   * @param {string} anchorType - The new anchor type.
   * @returns {void}
   * @throws {Error} If the new anchor type is not a valid type.
   */
  set anchorType(e) {
    if (!Q.ANCHOR_POINT_TYPES[e])
      throw new Error(
        `Anchor type: ${e}; is not a valid type. It must be: ${Object.values(
          Q.ANCHOR_POINT_TYPES
        ).join(", ")}`
      );
    i(this, _t, e), i(this, Mt, r(Q, ye)[e]);
  }
};
ye = new WeakMap(), Mt = new WeakMap(), _t = new WeakMap(), /**
 * The valid anchor point types.
 * @static
 * @type {Object.<string, string>}
 */
b(Q, "ANCHOR_POINT_TYPES", {
  TOP_LEFT: "TOP_LEFT",
  TOP_CENTER: "TOP_CENTER",
  TOP_RIGHT: "TOP_RIGHT",
  MID_LEFT: "MID_LEFT",
  MID_CENTER: "MID_CENTER",
  MID_RIGHT: "MID_RIGHT",
  BOTTOM_LEFT: "BOTTOM_LEFT",
  BOTTOM_CENTER: "BOTTOM_CENTER",
  BOTTOM_RIGHT: "BOTTOM_RIGHT"
}), /**
 * The offsets defined for each anchor type.
 * @private
 * @type {Object.<string, number[]>}
 */
o(Q, ye, {
  TOP_LEFT: [-1, -1],
  TOP_CENTER: [0, -1],
  TOP_RIGHT: [1, -1],
  MID_LEFT: [-1, 0],
  MID_CENTER: [0, 0],
  MID_RIGHT: [1, 0],
  BOTTOM_LEFT: [-1, 1],
  BOTTOM_CENTER: [0, 1],
  BOTTOM_RIGHT: [1, 1]
});
let vt = Q;
var Ft, Lt, $t, Bt;
class we {
  /**
   * Create a new Transform instance.
   * @param {Vector2} [position=new Vector2()] - The position.
   * @param {number} [rotation=0] - The rotation in radians.
   * @param {Vector2} [scale=new Vector2(1, 1)] - The scale.
   * @param {AnchorPoint2D} [localAnchorPoint=new AnchorPoint2D(AnchorPoint2D.ANCHOR_POINT_TYPES.MID_CENTER)] - The local anchor point.
   * @throws {Error} If the position is not a Vector2.
   * @throws {Error} If the rotation is not a number.
   * @throws {Error} If the scale is not a Vector2.
   * @throws {Error} If the local anchor point is not an AnchorPoint2D.
   */
  constructor(e = new et(), t = 0, s = new et(1, 1), n = new vt(vt.ANCHOR_POINT_TYPES.MID_CENTER)) {
    /**
     * The transform's position.
     * @private
     * @type {Vector2}
     */
    o(this, Ft);
    /**
     * The transform's rotation in radians.
     * @private
     * @type {number} 
     */
    o(this, Lt);
    /**
     * The transform's scale.
     * @private
     * @type {Vector2}
     */
    o(this, $t);
    /**
     * The transform's local anchor point.
     * @private
     * @type {Vector2} 
     */
    o(this, Bt);
    this.position = e, this.rotation = t, this.scale = s, this.localAnchorPoint = n;
  }
  /**
   * Gets the transform's local anchor point.
   * @returns {AnchorPoint2D} The AnchorPoint2D instance.
   */
  get localAnchorPoint() {
    return r(this, Bt);
  }
  /**
   * Sets the transform's local anchor point.
   * @param {AnchorPoint2D} localAnchorPoint - the new local anchor point.
   * @returns {void}
   * @throws {Error} if the new local anchor point is not an AnchorPoint2D.
   */
  set localAnchorPoint(e) {
    if (!(e instanceof vt))
      throw new Error("localAnchorPoint must be of type AnchorPoint2D");
    i(this, Bt, e);
  }
  /**
   * Gets the transform's position.
   * @returns {Vector2} The Vector2 instance.
   */
  get position() {
    return r(this, Ft);
  }
  /**
   * Sets the transform's position.
   * @param {Vector2} position - the new position.
   * @returns {void}
   * @throws {Error} if the new position is not a Vector2.
   */
  set position(e) {
    if (!(e instanceof et))
      throw new Error("position must be of type Vector2");
    i(this, Ft, e);
  }
  /**
   * Gets the transform's rotation.
   * @returns {number} A number representing the rotation angle in radians.
   */
  get rotation() {
    return r(this, Lt);
  }
  /**
   * Sets the transform's rotation.
   * @param {number} rotation - the new rotation in radians.
   * @returns {void}
   * @throws {Error} if the new rotation is not a number.
   */
  set rotation(e) {
    if (typeof e != "number")
      throw new Error("rotation must be a number");
    i(this, Lt, e);
  }
  /**
   * Gets the transform's scale.
   * @returns {Vector2} The Vector2 instance.
   */
  get scale() {
    return r(this, $t);
  }
  /**
   * Sets the transform's scale.
   * @param {Vector2} scale - the new scale.
   * @returns {void}
   * @throws {Error} if the new scale is not a Vector2.
   */
  set scale(e) {
    if (!(e instanceof et))
      throw new Error("scale must be of type Vector2");
    i(this, $t, e);
  }
}
Ft = new WeakMap(), Lt = new WeakMap(), $t = new WeakMap(), Bt = new WeakMap();
var Ut, kt;
const be = class be {
  /**
   * Create a new Camera2D instance.
   * @param {Object} [options] - The camera options.
   * @param {number} [options.zoom=Camera2D.DEFAULT_ZOOM] - The zoom value.
   */
  constructor(e = {}) {
    /**
     * The camera's zoom value.
     * @private
     * @type {number}
     */
    o(this, Ut);
    /**
     * The camera's transform.
     * @private
     * @type {Transform}
     */
    o(this, kt);
    const { zoom: t } = e;
    this.zoom = t ?? be.DEFAULT_ZOOM, this.transform = new we();
  }
  /**
   * Gets the zoom value.
   * @returns {number} A number representing the camera's zoom.
   */
  get zoom() {
    return r(this, Ut);
  }
  /**
   * Sets the camera's zoom value.
   * @param {number} zoom - the new zoom value.
   * @returns {void}
   * @throws {Error} if the new zoom value is not a number.
   */
  set zoom(e) {
    if (typeof e != "number")
      throw new Error("zoom must be a number");
    i(this, Ut, e);
  }
  /**
   * Gets the camera's transform.
   * @returns {Transform} The Transform instance.
   */
  get transform() {
    return r(this, kt);
  }
  /**
   * Sets the camera's transform.
   * @param {Transform} transform - the new transform.
   * @returns {void}
   * @throws {Error} if the new transform is not a Transform.
   */
  set transform(e) {
    if (!(e instanceof we))
      throw new Error("transform must be of type Transform");
    i(this, kt, e);
  }
};
Ut = new WeakMap(), kt = new WeakMap(), /**
 * The default zoom value.
 * @static
 * @type {number} 
 */
b(be, "DEFAULT_ZOOM", 1);
let De = be;
const _e = /* @__PURE__ */ new Set();
function g(a, e, t) {
  const s = `${a}:${e}`;
  if (_e.has(s))
    return;
  const n = `[DEPRECATION] '${a}' is deprecated since version ${t}. Please use '${e}' instead. This feature will be removed in a future release.`;
  console.warn(n), _e.add(s);
}
const p = [];
for (let a = 0; a < 256; ++a)
  p.push((a + 256).toString(16).slice(1));
function Qe(a, e = 0) {
  return (p[a[e + 0]] + p[a[e + 1]] + p[a[e + 2]] + p[a[e + 3]] + "-" + p[a[e + 4]] + p[a[e + 5]] + "-" + p[a[e + 6]] + p[a[e + 7]] + "-" + p[a[e + 8]] + p[a[e + 9]] + "-" + p[a[e + 10]] + p[a[e + 11]] + p[a[e + 12]] + p[a[e + 13]] + p[a[e + 14]] + p[a[e + 15]]).toLowerCase();
}
let xe;
const tr = new Uint8Array(16);
function er() {
  if (!xe) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    xe = crypto.getRandomValues.bind(crypto);
  }
  return xe(tr);
}
const rr = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Fe = { randomUUID: rr };
function sr(a, e, t) {
  var n;
  a = a || {};
  const s = a.random ?? ((n = a.rng) == null ? void 0 : n.call(a)) ?? er();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, Qe(s);
}
function ir(a, e, t) {
  return Fe.randomUUID && !a ? Fe.randomUUID() : sr(a);
}
var Ht;
class q {
  /**
   * Create a new Color instance.
   * @param {string} colorStr - a string representation of the color.
   * @throws {Error} if the colorStr is not a string.
   */
  constructor(e) {
    /**
     * A string representation of the color.
     * @private
     * @type {string}
     */
    o(this, Ht);
    this.colorStr = e;
  }
  /**
   * Gets the string representation of the color.
   * @returns {string} The color string representation.
   */
  get colorStr() {
    return r(this, Ht);
  }
  /**
   * Sets the color's colorStr property.
   * @param {string} colorStr - the new colorStr.
   * @returns {void}
   * @throws {Error} if the new colorStr is not a string.
   */
  set colorStr(e) {
    if (typeof e != "string")
      throw new Error("colorStr must be a string");
    i(this, Ht, e);
  }
  /**
   * Gets the string representation of the Color instance.
   * @returns {string} A string representing the color.
   */
  toString() {
    return this.colorStr;
  }
}
Ht = new WeakMap();
var pe, dt, Yt, Xt, Gt, zt, k, N;
const ft = class ft {
  /**
   * Create a new RendererOptions instance.
   * @param {Object} [options] - Renderer options.
   * @param {number} [options.width] - The canvas width.
   * @param {number} [options.height] - The canvas height.
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO] - The device pixel ratio.
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR] - The canvas' background color.
   * @throws {Error} If renderer is not of type Renderer.
   * @throws {Error} If options.width or options.height is not a number.
   * @throws {Error} If options.devicePixelRatio is not a number.
   * @throws {Error} If options.backgroundColor is not a string or Color.
   */
  constructor(e, t = {}) {
    /**
     * Cache object for computed values.
     * @private
     * @type {Object}
     */
    o(this, dt, {
      halfWidth: 0,
      halfHeight: 0
    });
    /**
     * The canvas' width.
     * @private
     * @type {number}
     */
    o(this, Yt);
    /**
     * The canvas' height.
     * @private
     * @type {number}
     */
    o(this, Xt);
    /**
     * The canvas' background color.
     * @private
     * @type {string|Color}
     */
    o(this, Gt);
    /**
     * The device pixel ratio.
     * @private
     * @type {number}
     */
    o(this, zt);
    /**
     * The option's renderer instance.
     * @private
     * @type {Renderer}
     */
    o(this, k);
    /**
     * A flag to indicate if batch setting is in progress.
     * @private
     * @type {Renderer}
     */
    o(this, N, !1);
    const { width: s, height: n, devicePixelRatio: h, backgroundColor: l } = t;
    if (!(e instanceof Ye))
      throw new Error("renderer must be of type Renderer");
    i(this, k, e), i(this, N, !0), this.width = s, this.height = n, this.devicePixelRatio = h ?? ft.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO, this.backgroundColor = l ?? ft.DEFAULT_OPTIONS.BACKGROUND_COLOR, i(this, N, !1);
  }
  /**
   * A copy of the default renderer options.
   * @public
   * @static
   * @returns {Object}
   */
  static get DEFAULT_OPTIONS() {
    return { ...r(ft, pe) };
  }
  /**
   * Gets the cache object.
   * @returns {Object} An object specifying computed half width and height.
   */
  get cache() {
    return r(this, dt);
  }
  /**
   * Gets the canvas' width.
   * @returns {number} The canvas' width.
   */
  get width() {
    return r(this, Yt);
  }
  /**
   * Sets the canvas' width.
   * Side-effects: recalculates half width and device pixel ratio.
   * Tip: use set(width, height) for batch setting the canvas' dimensions.
   * @param {number} width - The new width.
   * @returns {void}
   * @throws {Error} if the width is not a positive number.
   */
  set width(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("width must be a positive number");
    i(this, Yt, e), r(this, dt).halfWidth = e / 2, r(this, N) || r(this, k).recalculateDevicePixelRatio();
  }
  /**
   * Gets the canvas' height.
   * @returns {number} The canvas' height.
   */
  get height() {
    return r(this, Xt);
  }
  /**
   * Sets the canvas' height.
   * Side-effects: recalculates half height and device pixel ratio.
   * Tip: use set(width, height) for batch setting the canvas' dimensions.
   * @param {number} height - The new height.
   * @returns {void}
   * @throws {Error} if the height is not a positive number.
   */
  set height(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("height must be a positive number");
    i(this, Xt, e), r(this, dt).halfHeight = e / 2, r(this, N) || r(this, k).recalculateDevicePixelRatio();
  }
  /**
   * Gets the device pixel ratio.
   * @returns {number} The device pixel ratio.
   */
  get devicePixelRatio() {
    return r(this, zt);
  }
  /**
   * Sets the device pixel ratio
   * @param {number} devicePixelRatio - The new device pixel ratio.
   * @returns {void}
   * @throws {Error} if the devicePixelRatio is not a positive number.
   */
  set devicePixelRatio(e) {
    if (typeof e != "number" || e <= 0)
      throw new Error("devicePixelRatio must be a positive number");
    i(this, zt, e), r(this, N) || r(this, k).recalculateDevicePixelRatio();
  }
  /**
   * Gets the canvas' background color.
   * @returns {string|Color} The canvas' background color.
   */
  get backgroundColor() {
    return r(this, Gt);
  }
  /**
   * Sets the canvas' background color
   * @param {string|Color} backgroundColor - The new background color.
   * @returns {void}
   * @throws {Error} if the backgroundColor is not a Color or string.
   */
  set backgroundColor(e) {
    if (typeof e != "string" && !(e instanceof q))
      throw new Error("backgroundColor must be a Color or a string");
    i(this, Gt, e);
  }
  /**
   * Sets the size of the canvas.
   * @param {number} width - The new canvas width.
   * @param {number} height - The new canvas height.
   * @returns {void}
   * @throws {Error} If width is not a positive number.
   * @throws {Error} If height is not a positive number.
   */
  setSize(e, t) {
    try {
      i(this, N, !0), this.width = e, this.height = t, r(this, k).recalculateDevicePixelRatio();
    } finally {
      i(this, N, !1);
    }
  }
};
pe = new WeakMap(), dt = new WeakMap(), Yt = new WeakMap(), Xt = new WeakMap(), Gt = new WeakMap(), zt = new WeakMap(), k = new WeakMap(), N = new WeakMap(), /**
 * The default renderer options.
 * @static
 * @private
 * @type {Object}
 */
o(ft, pe, {
  DEVICE_PIXEL_RATIO: 1,
  BACKGROUND_COLOR: "transparent"
});
let ve = ft;
var Zt, Vt, Wt, jt, F, C, qt;
class Ye {
  /**
   * Create a new Renderer instance.
   * @param {string} contextType - The canvas rendering context type.
   * @param {HTMLCanvasElement} canvas - The canvas element.
   * @param {Scene} scene - The scene instance.
   * @param {Camera2D} camera - The camera instance.
   * @param {Object} [options] - The renderer options.
   * @param {number} [options.width] - The canvas width.
   * @param {number} [options.height] - The canvas height.
   * @param {number} [options.devicePixelRatio=RendererOptions.DEFAULT_OPTIONS.DEVICE_PIXEL_RATIO] - The device pixel ratio.
   * @param {string|Color} [options.backgroundColor=RendererOptions.DEFAULT_OPTIONS.BACKGROUND_COLOR] - The canvas' background color.
   * @throws {Error} If contextType is not a string.
   * @throws {Error} If scene is not of type Scene.
   * @throws {Error} If camera is not of type Camera2D.
   * @throws {Error} If options.width or options.height is not a number.
   * @throws {Error} If options.devicePixelRatio is not a number.
   * @throws {Error} If options.backgroundColor is not a string or Color.
   */
  constructor(e, t, s, n, h = {}) {
    /**
     * The canvas rendering context type.
     * @private
     * @type {string}
     */
    o(this, Zt);
    /**
     * The canvas element.
     * @private
     * @type {HTMLCanvasElement}
     */
    o(this, Vt);
    /**
     * The scene instance.
     * @private
     * @type {Scene}
     */
    o(this, Wt);
    /**
     * The camera instance.
     * @private
     * @type {Camera2D}
     */
    o(this, jt);
    /**
     * The requestAnimationFrame ID.
     * @private
     * @type {number|null}
     */
    o(this, F, null);
    /**
     * The renderer options.
     * @private
     * @type {RendererOptions}
     */
    o(this, C);
    /**
     * A flag specifying if the rendering context is initialized.
     * @private
     * @type {boolean} 
     */
    o(this, qt);
    if (typeof e != "string")
      throw new Error("contextType must be a string");
    this.scene = s, this.camera = n, i(this, Zt, e), i(this, Vt, t), i(this, C, new ve(this, h)), this.initContext(), i(this, qt, !0);
  }
  /**
   * Gets the initialized context flag.
   * @returns {Boolean} Returns true if initContext() has been called.
   */
  get initializedContext() {
    return r(this, qt);
  }
  /**
   * Gets the renderer options.
   * @returns {RendererOptions} The renderer options instance.
   */
  get options() {
    return r(this, C);
  }
  /**
   * Gets the rendering context type.
   * @returns {string} A string specifying the rendering context type.
   */
  get contextType() {
    return r(this, Zt);
  }
  /**
   * Gets the canvas element.
   * @returns {HTMLCanvasElement} The canvas element.
   */
  get canvas() {
    return r(this, Vt);
  }
  /**
   * Gets the scene.
   * @returns {Scene} The scene instance.
   */
  get scene() {
    return r(this, Wt);
  }
  /**
   * Sets the scene.
   * @param {Scene} scene - The new scene to assign.
   * @returns {void}
   * @throws {Error} If the new scene is not of type Scene.
   */
  set scene(e) {
    if (!(e instanceof nr))
      throw new Error("scene must be of type Scene");
    i(this, Wt, e);
  }
  /**
   * Gets the camera.
   * @returns {Camera2D} The camera instance.
   */
  get camera() {
    return r(this, jt);
  }
  /**
   * Sets the camera.
   * @param {Camera2D} camera - The new camera to assign.
   * @returns {void}
   * @throws {Error} If the new camera is not of type Camera2D.
   */
  set camera(e) {
    if (!(e instanceof De))
      throw new Error("camera must be of type Camera2D");
    i(this, jt, e);
  }
  /**
   * Gets the canvas' center x value (half width).
   * @returns {number} The center x value.
   */
  get centerX() {
    return r(this, C).cache.halfWidth;
  }
  /**
   * Gets the canvas' center y value (half height).
   * @returns {number} The center y value.
   */
  get centerY() {
    return r(this, C).cache.halfHeight;
  }
  /**
   * Sets the canvas' background color.
   * @param {string|Color} backgroundColor - The new color to assign.
   * @returns {void}
   * @throws {Error} If backgroundColor is not a string or Color
   * @deprecated since version 0.1.0 - Use the options.backgroundColor setter instead.
   */
  setBackgroundColor(e) {
    g(
      "setBackgroundColor()",
      "options.backgroundColor setter",
      "0.1.0"
    ), r(this, C).backgroundColor = e;
  }
  /**
   * Sets the canvas' size
   * @param {number} width - The new width of the canvas.
   * @param {number} height - The new height of the canvas.
   * @returns {void}
   * @throws {Error} If width is not a positive number.
   * @throws {Error} If height is not a positive number.
   * @deprecated since version 0.1.0 - Use the options.setSize() method instead.
   */
  setSize(e, t) {
    g("setSize()", "options.setSize()", "0.1.0"), r(this, C).setSize(e, t);
  }
  /**
   * Sets the device pixel ratio for the canvas.
   * @param {number} dpr - The new device pixel ratio.
   * @returns {void}
   * @throws {Error} If dpr is not a number.
   * @deprecated since version 0.1.0 - Use the options.devicePixelRatio setter instead.
   */
  setDevicePixelRatio(e) {
    g(
      "setDevicePixelRatio()",
      "options.devicePixelRatio setter",
      "0.1.0"
    ), r(this, C).devicePixelRatio = e, this.recalculateDevicePixelRatio();
  }
  /**
   * Gets the canvas' center x value (half width).
   * @returns {number} The center x value.
   * @deprecated since version 0.1.0 - Use the centerX getter instead.
   */
  getCenterX() {
    return g("getCenterX()", "centerX getter", "0.1.0"), r(this, C).cache.halfWidth;
  }
  /**
   * Gets the canvas' center y value (half height).
   * @returns {number} The center y value.
   * @deprecated since version 0.1.0 - Use the centerY getter instead.
   */
  getCenterY() {
    return g("getCenterY()", "centerY getter", "0.1.0"), r(this, C).cache.halfHeight;
  }
  /**
   * Init the canvas rendering context (used internal when creating a new instance).
   * @returns {void}
   */
  initContext() {
    throw new Error("initContext() is not implemented in the subclass");
  }
  /**
   * Recalculates the canvas' device pixel ratio based on width and height.
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    throw new Error(
      "recalculateDevicePixelRatio() is not implemented in the subclass"
    );
  }
  /**
   * Trigger a new render.
   * @returns {void}
   */
  render() {
    throw new Error("render() is not implemented in the subclass");
  }
  /**
   * A helper method that simplifies the use of requestAnimationFrame.
   * @param {Object} [options] - Options for beforeRender and afterRender callbacks.
   * @param {Function|null|undefined} [options.beforeRender] - A callback function to be called before each render.
   * @param {Function|null|undefined} [options.afterRender=null] - A callback function to be called after each render.
   * @returns {void}
   * @throws {Error} If options.beforeRender is not null, undefined or a function.
   * @throws {Error} If options.afterRender is not null, undefined or a function.
   */
  requestAnimationFrame(e = {}) {
    const { beforeRender: t, afterRender: s } = e;
    if (t && typeof t != "function")
      throw new Error("beforeRender must be a function");
    if (s && typeof s != "function")
      throw new Error("afterRender must be a function");
    r(this, F) !== null && this.cancelAnimationFrame();
    const n = () => {
      t && t(), this.render(), s && s(), i(this, F, requestAnimationFrame(n.bind(this)));
    };
    i(this, F, requestAnimationFrame(n.bind(this)));
  }
  /**
   * Cancel the loop created from renderer.requestAnimationFrame().
   * @returns {void}
   */
  cancelAnimationFrame() {
    r(this, F) !== null && (cancelAnimationFrame(r(this, F)), i(this, F, null));
  }
}
Zt = new WeakMap(), Vt = new WeakMap(), Wt = new WeakMap(), jt = new WeakMap(), F = new WeakMap(), C = new WeakMap(), qt = new WeakMap();
var Et, wt, gt, Kt;
class mt {
  /** Create a new Object2D instance. */
  constructor() {
    /**
     * An object that can be used to store custom user data.
     * @private
     * @type {Object}
     */
    o(this, Et);
    /**
     * The object's transform.
     * @private
     * @type {Transform}
     */
    o(this, wt);
    /**
     * A flag determining if the object should be visible when drawing the scene.
     * @private
     * @type {boolean}
     */
    o(this, gt);
    /**
     * An universal unique identifier (UUID v4).
     * @private
     * @type {string}
     */
    o(this, Kt);
    i(this, wt, new we()), i(this, Kt, ir()), i(this, gt, !0), i(this, Et, {});
  }
  /**
   * Gets the object's UUID.
   * @returns {string} A string representing the UUID.
   */
  get uuid() {
    return r(this, Kt);
  }
  /**
   * Gets the object's visible flag.
   * @returns {boolean} Returns true if the object is visible.
   */
  get visible() {
    return r(this, gt);
  }
  /**
   * Sets the object's visible flag.
   * @param {boolean} visible - The new visible flag.
   * @returns {void}
   * @throws {Error} If the visible flag is not a boolean.
   */
  set visible(e) {
    if (typeof e != "boolean")
      throw new Error("visible must be a boolean");
    i(this, gt, e);
  }
  /**
   * Gets the object's custom user data object.
   * @returns {Object} An object containing custom user data.
   */
  get userData() {
    return r(this, Et);
  }
  /**
   * Sets the object's custom user data.
   * @param {Object} userData - The new custom user data object.
   * @returns {void}
   */
  set userData(e) {
    i(this, Et, e);
  }
  /**
   * Gets the object's transform.
   * @returns {Transform} The Transform instance.
   */
  get transform() {
    return r(this, wt);
  }
  /**
   * Sets the object's transform.
   * @param {Transform} transform - The new transform.
   * @returns {void}
   * @throws {Error} If the new transform is not a Transform.
   */
  set transform(e) {
    if (!(e instanceof we))
      throw new Error("transform must be of type Transform");
    i(this, wt, e);
  }
  /**
   * Sets the object's custom user data.
   * @param {Object} userData - The new custom user data object.
   * @returns {void}
   * @deprecated since version 0.1.0 - Use the userData setter instead.
   */
  setUserData(e) {
    g("setUserData()", "userData setter", "0.1.0"), this.userData = e;
  }
  /**
   * Sets the object's visible flag.
   * @param {boolean} visible - The new visible flag.
   * @returns {void}
   * @throws {Error} If the visible flag is not a boolean.
   * @deprecated since version 0.1.0 - Use the visible setter instead.
   */
  setVisible(e) {
    g("setVisible()", "visible setter", "0.1.0"), this.visible = e;
  }
  /**
   * Draws the Object2D onto the canvas based on the given renderer.
   * @param {Renderer} renderer - The renderer.
   * @returns {void}
   * @throws if the renderer's contextType is not supported (i.e., not "2d").
   */
  draw(e) {
    if ((e == null ? void 0 : e.contextType) === "2d")
      this.drawContext2D(e.ctx);
    else
      throw new Error(`rendering context not supported: ${e.contextType}`);
  }
  /**
   * Draws the Object2D onto the canvas using the 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e) {
  }
}
Et = new WeakMap(), wt = new WeakMap(), gt = new WeakMap(), Kt = new WeakMap(), /**
 * Defines the class' default z-index (default: 0).
 * @static
 * @type {number}
 */
b(mt, "Z_INDEX", 0);
var H, v, yt, Ee;
class nr {
  constructor() {
    o(this, yt);
    /**
     * The scene's object2D array.
     * @private
     * @type {Object2D[]}
     */
    o(this, H, []);
    /**
     * Store object and z-index configuration.
     * @private
     * @type {Map<string, number>}
     */
    o(this, v, /* @__PURE__ */ new Map());
  }
  /**
   * @returns {Object2D[]} An array of Object2D.
   * Gets a copy of scene's children.
   */
  get children() {
    return [...r(this, H)];
  }
  /**
   * Gets a copy of the scene's object and z-index configuration.
   * @returns {Map<string, number>} A map with object UUIDs and z-indexes.
   */
  get zIndexes() {
    return new Map(r(this, v));
  }
  /**
   * Adds one or more Object2Ds to the scene.
   * @param {...Object2D} children - The Object2D(s) to add to the scene.
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D.
   */
  add(...e) {
    for (const t of e) {
      if (!(t instanceof mt))
        throw new Error("All arguments to add() must be of type Object2D");
      r(this, H).push(t), r(this, v).set(t.uuid, t.constructor.Z_INDEX ?? 0);
    }
    c(this, yt, Ee).call(this);
  }
  /**
   * Removes one or more Object2Ds from the scene.
   * @param {...Object2D} children - The Object2D(s) to remove from the scene.
   * @returns {void}
   * @throws {Error} If any child is not of type Object2D.
   */
  remove(...e) {
    for (const t of e) {
      if (!(t instanceof mt))
        throw new Error("All children arguments must be of type Object2D");
      const { uuid: s } = t, n = r(this, H).indexOf(t);
      n !== -1 && r(this, H).splice(n, 1), r(this, v).has(s) && r(this, v).delete(s);
    }
    c(this, yt, Ee).call(this);
  }
  /**
   * Change one or more Object2Ds z-index value.
   * @param {number} zIndex - the new z-index value.
   * @param {...Object2D} children - the children.
   * @returns {void}
   * @throws {Error} if zIndex is not a number.
   * @throws {Error} If any child is not of type Object2D.
   */
  setZIndex(e, ...t) {
    if (typeof e != "number")
      throw new Error("zIndex must be a number");
    for (const s of t) {
      if (!(s instanceof mt))
        throw new Error("All arguments to remove() must be of type Object2D");
      const { uuid: n } = s;
      r(this, v).has(n) && r(this, v).set(n, e);
    }
    c(this, yt, Ee).call(this);
  }
}
H = new WeakMap(), v = new WeakMap(), yt = new WeakSet(), /**
 * Sorts the children based on their z-index property.
 * @private
 * @returns {void}
 */
Ee = function() {
  r(this, H).sort((e, t) => {
    const s = r(this, v).get(e.uuid) ?? 0, n = r(this, v).get(t.uuid) ?? 0;
    return s - n;
  });
};
var Te;
const Se = class Se extends Ye {
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
  constructor(e, t, s, n = {}) {
    super(r(Se, Te), e, t, s, n);
  }
  /**
   * Init the canvas rendering context (used internal when creating a new instance).
   * @returns {void}
   */
  initContext() {
    this.initializedContext || (this.ctx = this.canvas.getContext("2d"), this.recalculateDevicePixelRatio());
  }
  /**
   * Recalculates the canvas' device pixel ratio based on width and height.
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const { devicePixelRatio: e, width: t, height: s } = this.options;
    this.canvas.width = t * e, this.canvas.height = s * e, this.ctx.scale(e, e);
  }
  /**
   * Trigger a new render.
   * @returns {void}
   */
  render() {
    const { ctx: e, camera: t, scene: s } = this, { backgroundColor: n, width: h, height: l } = this.options, u = n instanceof q ? n.toString() : n;
    e.clearRect(0, 0, h, l), e.fillStyle = u, e.fillRect(0, 0, h, l), e.save(), e.scale(t.zoom, t.zoom), e.rotate(-t.transform.rotation), e.translate(
      -t.transform.position.x,
      -t.transform.position.y
    );
    for (let m = 0; m < s.children.length; m++) {
      const f = s.children[m];
      f.visible && f.draw(this);
    }
    e.restore();
  }
};
Te = new WeakMap(), /**
 * Defines the renderer context type.
 * @static
 * @private
 * @type {string}
 */
o(Se, Te, "2d");
let Le = Se;
var bt, pt, Tt, St, At, D, M, x, T, _, B;
const I = class I {
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
  constructor(e = {}) {
    o(this, _);
    /**
     * The current image repeat option.
     * @private
     * @type {string}
     */
    o(this, bt);
    /**
     * The current image offset's x value.
     * @private
     * @type {number}
     */
    o(this, pt);
    /**
     * The current image offset's y value.
     * @private
     * @type {number}
     */
    o(this, Tt);
    /**
     * The current width.
     * @private
     * @type {number}
     */
    o(this, St);
    /**
     * The current height.
     * @private
     * @type {number}
     */
    o(this, At);
    /**
     * The current image element.
     * @private
     * @type {HTMLImageElement}
     */
    o(this, D);
    /**
     * The current pattern.
     * @private
     * @type {CanvasPattern|null|undefined}
     */
    o(this, M);
    /**
     * The current pattern's transform.
     * @private
     * @type {DOMMatrix|undefined}
     */
    o(this, x);
    /**
     * A flag determining if batch setting is in progress.
     * @private
     * @type {boolean}
     */
    o(this, T);
    const {
      image: t,
      imageRepeat: s,
      imageOffsetX: n,
      imageOffsetY: h,
      imageWidth: l,
      imageHeight: u
    } = e;
    i(this, T, !0), this.imageRepeat = s, this.imageOffsetX = n, this.imageOffsetY = h, this.imageWidth = l, this.imageHeight = u, this.image = t, i(this, T, !1);
  }
  /**
   * Gets the texture2D's image repeat option.
   * @returns {string} A string representing the image repeat option.
   */
  get imageRepeat() {
    return r(this, bt);
  }
  /**
   * Sets the texture2D's image repeat option (Defaults to Texture2D.DEFAULT_IMAGE_REPEAT).
   * @param {"repeat"|"repeat-x"|"repeat-y"|"no-repeat"|null|undefined} imageRepeat - The new image repeat option.
   * @returns {void}
   * @throws {Error} If the new image repeat option is not null, undefined, a string or a valid type.
   */
  set imageRepeat(e) {
    if (e != null && typeof e != "string" && !I.IMAGE_REPEAT_TYPES[e])
      throw new Error(
        `imageRepeat must be string with value: ${Object.values(
          I.IMAGE_REPEAT_TYPES
        ).join(", ")}`
      );
    i(this, bt, e ?? I.DEFAULT_IMAGE_REPEAT);
  }
  /**
   * Gets the texture2D's image offet's x value.
   * @returns {number} A number representing the x value.
   */
  get imageOffsetX() {
    return r(this, pt);
  }
  /**
   * Sets the texture2D's image offset's x value (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET.x).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageOffset(imageOffsetX, imageOffsetY) for batch setting the image offset.
   * @param {number|null|undefined} imageOffsetX - The new x value.
   * @returns {void}
   * @throws {Error} If the new x value is null undefined or not a number.
   */
  set imageOffsetX(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetX must be a number");
    i(this, pt, e ?? I.DEFAULT_IMAGE_OFFSET.x), r(this, T) || c(this, _, B).call(this);
  }
  /**
   * Gets the texture2D's image offet's y value.
   * @returns {number} A number representing the y value.
   */
  get imageOffsetY() {
    return r(this, Tt);
  }
  /**
   * Sets the texture2D's image offset's y value (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET.y).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageOffset(imageOffsetX, imageOffsetY) for batch setting the image offset.
   * @param {number|null|undefined} imageOffsetY - The new y value.
   * @returns {void}
   * @throws {Error} If the new y value is null undefined or not a number.
   */
  set imageOffsetY(e) {
    if (e != null && typeof e != "number")
      throw new Error("imageOffsetY must be a number");
    i(this, Tt, e ?? I.DEFAULT_IMAGE_OFFSET.y), r(this, T) || c(this, _, B).call(this);
  }
  /**
   * Gets the texture2D's image width.
   * @returns {number}
   */
  get imageWidth() {
    return r(this, St);
  }
  /**
   * Sets the texture2D's image width (Defaults to Texture2D.DEFAULT_IMAGE_DIMENSIONS.width).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageSize(imageWidth, imageHeight) for batch setting the image dimensions.
   * @param {number|null|undefined} imageWidth - The new width.
   * @returns {void}
   * @throws {Error} If the new width is not null, undefined or a positive number.
   */
  set imageWidth(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageWidth must be a positive number or null");
    i(this, St, e ?? I.DEFAULT_IMAGE_DIMENSIONS.width), r(this, T) || c(this, _, B).call(this);
  }
  /**
   * Gets the texture2D's image height.
   * @returns {number}
   */
  get imageHeight() {
    return r(this, At);
  }
  /**
   * Sets the texture2D's image height (Defaults to Texture2D.DEFAULT_IMAGE_DIMENSIONS.height).
   * Side-effects: rebuild the pattern's transform.
   * Tip: use setImageSize(imageWidth, imageHeight) for batch setting the image dimensions.
   * @param {number|null|undefined} imageHeight - The new height.
   * @returns {void}
   * @throws {Error} If the new height is not null, undefined or a positive number.
   */
  set imageHeight(e) {
    if (e != null && typeof e != "number" || e != null && typeof e == "number" && e <= 0)
      throw new Error("imageHeight must be a positive number or null");
    i(this, At, e ?? I.DEFAULT_IMAGE_DIMENSIONS.height), r(this, T) || c(this, _, B).call(this);
  }
  /**
   * Gets the texture2D's image element.
   * @returns {HTMLImageElement}
   */
  get image() {
    return r(this, D);
  }
  /**
   * Sets the texture2D's image element.
   * @param {HTMLImageElement|string} image - A new HTML image element or a string representing the new image source.
   * @returns {void}
   * @throws {Error} If the new image is not a string or HTMLImageElement.
   */
  set image(e) {
    if (typeof e != "string" && !(e instanceof HTMLImageElement))
      throw new Error("image must be a string or HTMLImageElement");
    if (i(this, M, null), typeof e == "string") {
      const t = new Image();
      t.src = e, t.onload = () => i(this, D, t), i(this, D, t);
    } else e instanceof HTMLImageElement && i(this, D, e);
  }
  /**
   * Create and returns a canvas pattern if the internal image property is complete, otherwise it returns null.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {CanvasPattern|null} The CanvasPattern instance or null.
   */
  createPattern(e) {
    return !r(this, D) || !r(this, D).complete ? null : r(this, M) ? r(this, M) : (i(this, M, e.createPattern(r(this, D), r(this, bt))), c(this, _, B).call(this), r(this, M));
  }
  /**
   * Sets the texture2D's image offset (Defaults to Texture2D.DEFAULT_IMAGE_OFFSET).
   * @param {number|null|undefined} [imageOffsetX] - The new image offset's x value.
   * @param {number|null|undefined} [imageOffsetY] - the new image offset's y value.
   * @returns {void}
   * @throws {Error} If the new image offset's x value is not null, undefined or a number.
   * @throws {Error} If the new image offset's y value is not null, undefined or a number.
   */
  setImageOffset(e, t) {
    try {
      i(this, T, !0), this.imageOffsetX = e, this.imageOffsetY = t, c(this, _, B).call(this);
    } finally {
      i(this, T, !1);
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
  setImageSize(e, t) {
    try {
      i(this, T, !0), this.imageWidth = e, this.imageHeight = t, c(this, _, B).call(this);
    } finally {
      i(this, T, !1);
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
  setImage(e, t = "repeat") {
    g("setImage()", "image setter", "0.1.0");
    try {
      i(this, T, !0), this.imageRepeat = t, this.image = e;
    } finally {
      i(this, T, !1);
    }
  }
};
bt = new WeakMap(), pt = new WeakMap(), Tt = new WeakMap(), St = new WeakMap(), At = new WeakMap(), D = new WeakMap(), M = new WeakMap(), x = new WeakMap(), T = new WeakMap(), _ = new WeakSet(), /**
 * Position and scale the canvas pattern's transform if the canvas pattern property is not undefined.
 * @returns {void}
 * @private
 */
B = function() {
  r(this, M) && (r(this, x) ?? i(this, x, new DOMMatrix()), r(this, x).a = 1, r(this, x).b = 0, r(this, x).c = 0, r(this, x).d = 1, r(this, x).e = 0, r(this, x).f = 0, r(this, x).translateSelf(
    r(this, pt),
    r(this, Tt)
  ), r(this, x).scaleSelf(
    r(this, St) / r(this, D).naturalWidth,
    r(this, At) / r(this, D).naturalHeight
  ), r(this, M).setTransform(r(this, x)));
}, /**
 * The valid image repeat types.
 * @static
 * @type {Object.<string, string>}
 */
b(I, "IMAGE_REPEAT_TYPES", {
  repeat: "repeat",
  "repeat-x": "repeat-x",
  "repeat-y": "repeat-y",
  "no-repeat": "no-repeat"
}), /**
 * The default image repeat option.
 * @type {string}
 */
b(I, "DEFAULT_IMAGE_REPEAT", "repeat"), /**
 * The default image offset.
 * @type {Object}
 */
b(I, "DEFAULT_IMAGE_OFFSET", {
  x: 0,
  y: 0
}), /**
 * The default image dimensions.
 * @type {Object}
 */
b(I, "DEFAULT_IMAGE_DIMENSIONS", {
  width: 1,
  height: 1
});
let Re = I;
var rt, It, st, it, Ot;
class lr {
  /** Create a new Clock instance. */
  constructor() {
    /**
     * When the object was created.
     * @private
     * @type {number}
     */
    o(this, rt);
    /**
     * The last frame time.
     * @private
     * @type {number}
     */
    o(this, It);
    /**
     * The time since instantiation.
     * @private
     * @type {number}
     */
    o(this, st);
    /**
     * The time since last frame.
     * @private
     * @type {number}
     */
    o(this, it);
    /**
     * When the update method was last called.
     * @private
     * @type {number}
     */
    o(this, Ot);
    this.restart();
  }
  /**
   * Gets the time the object was instantiated or last restarted.
   * @returns {number} A number representing the time.
   */
  get startTime() {
    return r(this, rt);
  }
  /**
   * Gets the time since instantiation or last restart.
   * @returns {number} A number representing the time.
   */
  get elapsedTime() {
    return r(this, st);
  }
  /**
   * Gets the time since last frame.
   * @returns {number} A number representing the time.
   */
  get deltaTime() {
    return r(this, it);
  }
  /**
   * Restarts the clock time.
   * @returns {void}
   */
  restart() {
    i(this, rt, performance.now()), i(this, It, r(this, rt)), i(this, st, 0), i(this, it, 0), i(this, Ot, 0);
  }
  /**
   * Updates the internal time values.
   * Note: the method must be called at the beginning of the animation loop.
   * @returns {void}
   */
  update() {
    const e = performance.now();
    if (e !== r(this, Ot)) {
      const t = e;
      i(this, it, (t - r(this, It)) / 1e3), i(this, st, (t - r(this, rt)) / 1e3), i(this, It, t), i(this, Ot, e);
    }
  }
  /**
   * Gets the time elapsed since instantiation or last restart.
   * @returns {number} A number representing the time.
   * @deprecated since version 0.1.0 - Use the elapsedTime getter instead.
   */
  getElapsedTime() {
    return g("getElapsedTime()", "elapsedTime getter", "0.1.0"), this.update(), r(this, st);
  }
  /**
   * Gets the time elapsed since the last update call.
   * @returns {number} A number representing the time.
   * @deprecated since version 0.1.0 - Use the deltaTime getter instead.
   */
  getDeltaTime() {
    return g("getDeltaTime()", "deltaTime getter", "0.1.0"), this.update(), r(this, it);
  }
}
rt = new WeakMap(), It = new WeakMap(), st = new WeakMap(), it = new WeakMap(), Ot = new WeakMap();
class Xe {
  /**
   * Apply the material to the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {void}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  applyToContext2D(e) {
    throw new Error("applyToContext2D() must be implemented in the subclass");
  }
}
var Ae, Y, X, nt, ot, ht;
const Rt = class Rt extends Xe {
  /**
   * Create a new BasicMaterial instance.
   * @param {Object} [options] - The material's options.
   * @param {Color|null|undefined} [options.fillStyle] - The fillStyle.
   * @param {Color|null|undefined} [options.strokeStyle] - The strokeStyle.
   * @param {number|null|undefined} [options.lineWidth=BasicMaterial.DEFAULT_LINE_WIDTH] - The lineWidth.
   * @param {Texture2D|null|undefined} [options.texture2D] - The Texture2D.
   * @throws {Error} If the options.fillStyle is not null, undefined or a Color.
   * @throws {Error} If the options.strokeStyle is not null, undefined or a Color.
   * @throws {Error} If the options.lineWidth is not null, undefined or a positive number.
   * @throws {Error} If the options.texture2D is not null, undefined or a Texture2D.
   * @throws {Error} If both options.fillStyle and options.strokeStyle are null or undefined.
   */
  constructor(t = {}) {
    super();
    /**
     * The material's fillStyle.
     * @private
     * @type {Color|null|undefined}
     */
    o(this, Y);
    /**
     * The material's strokeStyle.
     * @private
     * @type {Color|null|undefined}
     */
    o(this, X);
    /**
     * The material's lineWidth.
     * @private
     * @type {number}
     */
    o(this, nt);
    /**
     * The material's texture2D.
     * @private
     * @type {Texture2D|null|undefined}
     */
    o(this, ot);
    /**
     * A flag indicating if batch setting is active.
     * @private
     * @type {boolean}
     */
    o(this, ht, !1);
    const { fillStyle: s, strokeStyle: n, lineWidth: h, texture2D: l } = t;
    if (!s && !n)
      throw new Error("Either fillStyle or strokeStyle must be provided");
    i(this, ht, !0), this.fillStyle = s, this.strokeStyle = n, this.lineWidth = h, this.texture2D = l, i(this, ht, !1);
  }
  /**
   * Gets the default line width.
   * @public
   * @static
   * @returns {number} A number representing the default line width.
   */
  static get DEFAULT_LINE_WIDTH() {
    return r(Rt, Ae);
  }
  /**
   * Gets the material's fillStyle.
   * @returns {Color|null|undefined} The Color instance, null or undefined.
   */
  get fillStyle() {
    return r(this, Y);
  }
  /**
   * Sets the material's fillStyle.
   * @param {Color|null|undefined} fillStyle - The new fillStyle to assign.
   * @returns {void}
   * @throws {Error} If the new fillStyle is not of type Color, null or undefined.
   * @throws {Error} If the new fillStyle is null or undefined and the material's strokeStyle also is null or undefined.
   */
  set fillStyle(t) {
    if (t != null && !(t instanceof q))
      throw new Error("fillStyle must be a Color or null");
    if (!r(this, ht) && !t && !r(this, X))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    i(this, Y, t);
  }
  /**
   * Gets the material's strokeStyle.
   * @returns {Color|null|undefined} The Color instance, null or undefined.
   */
  get strokeStyle() {
    return r(this, X);
  }
  /**
   * Sets the material's strokeStyle.
   * @param {Color|null|undefined} strokeStyle - The new strokeStyle to assign.
   * @returns {void}
   * @throws {Error} If the new strokeStyle is not of type Color, null or undefined.
   * @throws {Error} If the new strokeStyle is null or undefined and the material's fillStyle also is null or undefined.
   */
  set strokeStyle(t) {
    if (t != null && !(t instanceof q))
      throw new Error("strokeStyle must be a Color or null");
    if (!r(this, ht) && !t && !r(this, Y))
      throw new Error("Either fillStyle or strokeStyle must be provided");
    i(this, X, t);
  }
  /**
   * Gets the material's lineWidth.
   * @returns {number} A number representing the lineWidth.
   */
  get lineWidth() {
    return r(this, nt);
  }
  /**
   * Sets the material's lineWidth (defaults to BasicMaterial.DEFAULT_LINE_WIDTH).
   * @param {number|null|undefined} lineWidth - The new lineWidth to assign.
   * @returns {void}
   * @throws {Error} If the new lineWidth is not null, undefined, or a positive number.
   */
  set lineWidth(t) {
    if (t != null && typeof t != "number" || t <= 0)
      throw new Error("lineWidth must be a positive number or null");
    i(this, nt, t ?? Rt.DEFAULT_LINE_WIDTH);
  }
  /**
   * Gets the material's texture2D.
   * @returns {Texture2D|null|undefined} The Texture2D instance, null or undefined.
   */
  get texture2D() {
    return r(this, ot);
  }
  /**
   * Sets the material's texture2D.
   * @param {Texture2D|null|undefined} texture2D - The new texture2D to assign.
   * @returns {void}
   * @throws {Error} If texture2D is not null, undefined or a Texture2D.
   */
  set texture2D(t) {
    if (t != null && !(t instanceof Re))
      throw new Error("texture2D must be of type Texture2D or null");
    i(this, ot, t);
  }
  /**
   * Apply the material to the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {void}
   */
  applyToContext2D(t) {
    r(this, ot) ? t.fillStyle = r(this, ot).createPattern(t) : r(this, Y) && (t.fillStyle = r(this, Y).toString()), r(this, X) && (t.strokeStyle = r(this, X).toString()), r(this, nt) && (t.lineWidth = r(this, nt));
  }
};
Ae = new WeakMap(), Y = new WeakMap(), X = new WeakMap(), nt = new WeakMap(), ot = new WeakMap(), ht = new WeakMap(), /**
 * The default line width.
 * @private
 * @type {number}
 */
o(Rt, Ae, 1);
let $e = Rt;
class Dt {
  /**
   * Check for any conflicts between the geometry and the provided material.
   * @param {Material} material - The material to check against.
   * @returns {void}
   */
  // eslint-disable-next-line no-unused-vars
  checkMaterialConflicts(e) {
  }
  /**
   * Draws the mesh onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   * @abstract
   */
  // eslint-disable-next-line no-unused-vars
  drawContext2D(e, t, s) {
    throw new Error("drawContext2D() must be implemented in the subclass");
  }
}
var Jt, Qt;
class ur extends Dt {
  /**
   * Create a new RectGeometry instance.
   * @param {number} width - The width.
   * @param {number} height - The height.
   * @throws {Error} if the width or height is not a positive number.
   */
  constructor(t, s) {
    super();
    /**
     * The rectangle's width.
     * @private
     * @type {number}
     */
    o(this, Jt);
    /**
     * The rectangle's height.
     * @private
     * @type {number}
     */
    o(this, Qt);
    this.width = t, this.height = s;
  }
  /**
   * Gets the rectangle's width.
   * @returns {number} A number representing the width.
   */
  get width() {
    return r(this, Jt);
  }
  /**
   * Sets the rectangle's width.
   * @param {number} width - The new width.
   * @returns {void}
   * @throws {Error} if the new width is not a positive number.
   */
  set width(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("width must be a positive number");
    i(this, Jt, t);
  }
  /**
   * Gets the rectangle's height.
   * @returns {number} A number representing the height.
   */
  get height() {
    return r(this, Qt);
  }
  /**
   * Sets the rectangle's height.
   * @param {number} height - The new height.
   * @returns {void}
   * @throws {Error} if the new height is not a positive number.
   */
  set height(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("height must be a positive number");
    i(this, Qt, t);
  }
  /**
   * Draws the rectangle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(t, s, n) {
    const { scale: h, position: l, rotation: u, localAnchorPoint: m } = s, f = m.offset, E = this.width * h.x, d = this.height * h.y, A = E / 2, y = d / 2, R = -f[0] * A, lt = -f[1] * y;
    t.save(), t.translate(l.x - R, l.y - lt), t.rotate(u), t.translate(R - A, lt - y), n.fillStyle && t.fillRect(0, 0, E, d), n.strokeStyle && t.strokeRect(0, 0, E, d), t.restore();
  }
}
Jt = new WeakMap(), Qt = new WeakMap();
var te;
class cr extends Dt {
  /**
   * Create a new CircleGeometry instance.
   * @param {number} radius - The radius.
   * @throws {Error} if the radius is not a positive number.
   */
  constructor(t) {
    super();
    /**
     * The circle's radius.
     * @private
     * @type {number}
     */
    o(this, te);
    this.radius = t;
  }
  /**
   * Gets the circle's radius.
   * @returns {number} A number representing the radius.
   */
  get radius() {
    return r(this, te);
  }
  /**
   * Sets the circle's radius.
   * @param {number} radius - the new radius.
   * @returns {void}
   * @throws {Error} if the new radius is not a positive number.
   */
  set radius(t) {
    if (typeof t != "number" || t < 0)
      throw new Error("radius must be a positive number");
    i(this, te, t);
  }
  /**
   * Draws the circle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(t, s, n) {
    const { position: h, rotation: l, scale: u, localAnchorPoint: m } = s, f = m.offset, E = (u.x + u.y) / 2, d = this.radius * E, A = f[0] * d, y = f[1] * d;
    t.save(), t.translate(h.x + A, h.y + y), t.rotate(l), t.translate(-A, -y), t.beginPath(), t.arc(0, 0, d, 0, Math.PI * 2), t.closePath(), n.fillStyle && t.fill(), n.strokeStyle && t.stroke(), t.restore();
  }
}
te = new WeakMap();
var xt, ee, G, z, Ie, Ge;
const O = class O extends Dt {
  /**
   * Create a new TextGeometry instance.
   * @param {string} text - The text to be displayed.
   * @param {Object} [options] - The geometry options.
   * @param {number|null|undefined} [options.maxWidth] - The maximum width allowed for the text layout.
   * @param {string|null|undefined} [options.font=TextGeometry.DEFAULT_OPTIONS.font] - The font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null|undefined} [options.textAlign=TextGeometry.DEFAULT_OPTIONS.textAlign] - The horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null|undefined} [options.textBaseline=TextGeometry.DEFAULT_OPTIONS.textBaseline] - The vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null|undefined} [options.direction=TextGeometry.DEFAULT_OPTIONS.direction] - The direction of the text content.
   * @throws {Error} If the text is not a string.
   * @throws {Error} If the maxWidth is not a number, null, or undefined.
   * @throws {Error} If the font is not a string, null, or undefined.
   * @throws {Error} If the textAlign is not a valid alignment type, null, or undefined.
   * @throws {Error} If the textBaseline is not a valid baseline type, null, or undefined.
   * @throws {Error} If the direction is not a valid direction type, null, or undefined.
   */
  constructor(t, s = {}) {
    super();
    o(this, Ie);
    /**
     * The text to be displayed.
     * @private
     * @type {string}
     */
    o(this, xt);
    /**
     * The options.
     * @private
     * @type {Object}
     */
    o(this, ee);
    /**
     * The text's width.
     * @private
     * @type {number|null}
     */
    o(this, G);
    /**
     * The text's height.
     * @private
     * @type {number|null}
     */
    o(this, z);
    this.text = t, this.options = s;
  }
  /**
   * Gets the geometry's text.
   * @returns {string} A string representing the text to be displayed.
   */
  get text() {
    return r(this, xt);
  }
  /**
   * Sets the geometry's text.
   * Side-effects: changing text forces recalculation of text dimensions.
   * @param {string} text - the new text to be displayed.
   * @returns {void}
   * @throws {Error} if the new text is not a string.
   */
  set text(t) {
    if (typeof t != "string")
      throw new Error("text must be a string");
    i(this, xt, t), i(this, G, null), i(this, z, null);
  }
  /**
   * Gets the geometry's options.
   * @returns {Object}
   */
  get options() {
    return r(this, ee);
  }
  /**
   * Sets the geometry's options.
   * Side-effects: changing options forces recalculation of text dimensions.
   * @param {Object} [options] - The new geometry options.
   * @param {number|null|undefined} [options.maxWidth] - The new maximum width allowed for the text layout.
   * @param {string|null|undefined} [options.font=TextGeometry.DEFAULT_OPTIONS.font] - The new font family used for the text content.
   * @param {"start"|"end"|"left"|"right"|"center"|null|undefined} [options.textAlign=TextGeometry.DEFAULT_OPTIONS.textAlign] - The new horizontal alignment of the text content.
   * @param {"top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null|undefined} [options.textBaseline=TextGeometry.DEFAULT_OPTIONS.textBaseline] - The new vertical alignment of the text content.
   * @param {"ltr"|"rtl"|"inherit"|null|undefined} [options.direction=TextGeometry.DEFAULT_OPTIONS.direction] - The new direction of the text content.
   * @throws {Error} If the new maxWidth is not a number, null, or undefined.
   * @throws {Error} If the new font is not a string, null, or undefined.
   * @throws {Error} If the new textAlign is not a valid alignment type, null, or undefined.
   * @throws {Error} If the new textBaseline is not a valid baseline type, null, or undefined.
   * @throws {Error} If the new direction is not a valid direction type, null, or undefined.
   */
  set options(t) {
    const { maxWidth: s, textAlign: n, textBaseline: h, direction: l, font: u } = t;
    if (s != null && typeof s != "number")
      throw new Error("maxWidth must be a number or undefined");
    if (u != null && typeof u != "string")
      throw new Error("font must be a string or null");
    if (n != null && typeof n != "string" && !O.TEXT_ALIGNMENT_TYPES[n])
      throw new Error(
        `textAlign must be a string with value: ${Object.values(
          O.TEXT_ALIGNMENT_TYPES
        ).join(", ")}`
      );
    if (h != null && typeof h != "string" && !O.TEXT_BASELINE_TYPES[h])
      throw new Error(
        `textBaseline must be a string with value: ${Object.values(
          O.TEXT_BASELINE_TYPES
        ).join(", ")}`
      );
    if (l != null && typeof l != "string" && !O.TEXT_DIRECTION_TYPES[l])
      throw new Error(
        `direction must be a string with value: ${Object.values(
          O.TEXT_DIRECTION_TYPES
        ).join(", ")}`
      );
    i(this, ee, {
      ...O.DEFAULT_OPTIONS,
      ...t
    }), i(this, G, null), i(this, z, null);
  }
  /**
   * Draws the text onto the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(t, s, n) {
    const { maxWidth: h, textAlign: l, textBaseline: u, direction: m, font: f } = this.options, { fillStyle: E, strokeStyle: d } = n;
    f && t.font !== f && (t.font = f), l && t.textAlign !== l && (t.textAlign = l), u && t.textBaseline !== u && (t.textBaseline = u), m && t.direction !== m && (t.direction = m), (!r(this, G) || !r(this, z)) && c(this, Ie, Ge).call(this, t);
    const { position: A, rotation: y, scale: R, localAnchorPoint: lt } = s, de = lt.offset, Pe = r(this, G) / 2 * de[0] * R.x, Ne = r(this, z) / 2 * de[1] * R.y;
    t.save(), t.translate(A.x + Pe, A.y + Ne), t.rotate(y), t.translate(-Pe, -Ne), E && t.fillText(this.text, 0, 0, h), d && t.strokeText(this.text, 0, 0, h), t.restore();
  }
};
xt = new WeakMap(), ee = new WeakMap(), G = new WeakMap(), z = new WeakMap(), Ie = new WeakSet(), /**
 * Recalculates the width and height based on the text to be displayed and the canvas 2D rendering context.
 * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
 * @returns {void}
 * @private
 */
Ge = function(t) {
  const { width: s, actualBoundingBoxAscent: n, actualBoundingBoxDescent: h } = t.measureText(r(this, xt));
  i(this, G, s), i(this, z, n + h);
}, /**
 * The valid text alignment types.
 * @static
 * @type {Object.<string, string>}
 */
b(O, "TEXT_ALIGNMENT_TYPES", {
  start: "start",
  end: "end",
  left: "left",
  right: "right",
  center: "center"
}), /**
 * The valid text direction types.
 * @static
 * @type {Object.<string, string>}
 */
b(O, "TEXT_DIRECTION_TYPES", {
  ltr: "ltr",
  rtl: "rtl",
  inherit: "inherit"
}), /**
 * The valid text baseline types.
 * @static
 * @type {Object.<string, string>}
 */
b(O, "TEXT_BASELINE_TYPES", {
  top: "top",
  hanging: "hanging",
  middle: "middle",
  alphabetic: "alphabetic",
  ideographic: "ideographic",
  bottom: "bottom"
}), /**
 * The default TextGeometry options.
 * @static
 * @type {{ font: string, textAlign: ("start"|"end"|"left"|"right"|"center"|null), textBaseline: ("top"|"hanging"|"middle"|"alphabetic"|"ideographic"|"bottom"|null), direction: ("ltr"|"rtl"|"inherit"|null) }}
 */
b(O, "DEFAULT_OPTIONS", {
  // maxWidth: null, Setting default maxWidth to null can cause issues.
  font: "14px Arial",
  textAlign: null,
  textBaseline: null,
  direction: null
});
let Be = O;
var S, at, K, ze, Ze, Ve;
const U = class U extends Dt {
  /**
   * Create a new LineGeometry instance.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array contains less than one 4-number arrays.
   * @throws {Error} If the vertices as array contains an array with a length not equal to four.
   * @throws {Error} If the vertices as Float32Array have a length less than 4.
   * @throws {Error} If the vertices as Float32Array have an odd length.
   */
  constructor(t) {
    super();
    o(this, K);
    /**
     * A flat array of line segments.
     * @private
     * @type {Float32Array}
     */
    o(this, S);
    /**
     * The geometry's centroid.
     * @private
     * @type {Array<number>}
     */
    o(this, at);
    this.vertices = t;
  }
  /**
   * Gets the geometry's vertices.
   * @returns {Float32Array} The Float32Array instance.
   */
  get vertices() {
    return r(this, S);
  }
  /**
   * Sets the geometry's vertices.
   * Side-effects: If given a nested array, it is converted to a Float32Array instance.
   * Side-effects: recalculates the centroid and move the vertices toward the centroid.
   * @param {Array.<Array<number>>|Float32Array} vertices - The new vertices.
   * @returns {void}
   * @throws {Error} If the new vertices is not an array or Float32Array.
   * @throws {Error} If the new vertices as array contains less than one 4-number arrays.
   * @throws {Error} If the new vertices as array contains an array with a length not equal to four.
   * @throws {Error} If the new vertices as Float32Array have a length less than 4.
   * @throws {Error} If the new vertices as Float32Array have an uneven length.
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
      if (t.some((n) => !Array.isArray(n) || n.length !== 4))
        throw new Error(
          "vertices as array must contain arrays with a length of four numbers"
        );
      c(this, K, ze).call(this, t);
    } else {
      if (t.length < 4)
        throw new Error("vertices as Float32Array must have a length of 4");
      if (t.length % 2 === 1)
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      i(this, S, t);
    }
    c(this, K, Ze).call(this), c(this, K, Ve).call(this);
  }
  /**
   * Check for any conflicts between the geometry and the provided material.
   * @param {Material} material - The material to check against.
   * @returns {void}
   * @throws {Error} If the material does not have a strokeStyle.
   */
  checkMaterialConflicts(t) {
    if (!t.strokeStyle)
      throw new Error("LineGeometry requires a strokeStyle in the material");
  }
  /**
   * Draws the lines onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(t, s, n) {
    const { position: h, rotation: l, scale: u, localAnchorPoint: m } = s, { offset: f } = m, E = r(this, S), d = r(this, at)[0] * f[0] * u.x, A = r(this, at)[1] * f[1] * u.y;
    t.save(), t.translate(h.x + d, h.y + A), t.rotate(l), t.translate(-d, -A), t.beginPath();
    for (let y = 0; y < E.length; y += U.SEGMENT_SIZE)
      t.moveTo(E[y] * u.x, E[y + 1] * u.y), t.lineTo(E[y + 2] * u.x, E[y + 3] * u.y);
    n.strokeStyle && t.stroke(), t.restore();
  }
};
S = new WeakMap(), at = new WeakMap(), K = new WeakSet(), /**
 * Converts the given nested array to a Float32Array and sets the vertices.
 * @param {Array.<Array<number>>} vertices - The nested array of vertices to convert.
 * @returns {void}
 * @private
 */
ze = function(t) {
  const s = t.length * U.SEGMENT_SIZE;
  (!r(this, S) || r(this, S).length !== s) && i(this, S, new Float32Array(s));
  let n = 0;
  for (let h = 0; h < t.length; h++) {
    const l = t[h];
    r(this, S)[n] = l[0], r(this, S)[n + 1] = l[1], r(this, S)[n + 2] = l[2], r(this, S)[n + 3] = l[3], n += U.SEGMENT_SIZE;
  }
}, /**
 * Calculates the geometry's centroid.
 * @returns {void}
 * @private
 */
Ze = function() {
  const t = r(this, S), s = t.length, n = s / 2, h = [0, 0];
  for (let l = 0; l < s; l += U.SEGMENT_SIZE) {
    const u = t[l], m = t[l + 1], f = t[l + 2], E = t[l + 3];
    h[0] += u + f, h[1] += m + E;
  }
  h[0] = h[0] / n, h[1] = h[1] / n, i(this, at, h);
}, /**
 * Translates all points so the geometry is centered around [0, 0].
 * @returns {void}
 * @private
 */
Ve = function() {
  const t = r(this, S), s = r(this, at);
  for (let n = 0; n < t.length; n += U.SEGMENT_SIZE)
    t[n] -= s[0], t[n + 1] -= s[1], t[n + 2] -= s[0], t[n + 3] -= s[1];
}, /**
 * Defines the number of coordinates stored in the flat array for line segments (e.g. 1=x1, 2=y1, 3=x2, 4=y2).
 * @type {number}
 */
b(U, "SEGMENT_SIZE", 4);
let Ue = U;
var w, Ct, J, We, je, qe;
const tt = class tt extends Dt {
  /**
   * Creates a new PolygonGeometry instance.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array has less than three 2-number arrays.
   * @throws {Error} If the vertices as array has an array with less or more than two numbers.
   * @throws {Error} If the length of the vertices as Float32Array is less than 6.
   * @throws {Error} If the length of the vertices as Float32Array is odd.
   */
  constructor(t) {
    super();
    o(this, J);
    /**
     * A flat array of vertices.
     * @private
     * @type {Float32Array}
     */
    o(this, w);
    /**
     * The polygon's centroid.
     * @private
     * @type {Vector2}
     */
    o(this, Ct);
    this.vertices = t;
  }
  /**
   * Sets the polgyon's vertices
   * Side-effects: The setter recalculates the centroid and move the vertices toward the centroid.
   * Side-effects: The setter automatically adds the first vertex as the last if they are not equal to ensure the polygon close.
   * @param {Array.<Array<number>>|Float32Array} vertices - The vertices.
   * @returns {void}
   * @throws {Error} If the vertices is not an array or Float32Array.
   * @throws {Error} If the vertices as array has less than three 2-number arrays.
   * @throws {Error} If the vertices as array has an array with less or more than two numbers.
   * @throws {Error} If the length of the vertices as Float32Array is less than 6.
   * @throws {Error} If the length of the vertices as Float32Array is odd.
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
      if (t.some((n) => !Array.isArray(n) || n.length !== 2))
        throw new Error(
          "vertices as array must contain arrays with a length of two numbers"
        );
      c(this, J, We).call(this, t);
    } else {
      if (t.length < 6)
        throw new Error("vertices as Float32Array must have a length of 6");
      if (t.length % 2 === 1)
        throw new Error(
          "vertices as Float32Array must contain an even number of values"
        );
      i(this, w, t);
    }
    c(this, J, je).call(this), i(this, Ct, Ce.calculateCentroid(r(this, w))), c(this, J, qe).call(this);
  }
  /**
   * Gets the polygons's vertices.
   * @returns {Float32Array} The Float32Array instance.
   */
  get vertices() {
    return r(this, w);
  }
  /**
   * Draws the circle onto the given canvas 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @param {Transform} transform - The transform.
   * @param {Material} material - The material.
   * @returns {void}
   */
  drawContext2D(t, s, n) {
    const { position: h, rotation: l, scale: u, localAnchorPoint: m } = s, { offset: f } = m, E = r(this, Ct), d = r(this, w), A = E.x * u.x * f[0], y = E.y * u.y * f[1];
    t.save(), t.translate(h.x + A, h.y + y), t.rotate(l), t.translate(-A, -y), t.beginPath(), t.moveTo(d[0] * u.x, d[1] * u.y);
    for (
      let R = 2;
      // Skip the first two.
      R < d.length;
      R += tt.COORDINATES_SIZE
    ) {
      const lt = d[R] * u.x, de = d[R + 1] * u.y;
      t.lineTo(lt, de);
    }
    t.closePath(), n.strokeStyle && t.stroke(), n.fillStyle && t.fill(), t.restore();
  }
};
w = new WeakMap(), Ct = new WeakMap(), J = new WeakSet(), /**
 * Convert the nested array to Float32Array and set the vertices.
 * @param {Array.<Array<number>>} vertices - The vertices.
 * @returns {void}
 */
We = function(t) {
  const s = t.length * tt.COORDINATES_SIZE;
  (!r(this, w) || r(this, w).length !== s) && i(this, w, new Float32Array(s));
  let n = 0;
  for (let h = 0; h < t.length; h++) {
    const l = t[h];
    r(this, w)[n] = l[0], r(this, w)[n + 1] = l[1], n += tt.COORDINATES_SIZE;
  }
}, /**
 * Ensure the first and last vertex is the same values.
 * Note: The first and last vertex must be the same to ensure the polygon to close.
 * @returns {void}
 */
je = function() {
  const t = r(this, w), s = t.length, n = t[0], h = t[1], l = t[s - 2], u = t[s - 1];
  (n !== l || h !== u) && (i(this, w, new Float32Array(s + 2)), r(this, w).set(t, 0), r(this, w)[s] = n, r(this, w)[s + 1] = h);
}, /**
 * Move the vertices toward the centroid to ensure the anchor point can be calculated correct.
 * @returns {void}
 * @throws {Error} If the #centroid is undefined.
 */
qe = function() {
  const t = r(this, Ct);
  if (!t)
    throw new Error(
      "#centroid is undefined. The centroid must be calculated before correcting vertices."
    );
  for (let s = 0; s < this.vertices.length; s += tt.COORDINATES_SIZE)
    r(this, w)[s] -= t.x, r(this, w)[s + 1] -= t.y;
}, /**
 * Defines the number of coordinates stored in the flat array (e.g. 1=x, 2=y).
 * @type {number}
 */
b(tt, "COORDINATES_SIZE", 2);
let ke = tt;
var Z, V;
class or extends mt {
  /**
   * Create a new Mesh instance.
   * @param {Geometry} geometry - The mesh's geometry.
   * @param {Material} material - The mesh's material.
   * @throws {Error} If geometry is not of type Geometry.
   * @throws {Error} If material is not of type Material.
   */
  constructor(t, s) {
    super();
    /**
     * The mesh's geometry.
     * @private
     * @type {Geometry}
     */
    o(this, Z);
    /**
     * The mesh's material.
     * @private
     * @type {Material} 
     */
    o(this, V);
    this.geometry = t, this.material = s;
  }
  /**
   * Sets the mesh's geometry.
   * @param {Geometry} geometry - The new geometry to assign.
   * @returns {void}
   * @throws {Error} If the new geometry is not of type Geometry.
   */
  set geometry(t) {
    if (!(t instanceof Dt))
      throw new Error("geometry must be of type Geometry");
    i(this, Z, t), r(this, V) && r(this, Z).checkMaterialConflicts(r(this, V));
  }
  /**
   * Gets the mesh's geometry.
   * @returns {Geometry} The geometry instance.
   */
  get geometry() {
    return r(this, Z);
  }
  /**
   * Sets the mesh's material.
   * @param {Material} material - The new material to assign.
   * @returns {void}
   * @throws {Error} If the new material is not of type Material.
   */
  set material(t) {
    if (!(t instanceof Xe))
      throw new Error("material must be of type Material");
    i(this, V, t), r(this, Z) && r(this, Z).checkMaterialConflicts(r(this, V));
  }
  /**
   * Gets the mesh's material.
   * @returns {Material} The material instance.
   */
  get material() {
    return r(this, V);
  }
  /**
   * Draws the mesh onto the given canvas 2D context.
   * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context.
   * @returns {void}
   */
  drawContext2D(t) {
    this.material.applyToContext2D(t), this.geometry.drawContext2D(t, this.transform, this.material);
  }
}
Z = new WeakMap(), V = new WeakMap(), /**
 * Defines the class' default z-index (default: 1000).
 * @static
 * @type {number}
 */
b(or, "Z_INDEX", 1e3);
var re, se, ie, ne, L, W, ut;
class He extends q {
  /**
   * Create a new RgbaColor instance.
   * @param {number} r - The red value (0-255).
   * @param {number} g - The green value (0-255).
   * @param {number} b - The blue value (0-255).
   * @param {number} a - The alpha value (0-1).
   * @throws {Error} if red, green, blue or alpha values are not numbers or out of range.
   */
  constructor(t, s, n, h = 1) {
    super(`rgba(${t}, ${s}, ${n}, ${h})`);
    o(this, W);
    /**
     * The red value (0-255).
     * @private
     * @type {number}
     */
    o(this, re);
    /**
     * The green value (0-255).
     * @private
     * @type {number}
     */
    o(this, se);
    /**
     * The blue value (0-255).
     * @private
     * @type {number}
     */
    o(this, ie);
    /**
     * The alpha value (0-1).
     * @private
     * @type {number}
     */
    o(this, ne);
    /**
     * A flag to indicate if batch setting is in progress.
     * @private
     * @type {boolean}
     */
    o(this, L, !1);
    this.set(t, s, n, h);
  }
  /**
   * Gets the color's red value (0-255).
   * @returns {number} A number representing the red value.
   */
  get r() {
    return r(this, re);
  }
  /**
   * Sets the color's red value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} r - The new red value (0-255).
   * @returns {void}
   * @throws {Error} if the new red value is not a number or out of range.
   */
  set r(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("r must be a number between 0 and 255");
    i(this, re, t), r(this, L) || c(this, W, ut).call(this);
  }
  /**
   * Gets the color's green value (0-255).
   * @returns {number} A number representing the green value.
   */
  get g() {
    return r(this, se);
  }
  /**
   * Sets the color's green value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} g - The new green value (0-255).
   * @returns {void}
   * @throws {Error} if the new green value is not a number or out of range.
   */
  set g(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("g must be a number between 0 and 255");
    i(this, se, t), r(this, L) || c(this, W, ut).call(this);
  }
  /**
   * Gets the color's blue value (0-255).
   * @returns {number} A number representing the blue value.
   */
  get b() {
    return r(this, ie);
  }
  /**
   * Sets the color's blue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} b - The new blue value (0-255).
   * @returns {void}
   * @throws {Error} if the new blue value is not a number or out of range.
   */
  set b(t) {
    if (typeof t != "number" || t < 0 || t > 255)
      throw new Error("b must be a number between 0 and 255");
    i(this, ie, t), r(this, L) || c(this, W, ut).call(this);
  }
  /**
   * Gets the color's alpha value (0-1).
   * @returns {number} A number representing the alpha value.
   */
  get a() {
    return r(this, ne);
  }
  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    i(this, ne, t), r(this, L) || c(this, W, ut).call(this);
  }
  /**
   * Sets the color's red, green, blue and alpha values.
   * @param {number} r - The new red value (0-255).
   * @param {number} g - The new green value (0-255).
   * @param {number} b - The new blue value (0-255).
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if red, green, blue or alpha values are not numbers or out of range.
   */
  set(t, s, n, h) {
    try {
      i(this, L, !0), this.r = t, this.g = s, this.b = n, this.a = h, c(this, W, ut).call(this);
    } finally {
      i(this, L, !1);
    }
  }
  /**
   * Sets the color's red value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} r - The new red value (0-255).
   * @returns {void}
   * @throws {Error} if the new red value is not a number or out of range.
   * @deprecated since version 0.1.0 - use r setter instead.
   */
  setRed(t) {
    g("setRed()", "r setter", "0.1.0"), this.r = t;
  }
  /**
   * Sets the color's green value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} g - The new green value (0-255).
   * @returns {void}
   * @throws {Error} if the new green value is not a number or out of range.
   * @deprecated since version 0.1.0 - use g setter instead.
   */
  setGreen(t) {
    g("setGreen()", "g setter", "0.1.0"), this.g = t;
  }
  /**
   * Sets the color's blue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} b - The new blue value (0-255).
   * @returns {void}
   * @throws {Error} if the new blue value is not a number or out of range.
   * @deprecated since version 0.1.0 - use b setter instead.
   */
  setBlue(t) {
    g("setBlue()", "b setter", "0.1.0"), this.b = t;
  }
  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(r, g, b, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   * @deprecated since version 0.1.0 - use a setter instead.
   */
  setAlpha(t) {
    g("setAlpha()", "a setter", "0.1.0"), this.a = t;
  }
  /**
   * Gets a string representation of the color in RGBA format.
   * @returns {string} The RGBA string representation of the color.
   */
  toRgbaString() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  /**
   * Gets a string representation of the color in RGB format.
   * @returns {string} The RGB string representation of the color.
   */
  toRgbString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
re = new WeakMap(), se = new WeakMap(), ie = new WeakMap(), ne = new WeakMap(), L = new WeakMap(), W = new WeakSet(), /**
 * update the colorStr property based on the rgba props.
 * @returns {void}
 */
ut = function() {
  this.colorStr = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
};
var oe, he, ae, le;
class hr extends mt {
  /**
   * Create a new PointLight2D instance.
   * @param {number} [radius=100] - The radius.
   * @param {number} [intensity=1] - The intensity.
   * @param {Color} [color=new RgbaColor(255, 255, 200, 1)] - The color.
   * @param {Color} [colorStop=new RgbaColor(255, 255, 200, 0)] - The colorStop.
   * @throws {Error} If the radius is not a positive number.
   * @throws {Error} If the intensity is not a positive number.
   * @throws {Error} If the color is not a Color.
   * @throws {Error} If the colorStop is not a Color.
   */
  constructor(t = 100, s = 1, n = new He(255, 255, 200, 1), h = new He(255, 255, 200, 0)) {
    super();
    /**
     * The light's radius.
     * @private
     * @type {number}
     */
    o(this, oe);
    /**
     * The light's intensity.
     * @private
     * @type {number}
     */
    o(this, he);
    /**
     * The light's color.
     * @private
     * @type {Color}
     */
    o(this, ae);
    /**
     * The light's colorStop.
     * @private
     * @type {Color}
     */
    o(this, le);
    this.radius = t, this.intensity = s, this.color = n, this.colorStop = h;
  }
  /**
   * Gets the light's radius.
   * @returns {number} A number representing the light's radius.
   */
  get radius() {
    return r(this, oe);
  }
  /**
   * Sets the light's radius.
   * @param {number} radius - The new radius.
   * @returns {void}
   * @throws {Error} If the new radius is not a positive number.
   */
  set radius(t) {
    if (typeof t != "number" || t <= 0)
      throw new Error("radius must be a positive number");
    i(this, oe, t);
  }
  /**
   * Gets the light's intensity.
   * @returns {number} A number representing the light's intensity.
   */
  get intensity() {
    return r(this, he);
  }
  /**
   * Sets the light's intensity.
   * @param {number} intensity - The new intensity.
   * @returns {void}
   * @throws {Error} If the new intensity is not a positive number.
   */
  set intensity(t) {
    if (typeof t != "number" || t <= 0)
      throw new Error("intensity must be a positive number");
    i(this, he, t);
  }
  /**
   * Gets the light's color.
   * @returns {Color} The Color instance.
   */
  get color() {
    return r(this, ae);
  }
  /**
   * Sets the light's color.
   * @param {Color} color - The new color.
   * @returns {void}
   * @throws {Error} If the new color is not a Color.
   */
  set color(t) {
    if (!(t instanceof q))
      throw new Error("color must be a Color");
    i(this, ae, t);
  }
  /**
   * Gets the light's colorStop.
   * @returns {Color} The Color instance.
   */
  get colorStop() {
    return r(this, le);
  }
  /**
   * Sets the light's colorStop.
   * @param {Color} colorStop - The new colorStop.
   * @returns {void}
   * @throws {Error} If the new colorStop is not a Color.
   */
  set colorStop(t) {
    if (!(t instanceof q))
      throw new Error("colorStop must be a Color");
    i(this, le, t);
  }
  /**
   * Draws the light effect.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @returns {void}
   */
  drawContext2D(t) {
    const { radius: s, color: n, colorStop: h, intensity: l } = this, { x: u, y: m } = this.transform.position, f = t.createRadialGradient(u, m, 0, u, m, s);
    f.addColorStop(0, n.toString()), f.addColorStop(1, h.toString()), t.save(), t.globalAlpha = l, t.fillStyle = f, t.fillRect(u - s, m - s, s * 2, s * 2), t.restore();
  }
}
oe = new WeakMap(), he = new WeakMap(), ae = new WeakMap(), le = new WeakMap(), /**
 * Defines the class' default z-index (default: 2000).
 * @static
 * @type {number}
 */
b(hr, "Z_INDEX", 2e3);
var ue, ce, fe, me, $, j, ct;
class fr extends q {
  /**
   * Create a new HslaColor instance.
   * @param {number} h - The hue value (0-360).
   * @param {number} s - The saturation value (0-100).
   * @param {number} l - The lightness value (0-100).
   * @param {number} a - The alpha value (0-1).
   * @throws {Error} if hue, saturation, lightness or alpha values are not numbers or out of range.
   */
  constructor(t, s, n, h = 1) {
    super(`hsla(${t}, ${s}%, ${n}%, ${h})`);
    o(this, j);
    /**
     * The hue value (0-360).
     * @private
     * @type {number}
     */
    o(this, ue);
    /**
     * The saturation value (0-100).
     * @private
     * @type {number}
     */
    o(this, ce);
    /**
     * The lightness value (0-100).
     * @private
     * @type {number}
     */
    o(this, fe);
    /**
     * The alpha value (0-1).
     * @private
     * @type {number}
     */
    o(this, me);
    /**
     * A flag to indicate if batch setting is in progress.
     * @private
     * @type {boolean}
     */
    o(this, $, !1);
    this.set(t, s, n, h);
  }
  /**
   * Gets the color's hue value (0-360).
   * @returns {number} A number representing the hue value.
   */
  get h() {
    return r(this, ue);
  }
  /**
   * Sets the color's hue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} h - The new hue value (0-360).
   * @returns {void}
   * @throws {Error} if the new hue value is not a number or out of range.
   */
  set h(t) {
    if (typeof t != "number" || t < 0 || t > 360)
      throw new Error("h must be a number between 0 and 360");
    i(this, ue, t), r(this, $) || c(this, j, ct).call(this);
  }
  /**
   * Gets the color's saturation value (0-100).
   * @returns {number} A number representing the saturation value.
   */
  get s() {
    return r(this, ce);
  }
  /**
   * Sets the color's saturation value. 
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} s - The new saturation value (0-100).
   * @returns {void}
   * @throws {Error} if the new saturation value is not a number or out of range.
   */
  set s(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("s must be a number between 0 and 100");
    i(this, ce, t), r(this, $) || c(this, j, ct).call(this);
  }
  /**
   * Gets the color's lightness value (0-100).
   * @returns {number} A number representing the lightness value.
   */
  get l() {
    return r(this, fe);
  }
  /**
   * Sets the color's lightness value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} l - The new lightness value (0-100).
   * @returns {void}
   * @throws {Error} if the new lightness value is not a number or out of range.
   */
  set l(t) {
    if (typeof t != "number" || t < 0 || t > 100)
      throw new Error("l must be a number between 0 and 100");
    i(this, fe, t), r(this, $) || c(this, j, ct).call(this);
  }
  /**
   * Gets the color's alpha value (0-1).
   * @returns {number} A number representing the alpha value.
   */
  get a() {
    return r(this, me);
  }
  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   */
  set a(t) {
    if (typeof t != "number" || t < 0 || t > 1)
      throw new Error("a must be a number between 0 and 1");
    i(this, me, t), r(this, $) || c(this, j, ct).call(this);
  }
  /**
   * Sets the color's hue, saturation, lightness and alpha values.
   * @param {number} h - The new hue value (0-360).
   * @param {number} s - The new saturation value (0-100).
   * @param {number} l - The new lightness value (0-100).
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if hue, saturation, lightness or alpha values are not numbers or out of range.
   */
  set(t, s, n, h = 1) {
    try {
      i(this, $, !0), this.h = t, this.s = s, this.l = n, this.a = h, c(this, j, ct).call(this);
    } finally {
      i(this, $, !1);
    }
  }
  /**
   * Sets the color's hue value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} h - The new hue value (0-360).
   * @returns {void}
   * @throws {Error} if the new hue value is not a number or out of range.
   * @deprecated since version 0.1.0 - use h setter instead.
   */
  setHue(t) {
    g("setHue()", "h setter", "0.1.0"), this.h = t;
  }
  /**
   * Sets the color's saturation value. 
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} s - The new saturation value (0-100).
   * @returns {void}
   * @throws {Error} if the new saturation value is not a number or out of range.
   * @deprecated since version 0.1.0 - use s setter instead.
   */
  setSaturation(t) {
    g("setSaturation()", "s setter", "0.1.0"), this.s = t;
  }
  /**
   * Sets the color's lightness value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} l - The new lightness value (0-100).
   * @returns {void}
   * @throws {Error} if the new lightness value is not a number or out of range.
   * @deprecated since version 0.1.0 - use l setter instead.
   */
  setLightness(t) {
    g("setLightness()", "l setter", "0.1.0"), this.l = t;
  }
  /**
   * Sets the color's alpha value.
   * Side-effects: updates the colorStr property.
   * Tip: use set(h, s, l, a) for batch setting the color values.
   * @param {number} a - The new alpha value (0-1).
   * @returns {void}
   * @throws {Error} if the new alpha value is not a number or out of range.
   * @deprecated since version 0.1.0 - use a setter instead.
   */
  setAlpha(t) {
    g("setAlpha()", "a setter", "0.1.0"), this.a = t;
  }
  /**
   * Gets a string representation of the color in HSLA format.
   * @returns {string} The HSLA string representation of the color.
   */
  toHslaString() {
    return `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
  }
  /**
   * Gets a string representation of the color in HSL format.
   * @returns {string} The HSL string representation of the color.
   */
  toHslString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
ue = new WeakMap(), ce = new WeakMap(), fe = new WeakMap(), me = new WeakMap(), $ = new WeakMap(), j = new WeakSet(), /**
 * Updates the colorStr property based on the h, s, l, and a properties.
 * @returns {void}
 * @private
 */
ct = function() {
  this.colorStr = `hsla(${this.h}, ${this.s}%, ${this.l}%, ${this.a})`;
};
export {
  vt as AnchorPoint2D,
  $e as BasicMaterial,
  De as Camera2D,
  cr as CircleGeometry,
  lr as Clock,
  q as Color,
  Dt as Geometry,
  fr as HslaColor,
  Ue as LineGeometry,
  Xe as Material,
  or as Mesh,
  mt as Object2D,
  hr as PointLight2D,
  Ce as Polygon2D,
  ke as PolygonGeometry,
  ur as RectGeometry,
  Ye as Renderer,
  Le as Renderer2D,
  ve as RendererOptions,
  He as RgbaColor,
  nr as Scene,
  Be as TextGeometry,
  Re as Texture2D,
  we as Transform,
  et as Vector2
};
