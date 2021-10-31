import React, { useContext } from 'react';
import {useFormik} from 'formik';
import axios from 'axios';
import HeroesContext from '../context/HeroesContext';
import { useHistory } from 'react-router';

const SearchForm = () => {
    
    const history=useHistory();
    const heroesContext = useContext(HeroesContext);
    const {setFoundHeroes,setNotFound,setSearchedHero}=heroesContext;

    const validate = (values)=>{

        const errors = {};
          if (!values.hero) {
            errors.hero = 'Please enter a hero name';
          } else if (values.hero.length < 3 ) {
            errors.hero = 'Must have 3 chars long';
          }
          return errors;
    }

    const formik = useFormik({
        initialValues:{hero:''},
        validate,
        onSubmit: values=>handleSubmit(values)
    })

    const handleSubmit = async ({hero})=>{
        const searchedHeroes = await axios (`https://www.superheroapi.com/api.php/10159538758842375/search/${hero}`);
        setSearchedHero(hero);

        if(searchedHeroes.data.response==='error'){
            setFoundHeroes([])
            setNotFound(searchedHeroes.data.error)
            history.push('/search-result')
            return
        }
        
        setNotFound(null)
        setFoundHeroes(searchedHeroes.data.results);
        history.push('/search-result')
    }

    return ( 

        <form className='search-form' onSubmit={ formik.handleSubmit }>
            <input
                className="form-control-plaintext form__input" 
                type="text" 
                name="hero" 
                id="hero"
                placeholder="Find your favorite superhero..."
                onChange={formik.handleChange} 
            />
            <input className='form-button layout-bar' type="submit" value="Search" />
            {formik.errors.hero && <p className='search-hero-error alert alert-danger' >{formik.errors.hero}</p> }
        </form>

     );
}
 
export default SearchForm;