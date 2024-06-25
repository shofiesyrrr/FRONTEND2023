import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";


function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getDetailMovie() {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const params = `?api_key=${API_KEY}`;
            const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations${params}`;
        
            const response = await axios(URL);
        
            setMovies(response.data.results);
        }
        
        getDetailMovie();
    },[id])
    return (
        <>
            <DetailMovie />
            <Movies movies={movies} title="Movies Recommendation" />
        </>
    );
}

export default Detail;