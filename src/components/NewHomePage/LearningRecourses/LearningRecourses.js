import React from 'react';
import classes from './LearningRecourses.module.css';
import cssCourse from '../../../assets/LearningResources/jonas-css.png';
import jsCourse from '../../../assets/LearningResources/jonas-js.png';
import nodeCourse from '../../../assets/LearningResources/jonas-node.png';
import reactCourse from '../../../assets/LearningResources/react.png';
import advancedCss from '../../../assets/LearningResources/maximilian-css.png';
import typescript from '../../../assets/LearningResources/typeScript.png';

const learningRecourses = () => {
    const udemyLinkHandler = () => {
        window.location.href= 'https://www.udemy.com/courses/'
    }
    return ( 
        <section className={classes.LearningRecourses} id="learning__recources">
            <h2>Learning Resources</h2>
            <div>
                <img src={cssCourse} onClick={udemyLinkHandler} alt="jonas-css" />
                <img src={advancedCss} onClick={udemyLinkHandler} alt="maxi-css" />
                <img src={jsCourse} onClick={udemyLinkHandler} alt="jonas-js" />
            </div>
            <div>
                <img src={nodeCourse} onClick={udemyLinkHandler} alt="jonas-node" />
                <img src={typescript} onClick={udemyLinkHandler} alt="maxi-typescript" />
                <img src={reactCourse} onClick={udemyLinkHandler} alt="maxi-react" />
            </div>
        </section>
     );
}
 
export default learningRecourses;