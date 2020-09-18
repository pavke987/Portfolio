import React from 'react';
import classes from './SearchInput.module.css';

const searchInput = (props) => (
    <div className={classes.Search}>
        <form onSubmit={props.subm}>
        <input type="text" placeholder="Search..." onChange={props.changed} onClick={props.clear}  value={props.def}/>
            <button><ion-icon name="search"></ion-icon>SEARCH</button>
        </form>
                
        
        
    </div>
  );

 
export default searchInput;