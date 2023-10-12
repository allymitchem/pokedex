import React from 'react' 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'  

const Main = () => {

    const backgroundImageStyle = {
        backgroundImage: `url('https://res.cloudinary.com/fsa2/image/upload/v1697063592/portfolio%20site%20images/Project%20Images/pokemonBackground_xk0jbh.webp')`,
        backgroundSize: 'cover',
        // backgroundAttachment: 'fixed',
        height: '110vh',
        width: '100vw',
        
        
        
    }
    return(
        <div id ="main" style={backgroundImageStyle}>
            {/* <h2>Main</h2> */}
        </div>
    )
}

export default Main;