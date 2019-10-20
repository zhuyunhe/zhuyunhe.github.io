import React from 'react'
import styled from 'styled-components'

const Code = (props) => <CodeDemo>{props.children}</CodeDemo>
export default Code

const CodeDemo = styled.pre`
padding: 10px;
background-color: #595959;
color: #fff;
`