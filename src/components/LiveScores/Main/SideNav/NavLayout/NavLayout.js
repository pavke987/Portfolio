import React from 'react';
import classes from './NavLayout.module.css';
const navLayout = (props) => (
        <div className={classes.NavLayout}>
            {props.children}
        </div>
    );

export default navLayout;