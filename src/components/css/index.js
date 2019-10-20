import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import LeftMenu from './menu'
import { Layout } from 'antd'
import CssLayout from './layout'
import CssUI from './ui'
import CssMobile from './mobile'
const { Sider } = Layout
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class Index extends React.Component {
  constructor() {
    super()
    console.log('css index')
  }

  render() {
    return (
     /*  <div>
        <Layout >
          <Sider width="200px" theme='light'>
            <LeftMenu></LeftMenu>
          </Sider>
          <Content className='css'>
            <Switch>
              <Route  path="/css/layout" component={CssLayout}></Route>
            </Switch>
          </Content>
        </Layout>
      </div> */
      <Router>
        <Layout >
          <Sider width="200px" theme='light'>
            <LeftMenu></LeftMenu>
          </Sider>
          <Content className='css'>
            <Switch>
              <Route exact path="/css/layout" component={CssLayout}></Route>
              <Route exact path="/css/ui" component={CssUI}></Route>
              <Route exact path="/css/mobile" component={CssMobile}></Route>
            </Switch>
          </Content>
        </Layout>
        
      </Router>
    )
  }
}

export default Index;

const Content = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #fff;
  margin-left: 6px;
  padding: 20px 30px;
  .label{
    font-size: 18px;
    color:#0d1a26;
  }
  p{
    margin: 1em 0;
  }
  .explain{
    color: #314659;
  }
  .sort-con{
    position: relative;
    height: 100px;
  }
`