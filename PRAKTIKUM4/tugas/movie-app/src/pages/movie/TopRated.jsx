import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";

function TopRatedMovie() {
  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      const response = await axios(URL);

      setMovies(response.data.results);
    }

    getMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
