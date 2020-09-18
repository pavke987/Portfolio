import React from 'react';
import { connect } from 'react-redux'
import classes from './Main.module.css';
import SideNav from './SideNav/SideNav';
import * as actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions/index';
 

const Main = (props) => {

    const getIdFunction = (event, func1, func2 = null) => {
        let key = event.target.id;
        func1(key);
        if(func2) {
            func2(key);
        }
    } 

    return (
        <main className={classes.Main}>
            <SideNav getCountryKey={event => getIdFunction(event, props.getCountryKey, props.getSelectedLeagues)}
            getLeagueKey={event => getIdFunction(event, props.getLeagueKey, props.getMyleagues)}
            removeLeagueKey={event => getIdFunction(event, props.removeLeagueKey, props.removeMyLeagues)}
            removeCountryKey={event => getIdFunction(event, props.removeCountryKey)}
            getLeagueTeams={event => getIdFunction(event, props.getLeagueTeams)}
            toggleCountries={props.toggleCountries}
            leagueKeys={props.leagueKeys}
            countryKey={props.countryKey}
            showCountries={props.showCountries} 
            countries={props.countries} 
            selectedLeague={props.selectedLeague}
            myLeagues={props.myLeagues}
             />

             {props.children}
        
        </main>
    )
};

const mapStateToProps = state => {
    return {
        countryKey: state.liveScore.countryKeys,
        leagueKeys: state.liveScore.myLeaguesKeys,
        showCountries: state.liveScore.showLess,
        countries: state.liveScore.countries,
        selectedLeague: state.liveScore.leagues,
        myLeagues: state.liveScore.myLeagues,   
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountryKey: (key) => dispatch({type: actionTypes.COUNTRY_KEY, key: key}),
        getSelectedLeagues:(key) => dispatch(actions.getLeagues(key)),
        getLeagueKey: (key) => dispatch({type: actionTypes.LEAGUE_KEY, key: key}),
        getMyleagues: (key) => dispatch({type: actionTypes.MY_LEAGUES, key: key}),
        removeCountryKey: (key) => dispatch({type: actionTypes.REMOVE_COUNTRY_KEY, key: key}),
        removeLeagueKey: (key) => dispatch({type: actionTypes.REMOVE_LEAGUE_KEY, key: key}),
        removeMyLeagues: (key) => dispatch({type: actionTypes.REMOVE_LEAGUE, key: key}),
        toggleCountries: () => dispatch(actions.toggleCountries()),
        getLeagueTeams: (key) => dispatch(actions.getTeams(key)),        
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(Main);

