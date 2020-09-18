import React from 'react';
import classes from './NavButtons.module.css';
import { Link } from 'react-scroll';


const navButtons = (props) => {

    let finishedProjects = [classes.NavButtons];
    let learningRecourses = [classes.NavButtons];
    let home = [classes.NavButtons];
    let skills = [classes.NavButtons];
    let contact = [classes.NavButtons];

        if(props.scrolled) {
            finishedProjects = [classes.StickyNavButtons];
            learningRecourses = [classes.StickyNavButtons];
            home = [classes.StickyNavButtons];
            skills = [classes.StickyNavButtons];
            contact = [classes.StickyNavButtons];
        }
        else{
           
        if (props.show) {
            finishedProjects.push(classes.FinishedProjects);
            learningRecourses.push(classes.LearningRecourses);
            home.push(classes.Home);
            skills.push(classes.Skills);
            contact.push(classes.Contact);
            }
        }

    return (
        <React.Fragment>
               
                <Link activeClass={classes.active} spy={true} smooth={true} duration={1000}  className={learningRecourses.join(' ')} to="learning__recources">Learning resources</Link> 
                <Link activeClass={classes.active}  spy={true} smooth={true} duration={1000} className={skills.join(' ')} to="skills">Skills</Link> 
                <Link activeClass={classes.active}  spy={true} smooth={true} duration={1000} className={home.join(' ')} to="home">Home</Link>
                <Link activeClass={classes.active}  spy={true} smooth={true} duration={1000} className={contact.join(' ')} to="contact">Contact</Link> 
                <Link activeClass={classes.active}  spy={true} smooth={true} duration={1000} className={finishedProjects.join(' ')} to="finished-projects">Finished Projects</Link> 
                      
        </React.Fragment>     
    )
}


export default navButtons;