import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from '../component/HomePageComponent'
import PopularComponent from "../component/PopularComponent";
import Singin from '../component/SignInComponent'
import Singup from '../component/SignUpComponent'
import ListExam from '../component/ListExamComponent'
import MyTest from '../component/studentComponent/MyTestComponent'
import TestComponent from '../component/TakeATest'
import CreateTestComponent from '../component/CreateTest'
const routes = (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/popular" component={PopularComponent} />
            <Route path="/signin" component={Singin} />
            <Route path="/signup" component={Singup} />
            <Route path="/list-exam" component={ListExam} />
            <Route path="/myex" component={MyTest} />
            <Route path="/test" component={TestComponent} />
            <Route path="/createtest" component={CreateTestComponent} />
        </Switch>
    </div>
)

export default routes