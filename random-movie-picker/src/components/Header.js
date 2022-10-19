import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="header__title">
      <h1 onClick={navigateToHome}>Random Movie Picker</h1>
    </div>
  );
}

export default Header;
