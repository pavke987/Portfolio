import React from 'react';
import classes from './MyLeagues.module.css';
import IconDelete from '../../../UI/IconDelete/IconDelete';

const myLeagues = (props) => {
    let selectedLeagues = props.myLeagues.map(el => {
        let leagueName = el.league_name;
        if (el.league_name.split('').length > 15) {
            leagueName = `${leagueName.split('').slice(0, 15).join('')}...`;
        }

    return <li className={classes.LeagueItem}
            key={el.league_key}>
                    <img className={classes.Logo}
                    alt={el.league_name}
                     src={el.league_logo}
                      />
                    <span className={classes.LeagueName}
                    id={el.league_key}>
                    {leagueName}  
                    </span>
                    <IconDelete elId={el.league_key}
                     className={classes.IconDelete}
                     removeLeagueKey={props.removeLeagueKey}/>

            </li>
    })
    return ( 
        <ul className={classes.MyLeagues}>
            {selectedLeagues}
        </ul>
     );
}
 
export default myLeagues;