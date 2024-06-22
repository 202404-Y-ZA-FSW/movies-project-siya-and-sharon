// src/api/movieApi.js
import axios from "axios";
import { API_KEY, BASE_URL } from "./ApiConfig";

// Create an instance of axios with default parameters
const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Get movies by category (e.g., 'top_rated', 'popular', 'now_playing', 'upcoming')
const getMovies = (category) => apiClient.get(`/movie/${category}`);

// Get details of a single movie
const getMovieDetails = (id) =>
  apiClient.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });

// Get credits (cast and crew) of a movie
const getMovieCredits = (id) => apiClient.get(`/movie/${id}/credits`);

// Get related movies
const getRelatedMovies = (id) => apiClient.get(`/movie/${id}/similar`);

// Get movie trailer
const getMovieTrailer = (id) => apiClient.get(`/movie/${id}/videos`);

// Get genres
const getGenres = () => apiClient.get("/genre/movie/list");

// Get popular actors
const getPopularActors = () => apiClient.get("/person/popular");

// Search for movies
const searchMovies = (query) =>
  apiClient.get("/search/movie", {
    params: {
      query,
    },
  });

// Search for actors
const searchActors = (query) =>
  apiClient.get("/search/person", {
    params: {
      query,
    },
  });

// Get details of a single actor
const getActorDetails = (id) => apiClient.get(`/person/${id}`);

// Fetch movies actor participated in
const getActorMovies = (id) => apiClient.get(`/person/${id}/movie_credits`);

// Get movie credits of a single actor
const getActorMovieCredits = (id) =>
  apiClient.get(`/person/${id}/movie_credits`);

export {
  getMovies,
  getMovieDetails,
  getMovieCredits,
  getRelatedMovies,
  getMovieTrailer,
  getGenres,
  getPopularActors,
  searchMovies,
  searchActors,
  getActorDetails,
  getActorMovieCredits,
  getActorMovies,
};
