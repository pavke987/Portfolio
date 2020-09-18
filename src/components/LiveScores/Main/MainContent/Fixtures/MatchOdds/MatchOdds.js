import React from 'react';
import classes from './MatchOdds.module.css';

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const matchOdds = (props) => {
    let odds =  <button id={props.elId} 
                    className={classes.OddsButton}
                    onClick={props.getMatchId}>
                   Odds
                </button>;
     if(props.odds) {  
         if(props.odds.result){
            if(props.odds.result[props.elId]) {
                let singleOdd = getUniqueListBy(props.odds.result[props.elId], 'match_id')
                odds = singleOdd.map(el => {
                return <span key={el.match_id} className={classes.MatchOdds}>
                    <span className={classes.Won1}>1: {el.odd_1}</span>
                    <span className={classes.Draw}>X: {el.odd_x}</span> 
                    <span className={classes.Won2}>2: {el.odd_2}</span></span>
             })
            }
             } 
             } 
           
    return ( <React.Fragment>
        {odds}
    </React.Fragment>
      
     );
}
 
export default matchOdds;