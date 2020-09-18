import React from 'react';
import classes from './Ideas.module.css';

const ideas = (props) => {
    let newIdeas = null
    if(props.ideas){
        newIdeas = props.ideas.map((el, i) => {
            return <div key={el.id + i}>
                    <button className={classes.ShowButton} id={el.id} onClick={props.click}>Show</button>
                       <p><span>title:</span>{el.title}</p> 
                       <p><span>date:</span>{el.date}</p>
                       <p><span>time:</span>{el.time}</p>
                    </div>
    });
};
    
   return (
       <div className={classes.Ideas}> 
            {newIdeas}
       </div>
   );
};

export default ideas;