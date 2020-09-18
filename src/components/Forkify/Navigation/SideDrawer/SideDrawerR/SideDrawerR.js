import React from 'react';
import classes from './SideDrawerR.module.css'


const sideDrawerR = (props) => ( 
    <div className={classes.SideDrawerR}>
        {props.children}
    </div>
 );

 
export default sideDrawerR;