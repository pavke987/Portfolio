import React from 'react';
import classes from './ForkifyLayout.module.css';

const layout = props => (
    <div className={classes.Layout}>
        {props.children}
    </div>
  );

 
export default layout;