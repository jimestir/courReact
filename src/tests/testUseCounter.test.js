import { renderHook } from '@testing-library/react'
import { useCounter } from '../hooks/useCounter'

describe('Prueba en useCounter', () => {
  test('Debe retomar lo valores por defecto', () => {
    const { result } = renderHook(() => useCounter())
    const { counter, increment, decrement, reset } = result.current

    expect(counter).toBe(10)
    expect(increment).toEqual(expect.any(Function))
    expect(decrement).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('Debe generar el counter con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })
})
