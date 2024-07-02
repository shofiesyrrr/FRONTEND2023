import axios from "axios";
import Movies from "../../components/Movies/Movies";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import ENDPOINTS from "../../utils/constants/endpoints";
import MoviesContext from "../../context/MoviesContext";


function Detail() {
    const { id } = useParams();

    const {setMovies} = useContext(MoviesContext);

    useEffect(() => {
        async function getDetailMovie() {
            const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        
            setMovies(response
            .data.results);
        }
        
        getDetailMovie();
    },[id])
    return (
        <>
            <DetailMovie />
            <Movies title="Movies Recommendation" />
        </>
    );
}

export default Detail;