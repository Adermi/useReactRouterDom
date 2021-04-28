import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import 'antd/dist/antd.css'

import './App.css'
import Home from './pages/Home'
import Info from './pages/Info'
import MyNavLink from './components/myNavLink';


export default class App extends Component {
  render() {
    return (
      <div>
        <MyNavLink to="/home">Home</MyNavLink>
        <MyNavLink to="/info">info</MyNavLink>

        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path='/info' component={Info}></Route>
          <Redirect to='/info' />
        </Switch>
      </div>
    );
  }
}