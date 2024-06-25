import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ActorsPage from "./pages/ActorsPage";
import ActorDetailPage from "./pages/ActorDetailPage";
import SearchBox from "./components/SearchBox";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <SearchBox />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/popular" element={<MoviesPage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/actor/:id" element={<ActorDetailPage />} />
              <Route path="/search" element={<MoviesPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
