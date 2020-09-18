import React from 'react';
import classes from './Servings.module.css';

const servings = (props) => (  
    <div className={classes.Servings}>
        <div>
            <ion-icon name="timer-outline"></ion-icon>
            <p>{props.prepareTime} MINUTES</p>
        </div>
        <div>
            <ion-icon name="person-add-outline"></ion-icon>
            <p>{props.servings} SERVINGS</p>
        </div>
        <div>
        <button onClick={props.add}>+</button>
        <button onClick={props.reduce}>-</button>
        </div>
        
      
    </div>
)
 
export default servings;