import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FoooterComponent from './FoooterComponent'
class CoursePageComponent extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent></HeaderComponent>
            
                    <div class="home_content">
                        <h1>Courses</h1>
                    </div>
                <PopularComponent></PopularComponent>
                <FoooterComponent></FoooterComponent>
            </div>
        );
    }
}
export default CoursePageComponent;
