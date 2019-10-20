import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
const {SubMenu} = Menu

class LeftMenu extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <Menu
          theme='light'
          onClick={this.handleClick}
          style={{ margin: '10px 0 0' }}
          mode="inline"
        >
          <Menu.Item>
            <Link to='/css/layout'>
              布局
            </Link>
          </Menu.Item>
          <Menu.Item key="10">
            <Link to='/css/ui'>
              视觉
            </Link>
          </Menu.Item>
          <Menu.Item key="11">
            <Link to='/css/mobile'>
              移动端问题
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default LeftMenu