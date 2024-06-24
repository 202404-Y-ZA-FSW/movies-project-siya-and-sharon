import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div className="text-center text-white">No movies available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden"
        >
          <Link to={`/movie/${movie.id}`}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-700">
                <span>No Image Available</span>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-sm text-gray-400">
                Release Date: {movie.release_date}
              </p>
              <p className="text-sm text-gray-400">Rating: {movie.vote_average}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
