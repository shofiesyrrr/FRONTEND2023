import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";

const StyledDetailMovie = styled.section`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  a {
    text-decoration: none;
  }
  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
    max-width: 40rem;
  }

  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }
`;

function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const genres = movie.genres
    ? movie.genres.map((genre) => genre.name).join(", ")
    : "";
  const idTrailer = movie.videos ? movie.videos.results[0].key : "";
  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`;

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;

      const response = await axios(URL);

      setMovie(response.data);
    }

    getDetailMovie();
  }, [id]);

  return (
    <StyledDetailMovie>
      <div className="hero__left">
        <img src={tmdbImage} alt={movie.Title} />
      </div>
      <div className="hero__right">
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
    </StyledDetailMovie>
  );
}

export default DetailMovie;
