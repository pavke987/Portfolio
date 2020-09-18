import React from 'react';
import classes from './DayNightBtn.module.css';
import {ReactComponent as Sun} from '../../../../assets/liveScore/brightness-down.svg';
import {ReactComponent as Moon} from '../../../../assets/liveScore/moon-fill.svg';

const dayNightBtn = (props) => {
    let iconSunHolder = [classes.IconHolder];
    let iconMoonHolder = [classes.IconHolder];
    let iconSun = [classes.IconSun];
    let iconMoon = [classes.IconMoon];

    if(props.selectedLayout === 'day') {
        iconSunHolder.push(classes.Selected);
        iconSun.push(classes.SelectedIcon);
        document.documentElement.style.setProperty('--color-white', '#fff');
        document.documentElement.style.setProperty('--color-text-1', '#656565');
        document.documentElement.style.setProperty('--color-text-2', '#686868');
        document.documentElement.style.setProperty('--color-background-5', '#e9e9e9');
        document.documentElement.style.setProperty('--color-background-7', ' #ffe1af');
       
    } else if (props.selectedLayout === 'night') {
        iconMoonHolder.push(classes.Selected);
        iconMoon.push(classes.SelectedIcon)
        document.documentElement.style.setProperty('--color-white', '#2f3640');
        document.documentElement.style.setProperty('--color-text-1', '#fff');
        document.documentElement.style.setProperty('--color-background-5', '#8f8f8f');
        document.documentElement.style.setProperty('--color-text-2', '#2d2d2d'); 
        document.documentElement.style.setProperty('--color-background-7', ' #e1e1e1')    
    }
    return ( 
        <div className={classes.DayNightBtn}>
            <i className={iconSunHolder.join(' ')} id="day" onClick={props.getSelectedLayout}><Sun className={iconSun.join(' ')}/></i>
            <i className={iconMoonHolder.join(' ')} id="night" onClick={props.getSelectedLayout}><Moon className={iconMoon.join(' ')}/></i>
        </div>
    );
};

export default dayNightBtn;