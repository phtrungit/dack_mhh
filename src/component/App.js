import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FoooterComponent from'./FoooterComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <HomeComponent></HomeComponent>
        <PopularComponent></PopularComponent>
        <RegisterComponent></RegisterComponent>
        <ServiceComponent></ServiceComponent>
        <EventsComponent></EventsComponent>
        <FoooterComponent></FoooterComponent>
      </div>
    );
  }
}

export default App;
