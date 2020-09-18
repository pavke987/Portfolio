import React from 'react';
import classes from './CalibIngredients.module.css';
import StringMath from 'string-math'


const calibIngredients = (props) => {
        const ingredients = props.ingredients
        const unitsLong = ['tablespoons', 'tablespoon', 'teaspoons', 'teaspoon', 'ounces', 'ounce', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'tsp', 'tsp', 'oz', 'oz', 'cup', 'pound']
        const units = [...unitsShort, 'kg', 'g']
        const newIngredients = ingredients.map(el => {
            // uniform ingredients
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i])
            });


            //parse ingredients into count, unit and ingridient
            const arrIng = ingredient.split(' ')
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
            let objIng;
            
            if (unitIndex > -1) {
                //there is an unit
             
               const arrCount = arrIng.slice(0, unitIndex);
               let count;
               if (arrCount.length === 1 && arrCount !== " ") {
                   count = arrIng[0]
               } else {
                   count = StringMath(arrIng.slice(0, unitIndex).join('+'))
               }
               objIng = {
                   count,
                   unit: arrIng[unitIndex],
                   ingredient: arrIng.slice(unitIndex + 1).join(' ')
               }


            } else if(parseInt(arrIng[0], 10)) {
                //There is no unit but there is a number at position 1.
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            } else if (unitIndex === -1) {
                // there is no unit and there is no number at position 1.
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return objIng;
        });
            
            
        let stateServings = props.servings
           
        const listIng = newIngredients.map((el, i) => {
            let count = el.count;
            if (stateServings) {
               count= (count * (stateServings / 4)).toFixed(2)
            };
            
        return <li key={i}><div key={i + i}><ion-icon name="checkmark-circle-outline"></ion-icon></div>{count} {el.unit} {el.ingredient}</li>
        });
    

    return ( 
         <ul className={classes.CalibIngredients}>{listIng}</ul>
     );
};
 
export default calibIngredients;