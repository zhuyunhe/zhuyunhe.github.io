import React from 'react'
import styled  from 'styled-components'

class About extends React.Component {
  constructor() {
    super()
  }
  switchPosition(){
    
  }
  render() {
    return(
      <AboutMe>
        <h1>
          hi, welcome
        </h1>
        <div>
          <ul>
            <li>
              <label>name</label> : 朱云鹤
            </li>
            <li>
              <label>e-mail</label> : bupt_zhuyunhe@163.com
            </li>
          </ul>
        </div>

      </AboutMe>
    )
  }
}

export default About

const AboutMe = styled.div`
  height: 100%;
  padding: 8px 4px 8px 4px;
  ul{
    li{
      list-style: none
      label:{

      }
    }
  }
`