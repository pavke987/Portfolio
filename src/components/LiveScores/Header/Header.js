import React from 'react';
import classes from './Header.module.css';
import HeaderNav from './HeaderNav/HeaderNav';
import DayNightBtn from './DayNightBtn/DayNIghtBtn';
import {ReactComponent as Search} from '../../../assets/liveScore/magnifying-glass.svg';
import {ReactComponent as Settings} from '../../../assets/liveScore/settings.svg';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <div className={classes.Heading}><h1 className={classes.Title}>Live-Score - live sport results </h1></div>
           
            <div className={classes.Main}>
                    <h2 className={classes.TitleSecondary}>livescore</h2>
                    <div className={classes.Menu}>
                        <DayNightBtn  getSelectedLayout={props.getSelectedLayout}
                                        selectedLayout={props.selectedLayout}/>
                        <Search className={classes.Icon}/>
                        <Settings  className={classes.Icon}/>
                    </div>
                </div>
                    <HeaderNav selectedSport={props.selectedSport}
                    getSelectedSport={props.getSelectedSport} />
                   
        </div>
    );
};

export default header;