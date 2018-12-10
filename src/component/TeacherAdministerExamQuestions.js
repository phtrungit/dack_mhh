import React, { Component } from 'react';
import HeaderTeacher from './HeaderTeacher';
import listExamTeacher from './ListExamTeacher';

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
