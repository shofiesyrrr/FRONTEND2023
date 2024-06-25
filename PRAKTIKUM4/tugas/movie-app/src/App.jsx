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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  );
}

export default App;
