import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Popular from "./pages/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ loading, randomMovie, movies }, dispatch] = useStateValue();
  useEffect(() => {
    const updateMovies = (movies) => {
      dispatch({
        type: "UPDATE_MOVIES",
        movies,
      });
    };

    const updateMovie = (movie) => {
      dispatch({
        type: "SET_MOVIE_DETAILS",
        movie,
      });
    };

    const fetchMovieList = async () => {
      if (movies.length < 3) {
        const movies = await axios({
          method: "get",
          url: `https://imdb-api.com/en/API/MostPopularMovies/k_v11zhqeg`,
        });
        updateMovies(movies.data.items);
        const movie = await axios({
          method: "get",
          url: `https://imdb-api.com/en/API/Title/k_v11zhqeg/${movies.data.items[0].id}`,
        });
        updateMovie(movie.data);
      }
    };

    fetchMovieList();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/popular" element={[<Header />, <Menu />, <Popular />]} />
          <Route path="/movie" element={[<Header />, <Menu />, <Movie />]} />
          <Route path="/" element={[<Header />, <Menu />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
