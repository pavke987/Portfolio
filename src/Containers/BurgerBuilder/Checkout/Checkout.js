import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../../components/BurgerBuilder/Order/CheckoutSummary/CheckoutSummary';
import BurgerLayout from '../../../hoc/Layout/BurgerLayout/BurgerLayout';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {

  
    checkoutCancelledHandler = () => {
        this.props.history.replace('/burger-builder')
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/burger-builder/checkout/contact-data');
    }
    render () {
        let summary = <Redirect to="/burger-builder" />
        if (this.props.ingredients) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/burger-builder" /> : null;
            summary = <BurgerLayout>
                            {purchasedRedirect}
                            <CheckoutSummary checkoutCancelled={this.checkoutCancelledHandler}
                            checkoutContinued={this.checkoutContinuedHandler} 
                            ingredients={this.props.ingredients}/>
                            <Route path={this.props.match.path + '/contact-data'} 
                            component={ContactData} />
                        </BurgerLayout>
        }
        return summary;
    };
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
};


export default connect(mapStateToProps)(Checkout);