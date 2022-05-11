/* eslint-disable prettier/prettier */
import { sum } from "./sum";

describe("sum", () => {
  it("returns 4 when adding 2 plus 2", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("returns 10 when adding 4 + 6", () => {
    expect(sum(4, 6)).toBe(10);
  });
});
