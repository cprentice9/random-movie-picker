import React from "react";
import "./Popular.css";
import { useStateValue } from "../StateProvider";

function Popular() {
  const [{ movies }, dispatch] = useStateValue();
  const listItems = movies.map((movie) => {
    return (
      <tr className="row">
        <td className="col-sm-3">
          <img src={movie.image} className="img-thumbnail" />
        </td>
        <td className="card col-sm-3">
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.year}</p>
          </div>
        </td>
        <td className="card col-sm-3">
          <div className="card-body">
            <h5 className="card-title">IMDb RATING</h5>
            <p className="card-text">{movie.rating}</p>
          </div>
        </td>
        <td className="card col-sm-3">
          <div className="card-body">
            <h5 className="card-title">RANK</h5>
            <p className="card-text">{movie.rank}</p>
          </div>
        </td>
      </tr>
    );
  });
  console.log(movies);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>Thumbnail</td>
            <td>Title</td>
            <td>Rating</td>
            <td>Rank</td>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default Popular;
