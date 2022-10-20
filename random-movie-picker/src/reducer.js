import axios from "axios";

export const initialState = {
  movies: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RANDOM_MOVIE":
      const randomIndex = Math.floor(Math.random() * state.movies.length);
      let randomMovie = state.movies[randomIndex];

      return {
        ...state,
        randomMovie,
      };
    case "UPDATE_MOVIES":
      return {
        ...state,
        movies: action.movies,
        loading: false,
      };
    case "WILL_UPDATE_MOVIES":
      return {
        ...state,
        loading: true,
      };
    case "SET_MOVIE_TRAILER":
      return {
        ...state,
        randomMovie: {
          ...state.randomMovie,
          trailerData: action.trailerLink,
        },
      };
    case "SET_MOVIE_DETAILS":
      return {
        ...state,
        randomMovie: {
          ...action.movie,
        },
      };

    default:
      return state;
  }
};

export default reducer;
