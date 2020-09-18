import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './CountryLeague.module.css';
import Star from '../../../../UI/Star/Star';
import MatchOdds from '../MatchOdds/MatchOdds';
import IconCheck from '../../../../UI/IconCheck/IconCheck';

const countryLeague = (props) => {
        let star = null;
        let title = props.fixtures;
        let leagueKey = null;
        if(Array.isArray(props.fixtures)) {
                title = props.countryLeagues.map(el => {
                    let fixtures = props.fixtures.map(fix => { 
                        const newTitle = fix.country_logo + ',' + fix.country_name + '&' + fix.league_name;
                        leagueKey = fix.league_key;
                        if (el === newTitle) {
                            let eventStatus = fix.event_status;
                            let halfTime = null;
                            let time = fix.event_time
                            let finalResult = null;
                            star = <Star getLeagueKey={props.getLeagueKey}
                            removeLeagueKey={props.removeLeagueKey}
                            leagueKeys={props.leagueKeys}
                            elId={fix.league_key}/>
                            if(fix.event_final_result) {
                             finalResult = fix.event_final_result.split("-");
                            } 
            
                            if (fix.event_halftime_result) {
                                halfTime = `(${fix.event_halftime_result})`;
                            } else {
                                if (!eventStatus) {
                                    halfTime = <MatchOdds getMatchId={props.getMatchId}
                                    elId={fix.event_key}
                                    odds={props.odds}/>
                                }
                               
                            }
                            
                            let timeClass = [classes.Time];
                            let resultClass = [classes.Result];
                            let homeTeamClass = [classes.HomeTeam] 
                            let awayTeamClass = [classes.AwayTeam] 
            
                            if (eventStatus === "Finished") {
                                time = fix.event_status;
                                if(parseInt(finalResult[0]) > parseInt(finalResult[1])) {
                                    homeTeamClass.push(classes.Bold);
                                } else if(parseInt(finalResult[0]) < parseInt(finalResult[1])) {
                                    awayTeamClass.push(classes.Bold)
                                }
                             }else if(parseInt(eventStatus)) {
                                 resultClass.push(classes.Red)
                                 time = `${eventStatus}'`;
                                 timeClass.push(classes.Red);
                                 timeClass.push(classes.Bold);
                            }  else if (eventStatus) {
                                time = eventStatus
                            }
                         
                            let homeTeamArr = fix.event_home_team.split('');
                            let awayTeamArr = fix.event_away_team.split('');
                            let homeTeam = fix.event_home_team
                            let awayTeam = fix.event_away_team
                            
                            if(homeTeamArr.length > 14) {
                                homeTeam = homeTeamArr.slice(0,14).join('');
                            }

                            if(awayTeamArr.length > 14) {
                                awayTeam = awayTeamArr.slice(0,14).join('');
                            }


                            return <li className={classes.ListItem} key={fix.event_key}> 
                               <span className={timeClass.join(' ')}>
                                   <IconCheck getMyMatch={props.getMyMatch}
                                    elId={fix.event_key}
                                    removeMyMatch={props.removeMyMatch}
                                    myMatchesKeys={props.myMatchesKeys}
                                    />
                                    {time}
                                </span>
                                <span className={classes.Event}>
                                    <span className={ homeTeamClass.join(' ')}>{homeTeam}</span>
                                    <span className={resultClass.join(' ')}>{fix.event_final_result}</span> 
                                    <span className={awayTeamClass.join(' ')}>{awayTeam}</span></span>
                                <span className={classes.Halftime}>{halfTime}</span>
                        </li>  
                        } else {
                            return null;
                        }
                    }); 
                    
                    let elArray = el.split(',');
                    let splitTitle = elArray[1].split('&');
                    let img = null;
                    if (elArray[0] !== "null" && elArray[0] !== "undefined") {
                        img = <img className={classes.Image} alt="Country pic" src={elArray[0]} />
                    }
                    return(
                    <div key={el}>
                        <div className={classes.Title} >
                        {img}
                        <span className={classes.SpanCountry}>{splitTitle[0] + ':'}</span>
                        <NavLink to="live-score/teams"
                        id={leagueKey}
                         className={classes.NavLeague}
                         onClick={props.getLeagueTeams}>
                             {splitTitle[1]}
                        </NavLink>
                        <span className={classes.IconStar}>{star}</span>
                        </div>  
                            <ul className={classes.List}>
                                {fixtures} 
                            </ul>
                    </div>);    
                    });

          
            
    }

    return (  
        <div className={classes.CountryLeague}>
            {title}
        </div>
    );
}
 
export default countryLeague;