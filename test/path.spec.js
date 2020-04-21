import * as path from '../src/path'
import { measurePerfLog } from "../src/performance";

describe('path', () => {
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
})
