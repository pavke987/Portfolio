import React from 'react';
import * as anim from '../../../UI/Animations/Animations';
import classes from './TextArea.module.css';

const textArea = (props) => (
    
        <anim.fadeInForm className={classes.TextArea} onSubmit={props.click}>
            <label>Happy Idea Creating</label>
            <textarea onChange={event => props.eventHandler(event, 'idea')}></textarea>
            <button onSubmit={props.click}>One More Step</button>
        </anim.fadeInForm>
    );


export default textArea;