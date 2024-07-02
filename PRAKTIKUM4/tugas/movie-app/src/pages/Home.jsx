import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";
import { useState } from "react";
import Hero from "../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <Movies/>
    </>
  );
};

export default Home;
