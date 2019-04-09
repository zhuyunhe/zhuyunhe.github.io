import React, { Component } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import { Button } from 'antd';

import TreeNode from './treeNode'
class RevertTree extends Component{
  constructor(){
    super()
    this.state = {
      treeDate: {
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
      }
    }
    this.explain = `翻转一棵二叉树一般可以用递归或深度优先搜索来处理。  
                    递归比较简单好理解，就是当树的根节点存在时，先翻转其左右子节点，然后再分别把其左右子节点当做左右两棵子树的根节点，
                    继续翻转左右子树的左右子节点，依次类推，直到翻转到叶子节点（左右子节点不存在）时完成算法。`
    
    this.code = `
function invertTree(root){
  if(!root){
    return root;
  }
  var temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  //递归翻转左右子树
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
    `
    this.passEle = this.passEle.bind(this)
    this.begin = this.begin.bind(this)    
    this.revert = this.revert.bind(this)
  }
  passEle(el, value) {
    let root = Object.assign({}, this.state.treeDate) 
    root = this.findNode(root, el, value)
    this.setState({
      treeDate: root
    })
  }
  findNode(root, el, value) {
    if (!root) {
      return
    }
    // console.log('el:'+el.innerText + ' ,value:'+value + ' ,root:'+ root.value);
    if (!root.el && root.value === value) {
      root.el = el
      return root
    }
    let result = this.findNode(root.left, el, value)
    if (!result) {
      result = this.findNode(root.right, el, value)
    }
    return result
  }
  async begin(){
    let root = Object.assign({}, this.state.treeDate) 
    root = await this.revert(root)
  }

  async revert(root){
    if(!root){
      return root
    }
    
    //动画
    //递归翻转左右子树
    let p1, p2 = null
    if(root.left){
      p1 = anime({
        targets: root.left.el,
        easing: 'linear',
        keyframes: [
          { left: '40px', backgroundColor: '#722ed1' },
        ],
        duration: 2000
      }).finished
    }
    if(root.right){
      p2 = anime({
        targets: root.right.el,
        easing: 'linear',
        keyframes: [
          { left: '-40px', backgroundColor: '#722ed1' },
        ],
        duration: 2000
      }).finished
    }
    
    

    await Promise.all([p1, p2])
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    await this.revert(root.left);
    await this.revert(root.right);
    return root
  }

  render(){
    const { treeDate } = this.state
    return (
      <div>
        <h2>翻转一棵二叉树</h2>
        <Button type="primary" onClick={this.begin}>开始</Button>
        <TreeWrap>
          <TreeNode node={treeDate} passEle={this.passEle}></TreeNode>
        </TreeWrap>
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
export default RevertTree

const TreeWrap = styled.div`
  position: relative;
  height: 120px;
`