import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <GraduationCap size={24} className="text-gold" />,
            title: 'B.Sc. Electronics & Control',
            desc: 'Mansoura University (Very Good)'
        },
        {
            icon: <Award size={24} className="text-gold" />,
            title: 'TÜV Rheinland Certified',
            desc: 'Functional Safety Engineer (IEC 61511 / 1508)'
        },
        {
            icon: <Award size={24} className="text-gold" />,
            title: 'Professional Engineer (PE)',
            desc: 'Engineers Australia (Skill Level 1)'
        },
        {
            icon: <Briefcase size={24} className="text-gold" />,
            title: '25+ Years Experience',
            desc: 'EPC + Asset Owner Track Record'
        }
    ];

    return (
        <SectionWrapper id="about" title="About The Expert" subtitle="Decades of technical leadership across Onshore and Offshore facilities globally.">
            <div className="about-grid">
                <div className="about-content">
                    <div className="about-header-text">
                        <h3 className="text-gradient">Senior Technical Authority</h3>
                        <p className="lead-text mt-4">
                            I am a Senior Instrumentation, Automation, Control, and Functional Safety Engineer with over a quarter-century of experience delivering high-integrity safety solutions and advanced control systems for the Oil & Gas and Petrochemical industries.
                        </p>
                    </div>

                    <div className="about-body-text mt-6">
                        <p>
                            My expertise spans the full project lifecycle — from Front-End Engineering Design (FEED) to Commissioning and Start-Up. As an active Technical Authority and Project Stage-Gate leader, I take full ownership of technical deliverables, mitigating operational risks through rigorous SIL assessments, HAZOP/HAZID chairing, and IEC 61511 compliance programs.
                        </p>
                        <p className="mt-4">
                            I am not just a design engineer; I am an asset integrity champion. I bridge the gap between complex engineering concepts and safe, reliable operations, ensuring that both Greenfield and Brownfield developments meet the highest global standards.
                        </p>
                    </div>

                    <div className="about-bullets mt-6">
                        <ul>
                            <li><CheckCircle2 size={18} className="text-blue mr-2" /> <strong>Core Focus:</strong> Technical Authority, Project Stage-Gate Leadership</li>
                            <li><CheckCircle2 size={18} className="text-blue mr-2" /> <strong>Safety Leadership:</strong> SIL / HAZOP Chairing & Verification</li>
                            <li><CheckCircle2 size={18} className="text-blue mr-2" /> <strong>Credentials:</strong> WES Canada Credentialed, Kuwaiti & Egyptian Engineering Syndicates</li>
                        </ul>
                    </div>
                </div>

                <div className="about-stats">
                    <div className="stats-grid">
                        {highlights.map((item, index) => (
                            <div key={index} className="stat-card card">
                                <div className="stat-icon">{item.icon}</div>
                                <h4 className="stat-title">{item.title}</h4>
                                <p className="stat-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="experience-badge mt-8">
                        <div className="years text-blue">25+</div>
                        <div className="years-text">Years of Engineering <br />Excellence</div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
