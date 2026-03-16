import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Experience from '../components/sections/Experience';
import Certifications from '../components/sections/Certifications';
import Academy from '../components/sections/Academy';
import Insights from '../components/sections/Insights';
import Newsletter from '../components/sections/Newsletter';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Experience />
            <Certifications />
            <Academy />
            <Insights />
            <Newsletter />
        </div>
    );
};

export default Home;
