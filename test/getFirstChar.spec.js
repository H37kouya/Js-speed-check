import { measurePerfLog } from "../src/performance";

describe.skip('getFirstChar', () => {
  describe('最初の文字が/かどうかの判定', () => {
    it('startsWith', () => {
      const func = () => {
        for (let i = 0; i < 10000; i++) {
          '/aaa/bbb'.startsWith('/')
        }
      }

      measurePerfLog(func, 'startsWith')
    })

    it('slice', () => {
      const func = () => {
        for (let i = 0; i < 10000; i++) {
          '/aaa/bbb'.slice(0, 1) === '/'
        }
      }

      measurePerfLog(func, 'slice')
    })

    it('substr', () => {
      const func = () => {
        for (let i = 0; i < 10000; i++) {
          '/aaa/bbb'.substr(0, 1) === '/'
        }
      }

      measurePerfLog(func, 'substr')
    })
  })
})
