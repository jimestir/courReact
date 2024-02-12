import { renderHook } from '@testing-library/react'
import { useForm } from '../../hooks/useForm'
import { act } from 'react-dom/test-utils'

describe('Test in useForm', () => {
  const initialForm = {
    name: 'jimmy',
    email: 'jimmyestir@outlook.com'
  }

  test('Should return the value for default', () => {
    const { result } = renderHook(() => useForm(initialForm))

    console.log(result.current)

    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })

  test('Should change the name of formulary', () => {
    const newName = 'Estir'
    const { result } = renderHook(() => useForm(initialForm))
    act(() => {
      result.current.onInputChange({ target: { name: 'name', value: newName } })
    })
    console.log(result.current.name)
    expect(result.current.name).toBe(newName)
    expect(result.current.formState.name).toBe(newName)
  })
  test('Should have rest in the formulary', () => {
    const { result } = renderHook(() => useForm(initialForm))
    act(() => {
      result.current.onResetForm()
    })
    console.log(result.current.name)
    expect(result.current.name).toBe(initialForm.name)
    expect(result.current.formState.name).toBe(initialForm.name)
  })
})
