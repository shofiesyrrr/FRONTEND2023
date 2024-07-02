import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/index.jsx";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import NowPlayingMovie from "./pages/movie/NowPlaying.jsx";
import TopRatedMovie from "./pages/movie/TopRated.jsx";
import PopularMovie from "./pages/movie/Popular.jsx";
import Detail from "./pages/movie/Detail.jsx";
import CreateMovie from "./pages/movie/Create.jsx";
import MoviesContext from "./context/MoviesContext.jsx";
import { useState } from "react";
import data from "./utils/constants/data";

function App() {
  const [movies, setMovies] = useState(data);

  const contextValue = {
    movies,
    setMovies,
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <MoviesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
            <Route path="/movie/:id" element={<Detail />} />
          </Routes>
        </Layout>
        </MoviesContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
