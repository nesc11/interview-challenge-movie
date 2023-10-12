import { useState } from "react";
import { getMovies } from "../services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState(null);

  const refreshMovies = async (query) => {
    const movies = await getMovies(query);
    setMovies(movies);
  };
  return { movies, refreshMovies };
};
