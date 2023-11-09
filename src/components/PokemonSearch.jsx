import React, {useEffect, useState} from "react";
import {getByName} from "../api/index"
// import CardList from "./CardList";
// import IndividualCard from "./IndividualCard";



const PokemonSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [pokemon, setPokemon] = useState(null)
    const [lastSearchedPokemon, setLastSearchedPokemon] = useState(null)

    useEffect(()=> {
        const delay = 500
        let timer

        const performSearch = async () => {
            try{
                const data = await getByName(searchTerm)
                setLastSearchedPokemon(data)
                setPokemon(data)
            } catch (error){
                console.error(error)
                // setPokemon(null)
                // setPokemon(null) --> clears previous data if error occurs
            }
        }
        if (searchTerm){
            clearTimeout(timer)
            timer = setTimeout(performSearch, delay)
        } else {
            setPokemon(null)
        }

        return () => clearTimeout(timer)
    }, [searchTerm] )

        

    // const handleSearch = async () => {
    //     try{
    //         const data = await getByName(searchTerm)
    //         console.log(data)
    //         setPokemon(data)
    //     } catch (error){
    //         console.error(error)
           
    //     }
    // }

    

    

    

    return (
        <div className="mainContainer">
            {/* <h3>searchhhh</h3> */}
            <input 
            className="searchBar"
            type ="text"
            placeholder="🔍 Search..."
            value ={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
            <div className="pokedexContainer">
        {searchTerm && pokemon && (
            <div className="individualCard">
                <div className="hp">
                <h2 className="pokemonName">{pokemon.name}</h2>
                {pokemon.stats.map((stat)=> {
                    if (stat.stat.name === "hp"){
                        return(
                            <p  key={stat.stat.name}>
                                {stat.base_stat} HP
                            </p>
                        )
                    }
                    return null
                })}
                
                </div>
                <img className="pokemonImage" src ={pokemon.sprites.front_default} alt ={pokemon.name}/>
                <h3 className="pokemonId" >{pokemon.id}</h3>
                <p> Type: {pokemon.types.map((type)=> type.type.name).join('')}</p>
            </div> 
            // ) : (
            //     <p >no data available</p>
            )}
             </div>
            
        </div>



    )


}

export default PokemonSearch