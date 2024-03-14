import { combineReducers } from 'redux';
import { movieReducer } from '../page/Movie/reducer/movieReducer';
import { genreReducer } from '../page/Genre/reducer/genreReducer';
import authReducer from '../page/Auth/reducer/reducerAuth';

const rootReducer = combineReducers({
  movies: movieReducer,
  genres: genreReducer,
  auth: authReducer,
});

export default rootReducer;
