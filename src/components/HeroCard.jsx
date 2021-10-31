import React,{Fragment, useContext} from 'react';
import HeroesContext from '../context/HeroesContext';
import info_icon from '../assets/img/info.svg'

const HeroCard = ({hero}) => {

    const {weight,height}=hero.appearance;
    

    const heroesContext = useContext(HeroesContext);
    const {heroesData,setHeroesData} = heroesContext;
    
    const deleteHero=()=>{
        const newHeroesList = heroesData.filter(toBeDeleted => toBeDeleted.id !== hero.id  );
        setHeroesData(newHeroesList)
    }

    const powerstatsArr = Object.entries(hero.powerstats)

    return (
      <Fragment>

        {/*  Card */}
        <div className="card hero__card ">
          <div className="card-body">
            <h5 className="card-title">{hero.name}</h5>
            <img src={hero.image.url} alt="Superhero" />
            <ul className="card__info py-3 " >
              {powerstatsArr.map(stat=>(
                <li className="powerstats">  <span> {`${stat[0]}`}</span> { stat[1] }   </li>
              ))}
            </ul>
            <div className="card__buttons">
              <button className="btn btn-danger delete-btn " onClick={deleteHero}>Delete</button>
              <button
                type="button"
                className="btn btn-success more-info-btn "
                data-bs-toggle="modal"
                data-bs-target={`#id${hero.id}`}
              >
                More Info..
              </button>
            </div>
          </div>
        </div> 

        {/*  Modal */}
        <div className="modal fade" id={`id${hero.id}`} tabindex="-1"> 
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content custom-modal">
              <div className="modal-header">
                <h3 className="modal__heading">
                  {hero.name}
                </h3>
              </div>
              <div className="modal-body">
                <div className="modal-info">
                  <p>{`Real name: ${hero.biography['full-name']}`} </p>
                  <p>{`Weight: ${weight[1]}`} </p>
                  <p>{`Height: ${height[1]}`} </p>
                  <p>{`Alias: ${hero.biography.aliases[0]}`} </p>
                  <p>{`Eyes color: ${hero.appearance['eye-color']}`} </p>
                  <p>{`Hair color: ${hero.appearance['hair-color']}`} </p>
                  <p>{`Work place: ${hero.work.base}`} </p>
                </div>
                <img src={info_icon} alt="info" className="modal-image"/>
                
              </div>
            </div>
          </div>
        </div> 
      </Fragment>
    );
}
 
export default HeroCard;