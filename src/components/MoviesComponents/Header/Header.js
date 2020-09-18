import React from 'react';
import InputForm from '../InputForm/InputForm';
import classes from './Header.module.css';
const header = props =>  (
                  <header className={classes.Header}>
            <ion-icon name="videocam-outline"></ion-icon>
            <p>Over milion movies and series available</p>
            <InputForm submit={props.submit} 
                changeTitle={props.changeTitle}
                changeYear={props.changeYear}
                changeType={props.changetype}
                clear={props.clear}/>
        </header>
 
    );

export default header;