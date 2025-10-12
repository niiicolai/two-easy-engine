class o {
  constructor(e = 0, t = 0) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    this.x = e, this.y = t;
  }
  /**
   * @function clone - Creates a copy of the vector
   * @returns {Vector2} A new Vector2 instance with the same x and y values
   */
  clone() {
    return new o(this.x, this.y);
  }
  /**
   * @function set - Sets the x and y values of the vector
   * @param {number} x - The new x value
   * @param {number} y - The new y value
   * @returns {void}
   * @throws {Error} If x or y is not a number
   */
  set(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("x and y must be numbers");
    this.x = e, this.y = t;
  }
  /**
   * @function translate - Translates the vector by given x and y offsets
   * @param {number} x - The x offset
   * @param {number} y - The y offset
   * @returns {void}
   * @throws {Error} If x or y is not a number
   */
  translate(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("dx and dy must be numbers");
    this.x += e, this.y += t;
  }
  /**
   * @function add - Adds another vector to this vector
   * @param {Vector2} v - The vector to add
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  add(e) {
    if (!(e instanceof o))
      throw new Error("v must be of type Vector2");
    this.x += e.x, this.y += e.y;
  }
  /**
   * @function subtract - Subtracts another vector from this vector
   * @param {Vector2} v - The vector to subtract
   * @returns {void}
   * @throws {Error} If v is not of type Vector2
   */
  subtract(e) {
    if (!(e instanceof o))
      throw new Error("v must be of type Vector2");
    this.x -= e.x, this.y -= e.y;
  }
  /**
   * @function dot - Computes the dot product with another vector
   * @param {Vector2} v - The other vector
   * @returns {number} The dot product
   * @throws {Error} If v is not of type Vector2
   */
  dot(e) {
    if (!(e instanceof o))
      throw new Error("v must be of type Vector2");
    return this.x * e.x + this.y * e.y;
  }
  /**
   * @function vectorTo - Computes the vector from this vector to another vector
   * @param {Vector2} v - The target vector
   * @returns {Vector2} A new Vector2 representing the vector from this to v
   * @throws {Error} If v is not of type Vector2
   */
  vectorTo(e) {
    if (!(e instanceof o))
      throw new Error("v must be of type Vector2");
    return new o(e.x - this.x, e.y - this.y);
  }
  /**
   * @function multiplyScalar - Multiplies this vector by a scalar
   * @param {number} s - The scalar to multiply by
   * @returns {void}
   * @throws {Error} If s is not a number
   */
  multiplyScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    this.x *= e, this.y *= e;
  }
  /**
   * @function divideScalar - Divides this vector by a scalar
   * @param {number} s - The scalar to divide by
   * @returns {void}
   * @throws {Error} If s is not a number
   * @throws {Error} If division by zero is attempted
   */
  divideScalar(e) {
    if (typeof e != "number")
      throw new Error("scalar must be a number");
    if (e === 0)
      throw new Error("Division by zero");
    this.x /= e, this.y /= e;
  }
  /**
   * @function length - Computes the length (magnitude) of the vector
   * @returns {number} The length of the vector
   */
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  /**
   * @function normalize - Normalizes the vector to have a length of 1
   * @returns {void}
   * @throws {Error} If attempting to normalize a zero-length vector
   */
  normalize() {
    const e = this.length();
    if (e === 0)
      throw new Error("Cannot normalize zero-length vector");
    this.divideScalar(e);
  }
}
class l {
  constructor(e = new o(), t = 0, r = new o(1, 1)) {
    if (!(e instanceof o))
      throw new Error("position must be of type Vector2");
    if (typeof t != "number")
      throw new Error("rotation must be a number");
    if (!(r instanceof o))
      throw new Error("scale must be of type Vector2");
    this.position = e, this.rotation = t, this.scale = r;
  }
}
class d {
  constructor(e = {
    zoom: 1
  }) {
    const { zoom: t } = e;
    if (typeof t != "number")
      throw new Error("options.zoom must be a number");
    this.zoom = t, this.transform = new l();
  }
  /**
   * @function apply - Applies the camera transformation to the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to apply the transformation to
   * @returns {void}
   * @throws {Error} If ctx is not of type CanvasRenderingContext2D
   */
  apply(e) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    e.save(), e.scale(this.zoom, this.zoom), e.rotate(-this.transform.rotation), e.translate(-this.transform.position.x, -this.transform.position.y);
  }
  /**
   * @function restore - Restores the canvas context to its state before the camera transformation was applied
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to restore
   * @returns {void}
   */
  restore(e) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    e.restore();
  }
}
class c {
  constructor() {
    this.transform = new l(), this.zIndex = 0, this.visible = !0, this.scene = null;
  }
  /**
   * @function setVisible - Sets the visibility of the object
   * @param {boolean} visible - Whether the object should be visible
   * @returns {void}
   * @throws Will throw an error if visible is not a boolean
   */
  setVisible(e) {
    if (typeof e != "boolean")
      throw new Error("visible must be a boolean");
    this.visible = e;
  }
  /**
   * @function setZIndex - Sets the z-index of the object for rendering order
   * @param {number} zIndex - The z-index value
   * @returns {void}
   * @throws Will throw an error if zIndex is not a number
   */
  setZIndex(e) {
    if (typeof e != "number")
      throw new Error("zIndex must be a number");
    this.zIndex = e, this.scene && this.scene.sortChildrenByZIndex();
  }
  /**
   * @function onRender - Placeholder method to be overridden by subclasses for rendering
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context
   * @returns {void}
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D
   */
  onRender(e) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
  }
}
class y {
  constructor() {
    this.children = [];
  }
  /**
   * @function add - Adds a 2D object to the scene
   * @param {Object2D} child - The 2D object to add to the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  add(e) {
    if (!(e instanceof c))
      throw new Error("child must be of type Object2D");
    this.children.push(e), e.scene = this, this.sortChildrenByZIndex();
  }
  /**
   * @function remove - Removes a 2D object from the scene
   * @param {Object2D} child - The 2D object to remove from the scene
   * @returns {void}
   * @throws {Error} If child is not of type Object2D
   */
  remove(e) {
    if (!(e instanceof c))
      throw new Error("child must be of type Object2D");
    const t = this.children.indexOf(e);
    t !== -1 && (this.children.splice(t, 1), e.scene = null, this.sortChildrenByZIndex());
  }
  /**
   * @function sortChildrenByZIndex - Sorts the children based on their zIndex property
   * @returns {void}
   */
  sortChildrenByZIndex() {
    this.children.sort((e, t) => e.zIndex - t.zIndex);
  }
  /**
   * @function render - Renders all 2D objects in the scene onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to render the scene onto
   * @returns {void}
   */
  render(e) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    this.children.forEach((t) => {
      t.visible && t.onRender(e);
    });
  }
}
class b {
  constructor(e, t, r, n = {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1,
    backgroundColor: "transparent"
  }) {
    const { width: h, height: s, devicePixelRatio: a } = n;
    if (!(e instanceof HTMLCanvasElement))
      throw new Error("canvas must be of type HTMLCanvasElement");
    if (!(t instanceof y))
      throw new Error("scene must be of type Scene");
    if (!(r instanceof d))
      throw new Error("camera must be of type Camera");
    if (typeof h != "number" || typeof s != "number")
      throw new Error("width and height must be numbers");
    if (typeof a != "number")
      throw new Error("devicePixelRatio must be a number");
    this.canvas = e, this.ctx = e.getContext("2d"), this.scene = t, this.camera = r, this.options = n, this.recalculateDevicePixelRatio();
  }
  /**
   * @function setSize - Sets the size of the canvas
   * @param {number} width - The width of the canvas
   * @param {number} height - The height of the canvas
   * @returns {void}
   * @throws {Error} If width or height is not a number
   */
  setSize(e, t) {
    if (typeof e != "number" || typeof t != "number")
      throw new Error("width and height must be numbers");
    this.options.width = e, this.options.height = t, this.recalculateDevicePixelRatio();
  }
  /**
   * @function setDevicePixelRatio - Sets the device pixel ratio for the canvas
   * @param {number} dpr - The device pixel ratio
   * @returns {void}
   * @throws {Error} If dpr is not a number
   */
  setDevicePixelRatio(e) {
    if (typeof e != "number")
      throw new Error("dpr must be a number");
    this.options.devicePixelRatio = e, this.recalculateDevicePixelRatio();
  }
  /**
   * @function recalculateDevicePixelRatio - Recalculates the canvas size based on the device pixel ratio
   * @returns {void}
   */
  recalculateDevicePixelRatio() {
    const e = this.options.devicePixelRatio || 1, t = this.options.width * e, r = this.options.height * e;
    this.canvas.width = t, this.canvas.height = r, this.ctx.scale(e, e);
  }
  /**
   * @function render - Renders the scene onto the canvas using the camera
   * @returns {void}
   */
  render() {
    const e = this.ctx;
    e.clearRect(0, 0, this.canvas.width, this.canvas.height), e.fillStyle = this.options.backgroundColor || "transparent", e.fillRect(0, 0, this.canvas.width, this.canvas.height), this.camera.apply(e), this.scene.render(e), this.camera.restore(e);
  }
  /**
   * @function requestAnimationFrame - A helper method that simplifies the use of requestAnimationFrame
   * @param {Object} options - Options for beforeRender and afterRender callbacks
   * @param {Function} options.beforeRender - A callback function to be called before each render
   * @param {Function} options.afterRender - A callback function to be called after each render
   * @returns {void}
   */
  requestAnimationFrame(e = {
    beforeRender: null,
    afterRender: null
  }) {
    const { beforeRender: t, afterRender: r } = e;
    if (t && typeof t != "function")
      throw new Error("beforeRender must be a function");
    if (r && typeof r != "function")
      throw new Error("afterRender must be a function");
    function n() {
      t && t(), this.render(), r && r(), window.requestAnimationFrame(n.bind(this));
    }
    window.requestAnimationFrame(n.bind(this));
  }
}
class w {
  constructor(e = { fillStyle: null, strokeStyle: null, lineWidth: null }) {
    const { fillStyle: t = null, strokeStyle: r = null, lineWidth: n = 1 } = e;
    if (t !== null && typeof t != "string")
      throw new Error("fillStyle must be a string or null");
    if (r !== null && typeof r != "string")
      throw new Error("strokeStyle must be a string or null");
    if (n !== null && (typeof n != "number" || n <= 0))
      throw new Error("lineWidth must be a positive number or null");
    this.fillStyle = e.fillStyle, this.strokeStyle = e.strokeStyle, this.lineWidth = e.lineWidth;
  }
}
class m {
  /**
   * @function draw - Draws the geometry onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the geometry
   * @param {Material} material - The material to use for rendering the geometry
   * @returns {void}
   * @throws {Error} If not implemented in subclass
   */
  draw(e, t, r) {
    throw e instanceof CanvasRenderingContext2D ? r instanceof w ? t instanceof l ? new Error("draw method must be implemented in subclass") : new Error("transform must be of type Transform") : new Error("material must be of type Material") : new Error("ctx must be of type CanvasRenderingContext2D");
  }
}
class p extends m {
  constructor(e, t) {
    if (super(), typeof e != "number" || e <= 0)
      throw new Error("width must be a positive number");
    if (typeof t != "number" || t <= 0)
      throw new Error("height must be a positive number");
    this.width = e, this.height = t;
  }
  /**
   * @function draw - Draws the rectangle onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the rectangle
   * @param {Material} material - The material to use for rendering the rectangle
   * @returns {void}
   */
  draw(e, t, r) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(t instanceof l))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: h } = t, { x: s, y: a } = n, f = this.width * h.x, u = this.height * h.y;
    e.save(), e.translate(s + f / 2, a + u / 2), e.rotate(t.rotation), e.translate(-(s + f / 2), -(a + u / 2)), r.fillStyle && (e.fillStyle = r.fillStyle, e.fillRect(s, a, f, u)), r.strokeStyle && (e.strokeStyle = r.strokeStyle, e.lineWidth = r.lineWidth, e.strokeRect(s, a, f, u)), e.restore();
  }
}
class E extends m {
  constructor(e) {
    if (super(), typeof e != "number" || e <= 0)
      throw new Error("radius must be a positive number");
    this.radius = e;
  }
  /**
   * @function draw - Draws the circle onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @param {Transform} transform - The transform to apply to the circle
   * @param {Material} material - The material to use for rendering the circle
   * @returns {void}
   */
  draw(e, t, r) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    if (!(r instanceof w))
      throw new Error("material must be of type Material");
    if (!(t instanceof l))
      throw new Error("transform must be of type Transform");
    const { position: n, scale: h } = t, { x: s, y: a } = n, f = this.radius * ((h.x + h.y) / 2);
    e.beginPath(), e.arc(s, a, f, 0, Math.PI * 2), e.closePath(), r.fillStyle && (e.fillStyle = r.fillStyle, e.fill()), r.strokeStyle && (e.strokeStyle = r.strokeStyle, e.lineWidth = r.lineWidth, e.stroke());
  }
}
class g extends c {
  constructor(e, t) {
    if (super(), !(e instanceof m))
      throw new Error("geometry must be of type Geometry");
    if (!(t instanceof w))
      throw new Error("material must be of type Material");
    this.geometry = e, this.material = t;
  }
  /**
   * @function onRender - Draws the mesh onto the given canvas context
   * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
   * @returns {void}
   */
  onRender(e) {
    super.onRender(e), this.geometry.draw(e, this.transform, this.material);
  }
}
class x extends c {
  constructor(e = 100, t = 1, r = "rgba(255,255,200,1)", n = "rgba(255, 255, 200, 0.0)") {
    if (super(), typeof e != "number")
      throw new Error("radius must be a number");
    if (typeof t != "number")
      throw new Error("intensity must be a number");
    if (typeof r != "string")
      throw new Error("color must be a string");
    if (typeof n != "string")
      throw new Error("colorStop must be a string");
    this.radius = e, this.intensity = t, this.color = r, this.colorStop = n, this.zIndex = 1;
  }
  /**
   * @function onRender - Renders the light effect on the given 2D rendering context.
   * @param {CanvasRenderingContext2D} ctx - The 2D rendering context.
   * @throws Will throw an error if the context is not a CanvasRenderingContext2D.
   */
  onRender(e) {
    if (!(e instanceof CanvasRenderingContext2D))
      throw new Error("ctx must be of type CanvasRenderingContext2D");
    const { x: t, y: r } = this.transform.position, n = e.createRadialGradient(t, r, 0, t, r, this.radius);
    n.addColorStop(0, this.color), n.addColorStop(1, this.colorStop), e.save(), e.globalAlpha = this.intensity, e.fillStyle = n, e.fillRect(t - this.radius, r - this.radius, this.radius * 2, this.radius * 2), e.restore();
  }
}
export {
  d as Camera2D,
  E as CircleGeometry,
  m as Geometry,
  w as Material,
  g as Mesh,
  c as Object2D,
  x as PointLight2D,
  p as RectGeometry,
  b as Render2D,
  y as Scene,
  l as Transform,
  o as Vector2
};
