import React, { Component } from 'react'
import styles from './FoodIngredient.module.css'
import PropTypes from 'prop-types'

class FoodIngredient extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('breadLeft'):
                ingredient = <div className={styles.bread}>سمت چپ نان ساندویچ</div>
                break;
            case ('breadRight'):
                ingredient = <div className={styles.bread}>سمت راست نان ساندویچ</div>
                break;
            case ('hotDog'):
                ingredient = <div className={styles.hotDog}>هات داگ</div>
                break;
            case ('cheese'):
                ingredient = <div className={styles.cheese}>پنیر</div>
                break;
            case ('salad'):
                ingredient = <div className={styles.salad}>سالاد</div>
                break;
            default:
                ingredient = null

        }
        return ingredient
    }
}

FoodIngredient.prototypes = {
    type: PropTypes.string.isRequired
}

export default FoodIngredient