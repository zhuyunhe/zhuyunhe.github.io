import React from 'react'
const FancyButton = React.forwardRef((props, ref) => (
  <p>
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  </p>
))


export default FancyButton