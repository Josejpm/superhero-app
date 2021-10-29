import React, { useState } from 'react';
import HeroesContext from './heroesContext';


const HeroesProvider = (props) => {

    const [heroesData,setHeroesData]=useState([])
    const [foundHeroes,setFoundHeroes]=useState([]);
    const [errorMsg,setErrorMsg]=useState(null)



    return ( 
        <HeroesContext.Provider
            value={{
                heroesData,
                foundHeroes,
                errorMsg,
                setFoundHeroes,
                setHeroesData,
                setErrorMsg

            }}
        >

            {props.children}
        </HeroesContext.Provider>        
     );
}
 
export default HeroesProvider;
