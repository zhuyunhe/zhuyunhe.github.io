import React, {Component} from 'react'
import styled from 'styled-components'
import './spinner.less'

class Spinner extends Component {
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render(){
    return (
      <div>
        <p>
          Spinner
        </p>
        <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66">
          <circle className="path" fill="none" stroke="#ff6633" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </div>
    )
  }
}

export default Spinner