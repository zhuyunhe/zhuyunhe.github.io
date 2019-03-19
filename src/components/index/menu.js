import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Select, Menu, Icon } from 'antd';
import styled from 'styled-components' 
const Option = Select.Option;
const SubMenu = Menu.SubMenu;

class LeftMune extends Component{
  constructor(){
    super()
    this.state = {
      menuData:[
        {
          name: 'sort',
          children: [
            {
              name: 'easy',
              children: [
                {
                  name: 'bubblesort',
                  link: '/sort/bubblesort'
                }
              ]
            },
            {
              name: 'mid',
              children: [
                {
                  name: 'insertsort',
                  link: '/sort/insertsort'                  
                },
                {
                  name: 'selectsort',
                  link: '/sort/selectsort'
                }
              ]
            },
            {
              name: 'high',
              children: [
                {
                  name: 'quicksort',
                  link: '/sort/quicksort'
                },
                {
                  name: 'mergesort',
                  link: '/sort/mergesort'
                }
              ]
            }
          ]
        },
        {
          name: 'tree',
          children: [
            {
              name: 'easy',
              children: [
                {
                  name: 'reverse'
                }
              ]
            },
            {
              name: 'mid',
              children: [
                {
                  name: 'find'
                }
              ]
            }
          ]
        }
      ],

      menuIndex: 0
    }
  }
  handleChange(){

  }
  handleClick(){

  }
  render(){
    const { menuData, menuIndex} = this.state
    let menu = menuData[menuIndex]
    return(
      <div>
        <Nav>
          <Select defaultValue="sort" style={{ width:'100%'}} onChange={this.handleChange}>
            <Option value="sort">
              <Link to="/sort">sort</Link>
            </Option>
            <Option value="tree">
              <Link to="/tree"></Link>
            </Option>
          </Select>
          <Menu
            theme='light'
            onClick={this.handleClick}
            style={{ margin: '10px 0 0' }}
            mode="inline"
          >
          {
              menu.children.map(menu => {
                return (
                  <SubMenu key={menu.name} title={<span><Icon type="mail" /><span>{menu.name}</span></span>}>
                    {menu.children.map(item=>{
                      return (
                        <Menu.Item key={item.name}>
                          <Link to={item.link}>{item.name}</Link>
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              })
          }
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