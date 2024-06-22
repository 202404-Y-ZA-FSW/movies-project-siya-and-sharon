// src/components/ActorList.js
import React from "react";
import { Link } from "react-router-dom";

const ActorList = ({ actors, onActorClick }) => {
  const handleClick = (actor) => {
    if (onActorClick) {
      onActorClick(actor);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {actors.map((actor) => (
        <div
          key={actor.id}
          className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleClick(actor)}
        >
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              className="w-full h-64 object-cover"
            />
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-700">
              <span>No Image Available</span>
            </div>
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold">{actor.name}</h3>
            <p className="text-sm text-gray-400">
              Popularity: {actor.popularity}
            </p>
            <Link
              to={`/actor/${actor.id}`}
              className="mt-2 inline-block text-blue-400 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActorList;
