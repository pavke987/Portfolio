import React from 'react';
import Star from '../../../../UI/Star/Star';
import classes from './Leagues.module.css';
import { NavLink } from 'react-router-dom';

const leagues = (props) => {
    let countryLeagues = null;
    let star = null; 
    if(props.selectedLeague) {
        countryLeagues = props.selectedLeague.result.map(el => {
                    if(props.countryKey === el.country_key) {
                        let leagueName = el.league_name;
                        if (el.league_name.split('').length > 15) {
                            leagueName = `${leagueName.split('').slice(0, 15).join('')}...`;
                        }
                            star = <Star elId={el.league_key}
                            getLeagueKey={props.getLeagueKey}
                            removeLeagueKey={props.removeLeagueKey}
                            leagueKeys={props.leagueKeys}
                            />  
                            return <li key={el.league_key} id={el.league_key} className={classes.ListItem}>
                                    <div className={classes.Container}>
                                        <NavLink to="live-score/teams" className={classes.LeagueName} 
                                        id={el.league_key}
                                        onClick={props.getLeagueTeams}>
                                            {leagueName}
                                        </NavLink>
                                        <span className={classes.LeagueIcon}>{star}</span>
                                    </div> 
                                </li>
                }  else return null;       
         })        
    }; 

    return ( 
        <ul className={classes.Leagues}>
            {countryLeagues}
        </ul>
    );
}
 
export default leagues;