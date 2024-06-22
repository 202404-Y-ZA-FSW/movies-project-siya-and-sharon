// src/pages/SingleActorPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorDetails } from "../api/MovieApi";

const SingleActorPage = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await getActorDetails(id);
        setActor(response.data);
      } catch (error) {
        console.error("Error fetching actor details:", error);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">{actor.name}</h1>
      {/* Render actor details here */}
    </div>
  );
};

export default SingleActorPage;
