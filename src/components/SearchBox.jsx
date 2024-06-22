// src/components/SearchBox.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_KEY = "97c204639834731548cd02865e77ea25";
const API_BASEURL = "https://api.themoviedb.org/3";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query) {
      try {
        const [movieResponse, personResponse] = await Promise.all([
          axios.get(`${API_BASEURL}/search/movie`, {
            params: {
              api_key: API_KEY,
              query: query,
            },
          }),
          axios.get(`${API_BASEURL}/search/person`, {
            params: {
              api_key: API_KEY,
              query: query,
            },
          }),
        ]);

        // Combine the results
        const results = {
          movies: movieResponse.data.results,
          actors: personResponse.data.results,
        };

        // Navigate to the search results page with the search results
        navigate("/search", { state: { results: results } });
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or actors..."
        className="p-2 border rounded-l"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
