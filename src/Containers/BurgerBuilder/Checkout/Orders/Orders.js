import React, { Component } from 'react';
import { connect } from 'react-redux';
import withErrorHandler from '../../../../hoc/withErrorHandler/withErrorHandler'; 
import Order from '../../../../components/BurgerBuilder/Order/Order';
import BurgerLayout from '../../../../hoc/Layout/BurgerLayout/BurgerLayout';
import axios from '../../../../axios-orders';
import * as actions from '../../../../store/actions/index';
import Spinner from '../../../../UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount () {
        this.props.onFetchOrders()
    }
    render () {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders =    
            <div>
                {this.props.orders.map(order => (
                    <Order key={order.id} 
                    ingredients={order.ingredients}
                    price={order.price}/>
                ))}
            </div>
        }
        return (
        <BurgerLayout>
             {orders}
        </BurgerLayout>
        
        );
    };
};
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders:() => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (withErrorHandler(Orders, axios));