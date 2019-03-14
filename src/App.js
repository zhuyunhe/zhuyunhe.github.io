import React, { Component } from 'react';
import './App.css';
import MyHeader from './components/index/header'
import LeftMenu from './components/index/menu'
import MyContent from './components/index/content'

import { Layout } from 'antd';

const { Footer, Sider, Content} = Layout;
// 通过ref可以直接操作<button>元素:
class Index extends React.Component{
  constructor(){
    super()
    this.ref = React.createRef()
  }
  render(){
    return(
      <div className="page-wrapper">
        <Layout>
          <MyHeader></MyHeader>
          <Layout style={{margin:'10px 0 0', padding:'0 10px'}}>
            <Sider width={200} theme='light'>
              <LeftMenu></LeftMenu>
            </Sider>
            <Content>
              <MyContent></MyContent>
            </Content>
          </Layout>
          <Footer></Footer>
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
      <div className="App">
        <Index></Index>
      </div>
    );
  }
}

export default App;
