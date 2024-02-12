import { fireEvent, render, screen } from '@testing-library/react'
import MultipleCustomHooks from '../exercise/MultipleCustomHooks'
import useFetch from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

jest.mock('../hooks/useCounter.js')
jest.mock('../hooks/useFetch.js')
const initialValue = {
  data: [{ author: 'Fernando', quote: 'Hello world' }],
  isLoading: false,
  hasError: null
}

describe('test in <MultipleCustomHooks/>', () => {
  const mockIncrement = jest.fn()
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Should show default component', () => {
    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })
    render(<MultipleCustomHooks />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText('Breaking Bad Quote'))

    const nextButton = screen.getByRole('button', { name: 'New quote' })
    expect(nextButton.disabled).toBeTruthy()
    // screen.debug()
  })

  test('should look a quote', () => {
    useFetch.mockReturnValue(initialValue)
    render(<MultipleCustomHooks />)
    // screen.debug()

    expect(screen.getByText('Fernando')).toBeTruthy()
    expect(screen.getByText('Hello world')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'New quote' })
    expect(nextButton.disabled).toBeFalsy()
  })

  test('should call the increment function', () => {
    useFetch.mockReturnValue(initialValue)
    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'New quote' })
    fireEvent.click(nextButton)

    expect(mockIncrement).toHaveBeenCalled()
  })
})
