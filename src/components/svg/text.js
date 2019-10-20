import React, {Component} from 'react'
import './text.less'

class TextDemo extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    
  }

  render(){
    return (
      <div className="text-wrap">
        <p>svg text</p>
        <svg viewBox="0 0 800 600">
          <symbol id="s-text">
            <text textAnchor="middle"
              x="50%"
              y="35%"
              className="text--line"
            >
              Elastic
            </text>
            <text textAnchor="middle"
              x="50%"
              y="68%"
              className="text--line2"
            >
              Stroke
            </text>
          </symbol>
          <g className="g-ants">
            <use href="#s-text"
              className="text-copy"></use>
            <use href="#s-text"
              className="text-copy"></use>
            <use href="#s-text"
              className="text-copy"></use>
            <use href="#s-text"
              className="text-copy"></use>
            <use href="#s-text"
              className="text-copy"></use>
          </g >
        </svg>
      </div>
    )
  }
}

export default TextDemo