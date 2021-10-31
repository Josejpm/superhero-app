import React, { useState } from 'react';
import HeroesContext from './HeroesContext';


const HeroesProvider = (props) => {

    const [heroesData,setHeroesData]=useState([])
    const [foundHeroes,setFoundHeroes]=useState([]);
    const [errorMsg,setErrorMsg]=useState(null);
    const [searchedHero,setSearchedHero] = useState('');
    const [notFound,setNotFound] = useState(null);


    return ( 
        <HeroesContext.Provider
            value={{
                heroesData,
                foundHeroes,
                errorMsg,
                notFound,
                searchedHero,
                setFoundHeroes,
                setHeroesData,
                setErrorMsg,
                setSearchedHero,
                setNotFound

            }}
        >

            {props.children}
        </HeroesContext.Provider>        
     );
}
 
export default HeroesProvider;
