import React, {Component} from 'react'
import anime from 'animejs'

import HOSort from '../HOSort'


class InsertSort extends React.Component{
  constructor(props){
    super(props)
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
        <p className="label">插入排序参考代码：</p>
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