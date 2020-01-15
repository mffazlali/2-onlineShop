import React from 'react';
import styles from './FoodControl.module.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const FoodControl = (props) => {
  return (
    <div className={styles.FoodControl}>
      <Card>
        <div className='p-grid'>
          <div className='p-col-fixed'>
            <Button label='افزایش' icon='pi pi-plus' onClick={props.added} />
          </div>
          <div className='p-col'>
            <Button label='کاهش' icon='pi pi-minus' onClick={props.removed} disabled={props.disabled} />
          </div>
          <div className='p-col-9'>
            <label>{props.label}</label>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoodControl;
