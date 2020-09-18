import React, { Component } from 'react';
import classes from './BurgerLayout.module.css';
import Toolbar from '../../../components/BurgerBuilder/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../components/BurgerBuilder/Navigation/SideDrawer/SideDrawer';



class BurgerLayout extends Component {

    state = {
        showSideDrawer: false
    }

    toggleSideDrawerHandler = () => {
    this.setState(prevState => ({showSideDrawer: !prevState.showSideDrawer}))
}
render () {
    return (
        <div className={classes.Font}>
                       <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler}/>
               <SideDrawer open={this.state.showSideDrawer} closed={this.toggleSideDrawerHandler}/>
        <main className={classes.Layout}>
            {this.props.children}
        </main> 
        </div>
      );
}
    
}
export default BurgerLayout;