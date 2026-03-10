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
                        Global Technical Authority
                    </span>
                </div>

                <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Precision Engineering & <span className="text-gradient">Functional Safety</span> Expert
                </h1>

                <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    Yasser Mahmoud | Global Technical Authority | 25+ Years Experience
                </h2>

                <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Delivering Strategic Risk-Based Safety Solutions and Advanced Control Systems for High-Stakes Industrial Facilities Worldwide.
                </p>

                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <a href="#contact" className="btn btn-primary">
                        Request Consultation <ArrowRight size={18} className="ml-2" />
                    </a>
                    <a href="#services" className="btn btn-outline">
                        Book Training <Calendar size={18} className="ml-2" />
                    </a>
                    <a href="/Yasser_Mahmoud_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-gold flex-center">
                        Download CV <Download size={18} className="ml-2" />
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
