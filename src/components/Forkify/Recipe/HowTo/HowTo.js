import React from 'react';
import classes from './HowTo.module.css';

const howTo = (props) => (
    <div className={classes.HowTo}>


        <h2>HOW TO COOK IT</h2>
<p>This recipe was carefully designed and tested by <strong>{props.recipe.publisher}</strong>. Please check out directions at their website.</p>
        <a href={props.recipe.source_url}><button>DIRECTIONS</button></a>
    </div>
  );

 
export default howTo;