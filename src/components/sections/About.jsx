import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Award, Briefcase, GraduationCap, CheckCircle2, Shield, Settings, FileSearch, PenTool, Users, Languages, Target, Building2 } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <SectionWrapper id="about" title="Message from the Principal" subtitle="Chartered Instrumentation & Process Safety Engineer">
            <div className="about-grid">
                {/* Left Column: Credentials Summary */}
                <div className="about-visuals sticky-panel">
                    <div className="experience-badge mt-8">
                        <div className="years text-blue">26+</div>
                        <div className="years-text">Years of Global <br />Industry Experience</div>
                    </div>
                    
                    <div className="languages-card card mt-6">
                        <div className="flex items-center mb-4">
                            <Award size={24} className="text-gold mr-3" />
                            <h4 className="text-lg font-bold">Chartered Credentials</h4>
                        </div>
                        <ul className="about-bullets">
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>P.Eng.</strong> Engineers Australia</li>
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>TÜV FSEng.</strong> TÜV Rheinland Germany</li>
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>W.E.S.</strong> Canada</li>
                        </ul>
                    </div>

                    <div className="languages-card card mt-6">
                        <div className="flex items-center mb-4">
                            <Languages size={24} className="text-gold mr-3" />
                            <h4 className="text-lg font-bold">Languages</h4>
                        </div>
                        <ul className="about-bullets">
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>Fluent:</strong> Arabic & English</li>
                            <li><CheckCircle2 size={16} className="text-blue mr-2" /> <strong>Elementary:</strong> Turkish</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="about-content">
                    {/* Mission Statement */}
                    <div className="about-intro bg-secondary/30 p-8 rounded-lg border border-white/5 mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-white">The Academy</h2>
                        <h3 className="section-heading"><Target className="mr-3 text-gold" /> Institutional Mission</h3>
                        <p className="text-secondary leading-relaxed">
                            To bridge the gap between complex engineering theory and industrial reality by providing world-class, field-proven training in Instrumentation, Automation, and Functional Safety. We empower the next generation of engineers with the technical precision and safety-first mindset required to lead the global energy evolution.
                        </p>
                    </div>

                    {/* Principal's Background */}
                    <div className="content-section">
                        <h2 className="text-2xl font-bold mb-8 text-white border-b border-gray-800 pb-4">The Founder</h2>
                        <h3 className="section-heading"><Users className="mr-3 text-gold" /> Principal Profile</h3>
                        <p className="text-secondary mb-4">
                            The Academy is led by <strong>Eng. Y. Mahmoud</strong>, a Senior Instrumentation, Automation, Control, and Functional Process Safety Engineer with 26 years of practical experience in the Oil & Gas industry, spanning onshore, offshore, and subsea projects globally.
                        </p>
                        <p className="text-secondary mb-8">
                            As a technical authority and subject matter expert, the Principal specializes in the entire project lifecycle from conceptual design and FEED to commissioning and operational support.
                        </p>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Award className="mr-3 text-gold" /> Professional Credentials</h3>
                        <p className="text-secondary mb-4">Academic and professional recognition includes:</p>
                        <ul className="detailed-list">
                            <li><strong>Professional Engineer (P.Eng.):</strong> Certified in Automation and Control (Skill Level 1) by Engineers Australia.</li>
                            <li><strong>Certified Functional Safety Engineer (TÜVFSEng):</strong> Certified by TÜV Rheinland, Germany for Safety Instrumented Systems (SIS) according to IEC 61508 and 61511.</li>
                            <li><strong>Credentialed Engineer:</strong> Verified Electronics & Control Engineer by World Education Services (WES) Canada.</li>
                            <li><strong>Academic Foundation:</strong> B.Sc. in Electronics & Control Engineering from Mansoura University, Egypt (Graduation Project: DCS - Grade: "Excellent").</li>
                            <li><strong>Professional Memberships:</strong> Active member of the Egyptian and Kuwaiti Syndicates of Engineers.</li>
                        </ul>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Building2 className="mr-3 text-gold" /> Current Appointment</h3>
                        <p className="text-secondary mb-4">
                            Currently serving as Senior Engineering Consultant at Kuwait Oil Company (KOC), providing lead technical authority and asset owner representation with full responsibility for engineering, design, and technical supervision of Safety-Critical decisions across South & East Kuwait Directorates.
                        </p>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Settings className="mr-3 text-gold" /> Core Technical Expertise</h3>
                        <ul className="detailed-list">
                            <li><strong>Functional Safety Management:</strong> Process Hazard Analysis (PHA), HAZOP, HAZID, SIL assessment, and SIL verification. Safety Requirement Specifications (SRS) development and approval.</li>
                            <li><strong>Engineering & Design:</strong> P&IDs, PFDs, Control Philosophies, and Scope of Work preparation and review. Certified approver for DCS, ESD, F&G, SCADA, CMS, and PLDS specifications.</li>
                            <li><strong>Technical Calculations:</strong> Control valve sizing, actuator sizing, orifice plate calculations, and safety relief valve sizing using InstruCalc.</li>
                            <li><strong>Project Execution:</strong> Full EPC lifecycle management from FEED through Detailed Design, FAT/SAT, and Plant Start-Up.</li>
                        </ul>
                    </div>

                    <div className="content-section mt-12">
                        <h3 className="section-heading"><Users className="mr-3 text-gold" /> Professional Journey</h3>
                        <p className="text-secondary mb-4">
                            Prior to joining KOC in 2007, eight years were spent at ENPPI, the leading EPC company in Egypt, executing full engineering and construction responsibilities for high-profile petrochemical developments. The career began at PETROJET, focusing on the design and commissioning of Fire & Gas systems in oil fields.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
