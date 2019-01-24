import counter from './index'

describe('reducers', () => {
  describe('counter', () => {
    it('should provide an initial state of 0', () => {
      expect(counter(undefined, {})).toBe(0)
    })

    it('should handle INCREMENT', () => {
      expect(counter(1, {type: 'INCREMENT'})).toBe(2)
    })

    it('should handle DECREMENT', () => {
      expect(counter(-42, {type: 'DECREMENT'})).toBe(-43)
    })

  })
})
