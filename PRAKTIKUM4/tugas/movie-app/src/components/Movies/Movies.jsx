import Movie from "../../components/Movie/Movie.jsx";
import Button from "../ui/Button/index.jsx";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

const Movies = (props) => {
  const { movies, setMovies, title = "Latest Movies" } = props;

  function handleClick() {
    const newMovie = {
      id: nanoid(),
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
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
        <Button onClick={handleClick}>Add Movie</Button>
      </section>
    </div>
  );
};

export default Movies;
