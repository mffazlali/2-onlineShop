import React, { Component } from 'react';
import { connect } from 'react-redux'
import Food from '../../components/Food/Food';
import FoodControls from '../../components/Food/FoodControls/FoodControls';
import axios from '../../axis-orders'
import Spinner from '../../components/UI/Spinner/Spinner';
import OrderSummery from '../../components/Order/OrderSummery/OrderSummery';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import { Dialog } from 'primereact/dialog';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as foodBuilderActions from '../../store/actions/index.action';


// const INGREDIENT_PRICES = {
//   hotDog: 7000,
//   cheese: 3000,
//   salad: 1000
// }

class FoodBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // ingredients: {
      //   hotDog: 0,
      //   cheese: 0,
      //   salad: 0
      // },
      // totalPrice: 0,
      // purchasable: false,
      purchasing: false,
      loading: false
    }
  }

  //method: برای استفاده در خود همین کامپوننت است
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map(igKey => {
      return ingredients[igKey]
    }).reduce((sum, el) => {
      return sum + el
    }, 0)
    return (sum > 0);
  }

  purchaseHandler = (isOpen) => {
    if (isOpen) {
      if (this.props.isAuthenticated) {
        this.setState({ purchasing: true })
      } else {
        this.props.history.push('/authentication')
        this.setState({ purchasing: false })
      }
    } else {
      this.setState({ purchasing: false })
    }
    console.log('purchasing', this.state.purchasing);
  }

  // addIngredient = (type) => {
  //   const oldCount = this.state.ingredients[type]
  //   const updatedCount = oldCount + 1
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount
  //   const priceAddtion = INGREDIENT_PRICES[type]
  //   const oldPrice = this.state.totalPrice
  //   const newPrice = oldPrice + priceAddtion
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
  //   this.updatePurchaseState(updatedIngredients)
  // }

  // removeIngredient = (type) => {
  //   const oldCount = this.state.ingredients[type]
  //   if (oldCount <= 0) {
  //     return;
  //   }
  //   const updatedCount = oldCount - 1
  //   const updatedIngredients = {
  //     ...this.state.ingredients
  //   }
  //   updatedIngredients[type] = updatedCount
  //   const priceAddtion = INGREDIENT_PRICES[type]
  //   const oldPrice = this.state.totalPrice
  //   const newPrice = oldPrice - priceAddtion
  //   this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
  //   this.updatePurchaseState(updatedIngredients)
  // }

  purchaseContinue = () => {
    alert('آیا می خواهید ادامه دهید؟')
  }

  purchaseCheckout = () => {
    // alert('پرداخت نهایی')
    // this.setState({ loading: true })
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: 'محمد فضلعلی',
    //     address: 'تهران خیابان الوند'
    //   },
    //   email: 'support@tata.ir'
    // }
    // axios.post('posts', order)
    //   .then(response => {
    //     this.setState({ loading: false, purchasing: false })
    //     console.log(response)
    //   })
    //   .catch(error => {
    //     this.setState({ loading: false, purchasing: false })
    //     console.log(error)
    //   })
    // this.props.history.push('/checkout')

    const queryParams = []
    for (let i in this.state.ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryParams.push('price=' + this.state.totalPrice)
    const queryString = queryParams.join('&')
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  componentDidMount() {
    console.log(this.props)
    axios.get('posts')
      .then(response => {
        // this.setState({ ingredients: response.data })
      })
  }

  render() {

    const disableInfo = {
      ...this.props.ings
    }
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0
    }
    let orderSummery = null
    let burger = <Spinner />
    if (this.props.ings) {
      burger = (
        <Wrapper>
          <Food ingredients={this.props.ings} />
          <FoodControls ingredientAdded={this.props.onIngredientAdded} ingredientRemoved={this.props.onIngredientRemoved} disabled={disableInfo} price={this.props.price} purchasable={this.updatePurchaseState(this.props.ings)} ordered={() => this.purchaseHandler(true)} isAuth={this.props.isAuthenticated} />
        </Wrapper>
      )
      orderSummery = <OrderSummery ingredients={this.props.ings} purchaseContinue={this.purchaseContinue} purchaseCheckout={this.purchaseCheckout} />
    }
    if (this.state.loading) {
      orderSummery = <Spinner />;
    }

    return (
      <Wrapper>
        {burger}
        <Dialog header="orderSummery" modal={true} visible={this.state.purchasing} onHide={() => this.purchaseHandler(false)}>
          {orderSummery}
        </Dialog>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.foodBuilder.ingredients,
    price: state.foodBuilder.totalPrice,
    isAuthenticated: state.auth.token !== null
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => dispatch(foodBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(foodBuilderActions.removeIngredient(ingName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(FoodBuilder, axios));