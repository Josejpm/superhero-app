import React from 'react';

const SearchedHeroCard = ({hero}) => {

    console.log(hero);

    return (
        <div className="card" style={{width:'18rem'}} >
            <div className="card-body">
                <img src={hero.image.url} alt="Superhero" />
                <h5 className="card-title">{hero.name}</h5>
                <a href="#" className="btn btn-primary">Select Hero</a>
            </div>
        </div>  
    );
}

export default SearchedHeroCard;