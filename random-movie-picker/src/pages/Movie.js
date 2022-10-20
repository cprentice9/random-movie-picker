import React from "react";
import { useStateValue } from "../StateProvider";
import "./Movie.css";

function Movie() {
  const [{ randomMovie }, dispatch] = useStateValue();

  const genreList = randomMovie?.genreList.map((genre) => {
    return (
      <div className="col-sm-2 card">
        <div className="card-body">{genre.key}</div>
      </div>
    );
  });

  return (
    <div className="container col-sm-6">
      <div className="display-4 movie_title">
        <strong>{randomMovie.title}</strong>
        <small className="movie_year">{randomMovie.year}</small>
      </div>
      <iframe
        width="960"
        height="540"
        src={randomMovie.trailerData}
        title="Movie Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="row">
        {genreList}
        <div className="blockquote text-right col-sm-6">{randomMovie.plot}</div>
      </div>
    </div>
  );
}

export default Movie;
