import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, FileText } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            {/* Background */}
            <div className="hero-bg">
                <div className="glow-blob blob-1"></div>
                <div className="glow-blob blob-2"></div>
                <div className="noise-overlay"></div>
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
                    Mastering Instrumentation, Process Control<br />
                    <span className="text-gradient">& Functional Safety</span>
                </h1>

                <h2 className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    26 Years Global Oil & Gas Experience | Chartered Functional Safety Engineer (TÜV Rheinland) | P.Eng (Engineers Australia)
                </h2>

                <p className="hero-desc animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    Bridging the gap between complex engineering theory and industrial reality<br />
                    through field-proven training for the next generation of engineers.
                </p>

                <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <Link to="/courses" className="btn btn-primary">
                        Explore Programs <ArrowRight size={18} className="ml-2" />
                    </Link>
                    <Link to="/about" className="btn btn-outline">
                        Learn More <BookOpen size={18} className="ml-2" />
                    </Link>
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
