// src/pages/ActorsPage.js
import React, { useEffect, useState } from "react";
import {
  getPopularActors,
  getActorDetails,
  getActorMovieCredits,
} from "../api/MovieApi";
import ActorList from "../components/ActorList";

const ActorsPage = () => {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [actorDetails, setActorDetails] = useState(null);
  const [actorMovies, setActorMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await getPopularActors();
        setActors(response.data.results);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchActors();
  }, []);

  const handleActorClick = async (actor) => {
    setLoading(true);
    setSelectedActor(actor);
    try {
      const [detailsResponse, moviesResponse] = await Promise.all([
        getActorDetails(actor.id),
        getActorMovieCredits(actor.id),
      ]);
      setActorDetails(detailsResponse.data);
      setActorMovies(moviesResponse.data.cast);
    } catch (error) {
      console.error("Error fetching actor details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Popular Actors</h1>
      {!selectedActor && (
        <ActorList actors={actors} onActorClick={handleActorClick} />
      )}
      {selectedActor && actorDetails && (
        <div>
          <button
            onClick={() => setSelectedActor(null)}
            className="mb-4 text-blue-500"
          >
            Back to Actor List
          </button>
          <h1 className="text-3xl font-bold mb-5">{actorDetails.name}</h1>
          <div className="flex mb-5">
            {actorDetails.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actorDetails.profile_path}`}
                alt={actorDetails.name}
                className="w-48 h-72 object-cover rounded mr-4"
              />
            )}
            <div>
              <p>
                <strong>Gender:</strong>{" "}
                {actorDetails.gender === 1 ? "Female" : "Male"}
              </p>
              <p>
                <strong>Popularity:</strong> {actorDetails.popularity}
              </p>
              <p>
                <strong>Birthday:</strong> {actorDetails.birthday}
              </p>
              <p>
                <strong>Biography:</strong> {actorDetails.biography}
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {actorMovies.map((movie) => (
              <div key={movie.id} className="bg-white rounded shadow-lg p-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                <p className="text-gray-700">{movie.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default ActorsPage;
