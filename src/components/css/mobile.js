import React, {Component} from 'react'
import Title from './title'
import Code from './code'
import styled from 'styled-components'

class Mobile extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <p>移动端</p>
        <Title>移动端1像素边框</Title>
        <SignBtn>
          签到按钮
        </SignBtn>
        <Code>
          {
            `
  position: relative;
  display: inline-block;
  padding: 4px 10px;
  font-size: 14px;
  color: #1890ff;
  &::before{
    content: "";
    transform: scale(.5);
    transform-origin: 0 0;
    border: 1px solid #1890ff;
    width: 200%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 30px;
  }
            `
          }
        </Code>
      </div>
    )
  }
}

export default Mobile

const SignBtn = styled.p`
  position: relative;
  display: inline-block;
  padding: 4px 10px;
  font-size: 14px;
  color: #1890ff;
  &::before{
    content: "";
    transform: scale(.5);
    transform-origin: 0 0;
    border: 1px solid #1890ff;
    width: 200%;
    height: 200%;
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 2;
    border-radius: 30px;
  }
`