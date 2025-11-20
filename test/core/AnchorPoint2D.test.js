import { expect, describe, it } from "vitest";
import { AnchorPoint2D } from "../../src/core/AnchorPoint2D.js";

describe("AnchorPoint2D", () => {
  it("should create a AnchorPoint2D instance", () => {
    const anchorType = AnchorPoint2D.ANCHOR_POINT_TYPES.MID_CENTER;
    const anchorPoint = new AnchorPoint2D(anchorType);
    expect(anchorPoint.anchorType).toBe(anchorType);
    expect(anchorPoint.offset).toStrictEqual([0, 0]);
  });

  it("should should return the correct offset", () => {
    const anchorType = AnchorPoint2D.ANCHOR_POINT_TYPES.MID_CENTER;
    const anchorPoint = new AnchorPoint2D(anchorType);

    expect(anchorPoint.anchorType).toBe(anchorType);
    expect(anchorPoint.offset).toStrictEqual([0, 0]);
    
    anchorPoint.anchorType = "TOP_LEFT";
    expect(anchorPoint.anchorType).toBe("TOP_LEFT");
    expect(anchorPoint.offset).toStrictEqual([-1, -1]);

    anchorPoint.anchorType = "TOP_CENTER";
    expect(anchorPoint.anchorType).toBe("TOP_CENTER");
    expect(anchorPoint.offset).toStrictEqual([0, -1]);

    anchorPoint.anchorType = "TOP_RIGHT";
    expect(anchorPoint.anchorType).toBe("TOP_RIGHT");
    expect(anchorPoint.offset).toStrictEqual([1, -1]);

    anchorPoint.anchorType = "MID_LEFT";
    expect(anchorPoint.anchorType).toBe("MID_LEFT");
    expect(anchorPoint.offset).toStrictEqual([-1, 0]);

    anchorPoint.anchorType = "MID_RIGHT";
    expect(anchorPoint.anchorType).toBe("MID_RIGHT");
    expect(anchorPoint.offset).toStrictEqual([1, 0]);

    anchorPoint.anchorType = "BOTTOM_LEFT";
    expect(anchorPoint.anchorType).toBe("BOTTOM_LEFT");
    expect(anchorPoint.offset).toStrictEqual([-1, 1]);

    anchorPoint.anchorType = "BOTTOM_CENTER";
    expect(anchorPoint.anchorType).toBe("BOTTOM_CENTER");
    expect(anchorPoint.offset).toStrictEqual([0, 1]);

    anchorPoint.anchorType = "BOTTOM_RIGHT";
    expect(anchorPoint.anchorType).toBe("BOTTOM_RIGHT");
    expect(anchorPoint.offset).toStrictEqual([1, 1]);
  });
});
