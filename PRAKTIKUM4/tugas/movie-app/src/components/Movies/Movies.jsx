import Movie from "../Movie/Movie.jsx";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data.js";
import { useState } from "react";
import { nanoid } from "nanoid";

const Movies = () => {
  const [movies, setMovies] = useState(data);

  function handleClick() {
    const newMovie = {
      id: nanoid(),
      title: "Iron Man",
      year: "2019",
      type: "Movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg",
    };

    setMovies([...movies, newMovie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
};

export default Movies;