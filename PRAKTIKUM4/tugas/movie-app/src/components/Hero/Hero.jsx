import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button"

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

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
    );

    const data = await response.json();

    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>{movies.Title}</h2>
          <h3>Genre: {movies.Genre}</h3>
          <p>{movies.Plot}</p>
          <Button>Watch</Button>
        </div>
        <div className="hero__right">
          <img src={movies.Poster} alt={movies.Title} />
        </div>
      </section>
    </StyledHero>
  );
};

export default Hero;
