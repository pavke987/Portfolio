import React from 'react';
import classes from './MainContent.module.css';
import MainNav from './MainNav/MainNav';
import Fixtures from './Fixtures/Fixtures';
const mainContent = (props) => {


    return (
        <div className={classes.MainContent}>
            <MainNav  category={props.category}
             getCategory={props.getCategory}
             myMatches={props.myMatches}/>
            <Fixtures livescore={props.livescore}
             category={props.category}
            fixtures={props.fixtures}
            getLeagueKey={props.getLeagueKey}
            removeLeagueKey={props.removeLeagueKey}
            leagueKeys={props.leagueKeys}
            odds={props.odds}
            getMatchId={props.getMatchId}
            getMyMatch={props.getMyMatch}
            myMatches={props.myMatches}
            removeMyMatch={props.removeMyMatch}
            myMatchesKeys={props.myMatchesKeys}
            getLeagueTeams={props.getLeagueTeams}/>
        </div>
    );
};

export default mainContent;