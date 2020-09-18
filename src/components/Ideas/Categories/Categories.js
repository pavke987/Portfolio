import React from 'react';
import classes from './Categories.module.css';

const categories = props => {
     const fetchCategories = [...props.categories].map((el, i) => {
                 return <li key={el.id ? el.id : i}>
                            {el.name} 
                            <button onClick={() => props.delete(el.id)}>
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </li>
        });
         
    return (
    <div className={classes.Categories}>
        <ul>
            {fetchCategories}
        </ul>
        <form onSubmit={props.add}>
            <input onChange={props.change} type="text" name="new-category" placeholder="New Category"/>
            <button>NEW</button>
        </form>   
    </div>
    );
};

export default categories;
