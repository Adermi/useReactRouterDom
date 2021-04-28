import React, { Component } from 'react'
import { Link, Route, Switch,Redirect } from 'react-router-dom'

import Content from './Content'

export default class Message extends Component {
  state = {
    messages: [
      { id: 0, content: '消息0' },
      { id: 1, content: '消息1' },
      { id: 2, content: '消息2' },
      { id: 3, content: '消息3' }
    ]
  }

  render() {
    let { messages } = this.state

    return (
      <div>
        <ul>
          {messages.map(item => {
            return (
              /* 向路由组件传递参数 */
              // <Link Link to={`/info/message/content/${item.id}/${item.content}`} key={item.id} > { item.content}</Link>

              /* 通过问号传参 */
              // <Link to={`/info/message/content?id=${item.id}&content=${item.content}`} key={item.id} > { item.content}</Link>

              /* 通过state属性传参 */
              <Link to={{
                  pathname: "/info/message/content",
                  state: {...item}
                }} key={item.id}> { item.content}</Link>
            )
          })}
        </ul>

        {/* 路由组件接收参数 */}
        <Switch>
          {/* 1.通过pramas传递参数 */}
          {/* <Route path="/info/message/content/:id/:content" component={Content}></Route> */}

          {/* 2.通过问号传参 */}
          {/* <Route path="/info/message/content" component={Content}></Route> */}

          {/* 3.通过state属性传参 */}
          <Route path="/info/message/content" component={Content}></Route>


          <Redirect to="/info/message/content"></Redirect>
        </Switch>
      </div >
    )
  }

  handleClick = e => {
    e.preventDefault()

    console.log(e)
  }
}
