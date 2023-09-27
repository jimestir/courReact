import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('test in <FirstApp />', () => {
//   test('Debe hacer match con el snapshot', () => {
//     const title = 'Hello i am Jimmy'
//     const { container } = render(<FirstApp title={title} numberPage={24} />)
//     expect(container).toMatchInlineSnapshot(`
// <div>
//   <h1
//     class="h1"
//   >

  //     Hello i am Jimmy

  //   </h1>
  //   <h2>
  //     There is no title
  //   </h2>
  //   <span>
  //     24
  //   </span>
  // </div>
  // `)
  //   })

  test('Debe de mostrar el titulo en h1', () => {
    const title = 'Hello i am Jimmy'
    const { container, getByText, getByTestId } = render(<FirstApp title={title} numberPage={24} />)

    expect(getByText('Hello i am Jimmy')).toBeTruthy()

    // const h1 = container.querySelector('h1')
    // expect(h1.innerHTML).toContain(title)

    expect(getByTestId('test-title')).toBeTruthy()
    // expect(getByTestId('test-title').innerHTML).toBe(title) hara la evaluación textualmente como se encuentre
    expect(getByTestId('test-title').innerHTML).toContain(title) // evaluara si el contenido es igual
  })
  test('Debe mostrar las props que se envian', () => {
    const title = 'Hello i am Jimmy'
    const SubTitle = 'about me'
    const numberPage = 24
    const { getByText, getAllByText } = render(<FirstApp title={title} Subtitle={SubTitle} numberPage={numberPage} />)

    // expect(getByText(SubTitle)).toBeTruthy()
    expect(getAllByText(SubTitle).length).toBe(3)
  })
})
