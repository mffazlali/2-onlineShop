import React, { Component } from 'react';
import styles from './OrderSummery.module.css';
import { Button } from 'primereact/button';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

class OrderSummery extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    console.log('[Order Summery] will updated')
  }

  render() {
    const ingredientsSummery = Object.keys(this.props.ingredients).map(igKey => {
      return <li key={igKey}><span>{igKey}</span>: {this.props.ingredients[igKey]}</li>
    })
    return (
      <Wrapper>
        <div className={styles.orderMain}>
          <h4>اقلام سفارشی شما</h4>
          <p>ساندویچی که شما سفارش داده اید شامل موارد زیر است</p>
          <ul>
            {ingredientsSummery}
          </ul>
          <hr />
          <p>جهت ادامه یکی از دکمه های زیر را انتخاب کنید:</p>
          <Button label='پرداخت نهایی' onClick={this.props.purchaseCheckout} />
          <Button label='ادامه خرید' onClick={this.props.purchaseContinue} />

        </div>
      </Wrapper>
    )
  }
}

export default OrderSummery