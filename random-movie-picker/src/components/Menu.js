import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function Menu() {
  const [{ randomMovie }, dispatch] = useStateValue();
  const getRandomMovie = () => {
    dispatch({
      type: "GET_RANDOM_MOVIE",
    });
  };
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToPopular = () => {
    navigate("/popular");
  };

  return (
    <div className="menu">
      <div className="menu__text">
        <h1 onClick={navigateToHome} className="random">
          Random
        </h1>
        <h1 onClick={navigateToPopular} className="most__popular">
          Most Popular
        </h1>
      </div>
      <div>
        <button onClick={getRandomMovie} className="movie__button">
          PICK A RANDOM MOVIE
        </button>
      </div>
    </div>
  );
}

export default Menu;
