import React from 'react';
import classes from './SelectedMovie.module.css'
import Title from './Title/Title';
import Poster from './Poster/Poster';
import Ratings from './Ratings/Ratings';

const selectedMovie = props => {
        let movie = null;
        if(props.movie !== undefined) {
             movie = <React.Fragment>
                           <Title movie={props.movie}/>    
                            <Poster movie={props.movie}/>
                            <Ratings movie={props.movie}/>
                        </React.Fragment>
        }
    return (
        <div className={classes.SelectedMovie}>
            {movie}
        </div>
    );

};

export default selectedMovie;