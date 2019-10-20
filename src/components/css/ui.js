import React, { Component } from 'react'
import styled from 'styled-components'
import Title from './title'
import Code from './code'
class CssUI extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <p>常用的一些css视觉方面的技巧</p>
        <Title>移动端去除点击元素时闪动</Title>
        <Code>
          {
            `-webkit-tap-highlight-color : transparent ; `
          }
        </Code>
        <Title>屏蔽用户选择</Title>
        <Code>
          {
            `user-select: none;`
          }
        </Code>
        <Title>自定义文本选择样式</Title>
        <SelectP>选择我试试看</SelectP>
        <Code>
  {`
  p::selection {
    background: deeppink;
    color: white;
  }
  `}
        </Code>
        <Title>:not伪类选择器</Title>
        <FlexUl>
          <li>one</li>
          <li>two</li>
          <li>three</li>
          <li>four</li>
        </FlexUl>
        <Code>
          {`
  ul{
    display: flex;
    li{
    list-style-type: none;
      margin: 0;
      padding: 0 10px;
    }
    li:not(:last-child) {
      border-right: 2px solid #d2d5e4;
    }
  }
          `}
        </Code>
        <Title>css开关</Title>
        <SwitchBtn>
          <input id="toggle" type="checkbox"></input>
          <label htmlFor="toggle" className="switch"></label>
        </SwitchBtn>
        <Code>
          {`
html: 
<input id="toggle" type="checkbox"></input>
<label htmlFor="toggle" className="switch"></label>

css: 
.switch{
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: #bfbfbf;
  border-radius: 20px;
  transition: all 0.3s;
  &::after{
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 18px;
    background-color: white;
    top: 1px;
    left: 1px;
    transition: all 0.3s;
  }
}
#toggle{
  display:none;
  // position: absolute;
  // left: -9999px;
}
#toggle:checked + .switch{
    background-color: #1890ff;
}
#toggle:checked + .switch::after{
  transform: translateX(20px);
}
          `}
        </Code>
        <Title>css小三角</Title>
        <TriangleCon>
          <p className="triangle"></p>
        </TriangleCon>
        <Code>
          {`
.triangle{
  width: 0;
  height: 0;
  border-top: 20px solid #bfbfbf;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
          `}
        </Code>
      </div>
    )
  }
}

export default CssUI

const SelectP = styled.p`
  &::selection {
    background: #eb2f96;
    color: white;
  }
`
const FlexUl = styled.ul`
  display: flex;
  li{
   list-style-type: none;
    margin: 0;
    padding: 0 10px;
  }
  li:not(:last-child) {
    border-right: 2px solid #d2d5e4;
  }
`

const SwitchBtn = styled.div`
  .switch{
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #bfbfbf;
    border-radius: 20px;
    transition: all 0.3s;
    &::after{
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 18px;
      background-color: white;
      top: 1px;
      left: 1px;
      transition: all 0.3s;
    }
  }
  #toggle{
    display:none;
    // position: absolute;
    // left: -9999px;
  }
  #toggle:checked + .switch{
      background-color: #1890ff;
  }
  #toggle:checked + .switch::after{
    transform: translateX(20px);
  }
`

const TriangleCon = styled.div`
  .triangle{
    width: 0;
    height: 0;
    border-top: 20px solid #bfbfbf;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }
`
