import { describe, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("should return the first value if it is greater ", () => {
    expect(max(2, 1)).toBe(2);
  });
  it("should return the second value if it is greater ", () => {
    expect(max(2, 3)).toBe(3);
  });
  it("should return the first value if they are equal ", () => {
    expect(max(2, 2)).toBe(2);
  });
});
