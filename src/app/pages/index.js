
import React from 'react';
import Projects from './projects/Projects';
import Header from './header/header';
import Home from './home/home';
import Footer from './footer/footer';
import Skills from './skills/skills';

const Index = () => {


    return (
        <>
            <Header />
            <Home />
            <Projects />
            <Skills />
            <Footer />
        </>
    );
};

export default Index;