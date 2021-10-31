import React, {Fragment, useContext } from 'react';
import HeroesContext from '../context/HeroesContext';
import SearchedHeroCard from '../components/SearchedHeroCard';
import nodata from '../assets/img/nodata.svg'
import { Redirect } from 'react-router-dom';


const SerchResult = () => {
    const heroesContext = useContext(HeroesContext);
    const {foundHeroes,notFound,errorMsg} = heroesContext;

    const token = localStorage.getItem('superHero-token');
    if(!token){
        return <Redirect to="/" />
    }

    return ( 
        
        <Fragment>
            <h1 className='search-result__heading custom-gradient ' >Search results</h1>

            <div className="container">
                {
                    !notFound 
                        ? ( <div className="search-result__grid">
                            {foundHeroes.map(hero=>(
                                <SearchedHeroCard key={hero.id} hero={hero} />
                            ))}
                            </div>
                          )
                        :null
                }
            </div>
        
            {notFound 
                &&  <div> 
                        <p className='nodata-text' > {notFound} </p>  
                        <img className='no-data' src={nodata} alt="not found"/>
                    </div> 
            }

          {errorMsg ? <p className="alert alert-danger error-msg " > {errorMsg} </p> : null}
        </Fragment>

     );
}
 
export default SerchResult;