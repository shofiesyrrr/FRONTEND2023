import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {

      const response = await axios(ENDPOINTS.POPULAR);

      setMovies(response.data.results);
    }

    getMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
