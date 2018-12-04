import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'
const buildControls = (props) => {
    const controls = [
        { label: 'Salad', type: 'salad' },
        { label: 'Bacon', type: 'bacon' },
        { label: 'Cheese', type: 'cheese' },
        { label: 'Meat', type: 'meat' }
    ];
    console.log(props.purchasable);
    return (
        <div className={classes.BuildControls}>
            <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(contrl => {
                    return <BuildControl
                        key={contrl.label} label={contrl.label}
                        added={() => props.ingredientAdded(contrl.type)}
                        removed={() => props.ingredientsRemoved(contrl.type)}
                        disabled={props.disabled[contrl.type]}
                    />
                })
            }
            <button
                disabled={!props.purchasable}
                className={classes.OrderButton}
                onClick={props.ordered}
            >Order Now</button>
        </div>
    );
}

export default buildControls;