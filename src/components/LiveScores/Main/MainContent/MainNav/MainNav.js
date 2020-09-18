import React from 'react';
import classes from './MainNav.module.css';
import MainNavItem from './MainNavItem/MainNavItem';

const mainNav = (props) => {
    return (
        <div className={classes.MainNav}>
            <nav className={classes.NavItems}>
            <MainNavItem  category={props.category}
             getCategory={props.getCategory}  name="All games"/>
            <MainNavItem name="LIVE"
             category={props.category}
             getCategory={props.getCategory}/>
            <MainNavItem name="My games"
             category={props.category}
             getCategory={props.getCategory}
             myMatches={props.myMatches}/>
            <MainNavItem name="Schedule"
             category={props.category}
             getCategory={props.getCategory}/>
            <MainNavItem name="Finished"
             category={props.category}
             getCategory={props.getCategory}/>
           {/*<MainNavItem name="Odds"
             category={props.category}
             getCategory={props.getCategory}/>*/ } 
            </nav>
            <div className={classes.AfterLine}></div>
        </div>
      );
};
 
export default mainNav;