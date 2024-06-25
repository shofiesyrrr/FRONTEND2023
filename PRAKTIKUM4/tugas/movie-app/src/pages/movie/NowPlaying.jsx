import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function NowPlayingMovie() {
  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios(ENDPOINTS.NOW_PLAYING);

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
