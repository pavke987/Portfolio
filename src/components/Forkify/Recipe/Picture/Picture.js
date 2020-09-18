import React from 'react';
import classes from './Picture.module.css';

const Picture = (props) => {
    return ( 
        <div className={classes.Picture} >
            <img src={props.recipe.image_url} alt={props.recipe.title}/>
                <h1>
                <span>{props.recipe.title}</span>
                </h1>
        </div>
     );
}
 
export default Picture;