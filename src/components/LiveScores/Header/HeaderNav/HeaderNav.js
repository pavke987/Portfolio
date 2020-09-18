import React from 'react';
import classes from './HeaderNav.module.css';
import {ReactComponent as Football} from '../../../../assets/liveScore/sports_soccer.svg';
import {ReactComponent as Basketball} from '../../../../assets/liveScore/sports_basketball.svg';
import {ReactComponent as Tenis} from '../../../../assets/liveScore/sports_baseball.svg';


const headerNav = (props) => {
    let soccerClass = [classes.Item];
    let basketballClass = [classes.Item];
    let cricketClass = [classes.Item];
    let soccerIcon = [classes.Icon]
    let basketballIcon = [classes.Icon]
    let cricketIcon = [classes.Icon]
    if (props.selectedSport === 'football') {
         soccerClass.push(classes.Selected);
         soccerIcon.push(classes.SelectedIcon);
         document.documentElement.style.setProperty('--color-sport-primary', '#1b7700');
         document.documentElement.style.setProperty('--color-sport-secondary-body', '#085f00');
         document.documentElement.style.setProperty('--color-sport-tertiary', '#053600');

    } else if(props.selectedSport === 'basketball') {
        basketballClass.push(classes.Selected);
        basketballIcon.push(classes.SelectedIcon);
        document.documentElement.style.setProperty('--color-sport-primary', '#91311d');
        document.documentElement.style.setProperty('--color-sport-secondary-body', '#ab4630');
        document.documentElement.style.setProperty('--color-sport-tertiary', '#cd634c');
    } else if (props.selectedSport === 'cricket') {
        cricketClass.push(classes.Selected);
        cricketIcon.push(classes.SelectedIcon);
        document.documentElement.style.setProperty('--color-sport-primary', '#006290');
        document.documentElement.style.setProperty('--color-sport-secondary-body', '#00406d');
        document.documentElement.style.setProperty('--color-sport-tertiary', '#002844');
    }    
    return (
        <nav className={classes.HeaderNav}>
            <div className={classes.Main}>
                <ul className={classes.Sports}>
                    <button  className={soccerClass.join(' ')}
                     id="football"
                     onClick={props.getSelectedSport}>
                         <Football className={soccerIcon.join(' ')}/>
                          Soccer
                    </button>
                    <button className={basketballClass.join(' ')}
                     id="basketball"
                     onClick={props.getSelectedSport}> 
                        <Basketball className={basketballIcon.join(' ')}/>
                        Basketball
                      </button>
                    <button className={cricketClass.join(' ')}
                     id="cricket"
                     onClick={props.getSelectedSport}>
                          <Tenis className={cricketIcon.join(' ')}/>
                          Cricket
                    </button>
                </ul>
                <button className={classes.Item}>More</button>   
            </div>
        </nav>
    );
};

export default headerNav;