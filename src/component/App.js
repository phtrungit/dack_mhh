import React, { Component } from 'react';
import '../App.css';
import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import PopularComponent from './PopularComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <HomeComponent></HomeComponent>
        <PopularComponent></PopularComponent>
      </div>
    );
  }
}

export default App;
