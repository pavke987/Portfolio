import React, { Component } from 'react';
import classes from './SearchResult.module.css';
import Picture from '../../Recipe/Picture/Picture';
import Servings from '../../Recipe/Servings/Servings';
import Ingredients from '../../Recipe/Ingredients/Ingredients';
import HowTo from '../../Recipe/HowTo/HowTo';
import image from '../../../../assets/image.png';



class SearchResult extends Component {

    
    render () {
        if(this.props.recipe) {
            return (
                <div className = {classes.SearchResult}>
                    <Picture recipe={this.props.recipe}/>
                    <Servings prepareTime={this.props.time} servings={this.props.servings} add={this.props.add} reduce={this.props.reduce}/>
                    <Ingredients servings={this.props.servings} recipe={this.props.recipe}/>
                    <HowTo recipe={this.props.recipe}/>
                                      
                </div>
                )  
        } else {
            return <div className={classes.SearchResult}>
                <img src={image} alt="load-img"/>
            </div>;
        }
    
    }
} 

export default SearchResult;