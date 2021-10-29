import React, { useContext } from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import HeroesContext from '../context/heroesContext';
import { useHistory } from 'react-router';

const SearchHeroForm = () => {
    const history=useHistory();
    const heroesContext = useContext(HeroesContext);
    const {setFoundHeroes}=heroesContext;

    const validate = (values)=>{
        const errors = {};
          if (!values.hero) {
            errors.hero = 'Please enter a hero name';
          } else if (values.hero.length < 4 ) {
            errors.hero = 'SuperHero name must be at least 4 characters long';
          }
          return errors;
    }

    const formik = useFormik({
        initialValues:{hero:''},
        validate,
        onSubmit: values=>handleSubmit(values)
    })

    const handleSubmit = async ({hero})=>{
        const searchedHeroes = await axios (`https://www.superheroapi.com/api.php/10159538758842375/search/${hero}`)
        console.log(searchedHeroes)
        if(searchedHeroes.data.response==='error'){
            console.log(searchedHeroes.data.error)
            return
        }
        setFoundHeroes(searchedHeroes.data.results);
        history.push('/search-result')
    }

    return ( 

        <form onSubmit={ formik.handleSubmit }>
            <input 
                type="text" 
                name="hero" 
                id="hero" 
                onChange={formik.handleChange} 
            />
            {formik.errors.hero && <p>{formik.errors.hero}</p> }
            <input type="submit" value="Search" />
        </form>

     );
}
 
export default SearchHeroForm;