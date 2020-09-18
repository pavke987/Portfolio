import React from 'react';
import classes from './InputForm.module.css';


const inputForm = props => (
    <form className={classes.InputForm} onSubmit={props.submit}>
        <input onClick={props.clear} onChange={props.changeTitle} type="text"  placeholder="Tittle" />
        <input onClick={props.clear} type="number" onChange={props.changeYear} placeholder="Year of release"/>       
        <button onClick={props.submit}>SEARCH</button>
    </form>
);

export default inputForm;