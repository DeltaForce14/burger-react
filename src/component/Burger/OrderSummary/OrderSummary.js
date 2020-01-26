import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

// ingredients. Looping through an object of ingrediences from state 
/* add key tp the array as React requires it. If you add it to HTML element it 
won't be visible*/

// turning into class to be able to add lifecycle hooks 

class OrderSummary extends Component  {

    /* check on DevTool when the Order Summary updates. 
    We will find out that it updates anytime we add ingreient which is a bit of waste
    as the Orde Summary is not showing at the time*/
    componentDidUpdate() {
        console.log('[Order Summary] DidUpdate'); 
    }

    render() {

    const ingredientSummary = Object.keys(this.props.ingredients).map((ingKey,i) => {
        return <li key={ingKey + i}>
            <span>{ingKey}</span>: {this.props.ingredients[ingKey]}
            </li>
        });
    
    
    
        return (
            <Aux>
                <h3>Your order</h3>
                <p>Your burger includes following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType="Success" clicked={this.props.continue}>CONTINUE</Button>
                <Button btnType="Danger" clicked={this.props.cancel}>CANCEL</Button>
            </Aux>
        );
    }

} 

export default OrderSummary;