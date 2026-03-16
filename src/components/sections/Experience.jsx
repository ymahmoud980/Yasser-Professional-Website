import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Calendar, MapPin, Building2, TerminalSquare } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: "koc",
            period: "May 2007 – Present",
            company: "Kuwait Oil Company (KOC)",
            role: "Senior Independent Engineering Consultant",
            location: "Kuwait",
            desc: "Lead Technical Authority and Asset Owner representative with full responsibility for engineering, design, and technical supervision. Owning Safety-Critical decisions across South & East Kuwait Directorates.",
            highlights: [
                "Technical Authority for SIS / ICSS (IEC 61508 / IEC 61511).",
                "Initiate new projects via Project Stage-Gate System (PGS).",
                "Chair and contribute to PHA (HAZOP, HAZID, SIL Verification, QRA) studies.",
                "Full EPC lifecycle management: FEED, Detailed Design, FAT/SAT, and Start-Up."
            ],
            projects: ["GC-30 / GC-32 Sour Crude Facilities", "GC-24 & BS-131/132 Gas Booster Stations", "New EWTIP Plants (Raudhatain)", "Tank Vapor/Flare System GC-25"]
        },
        {
            id: "enppi",
            period: "March 2000 – May 2008",
            company: "ENPPI",
            role: "Instrumentation & Control Systems Engineer",
            location: "Egypt",
            desc: "Full EPC duties including Basic, FEED, and Detailed engineering, construction supervision, and commissioning for major petroleum and petrochemical industries.",
            highlights: [
                "Advanced Control Systems design and integration.",
                "Onshore and Offshore facility development.",
                "System dimensioning, Loop tuning, and P&ID drafting.",
                "Supervision of field instrument erection and testing."
            ],
            projects: ["WDDM Scarab / Saffron (Offshore & Subsea)", "Gasco Western Desert Gas Complex", "GUPCO Rehabilitation", "Qantara Field Development"]
        },
        {
            id: "petrojet",
            period: "Nov 1999 – March 2000",
            company: "PETROJET",
            role: "Instrumentation & Control Systems Engineer",
            location: "Egypt",
            desc: "Fast-paced immersion in Oil & Gas field control system integration.",
            highlights: [
                "Design and supervision of Fire & Gas systems.",
                "Field instrument calibration and testing.",
                "Commissioning coordination."
            ],
            projects: ["Various Onshore Fields", "Control Room Upgrades"]
        }
    ];

    const [activeExp, setActiveExp] = useState(0);

    return (
        <SectionWrapper id="experience" title="Career Timeline" subtitle="A 25+ year trajectory of engineering execution and technical authority.">
            <div className="experience-container mt-8">

                {/* Timeline Nav */}
                <div className="timeline-nav">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${activeExp === index ? 'active' : ''}`}
                            onClick={() => setActiveExp(index)}
                        >
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h4 className="font-mono text-sm text-gold">{exp.period}</h4>
                                <h3 className="company-name">{exp.company}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="timeline-line"></div>
                </div>

                {/* Experience Details */}
                <div className="experience-details card animate-fade-in" key={activeExp}>
                    <div className="exp-header">
                        <div>
                            <h3 className="text-2xl font-bold">{experiences[activeExp].role}</h3>
                            <h4 className="text-gold text-xl font-medium mt-1">{experiences[activeExp].company}</h4>
                        </div>
                        <div className="exp-meta">
                            <span className="meta-item"><Calendar size={16} /> {experiences[activeExp].period}</span>
                            <span className="meta-item"><MapPin size={16} /> {experiences[activeExp].location}</span>
                        </div>
                    </div>

                    <div className="exp-body mt-6">
                        <p className="lead-text mb-6">
                            {experiences[activeExp].desc}
                        </p>

                        <div className="grid grid-cols-2 gap-8 exp-grid">
                            <div>
                                <h4 className="flex items-center gap-2 font-mono text-blue mb-4 uppercase text-sm tracking-widest">
                                    <TerminalSquare size={16} /> Responsibilities
                                </h4>
                                <ul className="exp-list">
                                    {experiences[activeExp].highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="flex items-center gap-2 font-mono text-blue mb-4 uppercase text-sm tracking-widest">
                                    <Building2 size={16} /> Major Projects
                                </h4>
                                <div className="project-tags">
                                    {experiences[activeExp].projects.map((proj, i) => (
                                        <span key={i} className="project-tag">{proj}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Experience;
