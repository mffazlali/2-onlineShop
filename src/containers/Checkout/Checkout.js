import React, { Component } from 'react';
import CheckoutSummery from '../../components/Order/CheckoutSummery/CheckoutSummery';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import styles from './Checkout.module.css';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    }

    checkoutFinalHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack()
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        let price = 0
        for (let param of query.entries()) {
            // param=['salad', 1]
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[[param[0]]] = +param[1]
            }
        }
        this.setState({ ingredients: ingredients, totalPrice: price})
    }

    render() {
        return (
            <div className={styles.Checkout}>
                <CheckoutSummery ingredients={this.state.ingredients} checkoutFinal={this.checkoutFinalHandler} checkoutCancel={this.checkoutCancelHandler} />
                <Route path={this.props.match.path + '/contact-data'} render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...this.props} />)} />
            </div>
        )
    }
}

export default Checkout