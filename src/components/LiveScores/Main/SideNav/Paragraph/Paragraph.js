import React from 'react';
import classes from './Paragraph.module.css';
import { ReactComponent as Star} from '../../../../../assets/liveScore/star_outline.svg';

const paragraph = (props) => {

    return ( 
        <p className={classes.Text}>
            To choose your {props.name} click on the icon <span className={classes.IconHolder}>
            {<Star className={classes.Icon} />} 
            </span>beside name of the {props.name}.  
        </p>
     );
}
 
export default paragraph;