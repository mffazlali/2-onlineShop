import React, { Component } from 'react'
import styles from './ContactData.module.css'
import { Button } from 'primereact/button'
import axios from '../../../axis-orders'
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        label: 'نام و نام خانوادگی',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'نام و نام خانوادگی'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 10
        },
        valid: false,
        touched: false
      },
      email: {
        label: 'پست الکترونیک',
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'پست الکترونیک'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      address: {
        label: 'آدرس پستی',
        elementType: 'textarea',
        elementConfig: {
          placeholder: 'آدرس پستی'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        label: 'شیوه ارسال',
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'pishtaz', label: 'ارسال با پست پیشتاز' },
            { value: 'express', label: 'ارسال با پست اکسپرس' }
          ]
        },
        value: '',
        validation: {},
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  }
  orderHandler = (event) => {
    event.preventDefault()
    // console.log(this.props.ingredients)
    this.setState({ loading: true })
    const formData = {}
    for (let formElementIdentifier in this.state.orderForm) {
      //{'address': 'خیابان الوند'}
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      order: formData

    }
    axios.post('posts', order)
      .then(response => {
        this.setState({ loading: false })
        this.props.history.push('/')
        console.log(response)
      })
      .catch(error => {
        this.setState({ loading: false })
        console.log(error)
      })
  }

  checkValidity(value, rules) {
    let isValid = true
    if (!rules) {
      return true
    }
    if (rules.required) {
      isValid = value.trim() != '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  }

  inputHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true
    updatedOrderForm[inputIdentifier] = updatedFormElement
    let formIsValid = true
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid
    }
    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid })
  }

  render() {
    const formElementArray = []
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form className={styles.formOffset} onSubmit={this.orderHandler}>
        <div className='p-grid'>
          {formElementArray.map((formElement) => {
            return (
            <div className='p-col-3' key={formElement.id}>
              <Input label={formElement.config.label} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={(event) => this.inputHandler(event, formElement.id)} invalid={!formElement.config.valid} shouldValidation={formElement.config.validation} touched={formElement.config.touched} />
            </div>
            );
          })}
          <Button label='پرداخت نهایی' onClick={(event) => this.orderHandler(event)} disabled={!this.state.formIsValid} />
        </div>
      </form>
    )

    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={styles.ContactData}>
        <h5>اطلاعات خود را برای ثبت سفارش وارد کنید:</h5>
        {form}
      </div>
    )
  }
}

export default ContactData