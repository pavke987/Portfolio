import React, { Component } from 'react';
import classes from './NewHomePage.module.css';
import Header from './Header/Header';
import Introduction from '../../Containers/Home/Introduction/Introduction';
import LearningRecources from './LearningRecourses/LearningRecourses';
import FinishedProjects from './FinishedProjects/FinishedProjects';
import Skills from '../../Containers/Home/Skills/Skills';
import StickyNav from './StickiNav/StickyNav';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';



class  NewHomePage extends Component {

     handleScroll= () => {
        const offset=window.scrollY;
            if(offset > 600) {
                this.props.scrollDownHandler();
               }
               else{
                this.props.scrollUpHandler();
               }          
        }

    render () {
    window.addEventListener('scroll', this.handleScroll);
      
    let stickyNav = null;
        if (this.props.scrolled) {
            stickyNav = <StickyNav scrolled={this.props.scrolled}/>
        }

        return(
            <div className={classes.NewHomePage}>
                {stickyNav}
                <Header/>
                <Introduction />
                <FinishedProjects />
                <LearningRecources />
                <Skills />
                <Footer />
            </div>
        );
    } 
};

const mapStateToProps = state => {
    return {
        scrolled: state.home.scrolled
    }
}

const mapDispatchToProps = dispatch => {
    return {
        scrollDownHandler: () => dispatch(actions.showSticky()),
        scrollUpHandler: () => dispatch(actions.hideSticky())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewHomePage);