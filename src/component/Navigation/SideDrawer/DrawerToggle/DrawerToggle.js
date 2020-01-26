import React from 'react';
import classes from './DrawerToggle.module.css';

// getting clicked from Toolbar.
// Menu for mobile devie with three lines.
const drawerToggle = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>  
    <div></div>  
    </div>
);



export default drawerToggle;