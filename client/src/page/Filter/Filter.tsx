
import React, { useState, useEffect } from 'react';
import { Student } from '../../app/type/students';
import { Button } from '../ui/Button/Button';

interface FilterProps {
  student: Student;
  updateCountplus: (id: number, count: number) => void;
  updateCountminus: (id: number, count: number) => void;
}

function Filter({ student, updateCountplus, updateCountminus }: FilterProps): JSX.Element {
  const [count, setCount] = useState(() => {
   
    const savedCount = localStorage.getItem(`count_${student.id}`);
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    
    localStorage.setItem(`count_${student.id}`, count.toString());
  }, [count, student.id]);

  const handleCountplus = () => {
    setCount(prevCount => prevCount + 1);
    updateCountplus(student.id, count + 1);
  };

  const handleCountminus = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      updateCountminus(student.id, count - 1);
    }
  };

  return (
    <div>
      <p>{student.name}</p>
      <p>phase: {student.phase}</p>
      <p>Количество благодарностей: {count}</p>
      <Button onClick={handleCountplus}>+</Button>
      <Button onClick={handleCountminus}>-</Button>
    </div>
  );
}

export default Filter;