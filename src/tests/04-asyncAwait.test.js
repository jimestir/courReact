import { getImage } from '../exercise/04-asyncAwait'

describe('Test in 04-asynAwait.js ', () => {
  test('Has to return an image', async () => {
    const url = await getImage()
    console.log(url)
    expect(typeof url).toBe('string')
  })
})
