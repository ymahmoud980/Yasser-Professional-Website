import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Experience from '../components/sections/Experience';
import Expertise from '../components/sections/Expertise';
import Certifications from '../components/sections/Certifications';
import Portfolio from '../components/sections/Portfolio';
import Insights from '../components/sections/Insights';
import Contact from '../components/sections/Contact';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Services />
            <Experience />
            <Expertise />
            <Certifications />
            <Portfolio />
            <Insights />
            <Contact />
        </div>
    );
};

export default Home;
