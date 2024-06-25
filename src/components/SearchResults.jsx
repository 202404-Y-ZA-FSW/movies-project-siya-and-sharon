import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies, searchActors } from "../api/api";
import MovieList from "../components/MovieList";
import ActorList from "../components/ActorList";

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query"); // Correctly parsing query parameter
    const [movies, setMovies] = useState([]);
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);

            try {
                const [movieResults, actorResults] = await Promise.all([
                    searchMovies(query),
                    searchActors(query)
                ]);

                setMovies(movieResults.data.results);
                setActors(actorResults.data.results);
                console.log("Movies:", movieResults.data.results); // Debugging line
                console.log("Actors:", actorResults.data.results); // Debugging line
            } catch (error) {
                console.error("Error fetching search results:", error);
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [query]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (movies.length === 0 && actors.length === 0) {
        return <div>No results found.</div>;
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Search Results</h1>
            <h2 className="text-2xl font-bold mb-4">Movies</h2>
            <MovieList movies={movies} />

            {actors.length > 0 && (
                <>
                    <h2 className="text-2xl font-bold mb-4">Actors</h2>
                    <ActorList actors={actors} />
                </>
            )}
        </div>
    );
};

export default SearchResults;
