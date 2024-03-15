import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../redux/store';
import './StudentsPage.scss';
import AddForm from '../AddForm/AddForm';
import type { StudentId } from './type';
import ModalWindow from '../ui/Modal/ModalPage';
import FormUpdate from '../UpdateForm/FormUpdate';
import { Student } from '../../app/type/students';

function StudentsPage(): JSX.Element {
  const [isOpen, onClose] = useState(false);
  const dispatch = useAppDispatch();
  const students = useSelector((store: RootState) => store.students.students);
  const [student, setStudent] = useState<Student>(null);

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
        {students.map((stud) => (
          <div className="studentInfo" key={stud.id}>
            <p>{stud.name}</p>
            <p>{stud.phase}</p>

            <button
              className="btn-update"
              onClick={() => {
                setStudent(stud);
                onClose((prev) => !prev);
              }}
            >
              Ред.
            </button>
            <button onClick={() => onHadleDelete(stud.id)} className="btn-delete">
              X
            </button>
          </div>
        ))}
        <ModalWindow isOpen={isOpen} onClose={onClose}>
          <FormUpdate student={student} onClose={onClose} />
          <button onClick={() => onClose((prev) => !prev)}>Закрыть форму</button>
        </ModalWindow>
      </div>
    </div>
  );
}

export default StudentsPage;
