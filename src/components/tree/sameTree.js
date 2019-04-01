/* 比较两科二叉树是否相等 */
import React, {Component} from 'react'
import styled from 'styled-components'
import { Button } from 'antd';
import TreeNode from './treeNode'

class SameTree extends Component {
  constructor(){
    super();
    this.state = {
      treeAlpha: {
        value: 1,
        root: true,
        left: {
          value: 2,
          left: {
            value: 4,
            left: {
              value: 6
            },
            right: {
              value: 7
            }
          },
          right: {
            value: 5
          }
        },
        right: {
          value: 3
        }
      },
      treeBeta: {
        value: 1,
        root: true,
        left: {
          value: 2,
          left: {
            value: 4,
            left: {
              value: 6
            },
            right: {
              value: 8
            }
          },
          right: {
            value: 5
          }
        },
        right: {
          value: 3
        }
      }
    }
    this.explain = `如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。`
    this.code = `
function compare(treeAlpha, treeBeta){
  if (!treeAlpha && !treeBeta){
    return true
  }
  if (treeAlpha && treeBeta && treeAlpha.value===treeBeta.value){
    return compare(treeAlpha.left, treeBeta.left) && compare(treeAlpha.right, treeBeta.right)
  }else{
    return false
  }
}
    `

    this.begin = this.begin.bind(this)
    this.passEle = this.passEle.bind(this)
  }
  passEle(el, value, left) {
    if(left){
      let root = Object.assign({}, this.state.treeAlpha)
      root = this.findNode(root, el, value)
      this.setState({
        treeAlpha: root
      })
    }  else{
      let root = Object.assign({}, this.state.treeBeta)
      root = this.findNode(root, el, value)
      this.setState({
        treeBeta: root
      })
    }
    
  }
  findNode(root, el, value) {
    if (!root) {
      return
    }
    if (root.value === value) {
      root.el = el
    }
    this.findNode(root.left, el, value)
    this.findNode(root.right, el, value)

    return root
  }

  begin(){
    const { treeAlpha, treeBeta } = this.state
    this.compare(treeAlpha, treeBeta)
  }

  async compare(treeAlpha, treeBeta){
    if (!treeAlpha && !treeBeta){
      return true
    }
    if (treeAlpha && treeBeta && treeAlpha.value===treeBeta.value){
      await this.changeColor(treeAlpha.el, treeBeta.el)
      let result = await this.compare(treeAlpha.left, treeBeta.left)
      if(!result) return false
      result = await this.compare(treeAlpha.right, treeBeta.right)
      return result 
    }else{
      //不相同的节点红色标明
      await this.changeColor(treeAlpha.el, treeBeta.el, true)
      return false
    }
  }
  changeColor(a, b, flag){
    let color = '#52c41a'
    flag && (color ='#ff7875')
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        a.style.color = color
        b.style.color = color
        resolve()
      }, 1000);
    })
  }
  render(){
    const { treeAlpha, treeBeta } = this.state
    return(
      <div>
        <h2>判断两棵二叉树是否等价</h2>
        <Button type="primary" onClick={this.begin}>开始</Button>
        <Contain>
          <FlexBox>
            <TreeWrap>
              <TreeNode node={treeAlpha} passEle={this.passEle} left={true}></TreeNode>
            </TreeWrap>
          </FlexBox>
          <FlexBox>
            <TreeWrap>
              <TreeNode node={treeBeta} passEle={this.passEle} left={false}></TreeNode>
            </TreeWrap>
          </FlexBox>
        </Contain>
        <p className="label">概述：</p>
        <div className="explain">
          {this.explain}
        </div>
        <p className="label">参考代码：</p>
        <div className="code">
          <pre>
            {this.code}
          </pre>
        </div>
      </div>
    )
  }
}

export default SameTree

const Contain = styled.div`
  display: flex;
`
const FlexBox = styled.div`
  flex: 1 1 50%;
`
const TreeWrap = styled.div`
  position: relative;
  height: 120px;
`