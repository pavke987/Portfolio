import React from 'react';
import imdb from '../../../../assets/imdb.png';
import classes from './Ratings.module.css';

const ratings = props => (
    <div className={classes.Ratings}>
            <div>
                 <img src={imdb} alt="imdb" />
                <p>{props.movie.imdbRating}</p>
           </div>
           <div>
                <h3>Awards</h3>
                <p>{props.movie.Awards}</p> 
           </div>
            <div>
                <h3>Production</h3>
                <p>{props.movie.Production}</p>
            </div>
    </div>
);

export default ratings;