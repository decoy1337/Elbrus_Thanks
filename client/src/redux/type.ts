
import { Student, Students } from '../app/type/students';
import type { User } from '../page/Auth/reducer/type';

export type Action =
  | {type: 'students/load';payload:Students}
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  |{type:'student/update';payload:Student}
  
