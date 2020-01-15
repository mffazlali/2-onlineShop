import React from 'react'
import styles from './Input.module.css'
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

const Input = (props) => {
  console.log('pro',props);
  let inputElement = null
  let inputstyles = [];
  if (props.invalid && props.shouldValidation && props.touched) {
    inputstyles.push(styles.Invalid)
  }
  console.log(props, inputstyles)
  switch (props.elementType) {
    case ('input'):
      inputElement = <InputText value={props.value} onChange={props.changed} {...props.elementConfig}/>
      break
    case ('textarea'):
      inputElement = <InputTextarea cols={30} rows={5} value={props.value} onChange={props.changed} {...props.elementConfig}/>
      break
    case ('select'):
      inputElement = (
        <Dropdown options={props.elementConfig.options} value={props.value} onChange={props.changed}/>
      )
      break
    default:
      inputElement = <InputText value={props.value} onChange={props.changed} {...props.elementConfig}/>
  }

  return (
    <div className={'p-grid ' + inputstyles.join(' ')}>
      <div className='p-col-12'>{props.label}</div>
      <div className='p-col-12'>{inputElement}</div>
    </div>
  )
}

export default Input