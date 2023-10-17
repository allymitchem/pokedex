// const baseUrl = 'https://pokeapi.co/api/v2'
// const url = new URL(baseUrl)

import Pokedex from 'pokedex-promise-v2'
const P = new Pokedex

  
  async function getByName(name){
    try {
        const pokemonList = await P.getPokemonByName(name)
        return pokemonList
    } catch (error){
        console.error(error)
    }
  }

  getByName("pikachu")
  .then((pokemonList) => {
    console.log(pokemonList)
  })
  .catch((error) => {
    console.error(error)
  })

// export async function getAllCards(params) {
//     if (params) {
//         if (params.name){
//             url.pathname = `/pokemon/${params.name}`
//         }
//     }
//     const reqObj = {
//         method:'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     try {
//         const response = await fetch(url.toString(), reqObj)
//         const result = await response.json()
//         return result
//     } catch (error){
//         console.error(error)
//     }
// }
// const fetchData = async () => {
//     try {
//         const data = await getAllCards()
//         console.log(data)
//     } catch (error) {
//         console.error(error)
//     }
// }

// getAllCards({name: 'bulbasaur'})


