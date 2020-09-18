import React from 'react';
import classes from './Title.module.css';

const title = props => (
    <div className={classes.Title}>
        <h2>{props.movie.Type} </h2>
        <h1>{props.movie.Title}<span>({props.movie.Year})</span></h1>
        <p>{props.movie.Genre}</p>
    </div>
);

export default title;
 

