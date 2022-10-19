import React from "react";
import "./Movie.css";

function Movie() {
  return (
    <div>
      <h1 className="movie__title">Movie Title</h1>
      <img
        className="movie__image"
        src="https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
      />
    </div>
  );
}

export default Movie;
