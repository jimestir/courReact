export const getPokemon = async () => {
  const URL = 'https://pokemon-unite-pokemons.p.rapidapi.com/pokemon/Azumarill'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3971aabd46msh71a1c324d5a73e9p1af82djsn60bb47fc1247',
      'X-RapidAPI-Host': 'pokemon-unite-pokemons.p.rapidapi.com'
    }
  }

  try {
    const response = await fetch(URL, options)
    const { name, id, evolution } = await response.json()
    return { name, id, evolution }
  } catch (error) {
    console.error(error)
    return 'found not image'
  }
}
