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
            index: 0,
            value: 5,
            _value: 5,
            x: 0
          },
          {
            index: 1,
            value: 4,
            _value: 4,
            x: 100
          },
          {
            index: 2,
            value: 3,
            _value: 3,
            x: 200
          },
          {
            index: 3,
            value: 2,
            _value: 2,
            x: 300
          },
          {
            index: 4,
            value: 1,
            _value: 1,
            x: 400
          },
          {
            index: 5,
            value: 0,
            _value: 0,
            x: 500
          },
          {
            index: 6,
            value: 6,
            _value: 6,
            x: 600
          },
          {
            index: 7,
            value: 7,
            _value: 7,
            x: 700
          }
        ],
        begin: false,
        finished: false
      }
      this.elmentArr = []

      this.beginSort = this.beginSort.bind(this)
      this.finish = this.finish.bind(this)
      this.replay = this.replay.bind(this)

      this.passEle = this.passEle.bind(this)

      this.setSort = this.setSort.bind(this)

      this.animate = this.animate.bind(this)

      this.mergeSortAnimate = this.mergeSortAnimate.bind(this)

      this.updateElementArr = this.updateElementArr.bind(this)


    }
    //排序动画-交换位置
    animate({ x1, x2, i, j, mergeSort=false }) {
      
      let p1 = anime({
        targets: this.elmentArr[i],
        easing: 'linear',
        keyframes: [
          { translateY: 20, backgroundColor: '#061178' },
          { left: x2 + 'px', backgroundColor: '#030852' },
          { translateY: 0, backgroundColor: '#2f54eb' }
        ],
        duration: 2000
      }).finished
      let p2 = anime({
        targets: this.elmentArr[j],
        easing: 'linear',
        keyframes: [
          { translateY: -20, backgroundColor: '#061178' },
          { left: x1 + 'px', backgroundColor: '#030852' },
          { translateY: 0, backgroundColor: '#2f54eb' }
        ],
        duration: 2000
      }).finished
      return Promise.all([p1, p2])
    }

    async mergeSortAnimate(arr){
      console.log(arr);
      
      let promiseArr = arr.map((item) => () => {
        return anime({
          targets: this.elmentArr[item.index],
          easing: 'linear',
          keyframes: [
            { translateY: 40, left: item.x + 'px', backgroundColor: '#061178' }
          ],
          duration: 1000
        }).finished
      })
      promiseArr = promiseArr.concat(arr.reverse().map((item) => () => {
        return anime({
          targets: this.elmentArr[item.index],
          easing: 'linear',
          keyframes: [
            { translateY: 0, backgroundColor: '#2f54eb' }
          ],
          duration: 500
        }).finished
      }))

      await promiseArr.reduce((prev, next) => {
        
        return prev.then(()=> {
          console.log('resolve')
            
          return next()
        })
      },Promise.resolve())
     
      // return Promise.all(promiseArr)
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

    finish(){
      this.setState({
        finished: true
      })
    }

    replay(){
      this.setState({
        begin: false
      })
    }
    sort(){
      
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
              <BeginButton onClick={this.beginSort} bgColor={begin ? '#bfbfbf' : '#52c41a'}>
                开始
              </BeginButton>
              <FinishButton onClick={this.replay} bgColor={finished ? '#bfbfbf' : '#52c41a'}>
                重置
              </FinishButton>
            </div>
            <div className="sort-con">
              {this.state.arr.map(item => {
                return <SortEle key={item.value} x={item.x} value={item.value} passEle={this.passEle}></SortEle>
              })}
            </div>
            <WrappedComponent arr={this.state.arr} 
              animate={this.animate} 
              mergeSortAnimate={this.mergeSortAnimate} 
              updateElementArr={this.updateElementArr} 
              setSort={this.setSort} 
              replay={this.replay} 
              finish={this.finish}/>
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

const BeginButton = styled.button`
  color: #fff;
  background-color: ${props => props.bgColor} ;
  font-size: 1em;
  padding: 10px 16px;
  border-radius: 3px;
  margin-bottom: 30px;
`

const FinishButton = styled.button`
  color: #fff;
  background-color: ${props => props.bgColor} ;
  font-size: 1em;
  padding: 10px 16px;
  border-radius: 3px;
  margin-bottom: 30px;
  margin-left: 10px;
`