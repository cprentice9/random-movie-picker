import React from "react";
import "./Home.css";
import { useStateValue } from "../StateProvider";

function Home() {
  const [{ randomMovie }, dispatch] = useStateValue();
  if (!randomMovie) {
    return <div />;
  }
  return (
    <div>
      <h1 className="movie__title">
        {randomMovie.title} <small>{randomMovie.year}</small>
      </h1>
      <img className="movie__image" alt="movie__image" src={randomMovie.thumbnail_url} />
    </div>
  );
}

export default Home;
