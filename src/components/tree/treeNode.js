import React, {Component} from 'react'
import styled from 'styled-components'
class TreeNode extends Component{
  constructor(){
    super()
    this.ele = null
  }
  componentDidMount(){
    let { value } = this.props.node
    if(this.props.passEle){
      this.props.passEle(this.ele, value, this.props.left)
    }
  }
  render(){
    const { value, left, right, root } = this.props.node
    const {x} = this.props
    const leftDash = left ? true : false
    const rightDash = right ? true : false
    return (
      <Node ref={el => this.ele = el} x={x} root={root} leftDash={leftDash} rightDash={rightDash}>
        {value}
        {left ? (<TreeNode passEle={this.props.passEle} node={left} x={-40} left={this.props.left}></TreeNode>) : ''}
        {right ? (<TreeNode passEle={this.props.passEle} node={right} x={40} left={this.props.left}></TreeNode>) : ''}
      </Node>
    )
  }
} 

const Node = styled.div`
  position: absolute;
  margin: auto;
  left: ${props => props.root ? '50%' : props.x + 'px'};
  transform: ${props => props.root ? 'translate(-50%, 0)' : 'none'};
  color: #fff;
  background-color: #000;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  &::before{
    display: ${props =>props.leftDash || props.rightDash ? 'block' : 'none'};
    content: '';
    position: absolute;
    left: 13px;
    width: 4px;
    height: 40px;
    transform: ${props => props.leftDash ? 'rotate(45deg) translate(-6px, 15px)' : 'none'};  
    background-color: #000;
    z-index: -1;
  }
  &::after{
    display: ${props => props.leftDash || props.rightDash ? 'block' : 'none'};
    content: '';
    position: absolute;
    top: 0;
    left: 13px;
    width: 4px;
    height: 40px;
    transform: ${props =>  props.rightDash ? 'rotate(-45deg) translate(6px, 15px)' : 'none'};  
    background-color: #000;
    z-index: -1;
  }
`

export default TreeNode