export const initialState = {
  movies: [
    {
      gross: "$40.1M",
      id: "tt10665342",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTg1Y2Q3MzctMDlkOS00OGE1LWE4MjUtNmJjNDNkZmM2YmVkXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX128_CR0,12,128,176_AL_.jpg",
      year: "2022",
      title: "Halloween Ends",
      full_title: "Halloween Ends Full Title",
      rating: 10,
      rank: 1,
    },
    {
      gross: "$40.1M",
      id: "tt10665342",
      image:
        "https://m.media-amazon.com/images/M/MV5BZTg1Y2Q3MzctMDlkOS00OGE1LWE4MjUtNmJjNDNkZmM2YmVkXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_UX128_CR0,12,128,176_AL_.jpg",
      year: "2022",
      title: "Anything else",
      full_title: "Anything else Full Title",
      rating: 10,
      rank: 2,
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RANDOM_MOVIE":
      const randomIndex = Math.floor(Math.random() * state.movies.length);

      return {
        ...state,
        randomMovie: state.movies[randomIndex],
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
    case "SET_MOVIE_DETAILS":
      const fake_response = {
        type: "SET_MOVIE_DETAILS",
        image:
          "https://m.media-amazon.com/images/M/MV5BZTg1Y2Q3MzctMDlkOS00OGE1LWE4MjUtNmJjNDNkZmM2YmVkXkEyXkFqcGdeQXVyMjY5ODI4NDk@._V1_Ratio0.6762_AL_.jpg",
        genreList: [
          {
            key: "Horror",
            value: "Horror",
          },
          {
            key: "Thriller",
            value: "Thriller",
          },
        ],
        plot: "The saga of Michael Myers and Laurie Strode comes to a spine-chilling climax in this final installment of this trilogy.",
        trailerData: "https://www.youtube.com/embed/ek1ePFp-nBI",
      };
      return {
        ...state,
        randomMovie: {
          ...state.randomMovie,
          image: fake_response.image,
          genreList: fake_response.genreList,
          plot: fake_response.plot,
          trailerData: fake_response.trailerData,
          //   image: action.image,
          //   genreList: action.genreList,
          //   plot: action.plot,
        },
      };

    default:
      return state;
  }
};

export default reducer;
