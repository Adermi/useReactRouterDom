import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter><App></App></BrowserRouter>,
  // <HashRouter><App></App></HashRouter>,
  document.getElementById('root')
);

/**
 * HashRouter和BrowserRouter区别：
 *    1. HashRouter：https://xxx#hash1 https://xxx#hash2 https://xxx#hash3 靠#后面的hash值跳转
 *    2. BrowserRouter：https://xxx/home https://xxx/about https://xxx/info 靠路径跳转
 *    3. hash路由在请求的时候不会带上hash值请求，而浏览器路由会带上
 */

