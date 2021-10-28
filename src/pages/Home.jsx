import React, { useState,useContext, useEffect, Fragment } from 'react';
import axios from 'axios';
import HeroesContext from '../context/heroesContext';
import SearchHeroForm from '../Components/SearchHeroForm';
//import {getHeroById} from '../services/heroesServices';


const Home = () => {
    const heroesDetails = [];
    const [heroesDeta,setHeroesData]=useState(null)
    const heroesContext = useContext(HeroesContext);
    const {heroList} = heroesContext;

    useEffect(()=>{
        const heroesResponse = heroList.map(async (hero,index)=>(
            await axios(`https://www.superheroapi.com/api.php/10159538758842375/${hero}`).then(item=>{
                heroesDetails[index]=item.data.name
                setHeroesData(heroesDetails)
            })
        ));
    },[heroList]);



    return ( 
        <Fragment>
            <h1>Home</h1>
            <SearchHeroForm/>
        </Fragment>
     );
}

 
export default Home;