import React from 'react';
import { ReactComponent as Show} from '../../../../../../assets/liveScore/expand_more.svg';
import { ReactComponent as ShowLess} from '../../../../../../assets/liveScore/expand_less.svg';
import classes from './Buttons.module.css';

const buttons = (props) => {
    let button1 = [classes.ShowBtn];
    let button2 = [classes.ShowBtn, classes.DisplayNone];

    if (props.showCountries) {
        button2.pop();
        button1.push(classes.DisplayNone);
    }


    return ( 
        <React.Fragment>
            <button onClick={props.toggleCountries} 
                    className={button1.join(' ')}>
                        Show more <Show className={classes.IconDown}/>
                    </button>
                    <button onClick={props.toggleCountries}
                    className={button2.join(' ')}>
                        Show Less <ShowLess className={classes.IconDown}/>
                    </button>
        </React.Fragment>
     );
}
 
export default buttons;