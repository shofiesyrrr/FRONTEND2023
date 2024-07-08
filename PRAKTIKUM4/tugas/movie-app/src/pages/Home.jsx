import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Movies />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
