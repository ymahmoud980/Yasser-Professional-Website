import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import SectionWrapper from '../components/layout/SectionWrapper';
import { BookOpen, FileText, Download, Clock, Filter, ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
    const [activeTab, setActiveTab] = useState('All');

    const publicationTypes = ['All', 'Technical Papers', 'Articles', 'PDF Guides', 'Tools'];

    const publications = [
        {
            title: "SIL Common Mistakes in Brownfield Upgrades",
            type: "Technical Papers",
            topic: "Functional Safety",
            date: "2024",
            readTime: "15 min read",
            excerpt: "An in-depth analysis of frequent SIL verification pitfalls during the rehabilitation of aging logic solvers in offshore platforms.",
            featured: true
        },
        {
            title: "DCS vs SIS Architecture: A Deep Dive",
            type: "Articles",
            topic: "Control Systems",
            date: "2024",
            readTime: "8 min read",
            excerpt: "Understanding the necessity of independent layers of protection and why integrating DCS and SIS can compromise plant integrity.",
            featured: false
        },
        {
            title: "SIL Verification Checklist",
            type: "PDF Guides",
            topic: "Functional Safety",
            date: "2024",
            readTime: "Download",
            excerpt: "A comprehensive checklist for verifying SIL loops during brownfield upgrades.",
            featured: false
        },
        {
            title: "Control Valve Sizing Handbook",
            type: "PDF Guides",
            topic: "Process Control",
            date: "2024",
            readTime: "Download",
            excerpt: "Complete reference guide for control valve sizing including ANSI/ISA standards and practical examples.",
            featured: false
        },
        {
            title: "P&ID Review Checklist",
            type: "PDF Guides",
            topic: "Engineering",
            date: "2024",
            readTime: "Download",
            excerpt: "Systematic checklist for reviewing Process and Instrumentation Diagrams.",
            featured: false
        },
        {
            title: "Hazardous Area Classification Guide",
            type: "PDF Guides",
            topic: "Electrical",
            date: "2024",
            readTime: "Download",
            excerpt: "Guide to IEC zone classifications and equipment selection for hazardous locations.",
            featured: false
        },
        {
            title: "Instrumentation Calculation Workbook",
            type: "Tools",
            topic: "Engineering",
            date: "2024",
            readTime: "Excel",
            excerpt: "Excel workbook with formulas for control valve sizing, orifice plates, and relief valves.",
            featured: false
        },
        {
            title: "Alarm Rationalization Template",
            type: "Tools",
            topic: "Operations",
            date: "2024",
            readTime: "Excel",
            excerpt: "ISA-18.2 compliant template for alarm rationalization and management.",
            featured: false
        }
    ];

    const filteredPubs = activeTab === 'All'
        ? publications
        : publications.filter(pub => pub.type === activeTab);

    const featuredPub = publications.find(p => p.featured);

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <SectionWrapper id="resources" title="Technical Resources" subtitle="Articles, guides, and tools for instrumentation and process safety professionals.">
                    <div className="container mt-12">
                        {/* Featured Article */}
                        {featuredPub && (
                            <div className="featured-section mb-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">Featured</h3>
                                <div className="card p-8 bg-gradient-to-br from-dark to-dark/50 border-gold/30">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="flex-1">
                                            <span className="inline-block text-xs font-mono font-bold tracking-widest text-gold bg-gold/10 border border-gold/30 px-3 py-1 rounded-full uppercase mb-4">
                                                {featuredPub.type}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredPub.title}</h3>
                                            <p className="text-secondary mb-4">{featuredPub.excerpt}</p>
                                            <div className="flex items-center gap-4 text-sm text-secondary mb-6">
                                                <span className="font-mono text-gold">[{featuredPub.topic}]</span>
                                                <span className="flex items-center gap-1">
                                                    <Clock size={14} /> {featuredPub.readTime}
                                                </span>
                                            </div>
                                            <a href="#" className="btn btn-primary">
                                                Read Publication <ArrowRight size={16} className="ml-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Filters */}
                        <div className="pub-filters flex-center mb-8 gap-4 flex-wrap">
                            <Filter size={18} className="text-secondary" />
                            {publicationTypes.map(type => (
                                <button
                                    key={type}
                                    onClick={() => setActiveTab(type)}
                                    className={`pub-filter-btn ${activeTab === type ? 'active' : ''}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>

                        {/* Publications Grid */}
                        <div className="insights-grid">
                            {filteredPubs.filter(p => !p.featured).map((pub, idx) => (
                                <article key={idx} className="post-card card">
                                    <div className="post-meta">
                                        <span className={`post-type-badge type-${pub.type.toLowerCase().replace(' ', '-')}`}>
                                            {pub.type}
                                        </span>
                                        <span className="post-time flex-center text-secondary text-sm">
                                            <Clock size={12} className="mr-1" /> {pub.readTime}
                                        </span>
                                    </div>

                                    <h3 className="post-title mt-4">{pub.title}</h3>

                                    <div className="post-topic text-sm text-gold mt-2 font-mono">
                                        [{pub.topic}]
                                    </div>

                                    <p className="post-excerpt mt-4">{pub.excerpt}</p>

                                    <div className="mt-6 flex gap-3">
                                        {pub.readTime === 'Download' || pub.readTime === 'Excel' ? (
                                            <a href="#" className="read-more flex items-center gap-2">
                                                <Download size={16} /> Download
                                            </a>
                                        ) : (
                                            <a href="#" className="read-more flex items-center gap-2">
                                                Read Publication <ArrowRight size={16} />
                                            </a>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Speaking Engagements Gallery Teaser */}
                        <div className="gallery-teaser mt-16 card border-dashed border-accent text-center p-8">
                            <h4 className="text-xl font-bold mb-4">Speaking Engagements & Events</h4>
                            <p className="text-secondary max-w-2xl mx-auto">
                                This section showcases conference presentations, technical training sessions, 
                                and professional events. Content coming soon.
                            </p>
                        </div>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
};

export default ResourcesPage;
