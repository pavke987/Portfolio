import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    layout: 'day',
    selectedSport: 'football',
    countries: null,
    countryKeys: null,
    leagues: null,
    fixtures: null,
    livescore: null,
    myLeaguesKeys: [],
    myLeagues: [],
    myMatches: [],
    myMatchesKeys: [],
    matchOdds: null,
    category: "All games",
    showLess: false
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.CHANGE_LAYOUT: return updateObject(state, {layout: action.layout});
        case actionTypes.CHANGE_SPORT: return updateObject(state, {selectedSport: action.sport}); 
        case actionTypes.GET_COUNTRIES: return updateObject(state, {countries: action.countries});
        case actionTypes.TOGGLE_COUNTRIES: return updateObject(state, {showLess: !state.showLess});
        case actionTypes.GET_LEAGUES: return updateObject(state, {leagues: action.leagues});
        case actionTypes.COUNTRY_KEY: return updateObject(state, {countryKeys: action.key});
        case actionTypes.REMOVE_COUNTRY_KEY: return updateObject(state, {countryKeys: null})    
        case actionTypes.LEAGUE_KEY:
            return {
                ...state,
                myLeaguesKeys: state.myLeaguesKeys.concat(action.key)
            };
        case actionTypes.REMOVE_LEAGUE_KEY: 
            return {
                ...state,
                myLeaguesKeys: state.myLeaguesKeys.filter(el => el !== action.key)
                
            }
        case actionTypes.SELECT_CATEGORY: return updateObject(state, {category: action.id});
        case actionTypes.GET_FIXTURES: return updateObject(state, {fixtures: action.fixtures}); 
        case actionTypes.GET_LIVESCORE: return updateObject(state, {livescore: action.livescore});   
        case actionTypes.GET_ODDS: 
            return {
                ...state, 
                matchOdds: action.odds
            };
        case actionTypes.MY_LEAGUES:
            let league = [];
            if (state.leagues) {
                state.leagues.result.forEach(el => {
                    if(el.league_key === action.key) {
                        league.push(el);
                    }
                });
            }

            if(state.livescore) {
                if(state.livescore.result) {
                    state.livescore.result.forEach(el => {
                        if(el.league_key === action.key) {
                            league.push(el);
                        }
                    });
                }          
            }
                state.fixtures.result.forEach(el => {
                    if(el.league_key === action.key) {
                        league.push(el);
                    }
                });

            league = getUniqueListBy(league, 'league_key');
           return {
               ...state,
               myLeagues: state.myLeagues.concat(league)
           };
           case actionTypes.REMOVE_LEAGUE:
               return {
                   ...state,
                   myLeagues: state.myLeagues.filter(el => el.league_key !== action.key)
               }
            case actionTypes.MY_MATCH: 
                return {
                    ...state,
                    myMatches: state.myMatches.concat(action.myMatch.result),
                    myMatchesKeys: state.myMatchesKeys.concat(action.myMatchKey)
                }
            case actionTypes.REMOVE_MATCH:
                return {
                    ...state,
                    myMatches: state.myMatches.filter(el => el.event_key !== action.key),
                    myMatchesKeys: state.myMatchesKeys.filter(el => el !== action.key)
                }    
        default: return state;
    }
}



export default reducer;