import { getArray } from '../exercise/01-getArray'

describe('test of 02-getArray', () => {
  test('That information is received from getArray', () => {
    const [letter, number] = getArray()
    expect(letter).toBe('ABC')
    expect(number).toBe(123)

expect(typeof letter).toBe('string')
    expect(typeof number).toBe('number')
    expect(letter).toEqual(expect.any(String))
  })
})
