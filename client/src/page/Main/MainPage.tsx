import React, { useState } from 'react';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import StudentItem from './StudentItem';

function MainPage(): JSX.Element {
  const students = useSelector((store: RootState) => store.students.students);

  const [filteredPhase, setFilteredPhase] = useState<string | null>(null)

  const sortedStudentsByPhase = [...students].sort((a, b) => a.phase.localeCompare(b.phase));
  const filterStudentByPhase = (phase: string) => {
    setFilteredPhase(phase);
  };

  return (
    <div className="MainPage">
      <h1>Main Page</h1>
      <div className="mapStudents">
        {sortedStudentsByPhase.map((student) => {
          if (filteredPhase && student.phase !== filteredPhase) {
            return null;
          }
          return (
            <div key={student.id}>
              <p>{student.name}</p>
              <p>phase: {student.phase}</p>
              <p>Количество благодарностей: {student.count_thank}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={()=>filterStudentByPhase('1')}>1 Fhase</button>
        <button onClick={()=>filterStudentByPhase('2')}>2 Fhase</button>
        <button onClick={()=>filterStudentByPhase('3')}>3 Fhase</button>

    </div>
  );
}

export default MainPage;