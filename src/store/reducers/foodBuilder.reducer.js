import * as foodBuilderActionType from '../actions/foodBuilder.actionType';
import { foodBuilderState } from '../states/foodBuilder.state';
import { updateObject } from '../utilty';

const INGREDIENT_PRICES = {
    hotDog: 7000,
    cheese: 3000,
    salad: 1000
};

const addIngredient = (state, action) => {
    const updateIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
    }
    const updatedIngredient = updateObject(state.ingredients, updateIngredient);
    const updatedState = {
        ingredients: updatedIngredient,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updateIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
    }
    const updatedIngredient = updateObject(state.ingredients, updateIngredient);
    const updatedState = {
        ingredients: updatedIngredient,
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
    };
    return updateObject(state, updatedState);
}

const foodBuilderReducer = (state = foodBuilderState, action) => {
    switch (action.type) {
        case foodBuilderActionType.ADD_INGREDIENT:
            return addIngredient(state,action)
        case foodBuilderActionType.REMOVE_INGREDIENT:
            return removeIngredient(state,action)
        default:
            return state
    }
}

export default foodBuilderReducer