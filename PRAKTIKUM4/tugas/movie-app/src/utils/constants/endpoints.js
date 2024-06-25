const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ENDPOINTS = {
    POPULAR: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
}

export default ENDPOINTS