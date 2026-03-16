import React from 'react';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Background with abstract technical elements / video placeholder */}
            <div className="hero-bg">
                <div className="glow-blob blob-1"></div>
                <div className="glow-blob blob-2"></div>
                <div className="noise-overlay"></div>
                {/* Placeholder for actual video: <video src="..." autoPlay loop muted playsInline className="bg-video"></video> */}
                <div className="bg-image-placeholder"></div>
            </div>

            <div className="container hero-content text-center">
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <span className="hero-badge font-mono">
                        <span className="pulse-dot"></span>
                        Instrumentation, Process Control & Functional Safety
                    </span>
                </div>

                <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Mastering<br />
                    <span className="text-gradient">PROCESS CONTROL & FUNCTIONAL SAFETY</span>
                </h1>

                <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    26 Years Global Oil & Gas Experience | Certified Functional Safety Engineer (TÜV Rheinland) | P.Eng (Engineers Australia & WES Canada)
                </h2>

                <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Sharing decades of field-tested engineering knowledge, technical guides, <br />
                    and advanced insights to educate the next generation of engineers.
                </p>

                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <a href="#newsletter" className="btn btn-primary">
                        Join My Private Newsletter <ArrowRight size={18} className="ml-2" />
                    </a>
                    <a href="#academy" className="btn btn-outline">
                        Explore Academy Courses <Calendar size={18} className="ml-2" />
                    </a>
                </div>
            </div>

            <div className="hero-scroll-indicator animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <span className="font-mono text-secondary text-sm">SCROLL TO EXPLORE</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
