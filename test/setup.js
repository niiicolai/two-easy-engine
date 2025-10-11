import { CanvasRenderingContext2D, createCanvas } from "canvas";

globalThis.HTMLCanvasElement = createCanvas().constructor;
globalThis.CanvasRenderingContext2D = CanvasRenderingContext2D;
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