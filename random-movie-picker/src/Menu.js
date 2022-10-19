import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <div className="menu__text">
        <h1 className="random">Random</h1>
        <h1 className="most__popular">Most Popular</h1>
      </div>
      <div>
        <button className="movie__button">PICK A RANDOM MOVIE</button>
      </div>
    </div>
  );
}

export default Menu;
