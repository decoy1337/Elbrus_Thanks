import React, { useState } from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';

import Filter from '../Filter/Filter';

function MainPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [filteredPhase, setFilteredPhase] = useState<string | null>(null);

  const filtrStudents = students.filter((student) =>
    student.name.toLowerCase().includes(name.toLowerCase()),
  );

  const sortedStudentsByPhase = [...filtrStudents]
    .filter((student) => !filteredPhase || student.phase === filteredPhase)
    .sort((a, b) => a.phase.localeCompare(b.phase));

  const filterStudentByPhase = (phase: string | null) => {
    setFilteredPhase(phase);
  };

  const updateCountplus = async (id: number): Promise<void> => {
    const res = await (
      await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ thanks: 1 }),
      })
    ).json();
    if (res.message === 'success') {
      dispatch({ type: 'student/update', payload: res.student });
    }
  };

  const updateCountminus = async (id: number): Promise<void> => {
    const res = await (
      await fetch(`/api/students/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'Application/json' },
        body: JSON.stringify({ thanks: -1 }),
      })
    ).json();
    if (res.message === 'success') {
      dispatch({ type: 'student/update', payload: res.student });
    }
  };

  return (
    <div className="MainPage">
      <h1>It's Thanks Time!</h1>
      <div className='btnsPhase'>
        <button className='phaseBtn' onClick={() => filterStudentByPhase(null)}>Все</button>
        <button className='phaseBtn' onClick={() => filterStudentByPhase('1')}>Фаза 1</button>
        <button className='phaseBtn' onClick={() => filterStudentByPhase('2')}>Фаза 2</button>
        <button className='phaseBtn' onClick={() => filterStudentByPhase('3')}>Фаза 3</button>
      </div>
      <div className="mapStudents">
        <input className='searchInput' placeholder='Найти' type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {sortedStudentsByPhase.map((student) => (
          <div>
            <Filter
              key={student.id}
              student={student}
              updateCountplus={updateCountplus}
              updateCountminus={updateCountminus}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
