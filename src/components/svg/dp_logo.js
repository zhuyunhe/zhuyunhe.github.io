import React, {Component} from 'react'
import style from 'styled-components'

class Dp extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div>
        <p>DP-logo</p>
        <svg width="500" height="500">
          <rect x="0" y="0" rx="60" ry="60" width="500" height="500" fill="#ff6633"></rect>
          <g transform="rotate(-5, 250, 250)"> 
            <circle cx="245" cy="120" r="90" className="" fill="#fff" />
            <path fill="none"  stroke="#fff" d="
            M100,120
            A145,145, 0 0 0 390,120" strokeWidth="60" />
            <path fill="none"  stroke="#fff" d="
            M100,440
            A150,150, 0 0 1 400,440" strokeWidth="60" />
          </g>
        </svg>
      </div>
    )
  }
}

export default Dp