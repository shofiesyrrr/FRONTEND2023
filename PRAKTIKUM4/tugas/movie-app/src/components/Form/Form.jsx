import React, { useState } from "react";
import styles from "./Form.module.css";
import icon2 from "../assets/image/icon2.png";
import Alert from "./Alert.jsx";
import { nanoid } from "nanoid";

const Form = (props) => {
  const { movies, setMovies } = props;
  const [formInput, setFormInput] = useState({
    title: "",
    year: "",
    poster: "",
    type: "Action",
  });
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleTitle(e) {
    setFormInput({
      ...formInput,
      title: e.target.value,
    });
  }
  function handleYear(e) {
    setFormInput({
      ...formInput,
      year: e.target.value,
    });
  }

  function handlePoster(e) {
    setFormInput({
      ...formInput,
      poster: e.target.value,
    });
  }

  function handleType(e) {
    setFormInput({
      ...formInput,
      type: e.target.value,
    });
  }

  function validate() {
    if (formInput.title === "") {
      setIsTitleError(true);
      return false;
    } else if (formInput.year === "") {
      setIsDateError(true);
      return false;
    } else if (formInput.poster === "") {
      setIsPosterError(true);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false)
      return true;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
  }


  function addMovie() {
    const movie = {
      id: nanoid(),
      title: formInput.title,
      year: formInput.year,
      type: formInput.type,
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
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
                value={formInput.title}
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
                value={formInput.year}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                className={styles.formInput}
                value={formInput.poster}
                onChange={handlePoster}
              />
              {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="type">Type</label>
              <select
                onChange={handleType}
                name="type"
                id="type"
                value={formInput.type}
                className={styles.formInput}
              >
                <option value="Action">Action</option>
                <option value="Action">Drama</option>
                <option value="Action">Horor</option>
                <option value="Action">Comedy</option>
              </select>
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
