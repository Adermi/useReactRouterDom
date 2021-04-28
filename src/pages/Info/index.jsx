import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import MyNavLink from '../../components/myNavLink'
import News from './News'
import Messages from './Messages'
import './index.css'

export default class Info extends Component {
  render() {
    return (
      <div>
        <div>Info页面</div>
        <div className="container">
          {/* <News></News> */}

          <div className="left">
            <MyNavLink to="/info/news">news</MyNavLink>
            <MyNavLink to="/info/message">messages</MyNavLink>
          </div>
          <div className="right">
            <Switch>
              <Route path="/info/news" component={News}></Route>
              <Route path="/info/message" component={Messages}></Route>
              <Redirect to="/info/message"></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
