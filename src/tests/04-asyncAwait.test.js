import { getPokemon } from '../exercise/04-asyncAwait'

describe('Test in 04-asynAwait.js ', () => {
  test('Has to return an image', async () => {
    const data = await getPokemon()
    expect(typeof data.name).toBe('string')
  })
})
