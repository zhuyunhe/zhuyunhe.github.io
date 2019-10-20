import React, {Component} from 'react'
import styled from 'styled-components'

class Bezier extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <p>二次、三次贝塞尔曲线</p>
        <svg width="400" height="300">
          <path d="M 30 75 Q240 30, 300 123" style={{stroke:"black", fill: "none"}}></path>
          <path d="M 100 100 C110 150, 150 180, 400 200" style={{ stroke: "black", fill: "none" }}></path>
        </svg>
      </div>
    )
  }
}

export default Bezier