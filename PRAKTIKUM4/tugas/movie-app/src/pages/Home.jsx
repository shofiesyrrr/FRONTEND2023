import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState(data);
    return (
        <>
                <Hero/>
                <Movies movies={movies} setMovies={setMovies}/>
                <Form movies={movies} setMovies={setMovies} />
        </>
    );
}

export default Home;