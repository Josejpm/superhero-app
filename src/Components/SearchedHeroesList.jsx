import React, {Fragment, useContext } from 'react';
import HeroesContext from '../context/heroesContext';
import SearchedHeroCard from './SearchedHeroCard';


const SearchedHeroesList = () => {
    const heroesContext = useContext(HeroesContext);
    const {foundHeroes} = heroesContext
    return ( 
        
        <Fragment>
            {foundHeroes.map(hero=>(
                <SearchedHeroCard key={hero.id} hero={hero} />
            ))}
        </Fragment>

     );
}
 
export default SearchedHeroesList;