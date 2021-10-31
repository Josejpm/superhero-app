import React, { Fragment,useContext } from 'react';
import HeroesContext from '../context/HeroesContext';
import HeroCard from './HeroCard';

const TeamList = () => {

    const heroesContext = useContext(HeroesContext);
    const {heroesData} = heroesContext
    
    if(heroesData.length === 0){
        return ( 
            <h2 className='team__text'>Add a superHero to your team</h2>
        );
    }
    return ( 
        <Fragment>
            <div className="team__grid">
                { heroesData.map(hero=>(
                    <HeroCard key={hero.id} hero={hero} />
                ))}
            </div>
        </Fragment>
    );
}
 
export default TeamList;