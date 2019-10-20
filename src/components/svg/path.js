import React, {Component} from 'react'
import styled from 'styled-components'

class Path extends Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <svg width="300" height="300">
          <Paths d="M50,125 C 100,25 150, 225, 200,125"  fill="none" stroke="#ff6633"></Paths>
        </svg>
        {/* apple标志 */}
        <svg width="600" height="600">
          <defs>
            <linearGradient id="linear">
              <stop offset="5%" stopColor="#F60" />
              <stop offset="95%" stopColor="#FF6" />
            </linearGradient>
          </defs>
          <path
            strokeLinecap="round"
            fill="none"
            strokeWidth="10"
            stroke="url(#linear)"
            d="
              M 197,148
              A 87,87,0,0,0,79,214
              A 282,282,0,0,0,148,438
              A 54,54,0,0,0,212,448
              A 87,87,0,0,1,288,448
              A 54,54,0,0,0,352,438
              A 282,282,0,0,0,407,350
              A 87,87,0,0,1,413,189
              A 87,87,0,0,0,303,148
              A 141,141,0,0,1,197,148
              Z
            "
          />
          <path
            strokeLinecap="round"
            fill="none"
            stroke="url(#linear)"
            strokeWidth="10"
            d="
              M 237,141
              A 87,87,0,0,0,314,64
              A 87,87,0,0,0,237,141
              Z
            "
          />
        </svg>
        {/* 八卦 */}
        <svg width="400px" height="300px">
          <ellipse cx="154" cy="154" rx="150" ry="120" style={{"fill": "#999"}}>

          </ellipse>
          <ellipse cx="152" cy="152" rx="150" ry="120" style={{ "fill": "#cef" }}>

          </ellipse>
          <path d="M 302 152 A 150 120, 0, 1, 0, 2 152
                             A 75 60, 0, 1, 0, 152, 152" style={{ "fill": "#fcc" }}>

          </path>
          <path d="M 152 152 A 75 60, 0, 1, 1, 302 152" style={{ "fill": "#cef" }}></path>

        </svg>
      </div>
    )
  }
}

export default Path

const Ball = styled.div`
width: 10px;
height: 10px;
background-color: red;
border-radius: 50%;

offset-path: path('M10 80 Q 77.5 10, 145 80 T 280 80');
offset-distance: 0%;

animation: red-ball 2s linear alternate infinite;
@keyframes red-ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
`

const Paths = styled.path`
  stroke-dasharray: 7%;
  //animation: move 3s linear infinite;
  @keyframes move {
    0%{
      stroke: black;
      stroke-dashoffset: 0px;  
      //stroke-dasharray: 0, 100px;
    }
    100%{
      stroke: #ff6633;
      stroke-dashoffset: 100px;  
      //stroke-dasharray: 100px, 100px;
    }
  }
`