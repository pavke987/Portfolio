import React from 'react';
import Backdrop from '../../../../UI/Backdrop/Backdrop'
import classes from './Modal.module.css';

const modal = props => (
    <React.Fragment>
        <Backdrop show={props.show} click={props.click}/>
        <div className={classes.Modal}
            style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>

);  

export default modal;