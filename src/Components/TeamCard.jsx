import React,{Fragment, useContext} from 'react';
import HeroesContext from '../context/heroesContext';

const TeamCard = ({hero}) => {

    const {weight,height}=hero.appearance;
    

    const heroesContext = useContext(HeroesContext);
    const {heroesData,setHeroesData} = heroesContext;
    
    const deleteHero=()=>{
        const newHeroesList = heroesData.filter(toBeDeleted => toBeDeleted.id !== hero.id  );
        setHeroesData(newHeroesList)
    }

    const powerstatsArr = Object.entries(hero.powerstats)
    console.log(powerstatsArr);

    return (
      <Fragment>
        <div className="card" style={{ width: "20rem" }}>
          <div className="card-body">
            <h5 className="card-title">{hero.name}</h5>
            <img src={hero.image.url} alt="Superhero" />
            <ul>
              {powerstatsArr.map(stat=>(
                <li>{`${stat[0].toUpperCase()}: ${stat[1]}`}</li>
              ))}
            </ul>
            <button className="btn btn-danger" onClick={deleteHero}>Delete</button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#id${hero.id}`}
            >
              More Info..
            </button>
          </div>
        </div> {/*  Card */}
        <div
          className="modal fade"
          id={`id${hero.id}`}
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h5 className="alert alert-success" id="exampleModalLabel">
                  {hero.name}
                </h5>
              </div>
              <div className="modal-body">
                <p>{`Real name: ${hero.biography['full-name']}`} </p>
                <p>{`Weight: ${weight[1]}`} </p>
                <p>{`Height: ${height[1]}`} </p>
                <p>{`Alias: ${hero.biography.aliases[0]}`} </p>
                <p>{`Eyes color: ${hero.appearance['eye-color']}`} </p>
                <p>{`Hair color: ${hero.appearance['hair-color']}`} </p>
                <p>{`Work place: ${hero.work.base}`} </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
 
export default TeamCard;