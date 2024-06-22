import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || { movies: [], actors: [] };

  const { movies, actors } = results;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {movies.length === 0 && actors.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div>
          {movies.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Movies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="bg-white rounded shadow-lg p-4"
                  >
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="w-full h-64 object-cover rounded mb-4"
                      />
                    </Link>
                    <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                    <p className="text-gray-700">{movie.overview}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          {actors.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Actors</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {actors.map((actor) => (
                  <div
                    key={actor.id}
                    className="bg-white rounded shadow-lg p-4"
                  >
                    <Link to={`/actor/${actor.id}`}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className="w-full h-64 object-cover rounded mb-4"
                      />
                    </Link>
                    <h2 className="text-xl font-bold mb-2">{actor.name}</h2>
                    <p className="text-gray-700">
                      Known for:
                      {actor.known_for.map((movie) => movie.title).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
