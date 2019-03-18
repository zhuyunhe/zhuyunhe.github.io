import React from 'react'
import styled from 'styled-components'
class Home extends React.Component{
  constructor(props){
    super(props)
    //禁止在构造函数中调用setState，可以直接给state设置初始值
  }

  componentDidMount(){

  }
  

  render(){
    return(
    <div>
      123
    </div>
    )
  }
}

export default Home


const Wrapper = styled.section`
`;

const Button = styled.button`
  color: #fff;
  background-color: palevioletred;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin-left: 100px;
  margin-bottom: 30px;
`

