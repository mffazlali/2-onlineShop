import React from 'react'
import FoodIngredient from './FoodIngredient/FoodIngredient'
import styles from './Food.module.css'
import { withRouter } from 'react-router-dom'

const Food = (props) => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <FoodIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformIngredients.length === 0) {
        transformIngredients = <p className={styles.nullIngredients}>لطفا مواد غذایی خود را انتخاب کنید</p>
    }
    return (
        <div>
            <FoodIngredient type="breadLeft" />
            {transformIngredients}
            <FoodIngredient type="breadRight" />
        </div>
    )
}

export default (Food)