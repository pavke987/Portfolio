import React from 'react';
import * as anim from '../../../UI/Animations/Animations';
import classes from './Finalize.module.css';

const finalize = (props) => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
      options.push(i);
  };
    const selectOptions = options.map(el => <option key= {el}>{el}</option>)
    const category = [...props.categories2];
    const selectCategory = category.map((el, i) => <option key={i}>{el.name}</option>) 
    
    return (
       <anim.fadeInForm className={classes.Finalize}>
            <label>You are almost done</label>
            <label>How Would You Rate Your Idea</label>
            <select onChange={event => props.eventHandler(event, 'rate')} required defaultValue={options[0]}>
                {selectOptions}
            </select>
            <label>Choose Category of Your Idea</label>
            <select required onChange={event => props.eventHandler(event, 'category')} defaultValue={category[0]}>
                {selectCategory}
            </select> <button type="button" onClick={props.open}>Manage Category Options</button>
            <label>Your Expectations From this Idea</label>
            <textarea required onChange={event => props.eventHandler(event, 'expectations')}></textarea>
            <button onClick={props.click}>And You are Done</button>
       </anim.fadeInForm>
    );
};

export default finalize;