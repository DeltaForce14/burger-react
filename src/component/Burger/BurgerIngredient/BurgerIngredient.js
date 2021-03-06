import React, { Component } from 'react';
import classes from './BurgerIngredient.module.css';


class BurgerIngredient extends Component {

    render () {
    let ingredient = null;


    //bread-top has seeds on it therefore the nested divs.
    //default is set for ingredient to be empty 
    // type is the 'bread-top' etc. It will be passed to Burger 
    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = 
            <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>   
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div> 
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>  
            break;
        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>           
            break;
        default:
            ingredient = null;    
    }
    return ingredient;

    }}
    


export default BurgerIngredient