import { render } from '@testing-library/react'
import FirstApp from '../FirstApp'

describe('test in <FirstApp />', () => {
  test('Debe hacer match con el snapshot', () => {
    render(<FirstApp title='Hello world' numberPage={24} />)
  })
})
