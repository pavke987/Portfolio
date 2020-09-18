import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    leagueTeams: null,
    standings: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LEAGUE_TEAMS: return updateObject(state, {leagueTeams: action.teams});
        case actionTypes.TEAMS_STANDINGS: return updateObject(state, {standings: action.standings});
        default: return state;
        
    } 
}

export default reducer;