import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import './common/assets/reset.less'
import './App.css';
import MyHeader from './components/index/header'
import AnimationContent from './components/index/content'
import CssContent from './components/css/index'
import Home from './page/Home'

import { Layout, Menu, Icon } from 'antd';

const { Footer, Sider, Content} = Layout;
// 通过ref可以直接操作<button>元素:
class Index extends Component{
  constructor(){
    super()
    this.ref = React.createRef()
  }
  render(){
    return(
      <div className="page-wrapper">
        <Layout className="main-layout">
          <MyHeader></MyHeader>
          <Menu mode="horizontal">
            <Menu.Item key="mail">
              <Link to={'/css'}><Icon type="mail" />CSS trick</Link>
            </Menu.Item>
            <Menu.Item key="maixl">
              <Link to={'/animation'}><Icon type="mail" />Animation</Link>
            </Menu.Item>
          </Menu>
          <Layout>
            <Switch>
              <Route path="/css" component={CssContent}></Route>
              <Route path="/animation" component={AnimationContent} ></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
          </Layout>
          <Footer>
            it's never too late ~
          </Footer>
        </Layout>
      </div>
    )
  }
  componentDidMount(){
    
  }
}
class App extends Component {
  render() {
    return (
      <Router className="App">
        <Index></Index>
      </Router>
    );
  }
}

export default App;
