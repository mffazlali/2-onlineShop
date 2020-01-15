import React, { Component } from 'react';
import styles from './Logout.module.css';
import { connect } from 'react-redux';
import * as authActions from '../../../store/actions/index.action';
import { Redirect } from 'react-router';

class Logout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return (
      <Redirect to='/' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authActions.AuthLogout())
  };
}

export default connect(null, mapDispatchToProps)(Logout);
