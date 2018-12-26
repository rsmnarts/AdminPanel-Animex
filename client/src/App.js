import React, { Component } from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import {
  BrowserRouter as Router,
  Route,
  Switch
}

export default class App extends Component {
  render() {
    return (
      <Switch>
        <ResponsiveDrawer / >
        <Route exact path="/" component={Home}/>
        <Route path="/movies" component={() => <h2>Movies</h2>}/>
      </Switch>
    );
  }
}