import React from 'react';
import { connect } from 'react-redux';
import classes from './Introduction.module.css';
import IntroductionParagraph from '../../../components/IntroductionParagraph/IntroductionParagraph';
import * as actions from '../../../store/actions';

const introduction = (props) => {
    let introductionText =  <h2 className={classes.HeadingSecondary} onClick={props.showParagraphHandler}>INTRODUCTION</h2>    
    if (props.state.displayParagraph) {
        introductionText = (
        <IntroductionParagraph click={props.showParagraphHandler}/>      
        )
    }
    return ( 
        <div className={classes.Introduction} id="home">
            {introductionText}
        </div>
         );
}

const mapStateToProps = state => {
    return {
        state : state.home
    }
}

const dispatchPropsToState = dispatch => {
    return {
        showParagraphHandler: () => dispatch(actions.toggleParagraph())
    }

}

export default connect(mapStateToProps, dispatchPropsToState) (introduction);