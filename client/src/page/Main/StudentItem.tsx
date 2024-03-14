import React from 'react';
import { Student } from '../../app/type/students';
import { Button } from '../ui/Button/Button';
import { useAppDispatch } from '../../redux/store';

type StudentItemProps = {
  student: Student;
};

function StudentItem({ student }: StudentItemProps): JSX.Element {
    const dispatch=useAppDispatch()
  const updateCountplus = async (id: number): Promise<void> => {
    const res = await (
      await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ thanks: student.count_thank + 1 }),
      })
    ).json();
    if (res.message === 'success') {
        {dispatch({type:'student/update',payload:res.student})}
    }
  };
  const updateCountminus = async (id: number): Promise<void> => {
    const res = await (
      await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ thanks: student.count_thank - 1 }),
      })
    ).json();
    if (res.message === 'success') {
        {dispatch({type:'student/update',payload:res.student})}
    }
  };
  return (
    <div key={student.id}>
      <p>{student.name}</p>
      <p>phase:{student.phase}</p>
      <p>{student.count_thank}</p>
      <Button onClick={() => updateCountplus(student.id)}>+</Button>
      <Button onClick={()=>updateCountminus(student.id)}>-</Button>
    </div>
  );
}

export default StudentItem;
