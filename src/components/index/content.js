import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import About from '../../page/About'
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
class MyContent extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <Content>
        <Switch>
          <Route exact path="/" component={About}></Route>

          <Route exact path="/sort" component={Sort}></Route>
          <Route exact path="/sort/quicksort" component={QuickSort} ></Route>
          <Route exact path="/sort/bubblesort" component={BubbleSort} ></Route>
          <Route exact path="/sort/insertsort" component={InsertSort} ></Route>
          <Route exact path="/sort/mergesort" component={MergeSort} ></Route>
          <Route exact path="/sort/selectsort" component={SelectSort} ></Route>
          <Route exact path="/sort/shellsort" component={ShellSort}></Route>

          <Route exact path="/tree" component={Tree}></Route>
          <Route exact path="/tree/revertTree" component={RevertTree} ></Route>
          <Route exact path="/tree/sameTree" component={SameTree} ></Route>
          <Route exact path="/tree/symmetricTree" component={SymmetricTree} ></Route>

        </Switch>
      </Content>
    )
  }
}

export default MyContent

const Content = styled.div`
  position: relative;
  height: 100%;
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