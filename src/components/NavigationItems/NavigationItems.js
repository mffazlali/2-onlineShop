import React from 'react'
import styles from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        {!props.isAuth ? (
            <NavigationItem link="/authentication">ورود</NavigationItem>
        ) : (<NavigationItem link="/logout">خروج</NavigationItem>
            )}
        <NavigationItem link="/" exact>ثبت سفارش</NavigationItem>
        <NavigationItem link="/checkout">پرداخت</NavigationItem>
    </ul>
)

export default NavigationItems