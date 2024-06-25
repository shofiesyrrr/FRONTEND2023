import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";

function NowPlayingMovie() {
  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      const response = await axios(URL);

      setMovies(response.data.results);
    }

    getMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Now Playing" />
    </div>
  );
}

export default NowPlayingMovie;
