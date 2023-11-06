import React, {useState} from "react";
import {getByName} from "../api/index"
import CardList from "./CardList";
import IndividualCard from "./IndividualCard";


const PokemonSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [pokemon, setPokemon] = useState(null)

    const handleSearch = async () => {
        try{
            const data = await getByName(searchTerm)
            console.log(data)
            setPokemon(data)
        } catch (error){
            console.error(error)
           
        }
    }

    

    return (
        <div>
            <h3>searchhhh</h3>
            <input 
            type ="text"
            placeholder=" 🔍 Search "
            value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
            
        {pokemon ? (
            <div className="individualCard">
                <h2>{pokemon.name}</h2>
            </div> ) : (
                <p>no data available</p>
            )}

            
        </div>



    )


}

export default PokemonSearch