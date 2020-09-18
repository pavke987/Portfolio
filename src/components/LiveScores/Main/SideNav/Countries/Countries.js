import React from 'react';
import classes from './Countries.module.css';
import Buttons from './Buttons/Buttons';
import Leagues from './Leagues/Leagues';

const countries = (props) => {

    let displayCountries = null;
    let countriesList= null;

    if(props.countries) {

        /////////////FINISHED///////////////
        if(props.showCountries) {
            countriesList = props.countries.result
        } else {
            countriesList = props.countries.result.slice(0, 20);
        }
        ////////////////////////////////////////
        displayCountries = countriesList.map(el => {
            if (props.countryKey === el.country_key) {
                return <li key={el.country_key} className={classes.CountryName}>
                <div onClick={props.removeCountryKey} id={el.country_key} className={classes.NameContainer}>{el.country_name}</div>
                    <Leagues countryKey={props.countryKey}
                        getLeagueKey={props.getLeagueKey}
                        removeLeagueKey={props.removeLeagueKey}
                        leagueKeys={props.leagueKeys}
                        selectedLeague={props.selectedLeague}
                        getLeagueTeams={props.getLeagueTeams}/>
                </li>
                } else {
                return <li onClick={props.getCountryKey} id={el.country_key} key={el.country_key} className={classes.CountryName}>
                         <div id={el.country_key} className={classes.NameContainer}>{el.country_name}</div>
                      </li>
            };    
           
        }); 
    }
    return ( 
                 <ul className={classes.List}>
                    {displayCountries}
                    <Buttons showCountries={props.showCountries}
                    toggleCountries={props.toggleCountries}/>
                </ul>

     );
}

 
export default countries;

