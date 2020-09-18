import React from 'react';
import { Route } from 'react-router-dom';
import classes from './Ideas.module.css';


import Navigation from '../../components/Ideas/Navigation/Navigation';
import ViewIdeas from './ViewIdeas/ViewIdeas';
import NewIdea from './NewIdea/NewIdea';
import SingleIdea from '../../components/Ideas/SingleIdea/SingleIdea';




const ideas = () => {
  return (
    <div className={classes.Ideas}>
    <Navigation />
    <Route path="/ideas/create-new-idea" component={NewIdea} />
    <Route path="/ideas" exact component={ViewIdeas} />
    <Route path="/ideas/view-idea" component={SingleIdea} />
    </div>
  );
}

export default ideas;