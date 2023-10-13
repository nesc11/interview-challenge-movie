import { useEffect, useState } from "react";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { movies, refreshMovies } = useMovies();
  const [query, setQuery] = useState("");
  const { debouncedValue } = useDebounce({ value: query });

  const handleChange = (e) => {
    let { value } = e.target;
    if (value.startsWith(" ")) return;
    value = value.trim();
    setQuery(value);
  };

  useEffect(() => {
    if (debouncedValue) {
      refreshMovies(debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <>
      <header>
        <h1>Search Your Movie</h1>
        <div>
          <input
            value={query}
            onChange={handleChange}
            name="query"
            type="text"
            placeholder="Search a movie..."
          />
        </div>
      </header>
      {query && movies !== null && <Movies movies={movies} />}
    </>
  );
}

export default App;
