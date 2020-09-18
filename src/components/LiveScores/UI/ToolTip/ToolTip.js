import React from 'react';
import classes from './ToolTip.module.css';
const toolTip = (props) =>( 
        <div className={classes.ToolTip}>
            {props.children}
        </div>
     );
export default toolTip;