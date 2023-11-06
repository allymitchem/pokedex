import React, {useEffect, useState} from "react";
import {getByName} from "../api/index"
import CardList from "./CardList";
import IndividualCard from "./IndividualCard";


const PokemonSearch = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [pokemon, setPokemon] = useState(null)

    useEffect(()=> {
        const delay = 500
        let timer

        const performSearch = async () => {
            try{
                const data = await getByName(searchTerm)
                setPokemon(data)
            } catch (error){
                console.error(error)
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