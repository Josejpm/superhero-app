import React, { Fragment,useContext } from 'react';
import HeroesContext from '../context/heroesContext';
import TeamCard from './TeamCard';

const TeamList = () => {

    const heroesContext = useContext(HeroesContext);
    const {heroesData} = heroesContext
    
    if(heroesData.length === 0){
        return ( 
            <h2>Add a superHero to your team</h2>
        );
    }
    
    return ( 
        <Fragment>
            { heroesData.map(hero=>(
                <TeamCard key={hero.id} hero={hero} />
            ))}
        </Fragment>
    );
}
 
export default TeamList;