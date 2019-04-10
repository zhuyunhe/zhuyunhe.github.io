import React, {Component} from 'react'
import styled from 'styled-components'
import TreeNode from './treeNode'

class BalancedTree extends Component {
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
          }
        },
        right: {
          value: 2,
          right: {
            value: 4,
            left: {
              value: 8
            },
            right: {
              value: 6
            }
          }
        }
      }
    }
    this.code = `
var isBalanced = function(root) {
  if(!root){
      return true
  }

  if(Math.abs( treeDepth(root.left) - treeDepth(root.right)) > 1){
      return false
  } else{
      return isBalanced(root.left) && isBalanced(root.right)
  }
};
//计算树的高度
var treeDepth = function(root) {
  if(!root){
      return 0
  }
  return 1 + Math.max(treeDepth(root.left), treeDepth(root.right))
}
`
  }

  render(){
    const {treeAlpha, treeBeta} = this.state
    return (
      <div>
        <h2>判断二叉树是否平衡</h2>
        <p>一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。</p>
        <Contain>
          <FlexBox>
            <TreeWrap>
              <p>不平衡：</p>
              <TreeNode node={treeAlpha} passEle={this.passEle} left={true}></TreeNode>
            </TreeWrap>
          </FlexBox>
          <FlexBox>
            <TreeWrap>
              <p>平衡：</p>
              <TreeNode node={treeBeta} passEle={this.passEle} left={false}></TreeNode>
            </TreeWrap>
          </FlexBox>
        </Contain>
        <div className="code">
          <pre>
            {this.code}
          </pre>
        </div>
      </div>
    )
  }
}

export default BalancedTree

const Contain = styled.div`
  display: flex;
`
const FlexBox = styled.div`
  flex: 1 1 50%;
`
const TreeWrap = styled.div`
  position: relative;
  height: 160px;
`