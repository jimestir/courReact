import { CounterApp } from '../CounterApp'
const { render, screen, fireEvent } = require('@testing-library/react')
// import { render, screen } from '@testing-library/react'
describe('Test in <CounterApp />', () => {
  const value = 10

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp initialValue={value} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial de 100 <CounterApp initialValue={100}/>', () => {
    render(<CounterApp initialValue={100} />)
    expect(screen.getByText(100)).toBeTruthy()
  })

  test('Debe de decrementar con el boton -1', () => {
    render(<CounterApp initialValue={value} />)
    fireEvent.click(screen.getByText('-1'))
    // screen.debug()
    expect(screen.getByText(9)).toBeTruthy()
  })

  test('Debe hacer reset con el botton reset', () => {
    render(<CounterApp initialValue={value} />)
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    fireEvent.click(screen.getByText('+1'))
    screen.debug()
    fireEvent.click(screen.getByRole('button', { name: 'button-reset' }))
    screen.debug()
    expect(screen.getByText(0)).toBeTruthy()
  })
})
