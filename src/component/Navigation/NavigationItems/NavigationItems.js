import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

//creating navigation items to be able to reuse them
// with action you can pass boolean props without nothing
const navigationItems = (props) => (
 <ul className={classes.NavigationItems}>
     <NavigationItem link="/" active>Burger Builder</NavigationItem>
     <NavigationItem linl="/" >Checkout</NavigationItem>
 </ul>
);

export default navigationItems;