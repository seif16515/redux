import { ADD_MOVIES, DELETE_MOVIE, SEE_DETAIL } from "../actionTypes/moviesActionType";

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIES,
    payload: movie
  }
}
export const seeDetail=(movie)=>{
  return {
      type :SEE_DETAIL,
      payload : movie
  }
}
export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id
  };
};  