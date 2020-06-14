import { measurePerfLog } from "../src/performance";
import cloneDeep from "lodash.clonedeep";

describe('配列のリバースの速度比較', () => {
  const arr = [
    { name: 'foo', type: 'hoge', id: 1 },
    { name: 'bar', type: 'huyo', id: 2 },
    { name: 'foobar', type: 'huuu', id: 3 },
    { name: 'foga', type: 'houe', id: 4 },
    { name: 'baz', type: 'hogehoge', id: 5 },
    { name: 'foobaz', type: 'hogegege', id: 6 },
  ]

  let testArr;

  beforeEach(() => {
    testArr = cloneDeep(arr)
  })

  it('sliceを用いた非破壊的なreverse', () => {
    const func = () => {
      for (let i = 0; i < 1e5; i++) {
        testArr.slice().reverse()
      }
    }

    measurePerfLog(func, 'slice');
  })

  it('clonedeepを用いた非破壊的なreverse', () => {
    const func = () => {
      for (let i = 0; i < 1e5; i++) {
        cloneDeep(testArr).reverse()
      }
    }

    measurePerfLog(func, 'clonedeep');
  })

  it('スプレッド演算子を用いた非破壊的なreverse', () => {
    const func = () => {
      for (let i = 0; i < 1e5; i++) {
        [...testArr].reverse()
      }
    }

    measurePerfLog(func, 'スプレッド演算子');
  })
})
