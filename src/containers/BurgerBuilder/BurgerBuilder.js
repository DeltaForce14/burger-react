import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../component/Burger/Burger';
import BuiltControls from '../../component/Burger/BuiltControls/Builtcontrols';
import Modal from '../../component/UI/Modal/Modal';
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    // set how many ingredients we will use 
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchased: false
    }

    purchaseHandler = () => {
        this.setState({purchased: true});
    }

    // when backdrop clicked close the Modal
    purchaseCancelHandler = () => {
        this.setState({purchased: false});
    }
 
    purchaseContinueHandler = () => {
        alert('Continue!')
    }    

    // const sum - return the array of keys of ingredients
    // set state to true is sum > 0
    /* we are effecting directly state. add it to render to push to BuiltControls
    we need to add updatePurchaseState to addIngredientHandler and removeIngredientHandler
    as updatePurchaseState needs to be evaluated after each click of a button*/
    // we are using updatedIngredients from add and remove handler as they are the most up to date 
    updatePurchaseState (ingredients) {
  
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
         }).reduce((sum, el) => {
            return sum + el
         }, 0)

        this.setState({purchaseable: sum > 0});
    }
    

    // add ingredients   
    //it gets type from ingredients, type is each line
    //First we need to know an old count
    //updatedIngredients creating copy of the state  
    /*const priceAddition taking global const INGREDIENT_PRICES and it's type that is the same 
    as ingredients */
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };

        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

        this.updatePurchaseState(updatedIngredients);
    }

    // remove ingredients 
    /* if statement tells that of oldCount = current count is 0 just return, which 
    means do nothing*/
    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }

        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;

        const priceSubtraction = INGREDIENT_PRICES[type];
        const totalPrice = this.state.totalPrice;
        const updatedPrice = totalPrice - priceSubtraction;

        this.setState({totalPrice: updatedPrice, ingredients: updatedIngredients})

        this.updatePurchaseState(updatedIngredients);
    }

    render() {


        // disable Less button when the type is 0. 
        // we are copying the object just to distrubute properties of an object
        // for statement loops through keys which are the amounts of ingredients 
        // we are assigning true if it should be disabled
        // disabledInfo[0] = disabledInfo <= 0 we are checking if disabledInfo <= 0 is true or false
        const disabledInfo = {
            ...this.state.ingredients  
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }   
        //we are passing ingredients to OrderSummary as they are used in Order Summaty
        return(
            <Aux>
                    <Modal show={this.state.purchased} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinueHandler}/>
                        
                    </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuiltControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    purchasaeble={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price = {this.state.totalPrice}
                    />
            </Aux>
        );
    }
}


export default BurgerBuilder;