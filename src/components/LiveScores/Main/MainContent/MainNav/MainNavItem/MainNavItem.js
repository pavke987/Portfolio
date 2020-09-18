import React from 'react';
import classes from './MainNavItem.module.css';

const mainNavItem = (props) => {
    let itemClass = [classes.MainNavItem]
    let gamesNum = null
       if(props.category === props.name) {
        itemClass = [classes.Selected];
       }   
       if (props.myMatches) {
       gamesNum = <span className={classes.GamesNum}>{props.myMatches.length}</span>
       } 
    return ( 
        <div onClick={props.getCategory} id={props.name} className={itemClass.join(' ')}>
            {props.name} {gamesNum}
        </div>
     );
}
 
export default mainNavItem;