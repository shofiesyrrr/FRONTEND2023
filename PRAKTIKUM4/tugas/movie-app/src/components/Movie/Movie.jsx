import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    box-shadow: 6px 15px 21px 11px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #4361ee;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }

  /* Medium Screen */
  @media screen and (min-width: 768px) {
    flex-basis: 50%;
  }

  /* Large Screen */
  @media screen and (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

function Movie(props) {
  const { movie } = props;

  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;

  return (
    <StyledMovie>
      <img src={movie.poster || tmdbImage} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{year}</p>
    </StyledMovie>
  );
}

export default Movie;
