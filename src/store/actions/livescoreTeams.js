import * as actionTypes from './actionTypes';
import axios from '../../axios-livescore';

const apiKey = 'dab5339b6e40d667f3eed6fb0d3d3d738960aa498d5bfe14cb3d8908486ca392';
let sports = 'football';

export const getTeamsHandler = (teams) => {
    return {
        type: actionTypes.LEAGUE_TEAMS,
        teams: teams
    }
}

export const getStandingsHandler = (standings) => {
    return {
        type: actionTypes.TEAMS_STANDINGS,
        standings: standings 
    }
}

export const fetchTeamsFailed = () => {
    return {
        type: actionTypes.GET_TEAMS_FAILED
    }
}

export const fetchStandingsFailed = () => {
    return {
        type: actionTypes.GET_STANDINGS_FAILED
    }
}

export const getTeams = (key) => {
    return (dispatch, getState) => {
        const state = getState();
        sports = state.liveScore.selectedSport;
        axios.get(`/${sports}/?met=Teams&leagueId=${key}&APIkey=${apiKey}`)
        .then(response => {
            dispatch(getTeamsHandler(response.data))
        }).catch(() => {
            dispatch(fetchTeamsFailed())
        })
        axios.get(`/${sports}/?&met=Standings&leagueId=${key}&APIkey=${apiKey}`)
        .then(response => {
            dispatch(getStandingsHandler(response.data))
        }).catch(() => {
            dispatch(fetchStandingsFailed())
        })
    }



}