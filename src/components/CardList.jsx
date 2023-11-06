import React from "react";
import IndividualCard from "./IndividualCard";
import PokemonSearch from "./PokemonSearch";

const CardList = () => {
    return (
        <div className="cardList">
        <PokemonSearch/>
       <IndividualCard/>
    
        </div>
    )
}

export default CardList