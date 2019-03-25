import React, {Component} from 'react'
import anime from 'animejs'

import HOSort from '../HOSort'


class InsertSort extends React.Component{
  constructor(props){
    super(props)
    console.log('construct');
    
    this.explain = `
    插入排序的基本思想是：每次将一个待排序的数插入到一个已经排好序的子序列中的适当位置，知道最后一个数也插入完成。  
    在插入第i个数时，第0到(i-1)个数已经是排好序的。初始时默认第一个数是自己有序。  
    插入排序的时间复杂度是O(N2)，但如果输入数据是已经排好序的，那时间复杂度为O(N)。如果输入数据几乎是快排好序的，那插入排序的速度也很快的。
    此外，插入排序还是一种稳定的排序，因为如果在插入的过程中，如果碰见一个和要插入的元素相等的元素，那要插入的元素就会放到该元素的后面，相等元素的前后顺序并不会改变。
    `

    this.code = `
    function insertSort(Arr){
      for(var i=0; i<arr.length; i++){
        var temp = arr[i];
        for(var j=i-1; j>=0&&temp<arr[j]; j--){
          arr[j+1] = arr[j];
        }
        arr[j+1] = temp;
      }
    }`
  }

  componentDidMount() {
    // this.props.setSort()
    this.props.setSort(this.insertSort.bind(this))
  }

  async insertSort(){
    let arr = this.props.arr.slice()
    
    for(let i=0; i<arr.length; i++){
      // let _temp = Object.assign({}, arr[i])
      let _temp =  arr[i]

      // debugger
      
      let j=i-1
      for (; j >= 0 && arr[j]._value>_temp._value; j--){
        await this.props.animate({
          x1: arr[j].x,
          x2: arr[j+1].x,
          i: j,
          j: j+1
        })
        this.props.updateElementArr(j, j + 1)
        let _temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = _temp

        let _x = arr[j + 1].x
        arr[j + 1].x= arr[j].x
        arr[j].x = _x

      }

      let debugArr = arr.map(item => {
        return item._value
      })
      console.log(debugArr);
    }
  }

  animate(){

  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

InsertSort = HOSort(InsertSort)
export default InsertSort