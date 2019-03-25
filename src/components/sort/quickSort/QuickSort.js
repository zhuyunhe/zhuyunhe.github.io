import React from 'react'
import HOSort from '../HOSort'

class QuickSort extends React.Component{
  constructor(props){
    super(props)
    this.explain = `
    快速排序采用分治的思想，时间复杂度为O(N*logN)。基本思路是:  
    (1. 先从数列中取出一个数作为基准数。  
    (2. 分区过程，将数列中比这个数大的数全放在它的右边，小于或等于它的数全部放到它的左边。  
    (3. 再对左右区间重复前两步，直到最后每个区间只有一个数。
    `
    this.code =
    `
    function quicksort(arr,left,right){
      //递归退出条件
      if(left < right){
        //分
        var index = partition(arr, left, right);	
        //治
        quicksort(arr,left,index-1);
        quicksort(arr,index+1,right);
      }
    }
    function partition(arr,left,right){
      //基准
      var povit = arr[left];
      
      while(left < right){
        while(left<right && arr[right]>povit){
          right--;
        }
        if(left < right){
          arr[left] = arr[right];
        }

        while(left<right && arr[left]<=povit){
          left++;
        }
        if(left<right){
          arr[right] = arr[left];
        }
      }
      arr[left] = povit;
      return left;
    }`
  }
  
  componentDidMount(){
    this.props.setSort(this.quickSort.bind(this))
  }

  quickSort(){
    let arr = this.props.arr
    this._quickSort(arr, 0, arr.length-1)
  }

  async _quickSort(arr, left, right){
    if(left<right){
      let index = await this.partition(arr, left, right)
      await this._quickSort(arr, left, index - 1)
      await this._quickSort(arr, index + 1, right)
    }
  }
  async partition(arr, left, right){
    console.log(`left:${left}, right:{${right}}`)
    let povit = arr[left]._value
    while(left < right){
      while (left < right && arr[right]._value > povit) {
        right--
      }
      if (left < right) {

        arr[left]._value = arr[right]._value

        await this.props.animate({
          x1: arr[left].x,
          x2: arr[right].x,
          i: left,
          j: right
        })
      }
      while (left < right && arr[left]._value <= povit) {
        left++
      }
      if (left < right) {
        arr[right]._value = arr[left]._value

        await this.props.animate({
          x1: arr[left].x,
          x2: arr[right].x,
          i: left,
          j: right
        })
      }
    }
    

    arr[left]._value = povit
    return left
  }
  
  

  render(){
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
QuickSort = HOSort(QuickSort)
export default QuickSort

