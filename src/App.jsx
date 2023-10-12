import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";

function App() {
  const { movies, refreshMovies } = useMovies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { query } = Object.fromEntries(new window.FormData(e.target));
    query = query.trim();
    if (!query) {
      e.target.reset();
      return;
    }
    refreshMovies(query);
  };

  return (
    <>
      <header>
        <h1>Search Your Movie</h1>
        <form onSubmit={handleSubmit}>
          <input name="query" type="text" placeholder="Search a movie..." />
          <button>Search</button>
        </form>
      </header>
      {movies !== null && <Movies movies={movies} />}
    </>
  );
}

export default App;
