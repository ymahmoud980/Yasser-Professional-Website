import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Cpu, MonitorDot, Wrench, Settings, Layers } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
    const controlSystems = [
        { name: "Honeywell (C300)", tag: "DCS / SIS" },
        { name: "Emerson (DeltaV)", tag: "DCS / SIS" },
        { name: "HIMA (HiMax / HiQuad)", tag: "SIS" },
        { name: "Yokogawa (ProSafe)", tag: "SIS" },
        { name: "Invensys (Triconex / Foxboro)", tag: "DCS / SIS" },
        { name: "ICS Triplex (TRUSTED)", tag: "SIS" },
        { name: "GE Fanuc (90-30 / 90-70)", tag: "PLC" }
    ];

    const software = [
        "InstruCalc", "AutoCAD", "CADWorx", "AVEVA Smart P&ID", "Laser Scanning / 3D Modeling", "POIS (AspenTech)", "MS Office Suite"
    ];

    const capabilities = [
        "PFD / P&ID Development", "SIL Verification & Validation", "Logic Solver Design",
        "FAT / SAT Leadership", "Commissioning & Start-Up", "Asset Integrity Engineering"
    ];

    return (
        <SectionWrapper id="expertise" title="Technical Capabilities Matrix" subtitle="Mastery over industry-standard logic solvers, engineering software, and design methodologies.">
            <div className="expertise-grid mt-8">

                {/* Control Systems */}
                <div className="expertise-card card" style={{ '--delay': '0ms' }}>
                    <div className="expertise-header">
                        <Cpu size={28} className="text-blue" />
                        <h3>Control Systems</h3>
                    </div>
                    <div className="system-grid">
                        {controlSystems.map((sys, idx) => (
                            <div key={idx} className="system-item">
                                <span className="system-name">{sys.name}</span>
                                <span className="system-tag">{sys.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Engineering Software */}
                <div className="expertise-card card" style={{ '--delay': '100ms' }}>
                    <div className="expertise-header">
                        <MonitorDot size={28} className="text-gold" />
                        <h3>Engineering Software</h3>
                    </div>
                    <ul className="software-list">
                        {software.map((sw, idx) => (
                            <li key={idx}><Layers size={16} className="text-secondary mr-2" /> {sw}</li>
                        ))}
                    </ul>
                </div>

                {/* Design & Execution Capabilities */}
                <div className="expertise-card card full-width" style={{ '--delay': '200ms' }}>
                    <div className="expertise-header">
                        <Wrench size={28} className="text-blue" />
                        <h3>Project Execution Capabilities</h3>
                    </div>
                    <div className="capabilities-grid">
                        {capabilities.map((cap, idx) => (
                            <div key={idx} className="capability-item">
                                <Settings size={20} className="text-gold" />
                                <span>{cap}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Expertise;
