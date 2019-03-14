import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../App'
import QuickSort from '../components/sort/quickSort/QuickSort'
import BubbleSort from '../components/sort/bubbleSort/BubbleSort'
import About from '../page/About'
import NotFound from '../page/NotFound'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/quicksort" component={QuickSort} ></Route>
      <Route exact path="/bubblesort" component={BubbleSort} ></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact component={NotFound} />
    </Switch>
  </Router>
)

export default Routes