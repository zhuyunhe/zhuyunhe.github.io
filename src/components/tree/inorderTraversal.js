import React, {Component} from 'react'
import styled from 'styled-components'
import TreeNode from './treeNode'

class InorderTraversal extends Component {
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
  }

  render(){
    return [
      <div>
        <h2>中序遍历二叉树</h2>
        <p>用递归来写比较简单，但用迭代比较好。</p>
      </div>
    ]
  }
}