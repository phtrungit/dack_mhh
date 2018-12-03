import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../component/HomeComponent'
import PopularComponent from "../component/PopularComponent";

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/popular" component={PopularComponent} />
        </Switch>
    </div>
)

export default routes