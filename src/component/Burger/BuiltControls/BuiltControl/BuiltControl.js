import React from 'react';
import classes from './BuiltControl.module.css';

// built controls controllers
//disabled is a default property of html element 
const builtControl = (props) => (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.removed} disabled={props.disabled} >Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
);

export default builtControl;