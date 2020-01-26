import React from 'react';
import classes from './BuiltControls.module.css';
import BuiltControl from './BuiltControl/BuiltControl';

// Label is being shown in BuiltControl, type is ingredient from BulderBuilder
const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
]

// controls for user to add and remove ingredients 
// we need to loop through controls and render control for each of them
// taking controls constant, map each element(control) into BuiltControl =>
// into {props.label}. We sent key because it is required by React
// Adding added button to BuiltControl. Passing it down the chain
// with added we are passing type to the button via ctrl.type
/* in added and removed there is an arrow function because we are passing down the type 
to the brackets. the type is passed down the the Handler in BurgerBuilder*/
// disabled - duplicate the structure of disabledInfo[0]. We are acessing the key. 
/* we are placing Price to builtControls as BuiltControl is just for the loop. Getting 
it from BurgerBuilder */
// we are adjusting roundign to 2 decimal places here 
/* disabled - we are inverting the !props.purchasaeble as they are returning true when 
the burger is purchaseable but disable needs to be set to true for it to be disabled*/
const builtControls = (props) => (
    <div className={classes.BuiltControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuiltControl 
            key={control.label} 
            label={control.label}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        onClick={props.ordered}
        disabled={!props.purchasaeble}
        >
            ORDER NOW</button>
    </div>
);  


export default builtControls;