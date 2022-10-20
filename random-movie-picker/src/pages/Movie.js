import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";

import "./Movie.css";

function Movie() {
  const [{ randomMovie, movies }, dispatch] = useStateValue();

  useEffect(() => {
    const setMovieTrailer = (trailerLink) => {
      dispatch({
        type: "SET_MOVIE_TRAILER",
        trailerLink,
      });
    };

    const getTrailerInformation = async () => {
      const trailer = await axios({
        method: "get",
        url: `https://imdb-api.com/en/API/Trailer/k_v11zhqeg/${randomMovie.id}`,
      });
      setMovieTrailer(trailer.data.linkEmbed);
    };

    getTrailerInformation();
  }, []);

  const genreList = randomMovie?.genreList?.map((genre, i) => {
    return (
      <div className="genre-card" key={i}>
        <div>{genre.key}</div>
      </div>
    );
  });

  if (!randomMovie) {
    window.location = "/";
  } else {
    return (
      <div className="container col-sm-12">
        <div className="row">
          <div className="col-sm-5 col-offset-0 display-4 movie_title">
            <strong>{randomMovie.title}</strong>
            <small className="movie_year">{randomMovie.year}</small>
          </div>
          <div className="container-fluid">
            <iframe
              width="1000"
              height="540"
              frameborder="0"
              scrolling="yes"
              src={randomMovie.trailerData + "/?autoplay=false&width=840"}
              title="Movie Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
}

export default Movie;
