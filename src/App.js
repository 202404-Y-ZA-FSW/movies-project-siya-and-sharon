// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SingleMoviePage from "./pages/SingleMoviePage";
import ActorsPage from "./pages/ActorsPage";
import SingleActorPage from "./pages/SingleActorPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import ActorDetailPage from "./pages/ActorDetailPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:id" element={<SingleMoviePage />} />
            <Route path="/actors" element={<ActorsPage />} />
            <Route path="/actor/:id" element={<SingleActorPage />} />
            <Route path="/actor/:id" element={<ActorDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
