/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import type { Students } from '../../../app/type/students';
import type { Action } from '../../../redux/type';

export type StudentsState = {
  students: Students;
};
export const initialState: StudentsState = {
  students: [],
};
export const mainReducer = (state: StudentsState = initialState, action: Action): StudentsState => {
  switch (action.type) {
    case 'students/load':
      return {
        ...state,
        students: action.payload,
      };

    case 'students/add':
      return {
        ...state,
        students: [...state.students, action.payload],
      };

    case 'student/update':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        ),
      };

    case 'student/updateName':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        ),
      };

    case 'students/remove': {
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
