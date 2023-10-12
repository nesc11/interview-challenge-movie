import { Movie } from "./Movie";

export const Movies = ({ movies }) => {
  if (movies === undefined) {
    return (
      <div>
        <p>No results for your query</p>
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {movies.map(({ title, year, image_url, id }) => (
        <Movie title={title} year={year} image_url={image_url} key={id} />
      ))}
    </ul>
  );
};
