import React from "react";
import { useStateValue } from "../StateProvider";

function Movie() {
  const [{ randomMovie }, dispatch] = useStateValue();
  return (
    <div className="container col-sm-6">
      <div className="display-4">
        <strong>{randomMovie.title}</strong>
        <small>{randomMovie.year}</small>
      </div>
      <iframe
        width="960"
        height="540"
        src="https://www.youtube.com/embed/LDU_Txk06tM"
        title="Movie Player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="row">
        <div className="col-sm-2 card">
          <div className="card-body">"randomMovie.genreList[0]"</div>
        </div>
        <div className="col-sm-2 card">
          <div className="card-body">"randomMovie.genreList[0]"</div>
        </div>
        <div className="col-sm-2 card">
          <div className="card-body">"randomMovie.genreList[0]"</div>
        </div>
        <div className="blockquote text-right col-sm-6">randomMovie.plot</div>
      </div>
    </div>
  );
}

export default Movie;
