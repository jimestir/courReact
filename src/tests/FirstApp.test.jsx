import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('test in <FirstApp />', () => {
  test('Debe hacer match con el snapshot', () => {
    const title = 'Hello i am Jimmy'
    const { container } = render(<FirstApp title={title} numberPage={24} />)
    expect(container).toMatchInlineSnapshot(`
<div>
  <h1
    class="h1"
  >
     
    Hello i am Jimmy
     
  </h1>
  <h2>
    There is no title
  </h2>
  <span>
    24
  </span>
</div>
`)
  })

  test('Debe de mostrar el titulo en h1', () => {
    const title = 'Hello i am Jimmy'
    const { container, getByText } = render(<FirstApp title={title} numberPage={24} />)
    expect(getByText('Hello i am Jimmy')).toBeTruthy()
    const h1 = container.querySelector('h1')
    expect(h1.innerHTML).toContain(title)
  })
})
