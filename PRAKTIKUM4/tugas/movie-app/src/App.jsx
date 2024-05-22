import PopularMovie from "./components/Movie/Popular";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/index.jsx";
import CreateMovie from "./components/Movie/Create.jsx"
import NowPlayingMovie from "./components/Movie/NowPlaying.jsx";
import TopRatedMovie from "./components/Movie/TopRated.jsx"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/now" element={<NowPlayingMovie />} />
        <Route path="/movie/top" element={<TopRatedMovie />} />
      </Routes>
    </Layout>
  );
}

export default App;
