import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ loading }, dispatch] = useStateValue();
  useEffect(() => {
    const updateMovie = (movies) => {
      console.log("updating movies");
      dispatch({
        type: "UPDATE_MOVIES",
        movies,
      });
    };
    const toggleLoading = () => {
      dispatch({
        type: "WILL_UPDATE_MOVIES",
      });
    };
    const getClientSecret = async () => {
      toggleLoading();
      const response = await axios({
        method: "get",
        url: `https://imdb-api.com/en/API/MostPopularMovies/k_v11zhqeg`,
      });
      updateMovie(response.data.items);
      console.log("testing", response);
    };

    // getClientSecret();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/popular" element={[<Header />, <Menu />, <Popular />]} />
          <Route path="/" element={[<Header />, <Menu />, <Home />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
