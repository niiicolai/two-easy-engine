import { expect, describe, it, beforeAll, test } from "vitest";
import { createCanvas } from "canvas";
import { Renderer2D } from "../../src/renderers/Renderer2D.js";
import { RendererOptions } from "../../src/renderers/RendererOptions.js";
import { Scene } from "../../src/scenes/Scene.js";
import { Camera2D } from "../../src/cameras/Camera2D.js";
import { RgbaColor } from "../../src/colors/RgbaColor.js";
import { HslaColor } from "../../src/colors/HslaColor.js";

describe("RendererOptions", () => {
  let renderer;

  beforeAll(() => {
    const canvas = createCanvas(800, 600);
    const scene = new Scene();
    const camera = new Camera2D();
    renderer = new Renderer2D(canvas, scene, camera, {
      width: 800,
      height: 600,
    });
  });

  test.each([
    { width: 800, height: 600 },
    { width: 1024, height: 768, devicePixelRatio: 2 },
    {
      width: 1920,
      height: 1080,
      backgroundColor: new RgbaColor(0, 0, 0, 1),
    },
    {
      width: 1280,
      height: 720,
      devicePixelRatio: 1.5,
      backgroundColor: new HslaColor(0.5, 0.5, 0.5, 1),
    },
    {
      width: 1280,
      height: 720,
      devicePixelRatio: 1.5,
      backgroundColor: "#ff00ff",
    },
  ])("should create a RendererOptions instance", (data) => {
    const options = new RendererOptions(renderer, data);

    expect(options).toBeInstanceOf(RendererOptions);
    expect(options.width).toBe(data.width);
    expect(options.height).toBe(data.height);
    expect(options.devicePixelRatio).toBe(
      data.devicePixelRatio || RendererOptions.DEFAULT_OPTIONS.devicePixelRatio
    );
    expect(options.backgroundColor).toBe(
      data.backgroundColor || RendererOptions.DEFAULT_OPTIONS.backgroundColor
    );
    expect(options.cache.halfWidth).toBe(data.width / 2);
    expect(options.cache.halfHeight).toBe(data.height / 2);
  });

  it("should use provided options", () => {
    const options = new RendererOptions(renderer, {
      width: 1024,
      height: 768,
      devicePixelRatio: 2,
      backgroundColor: new RgbaColor(255, 0, 0, 1),
    });
    expect(options.width).toBe(1024);
    expect(options.height).toBe(768);
    expect(options.devicePixelRatio).toBe(2);
    expect(options.backgroundColor).toBeInstanceOf(RgbaColor);
    expect(options.cache.halfWidth).toBe(512);
    expect(options.cache.halfHeight).toBe(384);
  });

  test.each([
    [-1, "width must be a positive number"],
    [0, "width must be a positive number"],
    [null, "width must be a positive number"],
    [undefined, "width must be a positive number"],
  ])(
    "should throw error for invalid width: %s; in constructor",
    (invalidWidth, errorMessage) => {
      expect(() => {
        new RendererOptions(renderer, {
          width: invalidWidth,
          height: 600,
        });
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [-1, "height must be a positive number"],
    [0, "height must be a positive number"],
    [null, "height must be a positive number"],
    [undefined, "height must be a positive number"],
  ])(
    "should throw error for invalid height: %s; in constructor",
    (invalidHeight, errorMessage) => {
      expect(() => {
        new RendererOptions(renderer, {
          width: 800,
          height: invalidHeight,
        });
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [-1, "devicePixelRatio must be a positive number"],
    [0, "devicePixelRatio must be a positive number"],
  ])(
    "should throw error for invalid devicePixelRatio: %s; in constructor",
    (invalidDPR, errorMessage) => {
      expect(() => {
        new RendererOptions(renderer, {
          width: 800,
          height: 600,
          devicePixelRatio: invalidDPR,
        });
      }).toThrow(errorMessage);
    }
  );

  test.each([[123, "backgroundColor must be a Color or a string"]])(
    "should throw error for invalid backgroundColor: %s; in constructor",
    (invalidBG, errorMessage) => {
      expect(() => {
        new RendererOptions(renderer, {
          width: 800,
          height: 600,
          backgroundColor: invalidBG,
        });
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [-1, "width must be a positive number"],
    [0, "width must be a positive number"],
    [null, "width must be a positive number"],
    [undefined, "width must be a positive number"],
  ])(
    "should throw error for invalid width: %s; in setter",
    (invalidWidth, errorMessage) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });

      expect(() => {
        options.width = invalidWidth;
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [-1, "height must be a positive number"],
    [0, "height must be a positive number"],
    [null, "height must be a positive number"],
    [undefined, "height must be a positive number"],
  ])(
    "should throw error for invalid height: %s; in setter",
    (invalidHeight, errorMessage) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });
      expect(() => {
        options.height = invalidHeight;
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [-1, "devicePixelRatio must be a positive number"],
    [0, "devicePixelRatio must be a positive number"],
  ])(
    "should throw error for invalid devicePixelRatio: %s; in setter",
    (invalidDPR, errorMessage) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });
      expect(() => {
        options.devicePixelRatio = invalidDPR;
      }).toThrow(errorMessage);
    }
  );

  test.each([[123, "backgroundColor must be a Color or a string"]])(
    "should throw error for invalid backgroundColor: %s; in setter",
    (invalidBG, errorMessage) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });
      expect(() => {
        options.backgroundColor = invalidBG;
      }).toThrow(errorMessage);
    }
  );

  test.each([
    [400, 300],
    [1024, 768],
    [1920, 1080],
  ])(
    "should correctly update cache on width/height change: %i x %i",
    (newWidth, newHeight) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });

      options.width = newWidth;
      options.height = newHeight;

      expect(options.width).toBe(newWidth);
      expect(options.height).toBe(newHeight);
      expect(options.cache.halfWidth).toBe(newWidth / 2);
      expect(options.cache.halfHeight).toBe(newHeight / 2);
    }
  );

  test.each([
    "#ff0000",
    "rgb(255,0,0)",
    "rgba(255,0,0,1)",
    new RgbaColor(255, 0, 0, 1),
    new HslaColor(0, 1, 0.5, 1),
  ])("set backgroundColor with different valid inputs: %s", (validColor) => {
    const options = new RendererOptions(renderer, {
      width: 800,
      height: 600,
    });

    options.backgroundColor = validColor;
    expect(options.backgroundColor).toBe(validColor);
  });

  test.each([1, 2, 3])(
    "set devicePixelRatio with valid input: %s",
    (validDPR) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });

      options.devicePixelRatio = validDPR;
      expect(options.devicePixelRatio).toBe(validDPR);
    }
  );

  test.each([
    [400, 300],
    [1024, 768],
    [1920, 1080],
  ])(
    "should correctly update width and height on setSize(): %i x %i",
    (newWidth, newHeight) => {
      const options = new RendererOptions(renderer, {
        width: 800,
        height: 600,
      });

      options.setSize(newWidth, newHeight);

      expect(options.width).toBe(newWidth);
      expect(options.height).toBe(newHeight);
      expect(options.cache.halfWidth).toBe(newWidth / 2);
      expect(options.cache.halfHeight).toBe(newHeight / 2);
    }
  );
});
