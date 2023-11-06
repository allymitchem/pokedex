import React, {useState} from "react";
import {getByName} from "../api/index"


const PokemonSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [pokemon, setPokemon] = useState(null)

    const handleSearch = async () => {
        try{
            const pokemonList = await getByName(searchTerm)
            setPokemon(pokemonList)
        } catch (error){
            console.error(error)
        }
    }
    return (
        <div>
            <h3>searchhhh</h3>

        </div>
    )
}

export default PokemonSearch