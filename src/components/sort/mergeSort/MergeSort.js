import React from 'react'
import HOSort from '../HOSort'

class MergeSort extends React.Component{
  constructor(props){
    super(props)
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
    // debugger
    while(i<=mid && j<=last){
      temp[count++] = arr[i]._value < arr[j]._value ? arr[i++] : arr[j++]
      /* if (arr[i]._value < arr[j]._value ){
        temp[count++] = arr[i++] 

      }else{
        temp[count++] = arr[j++] 
      } */
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

    await this.props.mergeSortAnimate(temp)

  }

  render(){
    return (
      <div>
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