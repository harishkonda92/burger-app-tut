import React from 'react';
import Aux from '../../../hoc/aux';
import Buttons from '../../UI/buttons/buttons'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(ingrKey => {
            return (
                <li key={ingrKey}>
                    <span style={{ textTransform: 'capitalize' }}>{ingrKey}</span>: {props.ingredients[ingrKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>
                Your Order
            </h3>
            <p>Details of the burger</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price:{props.price.toFixed(2)}</strong></p>
            <p> Continue to checkout?</p>
            <Buttons btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Buttons>
            <Buttons btnType="Success" clicked={props.purchaseConinued}>CONTINUE</Buttons>
        </Aux>
    );

}
export default orderSummary;