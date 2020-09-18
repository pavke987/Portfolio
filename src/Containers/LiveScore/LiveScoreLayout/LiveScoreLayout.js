import React from 'react';
import { connect } from 'react-redux';
import Header from '../../../components/LiveScores/Header/Header';
import classes from './LiveScoreLayout.module.css';
import * as actionTypes from '../../../store/actions/actionTypes';
const livescoreLayout = (props) => {

    const getIdFunction = (event, func1, func2 = null) => {
        let key = event.target.id;
        func1(key);
        if(func2) {
            func2(key);
        }
    }

    return ( 
    <div className={classes.LivescoreLayout}>
        <Header selectedSport={props.selectedSport}
                    selectedLayout={props.selectedLayout}
                    getSelectedSport={event => getIdFunction(event, props.getSelectedSport)}
                    getSelectedLayout={event => getIdFunction(event, props.getSelectedLayout)}/>
                    {props.children}
        </div> 
    );
}
 
const mapState = (state) => {
    return {
        selectedSport: state.liveScore.selectedSport,
        selectedLayout: state.liveScore.layout,
    }
}

const mapDispatch = (dispatch) => {
    return {
        getSelectedLayout: (layout) => dispatch({type: actionTypes.CHANGE_LAYOUT, layout: layout}),
        getSelectedSport: (sport) => dispatch({type:actionTypes.CHANGE_SPORT, sport: sport}),
    }
}

export default connect(mapState, mapDispatch)(livescoreLayout);