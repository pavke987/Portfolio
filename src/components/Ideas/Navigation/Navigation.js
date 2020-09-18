import React from 'react';
import { NavLink } from 'react-router-dom';
import * as anim from '../../../UI/Animations/Animations';
import classes from './Navigation.module.css';

const navigation = () => (
    <nav className={classes.Navigation}>
        <ul>
            <anim.flipLi>Ideas</anim.flipLi>
            <li><NavLink activeStyle={{color: '#fa7d09', borderBottom: '2px solid #fa7d09'}} to="ideas/create-new-idea">
                Create New Idea
                </NavLink></li>
            <li><NavLink to="/ideas" exact activeStyle={{color: '#fa7d09', borderBottom: '2px solid #fa7d09'}}>Your Ideas</NavLink></li>
        </ul>
    </nav>
);

export default navigation;