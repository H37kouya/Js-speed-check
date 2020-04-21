import { measurePerfLog } from "../src/performance";

describe("convertToNumber_castOrBunki", () => {
  it("数値が返ってくるか", () => {
    expect(Number(true)).toBe(1)
    expect(Number(false)).toBe(0)
    expect(true ? 1 : 0).toBe(1)
    expect(false ? 1 : 0).toBe(0)
  })

  it("cast", () => {
    const func = () => {
      for (let i = 0; i < 100000; i++) {
        Number(true)
        Number(false)
      }
    };

    measurePerfLog(func, 'cast');
  });

  it("if", () => {
    const func = () => {
      for (let i = 0; i < 100000; i++) {
        true ? 1 : 0
        false ? 1 : 0
      }
    };

    measurePerfLog(func, 'if');
  });
});
