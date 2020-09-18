import React from 'react';
import classes from './SideDrawer.module.css'


const sideDrawer = (props) => {
    
    return ( 
    <div className={classes.SideDrawer}>
        {props.children}
    </div>
 );
    }
 
export default sideDrawer;