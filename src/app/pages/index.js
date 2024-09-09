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
import { LanguageProvider } from "../../../context/LanguageContext";
import { TranslationProvider } from "../../../context/TranslationContext";

const Index = () => {
  return (
    <LanguageProvider>
      <TranslationProvider>
        <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Service />
        <ContactPage />
        <Footer />
      </TranslationProvider>
    </LanguageProvider>
  );
};

export default Index;
