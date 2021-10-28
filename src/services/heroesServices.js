import axios from "axios";

export const getHeroById = (heroList,setHeroesDetails,heroesDetails)=>{

    let heroeData=[];

    const heroesResponse = heroList.map(async (hero)=>(
        await axios(`https://www.superheroapi.com/api.php/10159538758842375/${hero}`)
    ));
    
    const heroesData = heroesResponse.map(async heroe=>(
        console.log(heroe)
    ));

}