import React from 'react';
import { Student } from '../../app/type/students';

function Filter({ student }: { student: Student }): JSX.Element {
  return <div>{student.name}</div>;
}

export default Filter;
