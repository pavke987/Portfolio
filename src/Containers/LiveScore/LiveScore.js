import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Main from '../../components/LiveScores/Main/Main';
import * as actionTypes from '../../store/actions/actionTypes';
import LivescoreLayout from './LiveScoreLayout/LiveScoreLayout';
import MainContent from '../../components/LiveScores/Main/MainContent/MainContent';

class LiveScore extends Component {

    componentDidMount () {
        this.props.getCountriesHandler();
        this.props.getFixturesHandler();
    }

    componentDidUpdate (prevProps, prevState) {
        if(this.props.category !== prevProps.category) {
            if(this.props.category === "LIVE") {
                this.props.getLivescoreHandler();
            }
        }

        if(this.props.leagueKeys.length !== prevProps.leagueKeys.length) {
            this.props.getMyLeaguesHandler();
        }

        if(this.props.selectedSport !== prevProps.selectedSport) {
            console.log()
            this.props.getCountriesHandler();
            this.props.getFixturesHandler();
        }
    }
    getIdFunction = (event, func1, func2 = null) => {
        let key = event.target.id;
        func1(key);
        if(func2) {
            func2(key);
        }
    }   

    render() {
        return (
            <LivescoreLayout>
                <Main>
                    <MainContent 
                        getLeagueKey={event => this.getIdFunction(event, this.props.leagueKeyHandler, this.props.getMyLeaguesHandler)}
                        removeLeagueKey={event => this.getIdFunction(event, this.props.removeLeagueKeyHandler, this.props.removeMyLeaguesHandler)}
                        getCategory={event => this.getIdFunction(event, this.props.selectCategoryHandler)}
                        getMatchId={event => this.getIdFunction(event, this.props.getOddsHandler)}
                        getMyMatch={event => this.getIdFunction(event, this.props.getMyMatch)}
                        removeMyMatch={ event => this.getIdFunction(event, this.props.removeMyMatch)}
                        getLeagueTeams={event => this.getIdFunction(event, this.props.getTeamsHandler)}

                        leagueKeys={this.props.leagueKeys}
                        category={this.props.category}
                        fixtures={this.props.fixtures}
                        livescore={this.props.livescore}
                        odds={this.props.matchOdds}
                        myMatchesKeys={this.props.myMatchesKeys}
                        myMatches={this.props.myMatches}
                        />         
                </Main>
            </LivescoreLayout>
             
            
        );
    };
};

const mapStateToProps = state => {
    return {
        leagueKeys: state.liveScore.myLeaguesKeys,
        category: state.liveScore.category,
        fixtures: state.liveScore.fixtures,
        livescore: state.liveScore.livescore,
        matchOdds: state.liveScore.matchOdds,
        myMatches: state.liveScore.myMatches,
        myMatchesKeys: state.liveScore.myMatchesKeys,
        teams: state.livescoreTeams.leagueTeams,
        selectedSport: state.liveScore.selectedSport
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCountriesHandler: () => dispatch(actions.getCountries()),
        leagueKeyHandler: (key) => dispatch({type: actionTypes.LEAGUE_KEY, key: key}),
        removeLeagueKeyHandler: (key) => dispatch({type: actionTypes.REMOVE_LEAGUE_KEY, key: key}),
        selectCategoryHandler: (id) => dispatch({type: actionTypes.SELECT_CATEGORY, id: id}),
        getMyLeaguesHandler: (key) => dispatch({type: actionTypes.MY_LEAGUES, key: key}),
        removeMyLeaguesHandler: (key) => dispatch({type: actionTypes.REMOVE_LEAGUE, key: key}),
        getMyMatch: (key) => dispatch(actions.getMatch(key)),
        removeMyMatch: (key) => dispatch({type: actionTypes.REMOVE_MATCH, key: key}),
        getFixturesHandler: () => dispatch(actions.getFixtures()),
        getLivescoreHandler: () => dispatch(actions.getLivescore()),
        getOddsHandler: (key) => dispatch(actions.getOdds(key)),
        getTeamsHandler: (key) => dispatch(actions.getTeams(key))
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(LiveScore);