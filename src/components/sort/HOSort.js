import React, {Component} from 'react'
import anime from 'animejs'
import styled from 'styled-components'

import SortEle from './SortEle';

export default (WrappedComponent) => {
  class NewComponent extends Component {

    constructor() {
      super()
      this.state = {
        arr: [
          {
            value: 5,
            _value: 5,
            x: 0
          },
          {
            value: 4,
            _value: 4,
            x: 100
          },
          {
            value: 3,
            _value: 3,
            x: 200
          },
          {
            value: 2,
            _value: 2,
            x: 300
          },
          {
            value: 1,
            _value: 1,
            x: 400
          },
          {
            value: 8,
            _value: 8,
            x: 500
          },
          {
            value: 7,
            _value: 7,
            x: 600
          }
        ],
        begin: false
      }
      this.elmentArr = []

      this.beginSort = this.beginSort.bind(this)

      this.passEle = this.passEle.bind(this)

      this.setSort = this.setSort.bind(this)

      this.animate = this.animate.bind(this)

      this.updateElementArr = this.updateElementArr.bind(this)


    }
    //排序动画
    animate({ x1, x2, i, j }) {

      let p1 = anime({
        targets: this.elmentArr[i],
        easing: 'linear',
        keyframes: [
          { translateY: 20, backgroundColor: '#061178' },
          { left: x2 + 'px', backgroundColor: '#030852' },
          { translateY: 0, backgroundColor: '#2f54eb' }
        ],
        duration: 4000
      }).finished
      let p2 = anime({
        targets: this.elmentArr[j],
        easing: 'linear',
        keyframes: [
          { translateY: -20, backgroundColor: '#061178' },
          { left: x1 + 'px', backgroundColor: '#030852' },
          { translateY: 0, backgroundColor: '#2f54eb' }
        ],
        duration: 4000
      }).finished
      return Promise.all([p1, p2])
    }

    updateElementArr(i,j){
      let temp = this.elmentArr[i]
      this.elmentArr[i] = this.elmentArr[j]
      this.elmentArr[j] = temp
    }

    //保存每个准备做动画的dom元素
    passEle(el) {
      this.elmentArr.push(el)
    }

    beginSort() {
      if (this.state.begin) return
      this.setState({
        begin: true
      })
      this.sort()
    }
    sort(){
      console.log('sss')
    }
    setSort(sort){
      this.sort = sort
    }
    


    render() {
      let { begin } = this.state
      return (
        <div>
          <Wrapper>
            <div>
              <Button onClick={this.beginSort} bgColor={begin ? '#bfbfbf' : '#52c41a'}>
                开始
              </Button>
            </div>
            <div className="sort-con">
              {this.state.arr.map(item => {
                return <SortEle key={item.value} x={item.x} value={item.value} passEle={this.passEle}></SortEle>
              })}
            </div>
            <WrappedComponent arr={this.state.arr} animate={this.animate} updateElementArr={this.updateElementArr} setSort={this.setSort}/>
          </Wrapper>
        </div>
      )
    }
  }
  return NewComponent
} 

const Wrapper = styled.section`
  padding: 20px 30px;
  .label{
    font-size: 18px;
    margin-bottom: 10px;
  }
  .sort-con{
    position: relative;
    height: 100px;
  }
  .code{
    padding: 10px;
    background-color: #595959;
    color: #fff;
  }
`;

const Button = styled.button`
  color: #fff;
  background-color: ${props => props.bgColor} ;
  font-size: 1em;
  padding: 10px 16px;
  border-radius: 3px;
  margin-bottom: 30px;
`