import React from 'react';
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations'
import classes from './IntroductionParagraph.module.css';
const Bounce = styled.div`animation: 2s ${keyframes`${zoomIn}`}`
const introductionParagraph = (props) => (
    
    <Bounce className={classes.IntroductionParagraph}>
            <h2 className={classes.HeadingSecondary} onClick={props.click}>Hello, my name is <br/><span>Ivan Pavić</span></h2>
            <p> My dream is to become a web developer. I`ve crossed a long way and invested a lot of time and effort to gain knowledge and become what I am today. This web site is a presentation of my skills and hopefully  a key to start a career as a front end or back-end developer.  I am open to suggestions and eager to learn. By the time I achieve my goal, I am sure I will extend my skills and I will update this page accordingly. So take a tour and check out small apps that I build and enjoy the trip.</p>
    </Bounce>

);

export default introductionParagraph;