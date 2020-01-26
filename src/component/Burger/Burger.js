import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) => {

    // taking ingredients from state and passing them in array 
    // Object = object from state with ingredients. 
    // keys gets keys of the properties, returns array of keys
    //Object.keys(props.ingredients) returns ["salad", "bacon", "cheese", "meat"]
    // igKey = salad, bacon, cheese or meat
    /* we are mapping through elements keys ["salad", "bacon", "cheese", "meat"] and we 
    add as many of them as many amounts we have in state. if there is meat: 2 we will get 
    'meat', 'meat, in the array. igKey is a name of the keys made by us*/ 
    //return [...Array()] we are creating new array. we are putting all ingredients into array
    /* .map(igKey =>{
        return [...Array(props.ingredients[igKey])] 
        it returns this:
        [Array(1), Array(1), Array(2), Array(2)]*/

    // 'i' we are adding index after the igKey. Therefeore map((_,i) 
    // _ means that the space is already populated by igKey 
    // Burger ingredients gets two elements, igKey+index(0,1,2,3 and ingredient) 
    /* .reduce takes empty array initiated after , [] and concats current element in it 
    it will be the input that user makes. It's like:
    array.reduce(accumulator, currentValue). By applying .reduce we can use .length method*/ 

    let transformedIngredients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    // if length is 0 = array is empty, show message in place of ingredients
    if (transformedIngredients.length === 0){
        transformedIngredients = <div>Please add your ingredients</div>
    }

    //type is coming from the BurgerIngredient switch statement
    //adding transformedIngredient to populate fillings.
    // bread top and bottom stay as they are always there.
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/> 
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/> 
        </div>
    );   
}

export default burger;