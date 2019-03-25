import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from '../App'

import About from '../page/About'
import NotFound from '../page/NotFound'

const Routes = () => (
  <Router>
      <Route exact path="/" component={Home} ></Route>
  </Router>
)

export default Routes