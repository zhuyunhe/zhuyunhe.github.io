import React, {Component} from 'react'
import {TweenMax} from 'gsap/TweenMax'

import './mask.less'

class Gsap extends Component{
  constructor(){
    super();
    this.state = {
      matrix: [
        [1, 1, 2],
        [3, 4, -1],
        [-1, 1, 1]
      ]
    }
  }
  componentDidMount(){
    const myTween = TweenMax.to("#path", 1, { x: 100 });
    myTween.yoyo(true).repeat(-1);
  }
  render(){
    const {matrix} = this.state
    return (
      <div className="">
        <svg width="1000" height="600" viewBox="0 0 1000 600">
          <defs>
            <g id="equation1">
              <text x='5' y='15' fontSize="20px">X</text><text x='20' y='15' fontSize="12px">1</text>
              <text x="30" y="15" fontSize="20px">+</text>
              <text x='50' y='15' fontSize="20px">X</text><text x='65' y='15' fontSize="12px">2</text>
              <text x="83" y="15" fontSize="20px">+</text>
              <text x='95' y='15' fontSize="20px">2X</text><text x='120' y='15' fontSize="12px">3</text>
              <text x="130" y="15" fontSize="20px">=</text>
              <text x='145' y='15' fontSize="20px">6</text>
            </g>
            <g id="equation2">
              <text x='-8' y='40' fontSize="20px">3X</text><text x='20' y='40' fontSize="12px">1</text>
              <text x="30" y="40" fontSize="20px">+</text>
              <text x='50' y='40' fontSize="20px">4X</text><text x='75' y='40' fontSize="12px">2</text>
              <text x="85" y="40" fontSize="20px">-</text>
              <text x='102' y='40' fontSize="20px">X</text><text x='115' y='40' fontSize="12px">3</text>
              <text x="130" y="40" fontSize="20px">=</text>
              <text x='145' y='40' fontSize="20px">5</text>
            </g>
            <g id="equation3">
              <text x='5' y='65' fontSize="20px">X</text><text x='20' y='65' fontSize="12px">1</text>
              <text x="30" y="65" fontSize="20px">+</text>
              <text x='50' y='65' fontSize="20px">X</text><text x='65' y='65' fontSize="12px">2</text>
              <text x="83" y="65" fontSize="20px">+</text>
              <text x='95' y='65' fontSize="20px">2X</text><text x='120' y='65' fontSize="12px">3</text>
              <text x="130" y="65" fontSize="20px">=</text>
              <text x='145' y='65' fontSize="20px">2</text>
            </g>
          </defs>
          <use href="#equation1" x="10"></use>
          <use href="#equation2" x="10"></use>
          <use href="#equation3" x="10"></use>

          <path d="M15,80 L5,80 L5,230 L15,230 " fill="transparent" stroke="grey" />
          {
            matrix.map((line,l) => {
              return (
                <g key={l} className={"line"+l}>{line.map((x, c) => {
                  return (<text textAnchor="start"
                      x={c * 60 + 15} y={(l + 1) * 60 + 40} key={Math.random()}>{x}
                    </text>
                    ) 
                })}
                </g>
              )
            })
          }
          <path d="M145,80 L155,80 L155,230 L145,230 " fill="transparent" stroke="grey" />
          <text x="170" y="160">=</text>
          <path d="M200,80 L195,80 L195,230 L200,230 " fill="transparent" stroke="grey" />
          <g>
            <text x="210" y="100">6</text>
            <text x="210" y="160">5</text>
            <text x="210" y="220">2</text>
          </g>
          <path d="M230,80 L235,80 L235,230 L230,230 " fill="transparent" stroke="grey" />
        </svg>
      </div>
    )
  }
}

export default Gsap