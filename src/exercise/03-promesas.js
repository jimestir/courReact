import { getHeroeById } from './02-getHeroes'

export const getHeroByIdSync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id)

      p1 ? resolve(p1) : reject('Could not find hero with sent id')
    }, 1000)
  })
}
