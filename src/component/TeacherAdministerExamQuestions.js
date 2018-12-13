import React, { Component } from 'react';
import HeaderTeacher from './HeaderTeacher';
import listExamTeacher from './ListExamTeacher';
import PopularComponent from './PopularComponent'
import RegisterComponent from './RegisterComponent'
import ServiceComponent from './ServiceComponent'
import EventsComponent from './EventsComponent'
import FoooterComponent from'./FoooterComponent'
import SearchComponent from './SearchComponent'
class TeacherAdministerExamQuestions extends Component {
  render() {
    return (
      <div className="App">
        <HeaderTeacher></HeaderTeacher>
        <listExamTeacher></listExamTeacher>

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

export default TeacherAdministerExamQuestions;
