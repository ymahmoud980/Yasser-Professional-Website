import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { ExternalLink, Tag } from 'lucide-react';
import './Portfolio.css';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Onshore', 'Offshore', 'Subsea', 'Brownfield', 'Greenfield'];

    const projects = [
        {
            title: "GC-30 & GC-32 Sour Crude",
            location: "Kuwait",
            desc: "Full FEED and Detailed engineering oversight for new sour gathering centers.",
            categories: ["Onshore", "Greenfield", "Sour Crude"]
        },
        {
            title: "WDDM Scarab / Saffron",
            location: "Egypt",
            desc: "Offshore platform and subsea tie-back integration and control system engineering.",
            categories: ["Offshore", "Subsea"]
        },
        {
            title: "Gas Booster Stations BS-131/132",
            location: "Kuwait",
            desc: "SIL assessment, validation, and control system upgrades.",
            categories: ["Onshore", "Brownfield"]
        },
        {
            title: "New EWTIP Plants Raudhatain",
            location: "Kuwait",
            desc: "Design and start-up leadership for Effluent Water Treatment Injection Plants.",
            categories: ["Onshore", "Greenfield"]
        },
        {
            title: "GUPCO Rehabilitation",
            location: "Egypt",
            desc: "Instrumentation and logic solver rehabilitation for aging offshore facilities.",
            categories: ["Offshore", "Brownfield"]
        },
        {
            title: "Tank Vapor Recovery GC-25",
            location: "Kuwait",
            desc: "Emissions management and compressor control protection upgrades (Anti-surge).",
            categories: ["Onshore", "Brownfield"]
        },
        {
            title: "Gasco Western Desert",
            location: "Egypt",
            desc: "Comprehensive EPC execution for gas processing plant instrumentation.",
            categories: ["Onshore", "Greenfield"]
        }
    ];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.categories.some(c => c.includes(activeFilter)));

    return (
        <SectionWrapper id="portfolio" title="Featured Projects" subtitle="A multi-million dollar portfolio spanning the Middle East and North Africa.">
            <div className="portfolio-container mt-8">

                {/* Filters */}
                <div className="filter-group">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project Grid */}
                <div className="project-grid mt-8">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="project-card card animate-fade-in">
                            <div className="project-header">
                                <span className="project-location font-mono">{project.location}</span>
                                <ExternalLink size={18} className="text-secondary" />
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                            <div className="project-tags-group mt-6">
                                {project.categories.map((cat, i) => (
                                    <span key={i} className="proj-cat-tag">
                                        <Tag size={12} className="text-accent" /> {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Portfolio;
