import React, {Component} from 'react'
import styled from 'styled-components'
class SvgBasic extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <svg height="100" width="100">
          <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="red" />
        </svg>
        <svg width="400" height="180">
          <rect x="0" y="20" width="150" height="150"
            style={{fill:"blue","stroke":"pink","strokeWwidth":"5","fillOpacity":"0.1","strokeOpacity":"0.9"}} />
        </svg>
        <svg height="140" width="500">
          <ellipse cx="120" cy="80" rx="100" ry="50"
            style={{"fill":"yellow", "stroke":"purple", "strokeWidth":"2"}} />
        </svg>
        <svg height="210" width="500">
          {/* 
          点与点之间，用空格间隔
          类似一笔画一个五角星
          */}
          <polygon points="100,10 40,198 190,78 10,78 160,198"
            style={{"fill":"lime", "fillRule":"nonzero"}} />
        </svg>
        <svg>
          <line style={{"stroke": "black", "strokeWidth": 2}} strokeDasharray="10 10" strokeDashoffset="20%" x1="10" y1="10" x2="190" y2="10" />
        </svg>
      </div>
    )
  }
}

export default SvgBasic