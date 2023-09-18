import { getHeroeById, getHeroesByOwner } from '../exercise/02-getHeroes'
import { heroes } from '../data/heroes'
describe('test in 01-getHeroes.test.js', () => {
  test('getHeoreById has to return hero', () => {
    const id = 1
    const message = getHeroeById(id)

    expect(message).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
  })

  test('getHeroesByOwner has to return the properties DC', () => {
    const owner = 'DC'
    const message = getHeroesByOwner(owner)
    console.log(message)

    expect(message.length).toBe(3)
    expect(message).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])
    expect(message).toEqual(heroes.filter((hero) => hero.owner === owner))
  })

  test('getHeroesByOwner has to return the properties Marvel', () => {
    const owner = 'Marvel'
    const message = getHeroesByOwner(owner)
    console.log(message)

    expect(message.length).toBe(2)
    expect(message).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' }
    ])
    expect(message).toEqual(heroes.filter((hero) => hero.owner === owner))
  })
})
