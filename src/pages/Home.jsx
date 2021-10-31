import React, { useContext, Fragment } from 'react';
import HeroesContext from '../context/HeroesContext';
import TeamList from '../components/TeamList';
import TeamStats from '../components/TeamStats';
import { Redirect } from 'react-router-dom';



const Home = () => {
    const heroesContext = useContext(HeroesContext);
    const {heroesData} = heroesContext;

    const token = localStorage.getItem('superHero-token');
    if(!token){
        return <Redirect to="/" />
    }

    return ( 
        <Fragment>
            <div className="container">
                
                <div className="row justify-content-center ">
                    <h1 className=" home__title custom-gradient" >Superheroes Team</h1>
                </div>
                
                <div className="info-container">

                    <div className="info-left" >
                        <TeamList heroesData={heroesData}/>
                    </div>

                    <div className="info-right">
                        <TeamStats heroesData={heroesData} />
                    </div>

                </div>
            </div>
            
        </Fragment>
     );
}

 
export default Home;