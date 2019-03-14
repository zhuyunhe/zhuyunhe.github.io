import React, {Component} from 'react'
import { Select, Menu, Icon } from 'antd';
import styled from 'styled-components' 
const Option = Select.Option;
const SubMenu = Menu.SubMenu;

class LeftMune extends Component{
  constructor(){
    super()
  }
  handleChange(){

  }
  handleClick(){

  }
  render(){
    return(
      <div>
        <Nav>
          <Select defaultValue="lucy" style={{ width:'100%'}} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Menu
            theme='light'
            onClick={this.handleClick}
            style={{ margin: '10px 0 0' }}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Nav>
      </div>
    )
  }
}

export default LeftMune

const Nav = styled.div`
  padding: 8px 4px 8px 4px;
  text-align:left;
`