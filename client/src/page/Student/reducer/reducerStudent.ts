// /* eslint-disable @typescript-eslint/default-param-last */
// /* eslint-disable @typescript-eslint/explicit-function-return-type */
// import type { Action } from '../../../redux/type';
// import type { StateAuth } from './type';

// const stateAuth: StateAuth = {
//   user: undefined,
// };

// const studentReducer = (state: StateAuth = stateAuth, action: Action): StateAuth => {
//   switch (action.type) {
//     case 'auth/registration':
//       return {
//         ...state,
//         user: action.payload,
//       };
//     case 'auth/login':
//       return {
//         ...state,
//         user: action.payload,
//       };

//     case 'auth/logout':
//       return {
//         ...state,
//         user: undefined,
//       };

//     case 'auth/userCheck':
//       return {
//         ...state,
//         user: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default studentReducer;
