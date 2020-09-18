import React from 'react';
import classes from './Ingredients.module.css';
import CalibIngredients from './CalibIngredients/CalibIngredients';

const ingredints = (props) => {

        const ingredints = props.recipe.ingredients.map(el => {
            const newEl = el.replace(/ *\([^)]*\) */g, " ");
            return newEl;
        })
    return ( 
        <div className={classes.Ingredients}>
          <CalibIngredients servings={props.servings} ingredients={ingredints}/>
        </div>
     );
}
 
export default ingredints;