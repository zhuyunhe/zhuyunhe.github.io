import React, { Component } from 'react'
import styled from 'styled-components'

class Animation extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    
  }
  
  render(){
    return (
      <div>
        <p>
          svg动画
        </p>
        <svg>
          <g transform="translate(100, 60)">
            <rect x="-10" y="-10" width="20" height="20" style={{"fill":"#ff9","stroke":"black"}}>
              <animateTransform attributeName="transform" type="scale" from="1" to="4 2"
                additive="sum" begin="0s" dur="4s" fill="freeze"
              >
              </animateTransform>
              <animateTransform attributeName="transform" type="rotate" from="0" to="45"
                additive="sum" begin="0s" dur="4s" fill="freeze"
              >
              </animateTransform>
            </rect>
          </g>
          <g>
            <rect x="0" y="0" width="30" height="30" style={{"fill": "#ccc"}}></rect>
            <circle cx="30" cy="30" r="15" style={{"fill": "#cfc", "stroke": "green"}}></circle>
            <animateMotion from="0,0" to="60 30" dur="6s" fill="freeze"></animateMotion>
          </g>
        </svg>
        <p>路径动画</p>
        <svg width="1000" height="1000">
          <Path d="M50,125 C 100,25 150, 225, 200,125" style={{"fill": "none", "stroke": "blue"}}></Path>
          	<path fill="#E8D320" d="M106.461,275.036c-0.349,0.277-0.433,0.754-0.188,1.066c2.043,2.535,4.219,4.961,6.444,7.338
			      c0.278,0.279,0.764,0.256,1.084-0.055l4.005-3.871c-2.444-2.554-4.806-5.189-6.999-7.963L106.461,275.036z"/>
        </svg>
      </div>
    )
  }
}

export default Animation;

const Path = styled.path`
  stroke-dasharray: 3px, 1px;
  animation: move 3s linear forwards;
  @keyfrmmes move {
    0%{
      stroke-dasharray: 0, 100px;
    }
    100%{
      stroke-dasharray: 100px, 100px;
    }
  }
`