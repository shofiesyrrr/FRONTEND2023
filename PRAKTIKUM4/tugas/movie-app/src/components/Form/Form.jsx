import styles from './Form.module.css'; // Import CSS Modules

const MovieAddForm = ({ onSubmit }) => {


  return (
    <form className={styles.form}>
      <h2>Add Movie</h2>
      <label htmlFor="title">Title:</label>
      <input
      id='title'
        type="text"
        className={styles.titleInput}
      />

      <label htmlFor="year">Year:</label>
      <input
      id='year'
        type="text"
        className={styles.genreInput}
      />
      <button type="submit" className={styles.submitButton}>
        Add Movie
      </button>
    </form>
  );
};

export default MovieAddForm;
