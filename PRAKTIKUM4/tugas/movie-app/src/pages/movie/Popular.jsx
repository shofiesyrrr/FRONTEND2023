import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

function PopularMovie() {

  const { setMovies } = useContext(MoviesContext);
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
      <Movies title="Popular Movies" />
    </div>
  );
}

export default PopularMovie;
