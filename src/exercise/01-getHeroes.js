import { heroes } from '../data/heroes'

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)
const getHeroesByOwner = (owner) =>
  heroes.filter((heroes) => heroes.owner === owner)

export { getHeroeById, getHeroesByOwner }
