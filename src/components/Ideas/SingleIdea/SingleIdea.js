import React from 'react';
import classes from './SingleIdea.module.css'

const singleIdea = (props) => {
        let single = <React.Fragment>
                    <div className={classes.Parametars}>
                            <p><span>Date:</span> {props.ideas.date}</p>
                            <p><span>Time:</span> {props.ideas.time}</p>
                            <p><span>Expectations:</span> {props.ideas.expectations}</p>
                            <p><span>Rating:</span> {props.ideas.rate}</p>
                            <p><span>Category:</span> {props.ideas.category}</p>
                            <div className={classes.Buttons}>
                            <button onClick={props.click}>back</button>
                            <button onClick={props.edit}>edit</button>
                            <button onClick={() => props.delete(props.ideas.id)}>delete</button>
                        </div>
                    </div>
                <div className={classes.Idea}>
                        <h2><span>{props.ideas.title}</span></h2>
                        <p>{props.ideas.idea}</p> 
                </div>
        </React.Fragment>

        if(props.editIdea) {
            const options = [];
            for (let i = 1; i <= 10; i++) {
                options.push(i);
            };
            const selectOptions = options.map(el => <option key= {el}>{el}</option>)
            const category = ['Personal', 'Business','Work','Education', 'Travel', 'Fun'];
            const selectCategory = category.map((el, i) => <option key={i}>{el}</option>) 

            single = <React.Fragment>
            <form className={classes.Parametars} onSubmit={() => props.submit(props.ideas.id, props.ideas)}>
                    <label>Date:</label> 
                    <input type="Date" onChange={(event) => props.change(event, 'date') } value={props.ideas.date}/>
                    <label>Time:</label>
                    <input type="time" onChange={(event) => props.change(event, 'time') } value={props.ideas.time} />
                    <label>Expectations:</label> 
                    <input type="text" onChange={(event) => props.change(event, 'expectations') } value={props.ideas.expectations} />
                    <label>Rating:</label> 
                    <select onChange={(event) => props.change(event, 'rate') } value={props.ideas.rate}>{selectOptions}</select>
                    <label>Category:</label> 
                    <select  onChange={(event) => props.change(event, 'category')} value={props.ideas.category}>{selectCategory}</select>
                <div className={classes.Buttons}>
                    <button>Submit Edited</button>
                    <button type="button" onClick={props.click}>Back</button>
                </div>
                </form>
           <form className={classes.Idea} onSubmit={() => props.submit(props.ideas.id, props.ideas)}>
                <h2><span><input onChange={event => props.change(event, 'title')} value={props.ideas.title} /></span></h2>
                <textarea onChange={event => props.change(event, 'idea')}value={props.ideas.idea}></textarea>      
        </form>
</React.Fragment>
               
            
        }
        
    return (
        <div className={classes.SingleIdea}>
         {single}
        </div>
    );
};
export default singleIdea;