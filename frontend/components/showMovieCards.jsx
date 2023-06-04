"use client";

import MovieCard from "@/components/ui/movieCard";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./ui/loading";

export default function MovieCardGrid({ params }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchMovies = async (offset, limit) => {
    const result = await axios(
      `http://localhost:3033/api/v1/movies/${offset}/${limit}`
    );
    setMovies(result.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(0, 10);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-2 justify-center mt-12">
          {movies &&
            movies.map((movie) => {
              return <MovieCard key={movie._id} data={movie} />;
            })}
        </div>
      )}
    </>
  );
}
