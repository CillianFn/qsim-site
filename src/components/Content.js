import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Steps from './Steps'
import Visual from './Visual'


const Content = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/visual" component={Visual}/>
      <Route path="/steps" component={Steps}/>
    </Switch>
  )
}

export default Content
