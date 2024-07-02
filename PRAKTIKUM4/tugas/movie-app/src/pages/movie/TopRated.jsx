import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useContext, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";

function TopRatedMovie() {
  
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title="Top Rated Movies" />
    </div>
  );
}

export default TopRatedMovie;
