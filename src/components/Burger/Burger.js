import React from 'react';
import classes from './burger.module.css'
import BurgerIngredient from './Burgeringredient/Burgeringredient'
const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients).map(ingredient => {
        return [...Array(props.ingredients[ingredient])].map((_, i) => {
            return <BurgerIngredient key={ingredient + i} type={ingredient} />
        });
    }).reduce((pre, cur) => {
        return pre.concat(cur)
    }, [])
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}
export default burger;