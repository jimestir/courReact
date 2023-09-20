import { getHeroByIdSync } from '../exercise/03-promesas'

describe('Test of 03-promesas.js', () => {
  test('Must return a hero', (done) => {
    const id = 1
    getHeroByIdSync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      })
      done()
    })
  })
  test('Must return a Error if hero is no existe', (done) => {
    const id = 100
    getHeroByIdSync(id)
      .then((hero) => {
        expect(hero).toBeFalsy()
        done()
      })
      .catch((error) => {
        expect(error).toBe('Could not find hero with sent id')
        done()
      })
  })
})
