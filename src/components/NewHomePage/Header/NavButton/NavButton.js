import React from 'react';
import { connect } from 'react-redux';
import classes from './NavButton.module.css';
import * as actions from '../../../../store/actions/index';
import NavButtons from './NavButtons/NavButtons';

const navButton = (props) => {
    let navButton = [classes.NavButton]
    let animation = [classes.NavButtonAnimation] 
    if (props.state) {
        navButton = [classes.NavButton, classes.clicked];
        animation.push(classes.animNone);
    }
    return (

        <div  className={navButton.join(' ')}>
            <h1 className={classes.H1} onClick={props.showNavHandler}>Ivan Pavic <span className={classes.span}>web developer</span></h1>
            <div className={animation.join(' ')}></div>
            <NavButtons show={props.state}/>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        state: state.home.button
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showNavHandler: () => dispatch(actions.toggleNav())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navButton);

