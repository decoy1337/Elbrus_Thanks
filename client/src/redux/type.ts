import type { Genre, Movie, MovieId } from '../app/type/genre';
import type { User } from '../page/Auth/reducer/type';

export type Action =
  | { type: 'genres/load'; payload: Genre[] }
  | { type: 'movies/load'; payload: Movie[] }
  | { type: 'movies/add'; payload: Movie }
  | { type: 'movies/remove'; payload: { id: MovieId; genreId: number } }
  | { type: 'movies/update'; payload: Movie }
  | { type: 'auth/registration'; payload: User }
  | { type: 'auth/login'; payload: User }
  | { type: 'auth/logout' }
  | { type: 'auth/userCheck'; payload: User };
