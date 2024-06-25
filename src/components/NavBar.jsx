import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; 
import SearchBox from "../SearchBox/SearchBox"


function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (event) => {
    event.preventDefault();
    
    if (query.trim() !== "") { 
      navigate(`/search?query=${query}`); 
    } 
  };

  return (
    <nav className="navbar">
      {}

      <SearchBox/> 

    </nav>
  );
}

export default Navbar;

