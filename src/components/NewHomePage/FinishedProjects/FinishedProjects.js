import React from 'react';
import classes from './FinishedProjects.module.css';
import ProjectIcon from './ProjectIcon/ProjectIcon';
import burger from '../../../assets/finishedProjects/burger.png';
import forkify from '../../../assets/finishedProjects/forkify.png';
import omnifood from '../../../assets/finishedProjects/omnyfood.jpg';
import ideas from '../../../assets/finishedProjects/ideas.png';
import movies from '../../../assets/finishedProjects/searchMovies.png';
import tic from '../../../assets/finishedProjects/tic-tac-toe.png';
import notours from '../../../assets/finishedProjects/notours.png';
import trilio from '../../../assets/finishedProjects/trilio.png';
import nexter from '../../../assets/finishedProjects/nexter.png';
import livescore from '../../../assets/finishedProjects/livescore.png';

const finishedProjects = () => {

    return (
        <section id="finished-projects" className={classes.FinishedProjects} >
            <h2 className={classes.Title}>My projects</h2>
            <div className={classes.Projects}>
                <ProjectIcon image={livescore} link="live-score" title="Live Score" text="My sports live-score app. This is a large scale aplication that I didn't finished yet, but I am working on it. It contains a lot of data manipulation and API calls. Take a look at functionality that I applied this far."/>  
                <ProjectIcon image={ideas} link="ideas" title="Ideas" text="This is the assigment from a job interview, an app that comunicate with Firebase database, read, write, edit and delete."/>
                <ProjectIcon image={movies} title="movies" link="/movies" text="I got an assigment in job interwiew to build this small app. Basicly it is an app that searches API data base and displaying result, it wasnt to hard."/>
                <ProjectIcon image={burger} link="burger-builder" title="Burger Builder" text="Project that I built learning ReactJS. Maximilian Schwarzmüller Udemy React course. "/>
                <ProjectIcon image={omnifood} title="Omnifood" hrefLink="http://www.ivan-pavic.com/omnifood/" text="The first web page that I built, it is from Udemy course by Jonas Schmedtmann, he is a great teacher and i learned a lot from him"/>
                <ProjectIcon image={tic} title="tic-tac-toe" hrefLink="http://www.ivan-pavic.com/omnifood/ixsoks/" text="A small app that i built after only two months learning JS, now when I look at the code I dont know how I did it, but it works and represents my first success, so I am keeping it as it is..:)"/>
                <ProjectIcon image={forkify} link="/forkify" title="Forkify" text="One more masterpiece from Jonas Schmedtmann Udemy course, great teacher. Async/ await,  modular JS, and everything you need to know about JS basic. Now I built it in React because it was a good candidate for React to shine"/>
                <ProjectIcon image={notours} hrefLink="http://www.ivan-pavic.com/notours/" title="Notours" text="Jonas  Schmedtmann Udemy course. Advanced CSS, CSS grids, no flex-box"/>
                <ProjectIcon image={trilio} hrefLink="http://www.ivan-pavic.com/trilio/" title="trilio" text="Jonas  Schmedtmann Udemy course. Advanced CSS, flex-box project"/>
                <ProjectIcon image={nexter} hrefLink="http://www.ivan-pavic.com/nexter/" title="Nexter" text="Jonas  Schmedtmann Udemy course." />
                
                
            </div>
           
        </section>
    )
};

export default finishedProjects;