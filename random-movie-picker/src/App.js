import React from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Movie from "./Movie";
import Popular from "./Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/movie" element={[<Header />, <Menu />]} />
          <Route path="/" element={[<Header />, <Menu />, <Movie />]} />
          <Route path="/Popular" element={[<Header />, <Menu />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// {/* <div className="App">
// <Header />
// <Menu />
// <Movie />
// {/* <Popular /> */}
// </div> */}
