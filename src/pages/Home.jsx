import React, { useState,useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import HeroesContext from '../context/heroesContext';
import SearchHeroForm from '../Components/SearchHeroForm';
import TeamList from '../Components/TeamList';
//import {getHeroById} from '../services/heroesServices';


const Home = () => {
    const heroesContext = useContext(HeroesContext);
    const {heroesData} = heroesContext;
    return ( 
        <Fragment>
            <h1>Home</h1>
            <SearchHeroForm/>
            <TeamList heroesData={heroesData}/>
            
        </Fragment>
     );
}

 
export default Home;