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
    this.passEle = this.passEle.bind(this)
  }

  begin(){
    const { treeAlpha, treeBeta } = this.state
    this.isSymmetric(treeAlpha)
    this.isSymmetric(treeBeta)
  }
  passEle(el, value, left) {
    if (left) {
      let root = Object.assign({}, this.state.treeAlpha)
      root = this.findNode(root, el, value)
      this.setState({
        treeAlpha: root
      })
    } else {
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
    // console.log('el:'+el.innerText + ' ,value:'+value + ' ,root:'+ root.value);
    if (!root.el && root.value === value) {
      root.el = el
      return root
    }
    let result = this.findNode(root.left, el, value)
    if(!result){
      result = this.findNode(root.right, el, value)
    }
    return result
  }
  isSymmetric(root) {
    if (root) {
      return this.isMirror(root.left, root.right)
    } else {
      return true
    }
  }
  async isMirror(left, right) {
    if (!left && !right) {
      return true
    } else if (left && right && left.value === right.value) {
      await this.changeColor(left.el, right.el)
      let result = await this.isMirror(left.left, right.right)
      if(!result) return false
      result = await this.isMirror(left.right, right.left)
      return result
    } else {
      await this.changeColor(left.el, right.el, true)
      return false
    }
  }
  changeColor(a, b, flag) {
    let color = '#52c41a'
    flag && (color = '#ff7875')
    return new Promise((resolve, reject) => {
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
        <h2>判断二叉树是否对称</h2>
        <p>如果一个树的左子树和右子树镜像对称，那么这个树是对称的。</p>
        <Button type="primary" onClick={this.begin}>开始</Button>
        <Contain>
          <FlexBox>
            <TreeWrap>
              <p>不对称：</p>
              <TreeNode node={treeAlpha} passEle={this.passEle} left={true}></TreeNode>
            </TreeWrap>
          </FlexBox>
          <FlexBox>
            <TreeWrap>
              <p>对称：</p>
              <TreeNode node={treeBeta} passEle={this.passEle} left={false}></TreeNode>
            </TreeWrap>
          </FlexBox>
        </Contain>
        <p className="label">概述：</p>
        <div className="explain">
          {this.explain}
        </div>
        <p>递归</p>
        <p>时间复杂度：O(n)。因为我们遍历整个输入树一次，所以总的运行时间是O(n)，其中n是树中节点的个数。</p>
        <div className="code">
          <pre>
            {this.code_1}
          </pre>
          
        </div>
        <p>迭代</p>
        <p>除了递归的方法，我们也可以利用队列进行迭代，队列中每两个连续的节点应该是相等的，而且它们的子树互为镜像。最初，队列中包含的是root和root。</p>
        <p>时间复杂度：O(n)。因为我们遍历整个输入树一次，所以总的运行时间是O(n)，其中n是树中节点的个数。</p>
        <div className="code">
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
  height: 160px;
`