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
        trailerData: movie.trailerData,
      });
      dispatch({
        type: "SET_MOVIE_DETAILS",
        image: movie.image,
        genreList: movie.genreList,
        plot: movie.plot,
        trailerData: movie.trailerData,
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

  if (window.location.pathname === "/movie") {
    return (
      <div className="row justify-content-start align-content-center display-6">
        <a href="/" id="back-btn" className="bolder col-sm-2 col-offset-0">
          <span id="back-char-code">&#8249;</span>
          <span id="back-text">BACK</span>
        </a>
      </div>
    );
  } else {
    return (
      <div className="menu">
        <div className="menu__text">
          <h1 onClick={navigateToHome} className={`random ${window.location.pathname === "/" ? "active" : ""}`}>
            Random
          </h1>
          <h1
            onClick={navigateToPopular}
            className={`most_popular ${window.location.pathname === "/popular" ? "active" : ""}`}
          >
            Most Popular
          </h1>
        </div>
        <div>
          {window.location.pathname !== "/popular" && (
            <button onClick={getRandomMovie} className="movie__button">
              PICK A RANDOM MOVIE
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Menu;
