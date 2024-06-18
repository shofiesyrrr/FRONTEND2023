import axios from "axios";
import Movies from "../Movies/Movies";
import { useState, useEffect } from "react";
import Hero from "../Hero/Hero";

function PopularMovie() {


  //membuat state movie
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    async function getMovies() {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

        const response = await axios(URL);

        setMovies(response.data.results);

    }


    getMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} />
    </div>
  );
}

export default PopularMovie;
