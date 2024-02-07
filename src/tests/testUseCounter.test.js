import { renderHook, act } from '@testing-library/react'
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

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter, increment } = result.current
    act(() => {
      increment()
    })

    expect(result.current.counter).toBe(101)
  })

  test('should decrement counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current
    act(() => {
      decrement()
    })

    expect(result.current.counter).toBe(99)
  })

  test('should reset counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const {increment, reset } = result.current

    act(() => {
      increment()
      reset()
    })

    expect(result.current.counter).toBe(100)
  })
})
