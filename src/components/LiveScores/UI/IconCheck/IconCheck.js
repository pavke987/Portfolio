import React from 'react';
import classes from './IconCheck.module.css';
import ToolTip from '../ToolTip/ToolTip';
import {ReactComponent as Check} from '../../../../assets/liveScore/crop_square.svg';
import {ReactComponent as Checked} from '../../../../assets/liveScore/check_box.svg';

const iconCheck = (props) => {
    let checkIcon = null;
    let text = null;
    if (props.myMatchesKeys.includes(props.elId)) {
        text = <p>Click to REMOVE this game from My Games</p>
        checkIcon = <Checked onClick={props.removeMyMatch}
                    id={props.elId}
                    className={classes.IconChecked}/>
    } else {
        text = <p>Click to ADD this game to My Games</p>
        checkIcon = <Check onClick={props.getMyMatch}
                    id={props.elId}
                    className={classes.IconCheck}/>
    }

    return ( 
        <div className={classes.IconHolder}>
            {checkIcon}
            <div className={classes.ToolTipContainer}>
                <ToolTip>
                   {text}
                </ToolTip>
            </div>
        </div>
     );
}     
export default iconCheck;