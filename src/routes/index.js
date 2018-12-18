import React from 'react'
import { Route, Switch } from 'react-router'
import HomePageTeacher from '../component/HomePageTeacher'
import HomePageStudent from '../component/HomePageStudent'
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
            <Route exact path="/" component={HomePageStudent} />
            <Route exact path="/t" component={HomePageTeacher} />
            <Route path="/popular" component={PopularComponent} />
            <Route path="/login" component={Singin} />
            <Route path="/signup" component={Singup} />
            <Route path="/list-exam" component={ListExam} />
            <Route path="/myex" component={MyTest} />
            <Route path="/test" component={TestComponent} />
            <Route path="/createtest" component={CreateTestComponent} />
        </Switch>
    </div>
)

export default routes