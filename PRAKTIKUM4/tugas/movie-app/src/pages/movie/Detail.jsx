import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../utils/constants/endpoints";


function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getDetailMovie() {
            const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        
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