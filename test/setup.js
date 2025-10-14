import { CanvasRenderingContext2D, createCanvas, Image, DOMMatrix } from "canvas";

globalThis.HTMLCanvasElement = createCanvas().constructor;
globalThis.CanvasRenderingContext2D = CanvasRenderingContext2D;
globalThis.HTMLImageElement = Image;
globalThis.Image = Image;
globalThis.DOMMatrix = DOMMatrix;
globalThis.window = {
    innerWidth: 800,
    innerHeight: 600,
    devicePixelRatio: 1,
    requestAnimationFrame: (cb) => {
        return setTimeout(() => {
            cb(Date.now());
        }, 16);
    },
    cancelAnimationFrame: (id) => {
        clearTimeout(id);
    },
};