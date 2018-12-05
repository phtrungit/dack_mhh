import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FoooterComponent from'./FoooterComponent'
import SearchComponent from './SearchComponent'
class HomePageComponent extends Component {
    render() {
        return (
            <div className="App">
                <HeaderComponent></HeaderComponent>
                <HomeComponent></HomeComponent>
            

               <div class="row">
                                <div class="col-sm-2">
                                </div>
                                <div class="col-sm-8">
                                    <form>
                                        <div class="form-row">
                                            <div class="col">
                                            <input type="text" class="form-control" placeholder="Tìm kiếm khóa học dành riêng cho bạn ..."></input>
                                            </div>
                                            <div class="col-auto">
                                                <button type="submit" class="btn btn-primary"> <span class="glyphicon glyphicon-search"></span> Tìm kiếm</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="col-sm-2">

                                </div>
                            </div>
                <SearchComponent></SearchComponent>
                <PopularComponent></PopularComponent>
                <RegisterComponent></RegisterComponent>
                <ServiceComponent></ServiceComponent>
                <EventsComponent></EventsComponent>
                <FoooterComponent></FoooterComponent>
            </div>
        );
    }
}
export default HomePageComponent;
