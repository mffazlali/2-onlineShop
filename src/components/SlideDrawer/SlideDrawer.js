import React from 'react';
import styles from './SlideDrawer.module.css';
import Logo from '../Logo/Logo';
import Wrapper from '../../hoc/Wrapper/Wrapper';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../UI/Backdrop/Backdrop';

const SlideDrawer = (props) => {
  let attachedstyles = [styles.SlideDrawer, styles.Close];
  if (props.open) {
    attachedstyles = [styles.SlideDrawer, styles.Open];
  }
  return (
    <Wrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedstyles.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems isAuth={props.isAuth} />
        </nav>
      </div>
    </Wrapper>
  )
}

export default SlideDrawer
