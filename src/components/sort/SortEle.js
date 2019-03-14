import React from 'react';
import styled from 'styled-components' 
class SortEle extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
      position: props.position
    }
    this.ele = null
    this.finish = this.finish.bind(this)
  }
  componentDidMount(){
    let passEle = this.props.passEle
    
    passEle(this.ele)
  }

  finish(){
  }
  //静态方法，不能在这个函数里使用this
  static getDerivedStateFromProps(nextProps, prevState){
    return prevState
  }
  shouldComponentUpdate(nextProps, nextState){
    return true
  }
  render(){
    const { value} = this.state
    const { x } = this.props
    return (
      <BallWrap ref={el => this.ele = el}  x={x}>
        <Ball  >{value}</Ball>
      </BallWrap>
    )
  }
} 
const BallWrap = styled.div`
  position: absolute;
  left: ${props => props.x + 'px'};
  text-align: center;
  width: 30px;
  height: 30px;
  line-height: 30px;
  background-color: #2f54eb;
  color: #fff;
  border-radius: 6px;
`
const Ball = styled.div`
  
`

export default SortEle