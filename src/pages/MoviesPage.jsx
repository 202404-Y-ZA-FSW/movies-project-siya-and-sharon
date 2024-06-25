import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies, getGenres } from "../api/api";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [genreName, setGenreName] = useState("");
  const location = useLocation();

  const category = new URLSearchParams(location.search).get("category") || "popular";
  const genreId = new URLSearchParams(location.search).get("genre");

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (genreId) {
          const response = await getMovies("/discover/movie", {
            with_genres: genreId,
          });
          setMovies(response.data.results || []);

          const genresResponse = await getGenres();
          const genre = genresResponse.data.genres.find(
            (g) => g.id === parseInt(genreId)
          );
          setGenreName(genre?.name || "");
        } else {
          const response = await getMovies(`/movie/${category}`);
          setMovies(response.data.results || []);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, genreId]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="page-title">Movies - {genreId ? genreName : category.replace("_", " ")}</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
