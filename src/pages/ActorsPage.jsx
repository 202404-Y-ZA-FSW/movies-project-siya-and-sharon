import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopularActors } from "../api/api";
import "./ActorsPage.css";

const ActorsPage = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchPopularActors = async () => {
      try {
        const response = await getPopularActors();
        setActors(response.data.results);
      } catch (error) {
        console.error("Error fetching popular actors:", error);
      }
    };

    fetchPopularActors();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Popular Actors</h1>
      <div className="actors-grid">
        {actors.map((actor) => (
          <div key={actor.id} className="actor-card">
            <Link to={`/actor/${actor.id}`}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="actor-image"
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
              <h3 className="actor-name">{actor.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorsPage;
