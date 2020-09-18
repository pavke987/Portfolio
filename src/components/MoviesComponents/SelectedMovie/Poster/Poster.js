import React from 'react';
import classes from './Poster.module.css';

const poster = props => (
        <div className={classes.Poster}>
            <img src={props.movie.Poster} alt={props.movie.Title}/>
                <div className={classes.Text}>
                    <p><span>Plot</span>: {props.movie.Plot}</p>
                    <p><span>Actors</span>: {props.movie.Actors}</p>
                    <p><span>Director</span>: {props.movie.Director}</p>
                    <p><span>Runtime</span>: {props.movie.Runtime}</p>
                </div> 
        </div>
    );


export default poster;
