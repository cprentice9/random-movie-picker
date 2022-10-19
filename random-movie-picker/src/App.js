import React from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
