import React, { Component } from 'react'
import classes from './Layout.module.css'
import ToolBar from '../../components/Toolbar/Toolbar';
import SlideDrawer from '../../components/SlideDrawer/SlideDrawer'
import Wrapper from '../Wrapper/Wrapper';
import { connect } from 'react-redux';

class Layout extends Component {
    constructor(props) {
        super()
        this.state = {
            showSlideDrawer: false
        }
    }

    slideDrawerClosedHandler = () => {
        this.setState({ showSlideDrawer: false })
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSlideDrawer: !prevState.showSlideDrawer }
        })
    }

    render() {
        return (
            <Wrapper>
                <ToolBar drawerToggleClicked={this.drawerToggleHandler} isAuth={this.props.isAuthenticated}></ToolBar>
                <SlideDrawer open={this.state.showSlideDrawer} closed={this.slideDrawerClosedHandler} isAuth={this.props.isAuthenticated} />
                <main className={classes.mt}>
                    {this.props.children}
                </main>
            </Wrapper>
        )
    }

}


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)