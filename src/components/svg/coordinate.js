import React, {Component} from 'react'
import { TweenMax, TweenLite, TimelineMax } from 'gsap/TweenMax'

class Coordinate extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
    var a = (a) => {
      return document.querySelector(a)
    }
    const vector1 = a('#vector1')
    const nib = a('#nib')
    const vector1Length = vector1.getTotalLength()

    // TweenMax.to(vector1, 2, { strokeDasharray: vector1Length})

    const tl = new TimelineMax()
    tl.to(nib, 2, {
      x: Number(vector1.getAttribute("x1")) + 300,
      y: -Number(vector1.getAttribute("y1")) + 300
    })

    tl.to(nib, 2, {
      x: Number(vector1.getAttribute("x2")) + 300,
      y: -Number(vector1.getAttribute("y2")) + 300
    })
    tl.add(TweenLite.to(vector1, 2, { strokeDasharray: vector1Length}), '-=2');
  }

  render(){
    return (
      <div>
        <svg width="600" height="600">
          {/* 坐标系中的虚线 */}
          {
            Array(29).fill(1).map((item, index) => {
              return <path key={index} d={`M0,${(index + 1) * 20} L590,${(index + 1) * 20}`} stroke="grey" strokeDasharray="10 10" strokeDashoffset="5"></path>
            })
          }
          {
            Array(3).fill(1).map((item, index) => {
              return <text key={index} x="290" y={`${((index) * 100) + 5}`} textAnchor="middle">{15-index*5}</text>
            })
          }
          {
            Array(29).fill(1).map((item, index) => {
              return <path key={index} d={`M${(index + 1) * 20},0 L${(index + 1) * 20},590`} stroke="grey" strokeDasharray="10 10" strokeDashoffset="5"></path>
            })
          }
          {
            Array(3).fill(1).map((item, index) => {
              return <text key={index} y="315" x={`${((index) * 100) + 295}`} textAnchor="middle">{index * 5}</text>
            })
          }
          {/* X轴 */}
          <path d="M0,300 L590,300" stroke="grey"></path>
          {/* X轴箭头 */}
          <path d="M590,295 L590,305 L600,300 Z" fill="gray"></path>
          {/* Y轴 */}
          <path d="M300,0 L300,600" stroke="grey"></path>
          {/* Y轴箭头 */}
          <path d="M295,10 L305,10 L300,0 Z" fill="gray"></path>
          {/* 笔尖 */}
          <g id="nib" x="0" y="0">
            <g id="nibInnerGroup">
            <polygon fill="#1d1d1d" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" points="0,0 8.7,20.9 20.7,27.5 27.5,20.8 
              19.9,9 	"/>
            <rect x="19.7" y="23.4" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -11.9343 28.0365)" fill="#1d1d1d" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" width="16.4" height="10.1"/>
            <line fill="none" stroke="#ededed" strokeWidth="2" strokeMiterlimit="10" x1="24.2" y1="24.1" x2="16.6" y2="16.6"/>
            <circle fill="#ededed" cx="16.6" cy="16.6" r="2.5"/>
            </g>
          </g>
          {/* 向量 */}
          <line id="vector1" x1="20" y1="20" x2="80" y2="100" transform="matrix(1 0 0 -1 300 300)" stroke="#1890ff" style={{"strokeDasharray": "0 100%"}} >

          </line>
        
        </svg>
      </div>
    )
  }
}

export default Coordinate