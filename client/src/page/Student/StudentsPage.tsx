import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import './StudentsPage.scss';
import AddForm from '../AddForm/AddForm';
import { StudentId } from './type';

function StudentsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const students = useSelector((store: RootState) => store.students.students);

  const onHadleDelete = async (id: StudentId): Promise<void> => {
    console.log(id);
    const data: { message: string } = await (
      await fetch(`/api/students/${id}`, { method: 'delete' })
    ).json();

    if (data.message === 'success') {
      
      dispatch({ type: 'students/remove', payload: id });
    }
  };
  return (
    <div className="StudentsPage">
      <h1>Students Page</h1>
      <AddForm />
      <div className="mapStudents">
        {students.map((student) => (
          <div className="studentInfo" key={student.id}>
            <p>{student.name}</p>
            <p>{student.phase}</p>
            <button className="btn-update">Ред.</button>
            <button onClick={() => onHadleDelete(student.id)} className="btn-delete">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPage;
