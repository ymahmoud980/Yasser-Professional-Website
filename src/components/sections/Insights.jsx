import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { BookOpen, ArrowRight, Clock, Filter } from 'lucide-react';
import './Insights.css';

const Insights = () => {
    const [activeTab, setActiveTab] = useState('All');

    const publicationTypes = ['All', 'Technical Guides', 'PDF Checklists', 'Pine Script Indicators', 'Articles'];

    const publications = [
        {
            title: "SIL Common Mistakes in Brownfield Upgrades",
            type: "Technical Papers",
            topic: "Functional Safety",
            readTime: "15 min read",
            excerpt: "An in-depth analysis of frequent SIL verification pitfalls during the rehabilitation of aging logic solvers in offshore platforms, presented at the Global Process Safety Conference."
        },
        {
            title: "DCS vs SIS Architecture: A Deep Dive",
            type: "Articles",
            topic: "Control Systems",
            readTime: "8 min read",
            excerpt: "Understanding the necessity of independent layers of protection and why integrating DCS and SIS can severely compromise overall plant integrity."
        },
        {
            title: "SIL Verification Checklist",
            type: "PDF Checklists",
            topic: "Functional Safety",
            readTime: "2 min read",
            excerpt: "A comprehensive checklist for verifying SIL loops during brownfield upgrades."
        },
        {
            title: "Advanced Trading Indicator",
            type: "Pine Script Indicators",
            topic: "Algorithmic Trading",
            readTime: "Code",
            excerpt: "Custom Pine Script indicator built for systematic trend analysis."
        }
    ];

    const filteredPubs = activeTab === 'All'
        ? publications
        : publications.filter(pub => pub.type === activeTab);

    return (
        <SectionWrapper
            id="resources"
            title="Articles & Resources"
            subtitle="A central hub for my technical guides, PDF checklists, Pine Script indicators, and professional articles."
            className="bg-secondary"
        >
            <div className="insights-container mt-8">

                {/* Publication Filters */}
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
                    {filteredPubs.map((pub, idx) => (
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

                            <a href="#" className="read-more mt-6">
                                Read Publication <ArrowRight size={16} className="ml-2" />
                            </a>
                        </article>
                    ))}
                </div>

                {/* Gallery Placeholder (Discussed with user) */}
                <div className="gallery-teaser mt-12 card border-dashed border-accent text-center p-8">
                    <h4 className="text-xl font-bold mb-4">Speaking Engagements & Events Gallery</h4>
                    <p className="text-secondary max-w-2xl mx-auto">
                        This section is reserved for showcasing high-quality images from international conferences, panel discussions, and technical training events. Space is prepared for when the image portfolio is ready.
                    </p>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Insights;
