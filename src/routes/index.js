import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../component/HomePageComponent'
import PopularComponent from "../component/PopularComponent";

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/popular" component={PopularComponent} />
        </Switch>
    </div>
)

export default routes