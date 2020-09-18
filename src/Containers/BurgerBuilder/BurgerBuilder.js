import React, { Component } from 'react';
import axios from '../../axios-orders';
import { connect } from 'react-redux';
import Spinner from '../../UI/Spinner/Spinner';
import BurgerLayout from '../../hoc/Layout/BurgerLayout/BurgerLayout';
import Burger from '../../components/BurgerBuilder/Burger/Burger';
import BuildControls from '../../components/BurgerBuilder/Burger/BuildControls/BuildControls';
import Modal from '../../components/BurgerBuilder/UI/Modal/Modal';
import OrderSummary from '../../components/BurgerBuilder/Burger/OrderSummary/OrderSummary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/index';


class BurgerBuilder extends Component {

    componentDidMount () {
       this.props.onInitIngredients();
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(ingKey => {
            return ingredients[ingKey]
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        return  sum > 0
    };
  
    purchaseContinueHandler = () => {
        this.props.onInitPurchase()
        this.props.history.push('/burger-builder/checkout')
    };


    render () {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if(this.props.ingredients) {
                burger = <React.Fragment>
                            <Burger ingredients={this.props.ingredients}/>
                            <BuildControls ingredientRemoved={this.props.onIngredientRemoved}
                                ingredientAdded={this.props.onIngredientAdded}
                                purchaseable={this.updatePurchaseState(this.props.ingredients)}
                                ordered={this.props.onPurchasingHandler}
                                disabled={disabledInfo} 
                                price={this.props.price}/>
                        </React.Fragment>
                orderSummary = <OrderSummary 
                price={this.props.price} 
                continueOrder={this.purchaseContinueHandler} 
                cancelOrder={this.props.cancelPurchasingHandler} 
                ingredients={this.props.ingredients}/>         
        }

        return (
             <BurgerLayout show={this.props.purchasing}>
                 <Modal click={this.props.cancelPurchasingHandler} show={this.props.purchasing}>
                     {orderSummary}
                 </Modal>
                {burger}
            </BurgerLayout>            
        );
    };
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        purchasing: state.burgerBuilder.purchasing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)), 
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit()),
        onPurchasingHandler: () => dispatch(actions.purchasing()),
        cancelPurchasingHandler: () => dispatch({type:actionTypes.CANCEL_PURCHASING})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(BurgerBuilder, axios));