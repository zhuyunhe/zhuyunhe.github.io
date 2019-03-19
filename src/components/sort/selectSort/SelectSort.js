import React , {Component} from 'react'
import HOSort from '../HOSort'
import { min } from 'moment';

class SelectSort extends Component{
  constructor(props){
    super(props)
    this.code = `
      123
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