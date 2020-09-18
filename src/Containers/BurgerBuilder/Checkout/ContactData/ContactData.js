import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../../../axios-orders';
import withErrorHandler from '../../../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../../../UI/Spinner/Spinner';
import Button from '../../../../components/BurgerBuilder/UI/Button/Button';
import Input from '../../../../components/BurgerBuilder/UI/Input/Input'
import classes from './ContactData.module.css';
import * as actionTypes from '../../../../store/actions/actionTypes';
import * as actions from '../../../../store/actions/index';

class ContactData extends Component {

    state = {
       orderForm: {
            name: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    requred : true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    requred : true
                },
                valid: false,
                touched: false
            },
            ziPCode: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    requred : true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country: {
                elementType : 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    requred : true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType : 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-mail'
                },
                value: '',
                validation: {
                    requred : true
                },
                valid: false,
                touched: false
            },
            deliveryMethod: {
                elementType : 'select',
                elementConfig: {
                   options: [
                       {value: 'fastest', displayValue: 'Fastest'},
                       {value: 'cheapest', displayValue: 'Cheapest'}
                ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
       },
        isFormValid: false
    };

    orderHandler = (event) => {
        event.preventDefault();      
        const formData = {}
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderdata: formData
        }
       this.props.onOrderBurger(order);
       this.props.cancelPurchasingHandler();
    };

    ckeckValidity = (value, rules) => {
        let isValid = true;

        if (rules.requred) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
       const updatedOrderForm = {
           ...this.state.orderForm
        };
       const updatedFormElement = { 
           ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.ckeckValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
        }
       
        this.setState({orderForm: updatedOrderForm, isFormValid: formIsValid})

    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
               id: key,
               config: this.state.orderForm[key]
            })
        }
        let form = (
        <form onSubmit={this.orderHandler}>
            {formElementsArray.map(formElement => (
                <Input elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                key={formElement.id}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}/>
            ))}
            <Button btnType="Success" disabled={!this.state.isFormValid}> ORDER</Button>
        </form>
        );
        if (this.props.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger : (orderData) => dispatch(actions.purchaseBurger(orderData)),
        cancelPurchasingHandler: () => dispatch({type:actionTypes.CANCEL_PURCHASING})
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withErrorHandler(ContactData, axios));