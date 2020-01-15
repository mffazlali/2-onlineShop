import React, { Component } from 'react'
import Input from '../../components/UI/Input/Input';
import { Button } from 'primereact/button';
import * as actionTypes from '../../store/actions/index.action'
import { connect } from 'react-redux'
import Spinner from '../../components/UI/Spinner/Spinner'
import { Redirect } from 'react-router-dom'

class Auth extends Component {
  state = {
    controls: {
      email: {
        label: 'پست الکترونیک',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'پست الکترونیک'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        label: 'رمز عبور ',
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'رمز عبور '
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
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
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }
    return isValid
  }

  inputHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    }

    this.setState({ controls: updatedControls })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.oAuth(this.state.controls.email.value, this.state.controls.password.value)
  }

  render() {
    const formElementArray = []
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }
    let form = (
      <div className='p-grid'>
        {
          formElementArray.map(formElement => (
            <div className='p-col-6' key={formElement.id}>
              <Input label={formElement.config.label} elementType={formElement.config.elementType} elementConfig={formElement.config.elementConfig} value={formElement.config.value} changed={(event) => this.inputHandler(event, formElement.id)} invalid={!formElement.config.valid} shouldValidation={formElement.config.validation} touched={formElement.config.touched} />
            </div>
          ))
        }
      </div>
    );

    if (this.props.loading) {
      form = <Spinner />
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <p>{this.props.error.message}</p>
      )
    }
    let authRedirect = null
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/" />
    }

    return (
      <div>
        {authRedirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button label='ورود' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    oAuth: (email, password) => dispatch(actionTypes.Auth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)