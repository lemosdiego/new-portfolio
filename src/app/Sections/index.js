import React from "react";
import Projects from "./projects/Projects";
import Header from "./header/header";
import Home from "./home/home";
import Footer from "./footer/footer";
import Skills from "./skills/skills";
import About from "./About/page";
import ContactPage from "./Contacts/page";
import Certificates from "./Certificados/Certificates";
import Service from "./Servicos/Service";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <Box>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Service />
      <ContactPage />
      <Footer />
    </Box>
  );
};

export default Index;
