// src/pages/ActorDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorDetails, getActorMovies } from "../api/MovieApi";

const ActorDetailPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const actorResponse = await getActorDetails(id);
        setActor(actorResponse.data);

        const moviesResponse = await getActorMovies(id);
        setMovies(moviesResponse.data.cast);
      } catch (error) {
        console.error("Error fetching actor details:", error);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">{actor.name}</h1>
      <div className="flex mb-5">
        {actor.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt={actor.name}
            className="w-48 h-72 object-cover rounded mr-4"
          />
        ) : (
          <div className="w-48 h-72 bg-gray-300 flex items-center justify-center rounded mr-4">
            <span>No Image Available</span>
          </div>
        )}
        <div>
          <p>
            <strong>Gender:</strong> {actor.gender === 1 ? "Female" : "Male"}
          </p>
          <p>
            <strong>Popularity:</strong> {actor.popularity}
          </p>
          <p>
            <strong>Birthday:</strong> {actor.birthday}
          </p>
          <p>
            <strong>Biography:</strong> {actor.biography}
          </p>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-white rounded shadow-lg p-4">
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded mb-4"
              />
            ) : (
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
                <span>No Image Available</span>
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-700">as {movie.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorDetailPage;
