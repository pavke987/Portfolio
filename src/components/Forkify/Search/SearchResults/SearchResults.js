import React from 'react';
import classes from './SearchResults.module.css'
import GetSearchResults from './GetSearchResults/GetSearchResults';



const searchResults = (props) => {
    let results = props.recipes;
    let page = props.page;
    const resPerPage = results.length / 2
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage
    results = results.slice(start, end);

    const individualResult = results.map(el => {
        const titleArr = Array.from(el.title)
        let newTitle;
        if (titleArr.length > 17) {
            newTitle = titleArr.slice(0, 17).join('').concat('', '...');
        }   else {
            newTitle = el.title;
        } 
        return {title: newTitle, author: el.publisher, id: el.recipe_id, url: el.source_url, img: el.image_url }
    })
   return (
    <div className={classes.SearchResults}>
        <GetSearchResults  idHandler={props.idHandler} recipes={individualResult}/>
        
     
    </div>
);

    }
export default searchResults;