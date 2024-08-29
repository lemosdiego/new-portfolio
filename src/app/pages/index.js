import React from "react";
import Projects from "./projects/Projects";
import Header from "./header/header";
import Home from "./home/home";
import Footer from "./footer/footer";
import Skills from "./skills/skills";
import About from "./About/page";

const Index = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
};

export default Index;
