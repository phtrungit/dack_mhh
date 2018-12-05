import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../component/HomePageComponent'
import PopularComponent from "../component/PopularComponent";
import Singin from '../component/SignInComponent'
import Singup from '../component/SignUpComponent'

const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/popular" component={PopularComponent} />
            <Route path="/signin" component={Singin} />
            <Route path="/signup" component={Singup} />
        </Switch>
    </div>
)

export default routes