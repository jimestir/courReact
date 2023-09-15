import { getHeroeById, getHeroesByOwner } from '../exercise/01-getHeroes'
describe('test in 01-getHeroes.test.js', () => {
  test("You must obtain a hero and the owner's heroes", () => {
    const id = 1
    const message = getHeroeById(id)
    expect(id).toBe(message.id)
  })
})
