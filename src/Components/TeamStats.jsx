import React from 'react';
import { Fragment } from 'react';
import { teamStats } from '../helpers/teamStats';
;

const TeamStats = ({heroesData}) => {

    const {mediumHeight,mediumWeight,powerstats}=teamStats(heroesData);

    console.log(powerstats);
    
    

    return ( 
        <Fragment>
            <h3>Team Stats</h3>
            <ul>
                {powerstats.map(stat=>(
                    <li>{`${stat[0].toUpperCase()}: ${stat[1]}`}</li>
                ))}
            </ul>
            <p>{`Team weight: ${mediumWeight} kg`}</p>
            <p>{`Team height: ${mediumHeight} cm`}</p>
            
        </Fragment>

         );
}
 
export default TeamStats;