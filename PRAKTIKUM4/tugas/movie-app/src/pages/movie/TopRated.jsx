import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function TopRatedMovie() {
  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios(ENDPOINTS.TOP_RATED);

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
