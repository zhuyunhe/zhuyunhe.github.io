import React , {Component} from 'react'
import HOSort from '../HOSort'
import { min } from 'moment';

class SelectSort extends Component{
  constructor(props){
    super(props)
    this.explain = `
    直接选择排序和插入排序类似，都是将数据分为有序区和无序区。  
    二者不同之处在于，插入排序是将无序区中第一个元素直接插入到有序区的某个位置来形成一个更大的有序区；而直接选择排序是从无序区中选择一个最小的元素直接放到有序区的最后。  
    初始时，整个数组视为无序区，从整个数组中选一个最小的数放到第一位形成第一个有序区，然后在剩下的无序区中重复这样的操作。 
    `
    this.code = `
    function selectSort(arr){
      for(var i=0; i<arr.length; i++){
        var minIndex = i;
        for(var j=i+1; j<arr.length; j++){
          if(arr[j] < arr[minIndex]){
            minIndex = j;
          }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
      return arr
    }
    `
  }
  componentDidMount(){
    this.props.setSort(this.selectSort.bind(this))
  }

  async selectSort(){
    let arr = this.props.arr
    for(let i=0; i<arr.length; i++){
      let minIndex = i
      for(let j=i+1; j<arr.length; j++){
        if (arr[minIndex]._value > arr[j]._value){
          minIndex = j
        }
      }
      if(i != minIndex){
        let temp = arr[i]._value
        arr[i]._value = arr[minIndex]._value
        arr[minIndex]._value = temp
        await this.props.animate({
          x1: arr[i].x,
          x2: arr[minIndex].x,
          i: i,
          j: minIndex
        })
      }
    }
    this.props.finish()
    console.log(arr.map(item=>item._value))
  }

  render(){
    return(
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

SelectSort = HOSort(SelectSort)
export default SelectSort