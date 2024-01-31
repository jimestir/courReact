import { heroes } from '../data/heroes'

const getHeroeById = (id) => heroes.find((hero) => hero.id === id)
const getHeroesByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner)

export { getHeroeById, getHeroesByOwner }
