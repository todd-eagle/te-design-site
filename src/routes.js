import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Landing from './components/Landing/Landing'
import ReactSec from './components/ReactSec/ReactSec'

export default (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/react" component={ReactSec} />
    </Switch>
)