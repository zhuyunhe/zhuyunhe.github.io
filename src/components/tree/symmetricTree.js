import React, {Component} from 'react'
import styled from 'styled-components'
import { Button } from 'antd';
import TreeNode from './treeNode'

class SymmetricTree extends Component {
  constructor(){
    super()
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
    this.explain = ``
    this.code_1 = `
var isSymmetric = function(root) {
  if(root){
      return isMirror(root.left, root.right)
  }else{
      return true
  }
};
function isMirror(left, right){
  if(!left && !right){
      return true
  }else if(left && right && left.val===right.val){
    return isMirror(left.left, right.right) && isMirror(left.right, right.left) 
  }else{
    return false
  }
}
    `
    this.code_2 = `
var isSymmetric = function(root) {
let a =[]
a.push(root)
a.push(root)
while(a.length>0){
let b = a.pop()
let c = a.pop()
    if(!b && !c) continue
if(!b || !c) return false
if(b.val !== c.val) return false
a.push(b.left)
a.push(c.right)
a.push(b.right)
a.push(c.left)
}
return true
}
    `

    this.begin = this.begin.bind(this)
  }

  begin(){

  }

  render(){
    const { treeAlpha, treeBeta } = this.state

    return(
      <div>
        <h2>判断二叉树是否对称</h2>
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
        <div className="code">
          <p>递归</p>
          <pre>
            {this.code_1}
          </pre>
          <p>迭代</p>
          <pre>
            {this.code_2}
          </pre>
        </div>
      </div>
    )
  }
}

export default SymmetricTree

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