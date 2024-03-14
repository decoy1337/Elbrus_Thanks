import { combineReducers } from 'redux';

import authReducer from '../page/Auth/reducer/reducerAuth';
import { mainReducer } from '../page/Main/reducer/mainReducer';


const rootReducer = combineReducers({

  students:mainReducer,
  auth: authReducer,
});

export default rootReducer;
