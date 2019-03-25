import React, {Component} from 'react'
import HOSort from '../HOSort'
class ShellSort extends Component{
  constructor(props){
    
    super(props)
    this.explain = `希尔排序的实质就是分组插入排序，该方法又称为缩小增量排序。
                    它通过比较相距一定间隔（gap）的元素来工作，随着算法的进行各趟比较的元素的间隔（gap）逐渐减小（gap=gap/2），
                    直到只比较相邻元素（gap=1时），比较完相邻元素后，整个数组排序完成，此时gap=1/2=0，
                    算法结束。 `
    this.code = `
function shellSort(arr){
  var n = arr.length;
  //增量gap
  var gap = parseInt(n/2);
  for(; gap>0; gap=parseInt(gap/2)){
    for(var i=0; i<gap; i++){
      //对每个子序列进行插入排序
      for(var j=i+gap; j<n; j+=gap){
        var temp = arr[j];
        for(var k=j-gap; k>=0&&temp<arr[k]; k-= gap){
          arr[k+gap] = arr[k];
        }
          arr[k+gap] = temp;
      }
    }
  }

  console.log(arr);
}
    `
  }

  componentDidMount() {
    this.props.setSort(this.shellSort.bind(this))
  }

  async shellSort(){
    let arr = this.props.arr.slice()
    let gap = parseInt(arr.length / 2)
    for (; gap > 0; gap = parseInt(gap/2)) {
      for (let i = 0; i < gap; i++) {
        for (let j = i + gap; j < arr.length; j += gap) {
          let temp = arr[j]._value
          let k
          try {
            for (k = j - gap; k>=0&&arr[k]._value>temp; k -= gap) {
              // arr[k + gap]._value = arr[k]._value
              await this.props.animate({
                x1: arr[k].x,
                x2: arr[k+gap].x,
                i: k,
                j: k+gap
              })
              this.props.updateElementArr(k, k+gap)
              let _temp = arr[k + gap]
              arr[k + gap] = arr[k]
              arr[k] = _temp

              let _x = arr[k + gap].x
              arr[k + gap].x = arr[k].x
              arr[k].x = _x
            }
            // debugger
          } catch (error) {
            console.log(k)
            console.error(error)
          }
        }
      }
    }
    this.props.finish()
    console.log(arr.map(item => item._value))
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

ShellSort = HOSort(ShellSort)

export default ShellSort