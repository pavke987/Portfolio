import React from 'react';
import Button from '../../UI/Button/Button'
const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ingKey => {
    return <li key={ingKey}><span style={{textTransform:'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}</li>
    })
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger whit the following ingredients:</p>
            <ul style={{paddingLeft: '3rem'}}>
                {ingredientSummary}
            </ul>
    <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.cancelOrder} btnType="Danger">CANCEL</Button>
            <Button clicked={props.continueOrder} btnType="Success">CONTINUE</Button>
            
        </React.Fragment>
    );
};

export default orderSummary;