import React from 'react';
import Logo from '../../Burger/Logo/Logo'; 
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

// Menu for mobile
// We will use it in Layout 
// wrap Logo into div as it should have different atributes on mobile and on desktop
// adjusting height of logo in SideDrawer.css 
// to add Backdrop simply import it and as show as it will show if show is true 
// Backdrop - clicked - passing props from Layout 
const sideDrawer = (props) => { 

    // switch classes for SideDrawer Open and Close conditionally 
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return( 
        <Aux>
            <Backdrop show={props.open} closed={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;  