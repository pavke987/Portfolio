import React, { Component } from 'react';
import { connect } from 'react-redux';
import LiveScoreLayout from '../LiveScoreLayout/LiveScoreLayout';
import Main from '../../../components/LiveScores/Main/Main';

class LivescoreTeams extends Component {
    render () {
        return (
         <LiveScoreLayout>
             <Main>
                 
             </Main>
         </LiveScoreLayout>
        )
    }
};

const mapState = (state) => {
    return {
        leagueTeams: state.livescoreTeams.leagueTeams,
        standings: state.livescoreTeams.standings
    }
}

export default connect(mapState)(LivescoreTeams);