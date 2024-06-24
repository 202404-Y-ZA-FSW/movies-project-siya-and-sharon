import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/SS.png";


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to="/">
          <img src={logo} alt="S&S cinema" />
        </Link>
      </div>
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/" className="sidebar-link">Popular</Link>
        <Link to="/" className="sidebar-link">Movies</Link>
        <Link to="/actors" className="sidebar-link">Actors</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
