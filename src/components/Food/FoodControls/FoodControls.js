import React from 'react';
import styles from './FoodControls.module.css';
import Wrapper from '../../../hoc/Wrapper/Wrapper'
import FoodControl from './FoodControl/FoodControl';
import { Button } from 'primereact/button';

const controls = [
  { label: 'هات داگ', type: 'hotDog' },
  { label: 'پنیر', type: 'cheese' },
  { label: 'سالاد', type: 'salad' },
]
const FoodControls = (props) => (
  <Wrapper>
    <div className={styles.mainBackground}>
      <p>قیمت کل: <strong>{props.price} تومان</strong></p>
      {controls.map(ctrl => (
        <FoodControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]} />
      ))}
      <Button label={props.isAuth? 'خرید':'جهت خرید ابتدا وارد شوید '} disabled={!props.purchasable} onClick={props.ordered} />
    </div>
  </Wrapper>
)

export default FoodControls;
