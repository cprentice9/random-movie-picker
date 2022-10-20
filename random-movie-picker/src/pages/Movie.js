import React from "react";
import { useStateValue } from "../StateProvider";
import "./Movie.css";

function Movie() {
  const [{ randomMovie }, dispatch] = useStateValue();

  const genreList = randomMovie?.genreList.map((genre) => {
    return (
      <div className="genre-card">
        <div>{genre.key}</div>
      </div>
    );
  });

  return (
    <div className="container col-sm-12">
      <div className="row">
        <div className="col-sm-5 col-offset-0 display-4 movie_title">
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
        <div className="row pt-5">
          <div className="flex-wrap col-sm-4">
            <div className="row">{genreList}</div>
          </div>
          <div className="col-sm-8 movie-description">{randomMovie.plot}</div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
