import React from "react";
import "./Popular.css";
import { useStateValue } from "../StateProvider";

function Popular() {
  const [{ movies }, dispatch] = useStateValue();
  const listItems = movies.map((movie) => {
    return (
      <tr className="row">
        <td className="col-sm-3 thumbnail">
          <img src={movie.image} className="img-thumbnail" />
        </td>
        <td className="table-card col-sm-3">
          <div className="table-column">
            <h5 className="title col-sm-12">{movie.title}</h5>
            <p className="sub-title col-sm-12">{movie.year}</p>
          </div>
        </td>
        <td className="card-sm col-sm-3">
          <div className="table-column">
            <h5 className="title col-sm-12">IMDb RATING</h5>
            <p className="sub-title col-sm-12">
              <span>⭐</span>
              {movie.imDbRating}/10
            </p>
          </div>
        </td>
        <td className="card-sm col-sm-3">
          <div className="table-column">
            <h5 className="title col-sm-12">RANK</h5>
            <p className="sub-title col-sm-12">{movie.rank}</p>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table row pt-5">
        <tbody className="col-sm-10 offset-sm-1">{listItems}</tbody>
      </table>
    </div>
  );
}

export default Popular;
