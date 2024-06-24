import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies, searchActors } from "../api/api";
import MovieList from "../components/MovieList";
import ActorList from "../components/ActorList";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [movies, setMovies] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const movieResults = await searchMovies(query);
        setMovies(movieResults.data.results);

        const actorResults = await searchActors(query);
        setActors(actorResults.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">Search Results</h1>
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <MovieList movies={movies} />
      <h2 className="text-2xl font-bold mb-4">Actors</h2>
      <ActorList actors={actors} />
    </div>
  );
};

export default SearchResults;
