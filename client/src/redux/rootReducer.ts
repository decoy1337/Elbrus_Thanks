import { combineReducers } from 'redux';

import authReducer from '../page/Auth/reducer/reducerAuth';

const rootReducer = combineReducers({
  
  auth: authReducer,
});

export default rootReducer;
