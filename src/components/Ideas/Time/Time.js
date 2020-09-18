import React from 'react';
import classes from './Time.module.css';
import * as anim from '../../../UI/Animations/Animations';


const time = (props) => (
    
        <anim.fadeInForm className={classes.Time} onSubmit={props.click}>
                <label>Please fill time, date and title to get started</label>
                <input type="time" name="time" required  onChange={event => props.eventHandler(event, 'time')}/>
                <input type="date" name="date" required onChange={event => props.eventHandler(event, 'date')}/>
                <input type="text"  name="title" required placeholder="Describe Your Idea in Few Words" 
                onChange={event => props.eventHandler(event, 'title')}/>
                    <button>Good To Go</button>
       </anim.fadeInForm> 
    );

export default time;