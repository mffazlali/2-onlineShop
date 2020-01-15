import React, { Component } from 'react';
import './App.css';
import FoodBuilder from './containers/FoodBuilder/FoodBuilder';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router';
import Checkout from './containers/Checkout/Checkout';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/authentication" exact component={Auth} />
          <Route path="/logout" exact component={Logout} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={FoodBuilder} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
