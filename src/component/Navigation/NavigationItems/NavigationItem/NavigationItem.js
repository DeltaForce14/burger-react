import React from 'react';
import classes from './NavigationItem.module.css';

// li className - if class is active set to .active 

const navigationItem = (props) => (
    <ul className={classes.NavigationItem}>
        <li><a href={props.link} 
        className={props.active ? classes.active : null}>
        {props.children}</a></li>
    </ul>
);

export default navigationItem;