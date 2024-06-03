import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");

    const data = await response.json();

    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movies.Title}</h2>
          <h3 className={styles.hero__genre}>Genre: {movies.Genre}</h3>
          <p className={styles.hero__description}>
            {movies.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className={styles.hero__right}>
          <img
            className={styles.hero__image}
            src={movies.Poster}
            alt={movies.Title}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
