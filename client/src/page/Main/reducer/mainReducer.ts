/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import { Students } from "../../../app/type/students";
import { Action } from "../../../redux/type";

export type StudentsState = {
    students:Students;
    
  };
  export const initialState: StudentsState = {
    students:[]
  }
export const mainReducer=(state:StudentsState=initialState,action:Action):StudentsState=>{
    switch (action.type){
        case 'students/load':
      return {
        ...state,
        students: action.payload,
      };
      default:
      return state;
    }
}





