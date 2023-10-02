import { CounterApp } from '../CounterApp'
const { render, screen } = require('@testing-library/react')
// import { render, screen } from '@testing-library/react'
describe('Test in <CounterApp />', () => {
  const value = 10

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp initialValue={value} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe de mostrar el valor inicial de 100 <CounterApp initialValue={100}/>', () => {
    render(<CounterApp initialValue={100} />)
    expect(screen.getByText(10)).toBeTruthy()
  })
})
