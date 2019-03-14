import React, {Component} from 'react'
import { Avatar } from 'antd';
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
`
const Slogan = styled.span`
  margin-left: 10px;
`