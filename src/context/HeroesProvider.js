import React, { useState } from 'react';
import HeroesContext from './heroesContext';


const HeroesProvider = (props) => {

    const [heroList,setHeroList]=useState([1,25,10,15]);
    const [foundHeroes,setFoundHeroes]=useState([]);


    return ( 
        <HeroesContext.Provider
            value={{
                heroList,
                foundHeroes,
                setFoundHeroes
            }}
        >

            {props.children}
        </HeroesContext.Provider>        
     );
}
 
export default HeroesProvider;
