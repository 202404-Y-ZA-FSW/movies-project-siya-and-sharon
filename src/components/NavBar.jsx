import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MovieApp
        </Link>
      </div>
      <SearchBox />
      <div className="flex items-center space-x-4">
        <Link to="/movies" className="text-white">
          Movies
        </Link>
        <Link to="/actors" className="text-white">
          Actors
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
