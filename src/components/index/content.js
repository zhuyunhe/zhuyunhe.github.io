import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import About from './about'
import Sort from '../sort/index'
import QuickSort from '../sort/quickSort/QuickSort'
import BubbleSort from '../sort/bubbleSort/BubbleSort'
import InsertSort from '../sort/insertSort/InsertSort'
import MergeSort from '../sort/mergeSort/MergeSort'
import SelectSort from '../sort/selectSort/SelectSort'
import ShellSort from '../sort/shellSort/ShellSort'

import Tree from '../tree'
import RevertTree from '../tree/RevertTree'
import SameTree from '../tree/sameTree'
import SymmetricTree from '../tree/symmetricTree'
import BalancedTree from '../tree/balancedTree'

import Svg from '../svg/index'
import SvgBasic from '../svg/basic'
import SvgPath from '../svg/path'
import Bezier from '../svg/bezier'
import Animation from '../svg/animate'
import DP from '../svg/dp_logo'
import Spinner from '../svg/spinner'
import SVGText from '../svg/text'
import Mask from '../svg/mask'
import Gsap from '../svg/gsap'
import Coordinate from '../svg/coordinate'
import LeftMenu from './menu'

import { Layout, Menu, Icon } from 'antd';
const {Sider} = Layout



class MyContent extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Layout>
        <Sider width={200} theme='light'>
          <LeftMenu></LeftMenu>
        </Sider>
        <Content className="animation">
          <Switch>
            <Route exact path="/animation/" component={About}></Route>
            <Route exact path="/animation/sort" component={Sort}></Route>
            <Route exact path="/animation/sort/quicksort" component={QuickSort} ></Route>
            <Route exact path="/animation/sort/bubblesort" component={BubbleSort} ></Route>
            <Route exact path="/animation/sort/insertsort" component={InsertSort} ></Route>
            <Route exact path="/animation/sort/mergesort" component={MergeSort} ></Route>
            <Route exact path="/animation/sort/selectsort" component={SelectSort} ></Route>
            <Route exact path="/animation/sort/shellsort" component={ShellSort}></Route>

            <Route exact path="/animation/tree" component={Tree}></Route>
            <Route exact path="/animation/tree/revertTree" component={RevertTree} ></Route>
            <Route exact path="/animation/tree/sameTree" component={SameTree} ></Route>
            <Route exact path="/animation/tree/symmetricTree" component={SymmetricTree} ></Route>
            <Route exact path="/animation/tree/balancedTree" component={BalancedTree} ></Route>
            
            <Route exact path="/animation/svg" component={Svg}></Route>
            <Route exact path="/animation/svg/basic" component={SvgBasic}></Route>
            <Route exact path="/animation/svg/path" component={SvgPath}></Route>
            <Route exact path="/animation/svg/bezier" component={Bezier}></Route>
            <Route exact path="/animation/svg/animation" component={Animation}></Route>
            <Route exact path="/animation/svg/dp" component={DP}></Route>
            <Route exact path="/animation/svg/spinner" component={Spinner} ></Route>
            <Route exact path="/animation/svg/text" component={SVGText} ></Route>
            <Route exact path="/animation/svg/mask" component={Mask} ></Route>
            <Route exact path="/animation/svg/gsap" component={Gsap} ></Route>
            <Route exact path="/animation/svg/coordinate" component={Coordinate} ></Route>
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default MyContent

const Content = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  margin-left: 6px;
  padding: 20px 30px;
  .label{
    font-size: 18px;
    color:#0d1a26;
  }
  p{
    margin: 1em 0;
  }
  .explain{
    color: #314659;
  }
  .sort-con{
    position: relative;
    height: 100px;
  }
  .code{
    padding: 10px;
    background-color: #595959;
    color: #fff;
  }
`