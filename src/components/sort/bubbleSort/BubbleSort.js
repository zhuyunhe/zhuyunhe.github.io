import React from 'react'
import anime from 'animejs'
import styled from 'styled-components'
import SortEle from '../SortEle'

class BubbleSort extends React.Component{
  constructor(props){
    super(props)
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

    this.explain = `
      冒泡排序相对好理解一些，它的原理是：  
      (1. 比较相邻的前后两个数，如果前一个数大于后一个，那就将两个数交换位置。<br>
      (2. 对数组的0~(N-1)位置上的数执行一次上述操作后，数组终最大的一个数就“冒泡”到了数组的第N-1位置上。
      (3. N=N-1,如果N不为0，则重复上述1，2两步。
    `

    this.code = `
      function bubbleSort(arr){\n
        for(var i=1; i<arr.length; i++){
          for(var j=0; j<arr.length-i; j++){
            if(arr[j]>arr[j+1]){
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp
            }
          }
        }
        console.log('冒泡：'+arr)
      }
    `
  }

  componentDidMount(){

  }

  beginSort(){
    if (this.state.begin) return
    this.setState({
      begin: true
    })
    this.bubbleSort()
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
  async bubbleSort() {
    let _arr = this.state.arr

    for (let i = 1; i < _arr.length; i++) {
      for (let j = 0; j < _arr.length - i; j++) {
        try {
          if (_arr[j]._value > _arr[j + 1]._value) {

            let temp = _arr[j]._value
            _arr[j]._value = _arr[j + 1]._value
            _arr[j + 1]._value = temp

            await this.animate({
              x1: _arr[j].x,
              x2: _arr[j + 1].x,
              i: j,
              j: j + 1
            })


            let tempEle = this.elmentArr[j]
            this.elmentArr[j] = this.elmentArr[j + 1]
            this.elmentArr[j + 1] = tempEle

          }
        } catch (error) {
          console.error(error)
          console.error(`i:${this.i}, j:${this.j}`)
        }
      }
    }
    this.setState({
      begin: false
    })
  }
  passEle(el) {
    this.elmentArr.push(el)
  }

  render(){
    let {begin} = this.state
    return(
      <div>
        <Wrapper>
          <div>
            <Button onClick={this.beginSort} bgColor={begin ? '#bfbfbf' : '#52c41a'}>开始</Button>
          </div>
          <div className="sort-con">
            {
              this.state.arr.map((item) => {
                return <SortEle key={item.value} x={item.x} value={item.value} passEle={this.passEle}></SortEle>
              })
            }
          </div>
          <p className="label">概述：</p>
          <div className="explain">
            {this.explain}
          </div>
          <p className="label">参考代码：</p>
          <div className="code">
            <pre>
              {this.code}
            </pre>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default BubbleSort

const Wrapper = styled.section`
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
  background-color: ${props => props.bgColor } ;
  font-size: 1em;
  padding: 10px 16px;
  border-radius: 3px;
  margin-bottom: 30px;
`