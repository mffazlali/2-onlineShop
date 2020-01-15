import React from 'react';
import styles from './CheckoutSummery.module.css'
import Food from '../../Food/Food';
import { Button } from 'primereact/button';
import Wrapper from '../../../hoc/Wrapper/Wrapper';

const CheckoutSummery = (props) => {
  return (
    <Wrapper>
      <div className={'p-grid ' + styles.CheckoutSummery}>
        <h3>سفارش ها به شرح زیر است</h3>
        <div className='p-col-12'>
          <Food ingredients={props.ingredients} />
        </div>
        <div className='p-col-12'>
          <div className='p-grid'>
            <div className='p-col-fixed'>
              <Button label='ثبت اطلاعات' onClick={props.checkoutFinal} />
            </div>
            <div className='p-col'>
              <Button label='انصراف' onClick={props.checkoutCancel} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default CheckoutSummery