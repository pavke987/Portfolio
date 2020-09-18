import React, { Component } from 'react';
import classes from './TitleResultList.module.css';

class TitleResultList extends Component {
    state = {
        title: true,
        year: false,
        type: false,
        order: true
    };

    sortValuesFunction = (key, order) => {
        return  (a, b) => {
          if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
          };
  
          const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
          const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];
      
          let comparison = 0;
          if (varA > varB) {
            comparison = 1;
          } else if (varA < varB) {
            comparison = -1;
          }
          return (
            (order === false) ? (comparison * -1) : comparison
          );
        };
    };

    yearSortHandler = () => {
        this.setState(prevState => ({year: true, type: false, title: false, order: !prevState.order}))
    }
    titleSortHandler = () => {
        this.setState(prevState => ({year: false, type: false, title: true, order: !prevState.order}))
    }
    typeSortHandler = () => {
        this.setState(prevState => ({year: false, type: true, title: false, order: !prevState.order}))
    }

    render () {
        let resultList = <p style={{color: '#ffab00', fontSize: '130%', margin: '20px 20px', fontWeight: '300'}}>Sorry, we couldn't find any movie with that tittle</p>;
        if(this.props.data !== undefined) {  
            if(this.props.data.Search !== undefined) {           
                const listArray = [...this.props.data.Search]
                if (this.state.year) {
                    listArray.sort(this.sortValuesFunction('Year',this.state.order))
                } else if (this.state.title) {
                    listArray.sort(this.sortValuesFunction('Title', this.state.order))
                } else if (this.state.type) {
                    listArray.sort(this.sortValuesFunction('Type', this.state.order))
                }
                
                resultList = listArray.map((el, i) => {     
                return (              
                     <div key={el.Title + i}>
                         <li onClick={this.props.clicked}>{el.Title}<img src={el.Poster} alt={el.Title} /></li>
                         <li>Year:  {el.Year}</li>
                         <li>Type:  {el.Type}</li>                 
                     </div>                   
                      ); 
                 });
            };  
        };
        
        return ( 
       <ul className={classes.TitleResultList}>
           <div className={classes.Buttons}>
           <button onClick={this.titleSortHandler}>TITLE</button>
           <button onClick={this.yearSortHandler}>YEAR</button>
           <button onClick={this.typeSortHandler}>TYPE</button>
           </div>
                {resultList}
        </ul>
        );
    };
};

export default TitleResultList;