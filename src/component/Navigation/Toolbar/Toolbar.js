import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Burger/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


// wrap Logo into div as it should have different atributes on mobile and on desktop
// getting drawerToggleClicked from Toolbar
const toolbar = (props) => (


  <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className={classes.Logo}>
          <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
          <NavigationItems />
      </nav>
  </header>

);
 
export default toolbar;

