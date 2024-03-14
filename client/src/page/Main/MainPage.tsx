import React, { useState } from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import StudentItem from './StudentItem';

function MainPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  
 
  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      <div className='mapStudents'>
  {students.map((student)=>(
    <StudentItem student={student} key={student.id}/>
  ))}
      </div>
    </div>
  );
}

export default MainPage;
