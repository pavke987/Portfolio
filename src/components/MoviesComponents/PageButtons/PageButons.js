import React from 'react';
import classes from './PageButtons.module.css';

const pageButtons = props => {
    let buttons = null;
    if(props.pageNum > 0) {
        if (props.page === 1) {
            buttons = <React.Fragment>
                        <button disabled onClick={props.prevPage}>PREV PAGE</button>
                        <button onClick={props.nextPage}>NEXT PAGE</button>
                    </React.Fragment>
        } else if (props.page > 1 && props.page < props.pageNum){
            buttons = <React.Fragment>
                            <button onClick={props.prevPage}>PREV PAGE</button>
                            <button onClick={props.nextPage}>NEXT PAGE</button>
                        </React.Fragment>
         } else if (props.page === props.pageNum) {
            buttons =<React.Fragment>
                        <button onClick={props.prevPage}>PREV PAGE</button>
                        <button disabled disabledstyle={{cursor: 'not-alowed'}} onClick={props.nextPage}>NEXT PAGE</button>
                    </React.Fragment>
         };
    };
  
    
    return (
        <div className={classes.PageButtons}>
        {buttons}
        </div>
    );
};

export default pageButtons;