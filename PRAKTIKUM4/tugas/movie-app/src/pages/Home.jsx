import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import MovieAddForm from "../components/Form/Form";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Movies />
        <MovieAddForm />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
