import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'

import About from '../../page/About'
import Sort from '../sort/index'
import QuickSort from '../sort/quickSort/QuickSort'
import BubbleSort from '../sort/bubbleSort/BubbleSort'
import InsertSort from '../sort/insertSort/InsertSort'
import MergeSort from '../sort/mergeSort/MergeSort'
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
        </Switch>
      </Content>
    )
  }
}

export default MyContent

const Content = styled.div`
  height: 100%;
  background-color: #fff;
  margin-left: 6px;
`