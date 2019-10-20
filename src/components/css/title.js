import React from 'react'
import styled from 'styled-components'

const Title = (props) => <CssTitle>{props.children}</CssTitle>
export default Title

const CssTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #1890ff;
`