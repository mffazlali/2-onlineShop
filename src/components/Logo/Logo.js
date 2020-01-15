import React from 'react'
import burgerLogo from '../../assets/images/berger.jpg';
import styles from './Logo.module.css'

const Logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="لوگو فروشگاه" />
  </div>
)

export default Logo