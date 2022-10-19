export const initialState = {
  movies: [
    {
      title: "Joker",
      year: "2019",
      thumbnail_url:
        "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
      trailer_url: "",
      genre: ["crime", "drama", "thriller"],
      description: "movie stuff",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
