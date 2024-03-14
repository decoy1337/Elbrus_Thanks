import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import './StudentsPage.scss';
import AddForm from '../AddForm/AddForm';

function StudentsPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  return (
    <div className="StudentsPage">
      <h1>Students Page</h1>
      <AddForm />
      <div className="mapStudents">
        {students.map((student) => (
          <div className="studentInfo" key={student.id}>
            <p>{student.name}</p>
            <p>{student.phase}</p>
            <button className='btn-update'>Ред.</button>
            <button className='btn-delete'>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPage;
