import React from 'react';
import classes from './Star.module.css';
import ToolTip from '../ToolTip/ToolTip';



const star = (props) => {
    let text = null;
    let star = null;
    let iconStyle = [classes.LeagueIcon, classes.Border];
    let goldIcon = [classes.LeagueIcon, classes.BorderYelow];
        if(props.leagueKeys.includes(props.elId)) {
            text = <p>Click on STAR to REMOVE this league from My Leagues</p>
            star = <span id={props.elId}
                        className={goldIcon.join(' ')}
                        onClick={props.removeLeagueKey}>
                    </span>
                    
           // tip = <div className={classes.Tip}>Remove this league from my leagues</div>        
        } else {
            text = <p>Click on STAR to ADD this league to My Leagues</p>
            star = <span id={props.elId}
                       className={iconStyle.join(' ')}
                        onClick={props.getLeagueKey}>
                    </span>        
             
        }
    
    return ( <div className={classes.IconContainer}>
                {star}
                <div className={classes.ToolTipContainer}>
                    <ToolTip>
                        {text}
                    </ToolTip>
                </div>
            </div>
    );  
};
 
export default star;