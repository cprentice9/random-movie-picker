import React from "react";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu() {
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
        <button className="movie__button">PICK A RANDOM MOVIE</button>
      </div>
    </div>
  );
}

export default Menu;
