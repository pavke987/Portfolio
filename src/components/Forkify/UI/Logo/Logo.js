import React from 'react';
import image from '../../../../assets/logo.png';
import classes from './Logo.module.css'

const logo = (props) => ( 
    <div onClick={props.click} className={classes.Logo}>
        <img onClick={props.click} src={image} alt="Logo-img" />
    </div>
 );

 
export default logo;