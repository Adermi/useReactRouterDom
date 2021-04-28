import React, { Component } from 'react'
// import qs from 'querystring'

export default class index extends Component {
  render() {
    // console.log(qs.parse(this.props.location.search));

    // search: "?id=0&content=消息0"，使用qs库把他转换成对象
    // let { id, content } = qs.parse(this.props.location.search.slice(1))
    // console.log();

    let { id, content } = this.props.location.state || {id: '默认ID', content: '默认内容'}

    return (
      <div>
        <div>消息ID: {id}</div>
        <div>消息内容: {content}</div>
      </div>
    )
  }
}
