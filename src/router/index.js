import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../App'
import Sort from '../components/sort'
import QuickSort from '../components/sort/quickSort/QuickSort'
import BubbleSort from '../components/sort/bubbleSort/BubbleSort'
import InsertSort from '../components/sort/insertSort/InsertSort'
import About from '../page/About'
import NotFound from '../page/NotFound'

const Routes = () => (
  <Router>
      <Route exact path="/" component={Home} ></Route>
      {/* <Route exact path="/sort" component={Sort} ></Route>       */}
  </Router>
)

export default Routes