const API_URL = "https://www.omdbapi.com/?apikey=dd6fc24d";

export const getMovies = async (query) => {
  try {
    const res = await fetch(`${API_URL}&s=${query}`);
    const data = await res.json();
    const movies = data.Search;
    return movies?.map(({ Title, Year, Poster, imdbID }) => {
      return {
        title: Title,
        year: Year,
        image_url: Poster,
        id: imdbID,
      };
    });
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
