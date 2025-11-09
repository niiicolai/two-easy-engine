import {
  CanvasRenderingContext2D,
  createCanvas,
  Image,
  DOMMatrix,
} from "canvas";
import { expect } from "vitest";

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

global.getPixel = function (ctx, x, y) {
  const { width, height } = ctx.canvas;
  if (x < 0 || y < 0 || x >= width || y >= height) {
    return null;
  }

  const data = ctx.getImageData(x, y, 1, 1).data;
  return { r: data[0], g: data[1], b: data[2], a: data[3] };
};

global.expectPixelsColor = function (ctx, pixels, color) {
  pixels.forEach(([x, y]) => expect(getPixel(ctx, x, y)).toMatchObject(color));
};
