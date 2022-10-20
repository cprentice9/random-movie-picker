import React from "react";
import "./Home.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Home() {
  const [{ randomMovie }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const navigateToMovie = () => {
    navigate("/movie");
  };
  if (!randomMovie) {
    return <div />;
  }
  return (
    <div>
      <h1 className="movie__title">
        {randomMovie.title} <small className="movie__year">{randomMovie.year}</small>
      </h1>
      {randomMovie.genreList ? (
        <img onClick={navigateToMovie} className="movie__image" alt="movie__image" src={randomMovie.image} />
      ) : (
        <div class="loader"></div>
      )}
    </div>
  );
}

export default Home;
