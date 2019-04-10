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
      menuData:{
        'sort':{
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
                },
                {
                  name: 'shellsort',
                  link: '/sort/shellsort'
                }
              ]
            }
          ]
        },
        'tree': {
          name: 'tree',
          children: [
            {
              name: 'easy',
              children: [
                {
                  name: 'reverse',
                  link: '/tree/revertTree'
                },
                {
                  name: 'sameTree',
                  link: '/tree/sameTree'
                },
                {
                  name: 'symmetricTree',
                  link: '/tree/symmetricTree'
                },
                {
                  name: 'balancedTree',
                  link: '/tree/balancedTree'
                }
              ]
            },
            {
              name: 'mid',
              children: [
                {
                  name: 'find',
                  link: '/tree/findTree'
                }
              ]
            }
          ]
        }
    },

      menuIndex: 'sort'
    }
    
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value){
    if(value){
      this.setState({
        menuIndex: value
      })
    }
  }
  handleClick(){

  }
  render(){
    const { menuData, menuIndex} = this.state
    let menu = menuData[menuIndex]
    return(
      <div>
        <Nav>
          <Select defaultValue="sort" style={{ width: '100%' }} onChange={this.handleChange}>

          {Object.keys(menuData).map(item=>{
            return <Option value={item} key={item}>
                    <Link to={'/'+item}>{item}</Link>
                  </Option>
          })}
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