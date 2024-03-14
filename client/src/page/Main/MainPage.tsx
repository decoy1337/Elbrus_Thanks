import React from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function MainPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      <div className="mapStudents">
        {students.map((student) => (
          <div className='studentInfo' key={student.id}>
            <p>{student.name}</p>
            <p>{student.phase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
