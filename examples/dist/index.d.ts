/**
 * @class Vector2 - A mutable 2D vector class
 * @description This class provides basic vector operations such as addition, subtraction, scaling, and normalization.
 */
declare class Vector2 {
    constructor(x?: number, y?: number);
    x: number;
    y: number;
    /**
     * @function clone - Creates a copy of the vector
     * @returns {Vector2} A new Vector2 instance with the same x and y values
     */
    clone(): Vector2;
    /**
     * @function set - Sets the x and y values of the vector
     * @param {number} x - The new x value
     * @param {number} y - The new y value
     * @returns {void}
     * @throws {Error} If x or y is not a number
     */
    set(x: number, y: number): void;
    /**
     * @function translate - Translates the vector by given x and y offsets
     * @param {number} x - The x offset
     * @param {number} y - The y offset
     * @returns {void}
     * @throws {Error} If x or y is not a number
     */
    translate(dx: any, dy: any): void;
    /**
     * @function add - Adds another vector to this vector
     * @param {Vector2} v - The vector to add
     * @returns {void}
     * @throws {Error} If v is not of type Vector2
     */
    add(v: Vector2): void;
    /**
     * @function subtract - Subtracts another vector from this vector
     * @param {Vector2} v - The vector to subtract
     * @returns {void}
     * @throws {Error} If v is not of type Vector2
     */
    subtract(v: Vector2): void;
    /**
     * @function dot - Computes the dot product with another vector
     * @param {Vector2} v - The other vector
     * @returns {number} The dot product
     * @throws {Error} If v is not of type Vector2
     */
    dot(v: Vector2): number;
    /**
     * @function vectorTo - Computes the vector from this vector to another vector
     * @param {Vector2} v - The target vector
     * @returns {Vector2} A new Vector2 representing the vector from this to v
     * @throws {Error} If v is not of type Vector2
     */
    vectorTo(v: Vector2): Vector2;
    /**
     * @function multiplyScalar - Multiplies this vector by a scalar
     * @param {number} s - The scalar to multiply by
     * @returns {void}
     * @throws {Error} If s is not a number
     */
    multiplyScalar(s: number): void;
    /**
     * @function divideScalar - Divides this vector by a scalar
     * @param {number} s - The scalar to divide by
     * @returns {void}
     * @throws {Error} If s is not a number
     * @throws {Error} If division by zero is attempted
     */
    divideScalar(s: number): void;
    /**
     * @function length - Computes the length (magnitude) of the vector
     * @returns {number} The length of the vector
     */
    length(): number;
    /**
     * @function normalize - Normalizes the vector to have a length of 1
     * @returns {void}
     * @throws {Error} If attempting to normalize a zero-length vector
     */
    normalize(): void;
}

/**
 * @class Transform - Represents the position, rotation, and scale of an object
 * @description This class encapsulates the transformation properties of an object in 2D space.
 */
declare class Transform {
    constructor(position?: Vector2, rotation?: number, scale?: Vector2);
    position: Vector2;
    rotation: number;
    scale: Vector2;
}

/**
 * @class Camera2D - Represents a camera in 2D space
 * @description This class provides functionality to control the view of the scene, including position, rotation, and zoom.
 */
declare class Camera2D {
    constructor(options?: {
        zoom: number;
    });
    zoom: number;
    transform: Transform;
    /**
     * @function apply - Applies the camera transformation to the given canvas context
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to apply the transformation to
     * @returns {void}
     * @throws {Error} If ctx is not of type CanvasRenderingContext2D
     */
    apply(ctx: CanvasRenderingContext2D): void;
    /**
     * @function restore - Restores the canvas context to its state before the camera transformation was applied
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to restore
     * @returns {void}
     */
    restore(ctx: CanvasRenderingContext2D): void;
}

/**
 * @class Object2D - Base class for 2D objects with a transform
 * @description This class serves as a base for all 2D objects, providing a transform property.
 */
declare class Object2D {
    transform: Transform;
    onRender(ctx: any): void;
}

/**
 * @class Scene - Represents a collection of 2D objects to be rendered
 * @description This class manages a list of 2D objects and provides methods to add, remove, and render them.
 */
declare class Scene {
    children: any[];
    /**
     * @function add - Adds a 2D object to the scene
     * @param {Object2D} child - The 2D object to add to the scene
     * @returns {void}
     * @throws {Error} If child is not of type Object2D
     */
    add(child: Object2D): void;
    /**
     * @function remove - Removes a 2D object from the scene
     * @param {Object2D} child - The 2D object to remove from the scene
     * @returns {void}
     * @throws {Error} If child is not of type Object2D
     */
    remove(child: Object2D): void;
    /**
     * @function render - Renders all 2D objects in the scene onto the given canvas context
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to render the scene onto
     * @returns {void}
     */
    render(ctx: CanvasRenderingContext2D): void;
}

/**
 * @class Render2D - Manages rendering of a 2D scene onto a canvas
 * @description This class handles the rendering process, including setting up the canvas and drawing the scene using the camera.
 */
declare class Render2D {
    constructor(canvas: any, scene: any, camera: any, options?: {
        width: number;
        height: number;
        devicePixelRatio: number;
        backgroundColor: string;
    });
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    camera: Camera2D;
    options: {
        width: number;
        height: number;
        devicePixelRatio: number;
        backgroundColor: string;
    };
    /**
     * @function setSize - Sets the size of the canvas
     * @param {number} width - The width of the canvas
     * @param {number} height - The height of the canvas
     * @returns {void}
     * @throws {Error} If width or height is not a number
     */
    setSize(width: number, height: number): void;
    /**
     * @function setDevicePixelRatio - Sets the device pixel ratio for the canvas
     * @param {number} dpr - The device pixel ratio
     * @returns {void}
     * @throws {Error} If dpr is not a number
     */
    setDevicePixelRatio(dpr: number): void;
    /**
     * @function recalculateDevicePixelRatio - Recalculates the canvas size based on the device pixel ratio
     * @returns {void}
     */
    recalculateDevicePixelRatio(): void;
    /**
     * @function render - Renders the scene onto the canvas using the camera
     * @returns {void}
     */
    render(): void;
    /**
     * @function requestAnimationFrame - A helper method that simplifies the use of requestAnimationFrame
     * @param {Object} options - Options for beforeRender and afterRender callbacks
     * @param {Function} options.beforeRender - A callback function to be called before each render
     * @param {Function} options.afterRender - A callback function to be called after each render
     * @returns {void}
     */
    requestAnimationFrame(options?: {
        beforeRender: Function;
        afterRender: Function;
    }): void;
}

/**
 * @class Material - Represents the visual appearance of a shape
 * @description This class encapsulates the fill and stroke styles for rendering shapes.
 */
declare class Material {
    constructor(options?: {
        fillStyle: any;
        strokeStyle: any;
        lineWidth: any;
    });
    fillStyle: any;
    strokeStyle: any;
    lineWidth: any;
}

/**
 * @class Geometry - Base class for geometric shapes
 * @description This class serves as a base for all geometric shapes, providing a draw method.
 */
declare class Geometry {
    /**
     * @function draw - Draws the geometry onto the given canvas context
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
     * @param {Transform} transform - The transform to apply to the geometry
     * @param {Material} material - The material to use for rendering the geometry
     * @returns {void}
     * @throws {Error} If not implemented in subclass
     */
    draw(ctx: CanvasRenderingContext2D, transform: Transform, material: Material): void;
}

/**
 * @class RectGeometry - Represents a rectangle geometry
 * @description This class provides a rectangle shape with width and height properties.
 */
declare class RectGeometry extends Geometry {
    constructor(width: any, height: any);
    width: number;
    height: number;
}

/**
 * @class CircleGeometry - Represents a circle geometry
 * @description This class provides a circle shape with a radius property.
 */
declare class CircleGeometry extends Geometry {
    constructor(radius: any);
    radius: number;
}

/**
 * @class Mesh - Represents a drawable mesh with geometry and material
 * @description This class combines geometry and material to create a drawable object.
 */
declare class Mesh extends Object2D {
    constructor(geometry: any, material: any);
    geometry: Geometry;
    material: Material;
    /**
     * @function onRender - Draws the mesh onto the given canvas context
     * @param {CanvasRenderingContext2D} ctx - The canvas rendering context to draw onto
     * @returns {void}
     */
    onRender(ctx: CanvasRenderingContext2D): void;
}

export { Camera2D, CircleGeometry, Geometry, Material, Mesh, Object2D, RectGeometry, Render2D, Scene, Transform, Vector2 };
