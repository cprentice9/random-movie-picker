import React, { useEffect } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "axios";

function Menu() {
  const [{ randomMovie }, dispatch] = useStateValue();
  useEffect(() => {
    // getClientSecret();
  }, []);
  const getRandomMovie = async () => {
    dispatch({
      type: "GET_RANDOM_MOVIE",
    });
    const updateMovie = (movie) => {
      console.log({
        type: "SET_MOVIE_DETAILS",
        image: movie.image,
        genreList: movie.genreList,
        plot: movie.plot,
      });
      dispatch({
        type: "SET_MOVIE_DETAILS",
        image: movie.image,
        genreList: movie.genreList,
        plot: movie.plot,
      });
    };

    if (randomMovie) {
      // const response = await axios({
      //   method: "get",
      //   url: `https://imdb-api.com/en/API/Title/k_v11zhqeg/${randomMovie.id}`,
      // });
      // updateMovie(response.data);
      updateMovie({});
    }
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToPopular = () => {
    navigate("/popular");
  };

  return (
    <div className="menu">
      <div className="menu__text">
        <h1 onClick={navigateToHome} className="random">
          Random
        </h1>
        <h1 onClick={navigateToPopular} className="most__popular">
          Most Popular
        </h1>
      </div>
      <div>
        <button onClick={getRandomMovie} className="movie__button">
          PICK A RANDOM MOVIE
        </button>
      </div>
    </div>
  );
}

export default Menu;
