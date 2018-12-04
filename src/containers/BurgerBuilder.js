import React, { Component } from 'react';
import Aux from '../hoc/aux';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls/BuildControls'
import Modal from '../components/UI/modal/modal'
import OrderSummary from '../components/Burger/OrderSummary/ordersummary';
const INGREDIENT_PRICES = {
    salad: 0.3,
    bacon: 0.7,
    cheese: 0.5,
    meat: 1.3
}
class BurgerBuilder extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        console.log(oldCount)
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceTobeReduced = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceTobeReduced;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState(ingredients) {
        // const ingredients = {
        //     ...this.state.ingredients
        // };

        const sum = Object.keys(ingredients)
            .map(key => ingredients[key])
            .reduce((cum, ele) => {
                return ele + cum;
            }, 0);
        this.setState({ purchasable: sum > 0 })

    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinue = () => {
        alert('continue');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseConinued={this.purchaseContinue}
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredients}
                    ingredientsRemoved={this.removeIngredients}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;