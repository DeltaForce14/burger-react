import React from 'react';
import classes from './Backdrop.module.css';

// passing styling to the backdrop
// we are adding backdrop to Modal
// grayed out area when you press the button 

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.closed} ></div> : null
);

export default backdrop;
