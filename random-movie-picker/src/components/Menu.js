import React, { useEffect } from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "axios";

function Menu() {
  const [{ randomMovie, movies }, dispatch] = useStateValue();
  const updateMovie = (movie) => {
    dispatch({
      type: "SET_MOVIE_DETAILS",
      movie,
    });
  };
  const getRandomMovie = async () => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    let randomMovie = movies[randomIndex];

    const movie = await axios({
      method: "get",
      url: `https://imdb-api.com/en/API/Title/k_v11zhqeg/${randomMovie.id}`,
    });
    updateMovie(movie.data);
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
