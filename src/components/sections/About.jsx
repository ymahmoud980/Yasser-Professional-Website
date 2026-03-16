import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Award, Briefcase, GraduationCap, CheckCircle2, Shield, Settings, FileSearch, PenTool, Users, Languages } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <SectionWrapper id="about" title="About Yasser Mahmoud" subtitle="P.Eng., TÜVFSEng., W.E.S.">
            <div className="about-grid">
                {/* Left Column: Image Placeholder & Quick Stats */}
                <div className="about-visuals sticky-panel">
                    <div className="headshot-placeholder">
                        <div className="placeholder-text">
                            <span className="font-mono text-secondary">PROFESSIONAL HEADSHOT</span>
                            <span className="font-mono text-gold text-sm mt-2">[Insert Image Here]</span>
                        </div>
                    </div>

                    <div className="experience-badge mt-8">
                        <div className="years text-blue">25+</div>
                        <div className="years-text">Years of Engineering <br />Excellence</div>
                    </div>
                    
                    <div className="languages-card card mt-6">
                        <div className="flex items-center mb-4">
                            <Languages size={24} className="text-gold mr-3" />
                            <h4 className="text-lg font-bold">Language Proficiency</h4>
                        </div>
                        <ul className="about-bullets">
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>Fluent:</strong> Arabic & English</li>
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>Elementary:</strong> Turkish & French</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Detailed Content */}
                <div className="about-content">
                    <div className="about-intro">
                        <p className="lead-text text-gradient font-bold mb-6">
                            I am a Senior Instrumentation, Automation, Control, and Functional Process Safety Engineer with 25 years of practical experience in the Oil & Gas industry, spanning onshore, offshore, and subsea projects.
                        </p>
                        <p className="text-secondary mb-8">
                            Throughout my career, I have established myself as a technical authority and subject matter expert, specializing in the entire project lifecycle from conceptual design and FEED to commissioning and operational support.
                        </p>
                    </div>

                    <div className="content-section">
                        <h3 className="section-heading"><Award className="mr-3 text-gold" /> Professional Credentials</h3>
                        <p className="text-secondary mb-4">My expertise is recognized globally through several prestigious certifications and memberships:</p>
                        <ul className="detailed-list">
                            <li><strong>Professional Engineer (P.Eng.):</strong> Certified in Automation and Control (Skill Level 1) by Engineers Australia.</li>
                            <li><strong>Certified Functional Safety Engineer (TÜVFSEng):</strong> Certified by TÜV Rheinland, Germany for Safety Instrumented Systems (SIS) according to IEC 61508 and 61511.</li>
                            <li><strong>Credentialed Engineer:</strong> Verified Electronics & Control Engineer by World Education Services (WES) Canada.</li>
                            <li><strong>Academic Foundation:</strong> B.Sc. in Electronics & Control Engineering from Mansoura University, Egypt (Graduation Project: DCS - Grade: "Excellent").</li>
                            <li><strong>Professional Memberships:</strong> Active member of the Egyptian and Kuwaiti Syndicates of Engineers.</li>
                        </ul>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Settings className="mr-3 text-gold" /> Core Capabilities and Technical Expertise</h3>
                        <p className="text-secondary mb-4">In my current role as a Senior Engineer at Kuwait Oil Company (KOC), I serve as the lead technical authority and asset owner representative. My responsibilities include:</p>
                        <ul className="detailed-list">
                            <li><strong>Project Leadership & Initiation:</strong> Initiate new projects using the Project Stage-Gate System (PGS), leading site surveys and data gathering to issue Decision Support Packages (DSP).</li>
                            <li><strong>Engineering & Design Mastery:</strong> Lead preparation and review of P&IDs, PFDs, Control Philosophies, and SOW. Certified approver for DCS, ESD, F&G, SCADA, CMS, and PLDS specifications.</li>
                            <li><strong>Functional Safety Management:</strong> Deeply involved in Process Hazard Analysis (PHA), chairing/contributing to HAZOP, HAZID, SIL assessment, and SIL verification. Issue and approve Safety Requirement Specifications (SRS).</li>
                            <li><strong>Technical Calculations:</strong> Perform precise sizing calculations for control valves, actuators, orifice plates, and safety relief valves using InstruCalc.</li>
                            <li><strong>Field & Site Execution:</strong> Supervise construction activities, cable laying, instrument installation, and witness Factory Acceptance Tests (FAT) and Site Acceptance Tests (SAT).</li>
                            <li><strong>Commissioning & Start-Up:</strong> Lead loop testing, cabinet power-ups, PID tuning, and live functional testing during plant start-up.</li>
                        </ul>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Briefcase className="mr-3 text-gold" /> Professional Journey</h3>
                        <p className="text-secondary mb-4">
                            Before joining KOC in 2007, I spent eight years at ENPPI, the leading EPC company in Egypt, where I executed full engineering and construction responsibilities for high-profile petrochemical developments. My career began at PETROJET, focusing on the design and commissioning of Fire & Gas systems in oil fields.
                        </p>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Users className="mr-3 text-gold" /> Commitment to Excellence & Mentorship</h3>
                        <p className="text-secondary mb-4">
                            Beyond my technical project work, I am a core member of the KOC Standards Review Committee, where I help define the future of instrumentation and functional safety standards. I am also passionate about knowledge sharing, regularly conducting technical training courses for engineers and contractors to foster the next generation of industry talent.
                        </p>
                        <p className="text-secondary highlight-quote border-l-4 border-blue pl-4 py-2 mt-6">
                            "I am a self-starter and a highly committed team player who thrives under the pressure of complex, large-scale industrial challenges."
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
