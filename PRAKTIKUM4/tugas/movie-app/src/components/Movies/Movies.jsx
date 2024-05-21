import Movie from "../Movie/Movie.jsx";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

const Movies = (props) => {
  const {movies, setMovies} = props;

      function handleClick() {
        const newMovie = {
          id:nanoid(), 
          title: "Barbie",
          year: 2019, 
          type: "Movie",
          poster: "https://picsum.photos/300/400",
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