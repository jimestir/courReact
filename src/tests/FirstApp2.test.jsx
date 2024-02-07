import { render, screen } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('test in <FirstApp />', () => {
  const title = 'Hello i am Jimmy'
  const numberPage = 24
  const subTitle = 'soy un subtitulo'

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<FirstApp title={title} numberPage={numberPage} />)
    expect(container).toMatchSnapshot()
  })
  test('Debe de mostrar el mensaje "Hello i am Jimmy"', () => {
    render(<FirstApp title={title} numberPage={numberPage} />)
    // screen.debug()
    expect(screen.getByText(title)).toBeTruthy()
  })
  test('Debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} numberPage={numberPage} />)
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title)
  })
  test('Debe de mostar el subtitulo enviado por props', () => {
    render(<FirstApp title={title} Subtitle={subTitle} numberPage={numberPage} />)
    expect(screen.getAllByText(subTitle).length).toBe(3)
  })
})
