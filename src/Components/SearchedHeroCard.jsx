import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import HeroesContext from '../context/heroesContext';

const SearchedHeroCard = ({hero}) => {
    const history = useHistory();
    const heroesContext = useContext(HeroesContext);
    const {heroesData,setHeroesData,setErrorMsg} = heroesContext;


    const handleClick = ()=>{

        const isInTheTeam = heroesData.find(h=>h.id===hero.id);
        const goodOnes = heroesData.filter(hero=>( hero.biography.alignment === 'good'));
        const badOnes = heroesData.filter(hero=>( hero.biography.alignment === 'bad'));
        
        if(isInTheTeam){
            setErrorMsg(`${hero.name} is already in your team`)
            setTimeout(() => {
                setErrorMsg(null)
                history.push('/home');
            }, 2000);
            return
        }

        if(heroesData.length >= 6){
            setErrorMsg('Your team is complete, only 6 Superheroes are allowed')
            setTimeout(() => {
                setErrorMsg(null)
                history.push('/home');
            }, 2000);
            return
        }

        if(goodOnes.length>=3 && hero.biography.alignment==='good'){
            setErrorMsg('Your team has 3 Good SuperHeroes, no more allowed')
            setTimeout(() => {
                setErrorMsg(null)
                history.push('/home');
            }, 2000);
            return
        }

        if(badOnes.length>=3 && hero.biography.alignment==='bad' ){
            setErrorMsg('Your team has 3 Bad SuperHeroes, no more allowed')
            setTimeout(() => {
                setErrorMsg(null)
                history.push('/home');
            }, 2000);
            return
        }

        setHeroesData([...heroesData,hero]);
        history.push('/home')
    }

    return (
        <div className="card" style={{width:'18rem'}} >
            <div className="card-body">
                <img src={hero.image.url} alt="Superhero" />
                <h5 className="card-title">{hero.name}</h5>
                <button className="btn btn-primary" onClick={ handleClick } >Add Hero</button>
            </div>
        </div>  
    );
}

export default SearchedHeroCard;