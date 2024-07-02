import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/ui/Button";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";

const StyledHero = styled.div`
  /* Small Screen */
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #000000;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    max-width: 1000px;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      padding: 0.5rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      max-width: 1100px;
    }

    .hero__left {
      flex-basis: 40%;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState([]);
  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";
  const idTrailer = movie.videos ? movie.videos.results[0].key : "";
  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;

    async function getFirstTrendingMovies() {
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);

      const firstMovie = response.data.results[0];

      return firstMovie;
    }

    async function getMovieDetails(movie) {
      const trendingMovie = await getFirstTrendingMovies();
      const id = trendingMovie.id;

     const response = await axios(ENDPOINTS.DETAIL(id));

      setMovie(response.data);
    }

    getMovieDetails();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movie.title}</h2>
          <h3>{genres}</h3>
          <p>{movie.overview}</p>
          <Button
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Trailer
          </Button>
        </div>
        <div className="hero__right">
          <img src={tmdbImage} alt={movie.Title} />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
