import * as path from '../src/path'
import { measurePerfLog } from "../src/performance";

describe.skip('path', () => {
  describe("getDirArrがすべて同じ結果を返すか", () => {
    it("getDirArr__IfSlice", () => {
      expect(path.getDirArr__IfSlice("aaa/bbb/ccc/ddd/eee")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__IfSlice("aaa/bbb/ccc/ddd/eee.cpp")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__IfSlice("/aaa/bbb/ccc/ddd/eee.cpp")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__IfSlice("/aaa/bbb/ccc/ddd/eee/")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
    });

    it("getDirArr__CastNumber", () => {
      expect(path.getDirArr__CastNumber("aaa/bbb/ccc/ddd/eee")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__CastNumber("aaa/bbb/ccc/ddd/eee.cpp")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__CastNumber("/aaa/bbb/ccc/ddd/eee.cpp")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
      expect(path.getDirArr__CastNumber("/aaa/bbb/ccc/ddd/eee/")).toEqual([
        "aaa",
        "bbb",
        "ccc",
        "ddd",
      ]);
    });
  });

  describe("getExtがすべて同じ結果を返すか", () => {
    it("getExt__Regex", () => {
      expect(path.getExt__Regex("image.jpeg")).toBe(".jpeg");
      expect(path.getExt__Regex(".jpeg")).toBeNull();
      expect(path.getExt__Regex("aaa")).toBeNull();
    });

    it("getExt__Node", () => {
      expect(path.getExt__Node("image.jpeg")).toBe(".jpeg");
      expect(path.getExt__Node(".jpeg")).toBeNull();
      expect(path.getExt__Node("aaa")).toBeNull();
    });
  });

  it("getDirArr__IfSlice", () => {
    const func = () => {
      for (let i = 0; i < 10000; i++) {
        path.getDirArr__IfSlice("/aaa/bbb/ccc/ddd/eee/");
      }
    };

    measurePerfLog(func, "getDirArr__IfSlice");
  });

  it("getDirArr__CastNumber", () => {
    const func = () => {
      for (let i = 0; i < 10000; i++) {
        path.getDirArr__CastNumber("/aaa/bbb/ccc/ddd/eee/");
      }
    }

    measurePerfLog(func, "getDirArr__CastNumber");
  });

  it("getExt__Regex", () => {
    const func = () => {
      for (let i = 0; i < 100000; i++) {
        path.getExt__Regex("image.jpeg")
        path.getExt__Regex(".jpeg")
        path.getExt__Regex("aaa")
      }
    };

    measurePerfLog(func, "getExt__Regex");
  });

  it("getExt__Node", () => {
    const func = () => {
      for (let i = 0; i < 100000; i++) {
        path.getExt__Node("image.jpeg");
        path.getExt__Node(".jpeg");
        path.getExt__Node("aaa");
      }
    };

    measurePerfLog(func, "getExt__Node");
  });
})
