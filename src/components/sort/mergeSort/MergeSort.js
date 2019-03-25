import React from 'react'
import HOSort from '../HOSort'

class MergeSort extends React.Component{
  constructor(props){
    super(props)
    this.explain = `
    归并排序是一种建立在归并操作上的排序算法。该算法也是采用分治的思想。
    基本思路就是将数组分为A，B两组，如果这两组里的数据都是有序的，那么就可以很方便的将这两组数据进行排序。
    那如何让这两组内的数据都是有序的呢？那就是让A，B组各自再分成两组。依次类推，当分出来的小组只有一个数据时，
    就可以认为这个小组组内已经达到了有序，然后再合并相邻的两个小组就可以了。这样通过先**递归**地分解数组，在**合并**有序数组，就完成了归并排序。`
    this.code = `
function mergeSort(arr, first, last){
  if(first < last){
    var mid = parseInt((first+last)/2);
    var temp = [];
    mergeSort(arr, first, mid);		//左边有序
    mergeSort(arr, mid+1, last);	//右边有序

    //合并左右两个有序数组
    mergeArray(arr, first, mid, last, temp);
  }
}
function mergeArray(arr, first, mid, last, temp){
  console.count();
  var i = first;
  var j = mid+1;
  var count = 0;
  while(i<=mid && j<=last){                          
    if(arr[i] <= arr[j]){
      temp[count++] = arr[i++];
    } else{
      temp[count++] = arr[j++]
    }
  }
  while(i <= mid){
    temp[count++] = arr[i++];
  }
  while(j <= last){
    temp[count++] = arr[j++];
  }
  
  for(var k=0; k<count; k++){
    arr[first++] = temp[k]; 
  }
  console.log(arr);
}
    `
  }

  componentDidMount(){
    this.props.setSort(this.mergeSort.bind(this))
  }

  componentWillMount(){

  }

  mergeSort(){
    let arr = this.props.arr
    this._mergeSort(arr, 0, arr.length-1)
  }

  async _mergeSort(arr, first, last){
    //递归退出条件
    if(first < last){
      let mid = parseInt((first+last)/2)
      let temp = []
      await this._mergeSort(arr, first, mid)
      await this._mergeSort(arr, mid+1, last)
      await this.mergeArray(arr, first, mid, last, temp);
    }
  }

  async mergeArray(arr, first, mid, last, temp){
    let base = first, i=first, j=mid+1, count=0;

    //如果待排序的部分本来就是有序的，则不需要进行动画
    let changeFlag = false
    // debugger
    while(i<=mid && j<=last){
      // temp[count++] = arr[i]._value < arr[j]._value ? arr[i++] : arr[j++]
      if (arr[i]._value < arr[j]._value ){
        temp[count++] = arr[i++] 
      }else{
        changeFlag = true
        temp[count++] = arr[j++] 
      }
    }

    while(i<=mid){
      temp[count++] = arr[i++]
    }

    while (j <= last) {
      temp[count++] = arr[j++]
    }

    temp.map((item, index)=>{
      item.index = base + index
      arr[first++] = item
    })

    if (changeFlag){
      await this.props.mergeSortAnimate(temp)
    }

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

MergeSort = HOSort(MergeSort)
export default MergeSort