import React, {Component} from 'react'
import { Avatar, Menu, Icon } from 'antd';
import styled from 'styled-components' 

class MyHeader extends Component{
  constructor(){
    super()
  }

  render(){
    return  <Header>
              <Avatar size={60} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <Slogan>Keep Moving</Slogan>
            </Header>
  }
}

export default MyHeader

const Header = styled.header`
  text-align: left;
  padding: 10px 12px;
  background-color: #fff;
  margin-bottom: 10px;
`
const Slogan = styled.span`
  margin-left: 10px;
`