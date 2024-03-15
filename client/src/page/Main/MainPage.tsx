import React, { useState } from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';

import { Button } from '../ui/Button/Button';
import Filter from '../Filter/Filter';

function MainPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const filtrStudents = students.filter((student) => student.name.toLowerCase().includes(name.toLowerCase()));
  const [filteredPhase, setFilteredPhase] = useState<string | null>(null);

  const sortedStudentsByPhase = [...students].sort((a, b) => a.phase.localeCompare(b.phase));
  const filterStudentByPhase = (phase: string) => {
    setFilteredPhase(phase);
  };

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      <div className="mapStudents">
        <input type="text" value={name} onChange={ ( e ) => ( e.target.value===''?setName(''):setName(e.target.value) ) }/>
        {filtrStudents.map( ( student ) => (
         <Filter student={student} key={student.id}/>
        ))}
        {sortedStudentsByPhase.map((student) => {
          const updateCountplus = async (id: number): Promise<void> => {
            const res = await (
              await fetch(`/api/students/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'Application/json' },
                body: JSON.stringify({ thanks: student.count_thank + 1 }),
              })
            ).json();
            if (res.message === 'success') {
              {
                dispatch({ type: 'student/update', payload: res.student });
              }
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
              {
                dispatch({ type: 'student/update', payload: res.student });
              }
            }
          };
          if (filteredPhase && student.phase !== filteredPhase) {
            return null;
          }
          return (
            <div key={student.id}>
              <p>{student.name}</p>
              <p>phase: {student.phase}</p>
              <p>Количество благодарностей: {student.count_thank}</p>
              <Button onClick={() => updateCountplus(student.id)}>+</Button>
              <Button onClick={() => updateCountminus(student.id)}>-</Button>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => filterStudentByPhase('1')}>1 Fhase</button>
        <button onClick={() => filterStudentByPhase('2')}>2 Fhase</button>
        <button onClick={() => filterStudentByPhase('3')}>3 Fhase</button>
      </div>
    </div>
  );
}

export default MainPage;
