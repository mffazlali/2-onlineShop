import React from 'react'
import Logo from '../Logo/Logo'
import styles from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SlideDrawer/DrawerToggle/DrawerToggle'
import Wrapper from '../../hoc/Wrapper/Wrapper';

const ToolBar = (props) => {
    return (
        <Wrapper>
            <header className={styles.ToolBar}>
                <nav className={styles.DesktopOnly}>
                    <NavigationItems isAuth={props.isAuth} />
                </nav>
                <div className={[styles.DesktopOnly, styles.LogoContainer].join(' ')}>
                    <Logo />
                </div>
                <div className={styles.MobileOnly}>
                    <DrawerToggle clicked={props.drawerToggleClicked} />
                </div>
            </header>
        </Wrapper>
    )
}

export default ToolBar