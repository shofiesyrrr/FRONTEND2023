import React, { useState } from "react";
import styles from "./Form.module.css";
import icon2 from "../assets/image/icon2.png";
import Alert from "./Alert.jsx";
import { nanoid } from "nanoid";

const Form = (props) => {
  const { movies, setMovies } = props;
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleYear(e) {
    setYear(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "") {
      setIsTitleError(true);
    } else if (year === "") {
      setIsDateError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: year,
        type: "Movie",
        poster: "https://picsum.photos/300/400",
      };
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
    }
  }

  return (
    <div id="form" className={styles.container}>
      <form onSubmit={handleSubmit}>
        <section className={styles.form}>
          <div className={styles.form__right}>
            <h2 className={styles.title}>Form Covid</h2>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                onChange={handleTitle}
                type="text"
                id="title"
                className={styles.formInput}
                value={title}
              />
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date">Date</label>
              <input
                onChange={handleYear}
                type="number"
                id="date"
                className={styles.formInput}
                value={year}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </div>
          <div className={styles.form__left}>
            <img className={styles.form__image} src={icon2} alt="example" />
          </div>
        </section>
      </form>
    </div>
  );
};

export default Form;
