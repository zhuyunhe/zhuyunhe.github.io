import React, {Component} from 'react'
import styled from 'styled-components'
import Title from './title'
import Code from './code'

class CssLayout extends Component{
  constructor(){
    super()
  }

  render(){
    return (
  <div>
    <p>常用的一些css布局方面的技巧</p>
  <FloatCon>
    <Title>清除浮动</Title>
    <div className="floated">float a</div>
    <div className="floated">float b</div>
    <div className="floated">float c</div>
  </FloatCon>
  <Code>{`
  .clearFix{
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .floated {
      float: left;
      margin-left:20px;
    }
  }
  `}
  </Code>
  <Title>Flexbox子元素均匀分布</Title>
  <FlexCon>
    <p className="item">Item1</p>
    <p className="item">Item2</p>
    <p className="item">Item3</p>
  </FlexCon>
  <Code>
    {`
    display: flex;
    justify-content: space-between;
    &.center{
      justify-content: center;
      align-items: center;
    }
    .item{
      border: 1px solid #1890ff;
      padding: 4px;
    }
    `}
  </Code>
  <Title>Flexbox子元素均匀分布</Title>
  <FlexCon className="center">
    <p className="item">Item1</p>
    <p className="item">Item2</p>
    <p className="item">Item3</p>
  </FlexCon>
  <Code>
    {`
    display: flex;
    justify-content: center;
    align-items: center;
    .item{
      border: 1px solid #1890ff;
      padding: 4px;
    }
    `}
  </Code>
  <Title>子元素垂直居中</Title>
  <GhostCon>
    <p>
      123456789
    </p>
  </GhostCon>
  <Code>
    {`
    <div>
      height: 300px;
      background: #e6f7ff;
      text-align: center;
      &::before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }
      p{
        display: inline-block;
        vertical-align: middle;
      }
    </div>
    `}
  </Code>
  <Title>网格布局实现子元素垂直居中</Title>
  <GridCon>
    <p>
      123456
    </p>
  </GridCon>
  <Code>
    {`
    <div>
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100px;
    background: #e6f7ff;
    </div>
    `}
  </Code>
  <Title>父元素的最后一个子元素占满父元素剩余高度</Title>
  <FlexCon2>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </FlexCon2>
  <Code>
    {
  `
  height: 300px;
  display: flex;
  flex-direction: column;
  p:last-child{
    background-color: tomato;
    flex: 1;
  }
  `
    }
  </Code>
</div>
    )
  }
}

export default CssLayout


const FloatCon = styled.div`
  margin: 0 0 10px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  .floated {
    float: left;
    margin-right:20px;
    border: 1px solid #1890ff;
    padding: 4px;
  }
`

const FlexCon = styled.div`
  display: flex;
  justify-content: space-between;
  &.center{
    justify-content: center;
    align-items: center;
  }
  .item{
    border: 1px solid #1890ff;
    padding: 4px;
  }
`

const GhostCon = styled.div`
  height: 300px;
  background: #e6f7ff;
  text-align: center;
  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  p{
    display: inline-block;
    vertical-align: middle;
  }
`

const GridCon = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #e6f7ff;
`

const FlexCon2 = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  p:last-child{
    background-color: tomato;
    flex: 1;
  }
`
