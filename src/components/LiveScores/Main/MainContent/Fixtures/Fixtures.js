import React from 'react';
import classes from './Fixtures.module.css';
import CountryLeague from './CountryLeague/CountryLeague';
import { ReactComponent as Check} from '../../../../../assets/liveScore/crop_square.svg';

const fixtures = (props) => {

    let countryLeaguesArray = [];
    let fixtures = [];
    if(props.fixtures) {
        fixtures = props.fixtures.result;
        if (props.category === 'All games') {
            fixtures = props.fixtures.result
        } 
        
        if(props.category === 'LIVE') {
            if(props.livescore) {
                fixtures = props.livescore.result
            }   
        };

        if (props.category === 'Finished') {
            fixtures=[];  
            props.fixtures.result.forEach(el => {
                if(el.event_status === 'Finished') {
                    fixtures.push(el);
                }
            })
        }

        if (props.category === 'Schedule') {
            fixtures=[];
            props.fixtures.result.forEach(el => {
                if(!el.event_status) {
                    fixtures.push(el);
                }
            })
        }

        if (props.category === 'My games') {
            if(props.myMatches.length > 0) {
                fixtures = props.myMatches;
            } else {
                fixtures = <p className={classes.Text}>
                To choose your games click on the icon <span className={classes.IconHolder}>
                    {<Check className={classes.Icon} />} 
                    </span>beside name of the league.  
             </p>
            }
        }

        if(props.category === 'Odds') {
        }

        if (Array.isArray(fixtures)) {
            fixtures.forEach((el) => {
                countryLeaguesArray.push(el.country_logo + ',' + el.country_name + '&' + el.league_name);
            });
        }
    }
    let uniqCountryLeagues = a => [...new Set(a)]
    let countryLeagues = uniqCountryLeagues(countryLeaguesArray);
    return ( 
        <div className={classes.Fixtures}>
            <CountryLeague fixtures={fixtures}
             countryLeagues={countryLeagues}
             getLeagueKey={props.getLeagueKey}
             removeLeagueKey={props.removeLeagueKey}
             leagueKeys={props.leagueKeys}
             odds={props.odds}
             getMatchId={props.getMatchId}
             myMatches={props.myMatches}
             getMyMatch={props.getMyMatch}
             removeMyMatch={props.removeMyMatch}
             category={props.category}
             myMatchesKeys={props.myMatchesKeys}
             getLeagueTeams={props.getLeagueTeams}
             />
        </div>
     );
};
 
export default fixtures;