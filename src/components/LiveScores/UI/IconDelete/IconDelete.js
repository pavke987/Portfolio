import React from 'react';
import classes from './IconDelete.module.css';
import ToolTip from '../ToolTip/ToolTip';
import {ReactComponent as Delete} from '../../../../assets/liveScore/highlight_remove.svg';

const iconDelete = (props) => {

    return ( 
        <div className={classes.IconHolder}>
            <Delete onClick={props.removeLeagueKey}
            id={props.elId}
            className={classes.IconDelete}/>
            <div className={classes.ToolTipContainer}>
                <ToolTip>
                    <p>Click to REMOVE this league from My Leagues</p>
                </ToolTip>
            </div>
        </div>
     );
}     
export default iconDelete;