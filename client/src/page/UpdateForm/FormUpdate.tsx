import type { SetStateAction } from 'react';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import type { Student } from '../../app/type/students';

type FormUpdateProps = {
  student: Student;
  onClose: (value: SetStateAction<boolean>) => void;
};

function FormUpdate({ student, onClose }: FormUpdateProps): JSX.Element {
  const dispatch = useDispatch();
  console.log(student);
  

  const [name, setName] = useState(student.name);
  const [phase, setPhase] = useState(student.phase);

  const onhadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data: { message: string; student: Student } = await (
      await fetch(`/api/students/update/${student.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json',
        },
        body: JSON.stringify({
          name,
          phase,
        }),
      })
    ).json();
    console.log(data, 777777);

    if (data.message === 'success') {
      dispatch({ type: 'student/updateName', payload: data.student });
      onClose((prev) => !prev);
    }
  };

  return (
    <div className="FormMoviesAdd">
      <form onSubmit={onhadleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="phase"
          value={phase}
          onChange={(e) => setPhase(e.target.value)}
        />
        <button type="submit">Изменить</button>
      </form>
    </div>
  );
}

export default FormUpdate;
