import axios from "axios";

const API_KEY = "97c204639834731548cd02865e77ea25";
const BASE_URL = "https://api.themoviedb.org/3";

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const getMovies = (category) => apiClient.get(`/movie/${category}`);

const getMovieDetails = (id) =>
  apiClient.get(`/movie/${id}`, {
    params: {
      append_to_response: "credits,videos",
    },
  });

const getMovieCredits = (id) => apiClient.get(`/movie/${id}/credits`);

const getRelatedMovies = (id) => apiClient.get(`/movie/${id}/similar`);

const getMovieTrailer = (id) => apiClient.get(`/movie/${id}/videos`);

const getGenres = () => apiClient.get("/genre/movie/list");

const getPopularActors = () => apiClient.get("/person/popular");

const searchMovies = (query) =>
  apiClient.get("/search/movie", {
    params: {
      query,
    },
  });

const searchActors = (query) =>
  apiClient.get("/search/person", {
    params: {
      query,
    },
  });

const getActorDetails = (id) => apiClient.get(`/person/${id}`);

const getActorMovies = (id) => apiClient.get(`/person/${id}/movie_credits`);

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
