
export const teamStats = (heroesData)=>{

    const initialValue = { intelligence:0,strength:0,speed:0,durability:0,power:0,combat:0,height:0,weight:0}

    const stats = heroesData.reduce((StatsSum,actualPosition)=>{

        StatsSum['intelligence']=StatsSum['intelligence']+Number(actualPosition.powerstats.intelligence);
        StatsSum['strength']=StatsSum['strength']+Number(actualPosition.powerstats.strength);
        StatsSum['speed']=StatsSum['speed']+Number(actualPosition.powerstats.speed);
        StatsSum['durability']=StatsSum['durability']+Number(actualPosition.powerstats.durability);
        StatsSum['power']=StatsSum['power']+Number(actualPosition.powerstats.power);
        StatsSum['combat']=StatsSum['combat']+Number(actualPosition.powerstats.combat);
        StatsSum['height']=StatsSum['height']+Number(actualPosition.appearance.height[1].slice(0,-3));
        StatsSum['weight']=StatsSum['weight']+Number(actualPosition.appearance.weight[0].slice(0,-2));

        console.log(actualPosition.appearance.weight[0])

        return StatsSum

    },initialValue)

    const mediumWeight= (stats.weight/heroesData.length).toFixed(2);
    const mediumHeight= (stats.height/heroesData.length).toFixed(2);

    const statsArray = Object.entries(stats);
    const sorted = statsArray.sort( (a,b)=> b[1]-a[1]);

    const powerstats = sorted.filter( stat=>(stat[0] !== 'height' && stat[0] !== 'weight'))

    return {
        mediumHeight,
        mediumWeight,
        powerstats,
    }
}