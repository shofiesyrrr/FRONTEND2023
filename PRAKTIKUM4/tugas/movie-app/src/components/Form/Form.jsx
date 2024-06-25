import React, { useState } from "react";
import icon2 from "../../assets/image/icon2.png";
import styles from "./Form.module.css";
import Alert from "./Alert.jsx";
import { nanoid } from "nanoid";

const Form = (props) => {
  const { movies, setMovies } = props;
  const [formInput, setFormInput] = useState({
    title: {
      value: "",
      error: "",
    },
    year: {
      value: "",
      error: "",
    },
    poster: {
      value: "",
      error: "",
    },
    type: {
      value: "Action",
    },
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: {
        ...formInput[name],
        value: value,
      },
    });
  }

  function validate() {
    if (formInput.title.value === "") {
      setFormInput({
        ...formInput,
        title: {
          ...formInput.title,
          error: true,
        },
      });
      return false;
    } else if (formInput.year.value === "") {
      setFormInput({
        ...formInput,
        year: {
          ...formInput.year,
          error: true,
        },
      });
      return false;
    } else if (formInput.poster.value === "") {
      setFormInput({
        ...formInput,
        poster: {
          ...formInput.poster,
          error: true,
        },
      });
      return false;
    } else {
      setFormInput({
        ...formInput,
        title: {
          ...formInput.title,
          error: false,
        },
        year: {
          ...formInput.year,
          error: false,
        },
        poster: {
          ...formInput.poster,
          error: false,
        },
      });
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
      title: formInput.title.value,
      year: formInput.year.value,
      type: formInput.type.value,
      poster: "https://picsum.photos/300/400",
    };
    setMovies([...movies, movie]);
  }

  return (
    <div id="form" className={styles.container}>
      <form onSubmit={handleSubmit}>
        <section className={styles.form}>
          <div className={styles.form__right}>
            <h2 className={styles.title}>Add Movie</h2>
            <div className={styles.formGroup}>
              <label htmlFor="title">Title</label>
              <input
                onChange={handleChange}
                type="text"
                id="title"
                name="title"
                className={styles.formInput}
                value={formInput.title.value}
              />
              {formInput.title.error && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="year">Date</label>
              <input
                onChange={handleChange}
                type="number"
                id="year"
                name="year"
                className={styles.formInput}
                value={formInput.year.value}
              />
              {formInput.year.error && <Alert>Date Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                className={styles.formInput}
                value={formInput.poster.value}
                onChange={handleChange}
              />
              {formInput.poster.error && <Alert>Poster Wajib Diisi</Alert>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                value={formInput.type.value}
                onChange={handleChange}
                className={styles.formInput}
              >
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
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
