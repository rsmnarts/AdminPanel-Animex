import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import ResponsiveDrawer from './components/ResponsiveDrawer';
import Home from './layout/Home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <ResponsiveDrawer>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/movies" component={() => <h2>Movies</h2>}/>
            <Route path="/users" component={() => <h2>Users</h2>}/>
          </Switch>
        </ResponsiveDrawer>
      </Router>
    );
  }
}