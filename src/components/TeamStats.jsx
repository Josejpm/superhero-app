import React from 'react';
import { Fragment } from 'react';
import { teamStats } from '../helpers/teamStats';
;

const TeamStats = ({heroesData}) => {

    const {mediumHeight,mediumWeight,powerstats}=teamStats(heroesData);

    return ( 
        <Fragment>
            <h3 className='stats__title' >Team Stats</h3>
            <ul className='stats__list' >
                {powerstats.map(stat=>(
                    <li key={stat[0]} className='stats__item' > <span>{stat[0]}</span> {stat[1]}</li>
                ))}
                { !isNaN(mediumHeight) && <li className='stats__item' > <span>Height</span> {`${mediumHeight} cm`}</li> }
                { !isNaN(mediumWeight) && <li className='stats__item' > <span>Weight</span> {`${mediumWeight} lb`}</li> }
            </ul>

            
            
        </Fragment>

         );
}
 
export default TeamStats;