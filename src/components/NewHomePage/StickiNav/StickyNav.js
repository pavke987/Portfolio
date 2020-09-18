import React from 'react';
import classes from './StickyNav.module.css';
import NavButtons from '../Header/NavButton/NavButtons/NavButtons';

const stickyNav = (props) => {
    let sticky = [classes.StickyNav, classes.Grow]
    return (
        <div className={sticky.join(' ')}>
           <NavButtons scrolled={props.scrolled}/> 
        </div>
    )
};

export default stickyNav;