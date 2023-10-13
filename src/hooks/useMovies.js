import { useRef, useState } from "react";
import { getMovies } from "../services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState(null);
  const search = useRef(null);

  const refreshMovies = async (query) => {
    console.log("refreshing movies");
    if (search.current == query) return;
    search.current = query;
    const movies = await getMovies(query);
    setMovies(movies);
  };
  return { movies, refreshMovies };
};
