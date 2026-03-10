import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { PenTool, ShieldAlert, BookOpen, Activity, ChevronRight, CheckCircle2 } from 'lucide-react';
import './Services.css';

const Services = () => {
    const [activeService, setActiveService] = useState(0);

    const servicesList = [
        {
            id: "engineering",
            icon: <PenTool size={32} className="text-blue" />,
            title: "Engineering & Design",
            desc: "Full-spectrum engineering from conceptual design (FEED) to detailed specifications for control systems.",
            deliverables: ["FEED & Detailed Engineering", "DCS / ESD / F&G / SCADA Design", "Flow & Control Valve Sizing", "Logic & Cause/Effect Development", "Tendering & TBA"],
            clients: ["EPC Contractors", "Asset Owners", "Engineering Consultants"],
            benefits: "Guaranteed compliance with latest technologies and international codes."
        },
        {
            id: "safety",
            icon: <ShieldAlert size={32} className="text-gold" />,
            title: "Functional Safety & Risk",
            desc: "Comprehensive hazard mitigation and SIL lifecycle management compliant with IEC 61511 standards.",
            deliverables: ["HAZOP / HAZID / SIL Workshops", "QRA & Risk Registers", "Safety Requirement Specs (SRS)", "SIL Verification", "MOC Audits"],
            clients: ["National Oil Companies", "Offshore Operators", "Gas Facilities"],
            benefits: "Risk reduction to ALARP, ensuring safe and continuous plant operations."
        },
        {
            id: "training",
            icon: <BookOpen size={32} className="text-blue" />,
            title: "Capacity Building",
            desc: "High-level technical training courses for engineers, focusing on practical and advanced methodologies.",
            deliverables: ["Instrumentation Fundamentals", "Advanced Process Control", "TÜV Certification Preparation", "FAT/SAT Methodology", "Valve Engineering"],
            clients: ["Engineering Teams", "Recent Graduates", "Corporate Training Depts"],
            benefits: "Empowering teams with decades of field-tested knowledge."
        },
        {
            id: "optimization",
            icon: <Activity size={32} className="text-gold" />,
            title: "Troubleshooting & Optimization",
            desc: "Live plant diagnostics, loop tuning, and brownfield upgrade strategies.",
            deliverables: ["Loop Tuning & Startup Support", "Plant Instability Diagnostics", "Anti-surge Advisory", "Compressor Protection", "Brownfield Upgrade Strategy"],
            clients: ["Plant Managers", "Operations Teams", "Petrochemical Plants"],
            benefits: "Minimized downtime and optimized continuous production."
        }
    ];

    return (
        <SectionWrapper
            id="services"
            title="Core Business Offerings"
            subtitle="Delivering comprehensive engineering solutions from Front-End Design to Start-Up and beyond."
            className="bg-secondary"
        >
            <div className="services-container">
                {/* Mobile / Tablet Grid */}
                <div className="services-grid hide-desktop">
                    {servicesList.map((svc, index) => (
                        <div key={index} className="service-card card">
                            <div className="service-icon">{svc.icon}</div>
                            <h3 className="service-title">{svc.title}</h3>
                            <p className="service-desc">{svc.desc}</p>

                            <div className="service-details mt-4">
                                <h4 className="font-mono text-sm text-gold mb-2">DELIVERABLES</h4>
                                <ul className="service-deliverables">
                                    {svc.deliverables.map((item, i) => (
                                        <li key={i}><CheckCircle2 size={14} className="text-blue mr-2" />{item}</li>
                                    ))}
                                </ul>

                                <div className="mt-4">
                                    <h4 className="font-mono text-sm text-gold mb-2">TARGET CLIENTS</h4>
                                    <p className="text-sm text-secondary">{svc.clients.join(" | ")}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Interactive Layout */}
                <div className="services-interactive show-desktop">
                    <div className="services-nav">
                        {servicesList.map((svc, index) => (
                            <button
                                key={index}
                                className={`service-nav-btn ${activeService === index ? 'active' : ''}`}
                                onClick={() => setActiveService(index)}
                            >
                                <div className="nav-btn-content">
                                    {svc.icon}
                                    <span>{svc.title}</span>
                                </div>
                                <ChevronRight size={20} className="nav-arrow" />
                            </button>
                        ))}
                    </div>

                    <div className="service-display card animate-fade-in" key={activeService}>
                        <div className="service-header">
                            <div className="service-icon large">{servicesList[activeService].icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold">{servicesList[activeService].title}</h3>
                                <p className="text-secondary mt-2">{servicesList[activeService].desc}</p>
                            </div>
                        </div>

                        <div className="service-body mt-8 grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-mono text-gold mb-4 uppercase tracking-widest text-sm">Key Deliverables</h4>
                                <ul className="service-deliverables large">
                                    {servicesList[activeService].deliverables.map((item, i) => (
                                        <li key={i}><CheckCircle2 size={18} className="text-blue mr-2 flex-shrink-0" /> <span className="text-primary">{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-mono text-gold mb-4 uppercase tracking-widest text-sm">Target Clients</h4>
                                <div className="client-tags">
                                    {servicesList[activeService].clients.map((client, i) => (
                                        <span key={i} className="client-tag">{client}</span>
                                    ))}
                                </div>

                                <div className="mt-8 benefit-box">
                                    <h4 className="font-mono text-blue mb-2 uppercase tracking-widest text-sm">The Benefit</h4>
                                    <p className="text-primary font-medium">{servicesList[activeService].benefits}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Services;
