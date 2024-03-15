import type { Student, Students } from '../app/type/students';

import type { User } from '../page/Auth/reducer/type';
import type { StudentId } from '../page/Student/type';

export type Action =
  | { type: 'students/load'; payload: Students }
  | { type: 'students/add'; payload: Student }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }

  | { type: 'student/update'; payload: Student }
  | { type: 'students/remove'; payload: StudentId }
  | { type: 'student/updateName'; payload: Student };

  |{type:'auth/userCheck';payload:User}
  

