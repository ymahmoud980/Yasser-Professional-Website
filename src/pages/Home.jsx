import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import SectionWrapper from '../components/layout/SectionWrapper';
import { BookOpen, Award, Shield, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <Shield size={32} className="text-gold" />,
            title: "Functional Safety",
            desc: "Expert technical authority and safety lifecycle management."
        },
        {
            icon: <BookOpen size={32} className="text-gold" />,
            title: "Technical Education",
            desc: "Field-proven training bridging complex theory and industrial reality."
        },
        {
            icon: <Award size={32} className="text-gold" />,
            title: "Engineering Consultancy",
            desc: "Lead technical oversight for process measurement and control systems."
        }
    ];

    const stats = [
        { number: "26+", label: "Years Experience" },
        { number: "10", label: "Training Tracks" },
        { number: "80+", label: "Course Modules" },
        { number: "100+", label: "Technical Resources" }
    ];

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <Hero />
                
                {/* Features Section */}
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, idx) => (
                                <div key={idx} className="card text-center p-8">
                                    <div className="flex justify-center mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-secondary">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="section">
                    <div className="container">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-blue mb-2">{stat.number}</div>
                                    <div className="text-secondary font-mono text-sm uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-lg text-secondary leading-relaxed">
                                To bridge the gap between complex engineering theory and industrial reality 
                                by providing world-class, field-proven training in Instrumentation, Automation, 
                                and Functional Safety. We empower the next generation of engineers with the 
                                technical precision and safety-first mindset required to lead the global energy evolution.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Programs Preview */}
                <section className="section">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Training Programs</h2>
                            <p className="text-secondary max-w-2xl mx-auto">
                                Explore our comprehensive curriculum designed by industry experts with decades of hands-on experience.
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="card p-6">
                                <h3 className="text-lg font-bold mb-2">Process Measurement & Analysis</h3>
                                <p className="text-secondary text-sm mb-4">8 courses covering pressure, level, flow, temperature, and analytical instrumentation.</p>
                                <span className="text-xs font-mono text-gold">In Development</span>
                            </div>
                            <div className="card p-6">
                                <h3 className="text-lg font-bold mb-2">Process Control & Final Elements</h3>
                                <p className="text-secondary text-sm mb-4">6 courses on PID tuning, control valves, and advanced control strategies.</p>
                                <span className="text-xs font-mono text-secondary">Upcoming</span>
                            </div>
                            <div className="card p-6">
                                <h3 className="text-lg font-bold mb-2">Functional Safety (IEC 61508/61511)</h3>
                                <p className="text-secondary text-sm mb-4">Complete safety lifecycle training from hazard analysis to SIL verification.</p>
                                <span className="text-xs font-mono text-secondary">Upcoming</span>
                            </div>
                            <div className="card p-6">
                                <h3 className="text-lg font-bold mb-2">AI in Instrumentation & Safety</h3>
                                <p className="text-secondary text-sm mb-4">Modern AI/ML applications for industrial control and predictive maintenance.</p>
                                <span className="text-xs font-mono text-secondary">Upcoming</span>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link to="/courses" className="btn btn-outline">
                                View All Programs <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-secondary">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Advance Your Career?</h2>
                            <p className="text-secondary mb-8">
                                Request technical information about our programs and curriculum details.
                            </p>
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Home;
