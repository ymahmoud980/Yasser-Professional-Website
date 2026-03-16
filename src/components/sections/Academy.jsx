import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Book, CheckCircle, Video, Lock } from 'lucide-react';

const Academy = () => {
    const tracks = [
        {
            title: "Track 1: Process Measurement and Analysis",
            focus: "Engineering, applying, and mastering the selection of field devices for complex process media.",
            topics: [
                "Principles of Pressure Measurement: Application, Engineering, and Selection",
                "Level Measurement Technologies and Selection (including DP, Guided Wave Radar, Nucleonic, and Ultrasonic)",
                "Flow Measurement Engineering and Selection (including DP, Coriolis, Ultrasonic, Magnetic, and MPFM)",
                "Temperature Sensing and Selection (RTDs, Thermocouples, Thermowells, Wake Frequency Calculations)",
                "Online Process Analyzers Selection and Application (Gas Chromatography, Spectrometry, CEMS)",
                "Liquid Analytical Instrumentation Selection (pH, Conductivity, Dissolved Oxygen, etc.)",
                "Instrument Calibration, Metrology, and Smart Field Device Diagnostics",
                "Hazardous Area Classifications and Intrinsically Safe / Explosion-Proof Equipment Selection"
            ],
            status: "In Development"
        },
        {
            title: "Track 2: Process Control and Final Elements",
            focus: "Manipulating the process safely, efficiently, and effectively.",
            topics: [
                "Process Dynamics and Practical PID Controller Tuning",
                "Control Valve Sizing, Selection, and Noise/Cavitation Mitigation",
                "Advanced Regulatory Control: Cascade, Feedforward, Ratio, and Split-Range",
                "Control Valve Actuators (Pneumatic, Hydraulic, Electric) and Smart Digital Positioners Selection",
                "Introduction to Multivariable Control and Model Predictive Control (MPC)",
                "Relief Valves, Rupture Disks, and Mechanical Overpressure Protection Selection"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 3: Equipment and Package Instrumentation & Control",
            focus: "Dedicated control strategies for major mechanical and process packages.",
            topics: [
                "Rotating Equipment Control: Pump Protection, Instrumentation, and Interlocks",
                "Compressor Control Systems: Centrifugal/Reciprocating Instrumentation and Anti-Surge Control",
                "Separation Package Instrumentation and Control: 2-Phase and 3-Phase Separators",
                "Desalter Instrumentation, Control Loops, and Interface Measurement Selection",
                "Fired Heater and Boiler Control Systems: Combustion, Drum Level, and Burner Management Systems (BMS)"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 4: Fire & Gas Detection and Protection Systems",
            focus: "Designing, selecting, and engineering critical life and asset protection systems.",
            topics: [
                "Fire & Gas Philosophy, Risk Assessment, and Detector Performance Mapping",
                "Toxic and Combustible Gas Detectors: Engineering, Placement, and Technology Selection",
                "Flame and Heat Detectors: Engineering, Placement, and Technology Selection",
                "F&G Logic Solvers, Alarm Systems, and Integration with Plant ESD Systems",
                "F&G System Deliverables, Maintenance, and Calibration Strategies"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 5: Digital Networks, Power, and System Integration",
            focus: "The nervous system of the plant—architecture, power, logic, and human interfaces.",
            topics: [
                "Architecture of Control Systems: PLCs, DCS, and SCADA",
                "Instrumentation and Control Systems Power Supply, UPS, and Power Distribution Networks",
                "Industrial Communication Protocols (Modbus, HART, and Profibus)",
                "Advanced Field Networks: Foundation Fieldbus, Ethernet/IP, and WirelessHART",
                "Alarm Management Strategies and Rationalization (ISA-18.2)",
                "High-Performance HMI / GUI Design Principles for Operator Effectiveness",
                "Cybersecurity for Industrial Control Systems (ICS/OT Security)"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 6: Engineering Deliverables and Project Execution",
            focus: "Generating the core documentation and executing projects according to global gate systems.",
            topics: [
                "Projects’ Decision Support Package (DSP) Development according to Project Gate System (PGS)",
                "Instrumentation and Process Control Deliverables: Development and Review of P&IDs",
                "Detailed Engineering Deliverables: Cause & Effect (C&E) Matrices, Loop Drawings, and Wiring Diagrams",
                "Instrument Index, I/O Lists, and Datasheet Development and Review"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 7: Functional Safety - The Device Level (IEC 61508)",
            focus: "Understanding the foundational reliability engineering behind safety equipment.",
            topics: [
                "The IEC 61508 Framework: The Foundation of Functional Safety",
                "Hardware Fault Tolerance (HFT) and Safe Failure Fractions (SFF)",
                "Reliability Engineering Basics: Failure Rates, MTBF, and MTTF",
                "FMEDA in Smart Devices and Device Selection Strategies for Safety Services",
                "Device Certification vs. 'Prior Use' / 'Proven in Use' Justifications"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 8: Process Industry Safety Lifecycle (IEC 61511)",
            focus: "Executing safety engineering from concept to decommissioning.",
            topics: [
                "The IEC 61511 Safety Lifecycle Phase by Phase",
                "Hazard & Risk Assessment: Transitioning from HAZOP to LOPA",
                "Developing a Robust Safety Requirements Specification (SRS)",
                "SIF Design and Selection: Voting Architectures, CCF (β-factor), and Diversity",
                "SIL Verification: PFDavg Calculations and Target SIL Achievement",
                "Operations, Maintenance, Proof Testing Design, and Partial Stroke Testing (PST)",
                "Management of Change (MOC) and Decommissioning Safety Systems"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 9: Advanced Engineering Masterclasses",
            focus: "Bridging theory and the reality of plant operations and brownfield challenges.",
            topics: [
                "BPCS vs. SIS: The Criticality of Independence, Separation, and Shared Components",
                "Overcoming 'Paper Safety': Real-World Pitfalls in SIL Realization and Field Installations",
                "Revamping and Migrating Legacy Control and Safety Systems in Brownfield Sites"
            ],
            status: "Upcoming"
        },
        {
            title: "Track 10: AI in Instrumentation, Control, and Safety",
            focus: "Deploying Machine Learning and AI in OT to optimize performance and safety without compromising stability.",
            topics: [
                "Foundations of Industrial AI: ML, Deep Learning, and Edge AI for Control Engineers",
                "AI-Empowered Predictive Maintenance (PdM) for Valves, Pumps, and Compressors",
                "Next-Gen Pipeline Leak Detection Systems (PLDS): Leveraging AI for False Alarm Reduction",
                "Plant Operation and APC Leveraging AI: Neural Networks and Soft Sensors",
                "Power Optimization: AI-Driven Load Shedding and Efficiency Tuning",
                "Computer Vision in OT: Thermal Leak Detection and Automated Gauge Reading",
                "AI in Alarm Management (ISA-18.2): Rationalization and Root Cause Analysis",
                "AI and Functional Safety (IEC 61508/61511): Determinism and Reliability",
                "Generative AI and LLMs: Automating P&ID Reviews and SRS Generation",
                "Edge vs. Cloud AI Architectures in ICS: Latency, Cybersecurity, and Integration"
            ],
            status: "Upcoming"
        }
    ];

    return (
        <SectionWrapper id="academy" title="The Engineering Academy" subtitle="My comprehensive 10-Track curriculum designed to transfer decades of field experience to the next generation of engineers.">
            <div className="container mt-12">
                <div className="flex flex-col gap-12">
                    {tracks.map((track, idx) => (
                        <div key={idx} className="card p-8 md:p-10 border border-divider hover:border-blue transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-3">
                                        <Book size={32} className="text-blue flex-shrink-0" />
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-primary">
                                            {track.title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-blue font-medium italic opacity-90 leading-relaxed max-w-3xl">
                                        {track.focus}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <span className="inline-block text-xs font-mono font-bold tracking-widest text-gold bg-dark/50 border border-gold/30 px-4 py-2 rounded-full uppercase">
                                        {track.status}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="border-t border-divider pt-8">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-secondary mb-6 flex items-center">
                                    <span className="w-8 h-[1px] bg-blue mr-3"></span>
                                    Course Modules & Topics
                                </h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                    {track.topics.map((topic, tIdx) => (
                                        <li key={tIdx} className="flex items-start text-base text-secondary hover:text-primary transition-colors py-1">
                                            <CheckCircle size={20} className="text-blue mr-4 mt-0.5 flex-shrink-0 opacity-80" />
                                            <span>{topic}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-20 text-center bg-dark/30 p-10 md:p-16 rounded-2xl border border-divider backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                    
                    <h4 className="text-2xl md:text-3xl font-bold mb-4">Academy Status</h4>
                    <p className="text-lg text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
                        The academy is currently in development. Modules are being produced as high-definition video lessons with practical assignments, verified calculations, and direct mentorship paths.
                    </p>
                    <a href="#newsletter" className="btn btn-primary btn-lg">
                        Join the Waiting List for Launch
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Academy;
