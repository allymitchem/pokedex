import React, {useState} from 'react' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  
import { getByName } from '../api'
import {Title, IndividualCard, CardList, PokemonSearch} from './'

const Main = () => {

    const backgroundImageStyle = {
        backgroundImage: `url('https://res.cloudinary.com/fsa2/image/upload/v1697063592/portfolio%20site%20images/Project%20Images/pokemonBackground_xk0jbh.webp')`,
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        height: '110vh',
        width: '100vw'   
    }

    const [selectedPokemon, setSelectedPokemon] = useState([])
    // const handleSearch = async(name)=>{
    //     try {
    //         const pokemon = await getByName(name)
    //         setSelectedPokemon([pokemon])
    //     }catch (error){
    //         console.error(error)
    //     }
    // }
    return(
        <div id ="main" style={backgroundImageStyle}>
            <Title/>
            <PokemonSearch />
            {/* <IndividualCard/> */}
            {/* <CardList /> */}
            
        </div>
    )
}

export default Main;