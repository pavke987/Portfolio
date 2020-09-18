import axios from '../../axios-livescore';
//import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiKey = 'dab5339b6e40d667f3eed6fb0d3d3d738960aa498d5bfe14cb3d8908486ca392';
let sports = 'football';

export const getCountriesHandler = (countries) => {
    return {
        type: actionTypes.GET_COUNTRIES,
        countries: countries 
    };
};

export const fetchCountriesFailed = () => {
    return {
        type: actionTypes.FETCH_COUNTRIES_FAILED
    };
};

export const getCountries = () => {
    return (dispatch, getState) => {
        const state = getState()
        sports = state.liveScore.selectedSport; 
        axios.get(`/${sports}/?met=Countries&APIkey=${apiKey}`)
        .then(response => {
           dispatch(getCountriesHandler(response.data))
        }).catch(() => {
           dispatch(fetchCountriesFailed())
        });
    };
};
export const getLeaguesHandler = (leagues) => {
    return {
        type: actionTypes.GET_LEAGUES,
        leagues: leagues
    };
};

export const fetchLeaguesFailed = () => {
    return {
        type: actionTypes.FETCH_LEAGUES_FAILED
    };
};

export const getLeagues = (key) => {
    console.log(key)
    return dispatch => {
        axios.get(`/${sports}/?met=Leagues&countryId=${key}&APIkey=${apiKey}`)
        .then(response => {
           dispatch(getLeaguesHandler(response.data))
        }).catch(() => {
           dispatch(fetchLeaguesFailed())
        });
    };
};

export const getFixturesHandler = (fixtures) => {
    return {
        type: actionTypes.GET_FIXTURES,
        fixtures: fixtures 
    };
};

export const fetchFixturesFailed = () => {
    return {
        type: actionTypes.FETCH_LEAGUES_FAILED
    };
};

export const getFixtures = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return dispatch => {
        axios.get(`/${sports}/?met=Fixtures&APIkey=${apiKey}&from=${today}&to=${today}`)
        .then(response => {
           dispatch(getFixturesHandler(response.data))
        }).catch(() => {
           dispatch(fetchLeaguesFailed())
        });
    };
};

export const getLivescoreHandler = (livescore) => {
    return {
        type: actionTypes.GET_LIVESCORE,
        livescore: livescore 
    };
};

export const fetchLivescoreFailed = () => {
    return {
        type: actionTypes.FETCH_COUNTRIES_FAILED
    };
};

export const getLivescore = () => {
    return dispatch => {
        axios.get(`/${sports}/?met=Livescore&APIkey=${apiKey}`)
        .then(response => {
           dispatch(getLivescoreHandler(response.data))
        }).catch(() => {
           dispatch(fetchLivescoreFailed())
        });
    };
};

export const getOddsHandler = (odds) => {
    return {
        type: actionTypes.GET_ODDS,
        odds: odds
    };
};

export const fetchOddsFailed = () => {
    return {
        type: actionTypes.FETCH_LEAGUES_FAILED
    };
};

export const getOdds = (key) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    return dispatch => {
        axios.get(`/${sports}/?&met=Odds&matchId=${key}&APIkey=${apiKey}`)
        .then(response => {
           dispatch(getOddsHandler(response.data))
        }).catch(() => {
           dispatch(fetchOddsFailed())
        });
    };
};

export const toggleCountries = () => {
    return {
        type: actionTypes.TOGGLE_COUNTRIES
    }    
}

export const getMyMatchHandler = (myMatch, key) => {
    return {
        type: actionTypes.MY_MATCH,
        myMatch: myMatch,
        myMatchKey: key 
    };
};

export const fetchMatchFailed = () => {
    return {
        type: actionTypes.GET_MATCH_FAILED
    };
};

export const getMatch = (key) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    let history = 10;
    if (dd < history) {
        dd = 30 - (history - dd);
        mm -= 1;
    } else {
        dd -= history
    }
    let yesterday = yyyy + '-' + mm + '-' + dd;
    return dispatch => {
        axios.get(`/${sports}/?met=Fixtures&matchId=${key}&APIkey=${apiKey}&from=${yesterday}&to=${today}`)
        .then(response => {
           dispatch(getMyMatchHandler(response.data, key))
        }).catch(() => {
           dispatch(fetchMatchFailed())
        });
    };
};

