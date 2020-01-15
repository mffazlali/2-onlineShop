import * as foodBuilderActionType from './foodBuilder.actionType';

export const addIngredient = (name) => {
    return {
        type: foodBuilderActionType.ADD_INGREDIENT,
        ingredientName: name
    };
}

export const removeIngredient = (name) => {
    return {
        type: foodBuilderActionType.REMOVE_INGREDIENT,
        ingredientName: name
    };
}