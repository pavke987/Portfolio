import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.module.css'
const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/burger-builder" exact >Burger Builder</NavigationItem>
        <NavigationItem link="/burger-builder/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;