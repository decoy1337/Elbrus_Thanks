
import type { User } from '../page/Auth/reducer/type';

export type Action =
   
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  
