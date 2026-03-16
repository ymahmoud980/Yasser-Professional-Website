import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { ShieldCheck, Award, FileBadge, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            title: "Functional Safety Engineer",
            org: "TÜV Rheinland",
            id: "ID-No. 2557/10",
            icon: <ShieldCheck size={40} className="text-gold" />,
            desc: "Specialized in Process Safety Instrumented Systems (SIS) globally.",
            standards: ["IEC 61508", "IEC 61511"],
            featured: true
        },
        {
            title: "Professional Engineer (PE)",
            org: "Engineers Australia",
            id: "EA ID 5131886",
            icon: <Award size={40} className="text-blue" />,
            desc: "Certified Professional Engineer (Skill Level #1) in Instrumentation, Automation and Control.",
            standards: ["EA ID 5131886"],
            featured: false
        },
        {
            title: "Credentialed Engineer",
            org: "WES Canada",
            id: "Ref# 2969235/vj",
            icon: <FileBadge size={40} className="text-blue" />,
            desc: "Verified equivalent of a 4-year Canadian Bachelor’s degree in Electronics Engineering.",
            standards: [],
            featured: false
        }
    ];

    const memberships = [
        "Egyptian Engineering Syndicate (Electronics and Control Engineer)",
        "Kuwaiti Syndicate of Engineers"
    ];

    return (
        <SectionWrapper id="certifications" title="Global Certifications" subtitle="Internationally recognized credentials verifying engineering excellence and safety mastery." className="bg-secondary">
            <div className="certs-container mt-8">
                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className={`cert-badge card ${cert.featured ? 'featured-cert' : ''}`}>
                            <div className="cert-header">
                                {cert.icon}
                                <div className="cert-org">{cert.org}</div>
                            </div>

                            <h3 className="cert-title">{cert.title}</h3>

                            <div className="cert-id font-mono text-sm text-secondary mb-4">
                                {cert.id}
                            </div>

                            <p className="cert-desc">{cert.desc}</p>

                            {cert.standards.length > 0 && (
                                <div className="cert-standards mt-auto">
                                    {cert.standards.map((std, i) => (
                                        <span key={i} className="std-pill">{std}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="memberships-section mt-12">
                    <h4 className="text-xl font-bold mb-6 text-center text-secondary">Professional Memberships</h4>
                    <div className="memberships-grid">
                        {memberships.map((mbr, idx) => (
                            <div key={idx} className="membership-item">
                                <CheckCircle size={20} className="text-gold" />
                                <span>{mbr}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
