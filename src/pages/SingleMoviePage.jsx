import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "97c204639834731548cd02865e77ea25";
const API_BASEURL = "https://api.themoviedb.org/3";

const SingleMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`${API_BASEURL}/movie/${id}`, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(
          `${API_BASEURL}/movie/${id}/credits`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setCredits(creditsResponse.data);

        const videosResponse = await axios.get(
          `${API_BASEURL}/movie/${id}/videos`,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        const trailerVideo = videosResponse.data.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        setTrailer(trailerVideo);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  const director = credits?.crew.find((member) => member.job === "Director");
  const leadActors = credits?.cast.slice(0, 5); // Get the top 5 lead actors

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">{movie.title}</h1>
      <div className="mb-5">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      {trailer && (
        <div className="mb-5">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      <p className="text-gray-700 mb-2">Rating: {movie.vote_average}</p>
      <p className="text-gray-700 mb-2">Length: {movie.runtime} minutes</p>
      {director && (
        <p className="text-gray-700 mb-2">Director: {director.name}</p>
      )}
      <h2 className="text-2xl font-bold mb-4">Lead Actors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {leadActors?.map((actor) => (
          <div key={actor.id} className="bg-white rounded shadow-lg p-4">
            <Link to={`/actor/${actor.id}`}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-4">
                  <span>No Image</span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{actor.name}</h3>
              <p className="text-gray-700">as {actor.character}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleMoviePage;
