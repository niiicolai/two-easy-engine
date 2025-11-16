import { expect, describe, it } from "vitest";
import { AnchorPoint2D } from "../../src/core/AnchorPoint2D.js";

describe("AnchorPoint2D", () => {
  it("should create a AnchorPoint2D instance", () => {
    const anchorType = AnchorPoint2D.ANCHOR_POINT_TYPES.midCenter;
    const anchorPoint = new AnchorPoint2D(anchorType);
    expect(anchorPoint.anchorType).toBe(anchorType);
    expect(anchorPoint.offset).toStrictEqual([0, 0]);
  });

  it("should should return the correct offset", () => {
    const anchorType = AnchorPoint2D.ANCHOR_POINT_TYPES.midCenter;
    const anchorPoint = new AnchorPoint2D(anchorType);

    expect(anchorPoint.anchorType).toBe(anchorType);
    expect(anchorPoint.offset).toStrictEqual([0, 0]);
    
    anchorPoint.anchorType = "topLeft";
    expect(anchorPoint.anchorType).toBe("topLeft");
    expect(anchorPoint.offset).toStrictEqual([-1, -1]);

    anchorPoint.anchorType = "topCenter";
    expect(anchorPoint.anchorType).toBe("topCenter");
    expect(anchorPoint.offset).toStrictEqual([0, -1]);

    anchorPoint.anchorType = "topRight";
    expect(anchorPoint.anchorType).toBe("topRight");
    expect(anchorPoint.offset).toStrictEqual([1, -1]);

    anchorPoint.anchorType = "midLeft";
    expect(anchorPoint.anchorType).toBe("midLeft");
    expect(anchorPoint.offset).toStrictEqual([-1, 0]);

    anchorPoint.anchorType = "midRight";
    expect(anchorPoint.anchorType).toBe("midRight");
    expect(anchorPoint.offset).toStrictEqual([1, 0]);

    anchorPoint.anchorType = "bottomLeft";
    expect(anchorPoint.anchorType).toBe("bottomLeft");
    expect(anchorPoint.offset).toStrictEqual([-1, 1]);

    anchorPoint.anchorType = "bottomCenter";
    expect(anchorPoint.anchorType).toBe("bottomCenter");
    expect(anchorPoint.offset).toStrictEqual([0, 1]);

    anchorPoint.anchorType = "bottomRight";
    expect(anchorPoint.anchorType).toBe("bottomRight");
    expect(anchorPoint.offset).toStrictEqual([1, 1]);
  });
});
