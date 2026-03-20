import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Book, CheckCircle, ChevronDown, ChevronUp, FileText, Video, Download } from 'lucide-react';

const CoursesPage = () => {
    const [expandedTrack, setExpandedTrack] = useState(0);
    const [expandedCourse, setExpandedCourse] = useState(null);

    const tracks = [
        {
            title: "Track 1: Process Measurement and Analysis",
            focus: "Engineering, applying, and mastering the selection of field devices for complex process media.",
            courses: [
                {
                    title: "Principles of Pressure Measurement",
                    description: "Application, engineering, and selection of pressure instruments",
                    materials: ["Video Lessons", "Calculation Workbook", "Selection Guide PDF"]
                },
                {
                    title: "Level Measurement Technologies",
                    description: "DP, Guided Wave Radar, Nucleonic, and Ultrasonic selection",
                    materials: ["Video Lessons", "Technical Datasheets", "Comparison Matrix"]
                },
                {
                    title: "Flow Measurement Engineering",
                    description: "DP, Coriolis, Ultrasonic, Magnetic, and MPFM selection",
                    materials: ["Video Lessons", "Sizing Calculations", "Application Guide"]
                },
                {
                    title: "Temperature Sensing and Selection",
                    description: "RTDs, Thermocouples, Thermowells, Wake Frequency Calculations",
                    materials: ["Video Lessons", "Engineering Handbook"]
                },
                {
                    title: "Online Process Analyzers",
                    description: "Gas Chromatography, Spectrometry, CEMS selection and application",
                    materials: ["Video Lessons", "Technical Papers"]
                },
                {
                    title: "Liquid Analytical Instrumentation",
                    description: "pH, Conductivity, Dissolved Oxygen, and more",
                    materials: ["Video Lessons", "Selection Guide"]
                },
                {
                    title: "Instrument Calibration & Metrology",
                    description: "Calibration, metrology, and smart field device diagnostics",
                    materials: ["Video Lessons", "Calibration Procedures"]
                },
                {
                    title: "Hazardous Area Classification",
                    description: "Intrinsically Safe and Explosion-Proof equipment selection",
                    materials: ["Video Lessons", "IEC Standards Guide"]
                }
            ],
            status: "In Development"
        },
        {
            title: "Track 2: Process Control and Final Elements",
            focus: "Manipulating the process safely, efficiently, and effectively.",
            courses: [
                {
                    title: "Process Dynamics and PID Tuning",
                    description: "Practical PID controller tuning techniques",
                    materials: ["Video Lessons", "Simulation Files", "Tuning Workbook"]
                },
                {
                    title: "Control Valve Sizing and Selection",
                    description: "Sizing, selection, and noise/cavitation mitigation",
                    materials: ["Video Lessons", "InstruCalc Files", "ANSI Standards"]
                },
                {
                    title: "Advanced Regulatory Control",
                    description: "Cascade, Feedforward, Ratio, and Split-Range control",
                    materials: ["Video Lessons", "Case Studies"]
                },
                {
                    title: "Control Valve Actuators",
                    description: "Pneumatic, Hydraulic, Electric and Digital Positioners",
                    materials: ["Video Lessons", "Manufacturer Comparison"]
                },
                {
                    title: "Introduction to MPC",
                    description: "Multivariable Control and Model Predictive Control",
                    materials: ["Video Lessons", "Theory Handbook"]
                },
                {
                    title: "Overpressure Protection",
                    description: "Relief Valves, Rupture Disks, and mechanical protection",
                    materials: ["Video Lessons", "Sizing Calculations"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 3: Equipment and Package Instrumentation",
            focus: "Dedicated control strategies for major mechanical and process packages.",
            courses: [
                {
                    title: "Rotating Equipment Control",
                    description: "Pump protection, instrumentation, and interlocks",
                    materials: ["Video Lessons", "Protection Logic Diagrams"]
                },
                {
                    title: "Compressor Control Systems",
                    description: "Centrifugal/Reciprocating instrumentation and anti-surge control",
                    materials: ["Video Lessons", "Control Philosophy Templates"]
                },
                {
                    title: "Separation Package Control",
                    description: "2-Phase and 3-Phase separator instrumentation",
                    materials: ["Video Lessons", "P&ID Examples"]
                },
                {
                    title: "Desalter Instrumentation",
                    description: "Control loops and interface measurement selection",
                    materials: ["Video Lessons"]
                },
                {
                    title: "Fired Heater and BMS",
                    description: "Combustion, drum level, and burner management systems",
                    materials: ["Video Lessons", "Safety Philosophy Guide"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 4: Fire & Gas Detection Systems",
            focus: "Designing, selecting, and engineering critical life and asset protection systems.",
            courses: [
                {
                    title: "Fire & Gas Philosophy",
                    description: "Risk assessment and detector performance mapping",
                    materials: ["Video Lessons", "Philosophy Template"]
                },
                {
                    title: "Gas Detectors",
                    description: "Toxic and combustible gas detector engineering and placement",
                    materials: ["Video Lessons", "Layout Guidelines"]
                },
                {
                    title: "Flame and Heat Detectors",
                    description: "Engineering, placement, and technology selection",
                    materials: ["Video Lessons", "Selection Matrix"]
                },
                {
                    title: "F&G Logic and Integration",
                    description: "Logic solvers, alarm systems, and ESD integration",
                    materials: ["Video Lessons", "Logic Diagrams"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 5: Digital Networks & System Integration",
            focus: "The nervous system of the plant—architecture, power, logic, and human interfaces.",
            courses: [
                {
                    title: "Control System Architecture",
                    description: "PLCs, DCS, and SCADA overview",
                    materials: ["Video Lessons", "Architecture Diagrams"]
                },
                {
                    title: "Power Supply Systems",
                    description: "UPS, power distribution, and redundancy design",
                    materials: ["Video Lessons", "Design Guidelines"]
                },
                {
                    title: "Communication Protocols",
                    description: "Modbus, HART, and Profibus",
                    materials: ["Video Lessons", "Protocol Guides"]
                },
                {
                    title: "Advanced Field Networks",
                    description: "Foundation Fieldbus, Ethernet/IP, and WirelessHART",
                    materials: ["Video Lessons"]
                },
                {
                    title: "Alarm Management (ISA-18.2)",
                    description: "Alarm rationalization and management strategies",
                    materials: ["Video Lessons", "Alarm Philosophy Template"]
                },
                {
                    title: "HMI Design Principles",
                    description: "High-performance GUI design for operator effectiveness",
                    materials: ["Video Lessons", "Design Standards"]
                },
                {
                    title: "ICS Cybersecurity",
                    description: "Cybersecurity for industrial control systems",
                    materials: ["Video Lessons", "Security Guidelines"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 6: Engineering Deliverables",
            focus: "Generating core documentation and executing projects according to global gate systems.",
            courses: [
                {
                    title: "Decision Support Packages",
                    description: "DSP development according to Project Gate System",
                    materials: ["Video Lessons", "DSP Template"]
                },
                {
                    title: "P&ID Development",
                    description: "Development and review of P&IDs",
                    materials: ["Video Lessons", "P&ID Checklist"]
                },
                {
                    title: "Detailed Engineering Deliverables",
                    description: "Cause & Effect matrices, loop drawings, wiring diagrams",
                    materials: ["Video Lessons", "Drawing Standards"]
                },
                {
                    title: "Instrument Index & I/O Lists",
                    description: "Datasheet development and review",
                    materials: ["Video Lessons", "Datasheet Templates"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 7: Functional Safety - Device Level (IEC 61508)",
            focus: "Understanding the foundational reliability engineering behind safety equipment.",
            courses: [
                {
                    title: "IEC 61508 Framework",
                    description: "The foundation of functional safety",
                    materials: ["Video Lessons", "Standard Summary"]
                },
                {
                    title: "Hardware Fault Tolerance",
                    description: "HFT and Safe Failure Fractions (SFF)",
                    materials: ["Video Lessons", "Calculation Examples"]
                },
                {
                    title: "Reliability Engineering Basics",
                    description: "Failure rates, MTBF, and MTTF",
                    materials: ["Video Lessons", "Statistics Guide"]
                },
                {
                    title: "FMEDA and Device Selection",
                    description: "FMEDA in smart devices and safety device selection",
                    materials: ["Video Lessons", "FMEDA Reports Guide"]
                },
                {
                    title: "Certification vs Prior Use",
                    description: "Device certification and proven in use justifications",
                    materials: ["Video Lessons", "Justification Template"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 8: Process Safety Lifecycle (IEC 61511)",
            focus: "Executing safety engineering from concept to decommissioning.",
            courses: [
                {
                    title: "IEC 61511 Safety Lifecycle",
                    description: "Phase by phase safety lifecycle",
                    materials: ["Video Lessons", "Lifecycle Diagram"]
                },
                {
                    title: "HAZOP to LOPA",
                    description: "Hazard & risk assessment and layer of protection analysis",
                    materials: ["Video Lessons", "LOPA Worksheet"]
                },
                {
                    title: "Safety Requirements Specification",
                    description: "Developing robust SRS documents",
                    materials: ["Video Lessons", "SRS Template"]
                },
                {
                    title: "SIF Design and Selection",
                    description: "Voting architectures, CCF, and diversity",
                    materials: ["Video Lessons", "Design Examples"]
                },
                {
                    title: "SIL Verification",
                    description: "PFDavg calculations and target SIL achievement",
                    materials: ["Video Lessons", "Calculation Workbook"]
                },
                {
                    title: "Operations and Maintenance",
                    description: "Proof testing design and partial stroke testing",
                    materials: ["Video Lessons", "Test Procedures"]
                },
                {
                    title: "Management of Change",
                    description: "MOC and decommissioning safety systems",
                    materials: ["Video Lessons", "MOC Procedure Guide"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 9: Advanced Engineering Masterclasses",
            focus: "Bridging theory and the reality of plant operations and brownfield challenges.",
            courses: [
                {
                    title: "BPCS vs SIS Independence",
                    description: "Criticality of independence, separation, and shared components",
                    materials: ["Video Lessons", "Case Studies"]
                },
                {
                    title: "Real-World SIL Pitfalls",
                    description: "Overcoming paper safety in SIL realization",
                    materials: ["Video Lessons", "Field Examples"]
                },
                {
                    title: "Brownfield Migration",
                    description: "Revamping and migrating legacy control systems",
                    materials: ["Video Lessons", "Migration Guide"]
                }
            ],
            status: "Upcoming"
        },
        {
            title: "Track 10: AI in Instrumentation & Safety",
            focus: "Deploying Machine Learning and AI in OT to optimize performance and safety.",
            courses: [
                {
                    title: "Foundations of Industrial AI",
                    description: "ML, Deep Learning, and Edge AI for control engineers",
                    materials: ["Video Lessons", "Theory Handbook"]
                },
                {
                    title: "AI-Empowered Predictive Maintenance",
                    description: "PdM for valves, pumps, and compressors",
                    materials: ["Video Lessons", "Implementation Guide"]
                },
                {
                    title: "AI Pipeline Leak Detection",
                    description: "Next-gen PLDS with AI for false alarm reduction",
                    materials: ["Video Lessons", "Case Studies"]
                },
                {
                    title: "AI in Plant Operations",
                    description: "Neural networks and soft sensors for APC",
                    materials: ["Video Lessons"]
                },
                {
                    title: "Computer Vision in OT",
                    description: "Thermal leak detection and automated gauge reading",
                    materials: ["Video Lessons", "Implementation Examples"]
                },
                {
                    title: "AI in Alarm Management",
                    description: "ISA-18.2 rationalization and root cause analysis",
                    materials: ["Video Lessons", "AI Tools Guide"]
                },
                {
                    title: "AI and Functional Safety",
                    description: "IEC 61508/61511: Determinism and reliability",
                    materials: ["Video Lessons", "Safety Considerations"]
                },
                {
                    title: "Generative AI for Engineers",
                    description: "Automating P&ID reviews and SRS generation",
                    materials: ["Video Lessons", "Prompts Library"]
                },
                {
                    title: "Edge vs Cloud AI",
                    description: "Latency, cybersecurity, and integration architectures",
                    materials: ["Video Lessons", "Architecture Decision Guide"]
                }
            ],
            status: "Upcoming"
        }
    ];

    const toggleTrack = (index) => {
        setExpandedTrack(expandedTrack === index ? null : index);
        setExpandedCourse(null);
    };

    const toggleCourse = (courseIndex) => {
        setExpandedCourse(expandedCourse === courseIndex ? null : courseIndex);
    };

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <SectionWrapper id="courses" title="Academy Programs" subtitle="Comprehensive technical training tracks designed for engineering professionals.">
                    <div className="container mt-12">
                        <div className="tracks-container">
                            {tracks.map((track, trackIndex) => (
                                <div key={trackIndex} className="track-card card mb-6">
                                    {/* Track Header */}
                                    <div 
                                        className="track-header flex items-center justify-between p-6 cursor-pointer"
                                        onClick={() => toggleTrack(trackIndex)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <Book size={32} className="text-blue flex-shrink-0" />
                                            <div>
                                                <h3 className="text-xl font-bold">{track.title}</h3>
                                                <p className="text-secondary text-sm mt-1">{track.focus}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono font-bold tracking-widest text-gold bg-dark/50 border border-gold/30 px-3 py-1 rounded-full uppercase">
                                                {track.status}
                                            </span>
                                            {expandedTrack === trackIndex ? (
                                                <ChevronUp size={24} className="text-secondary" />
                                            ) : (
                                                <ChevronDown size={24} className="text-secondary" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Track Content - Courses */}
                                    {expandedTrack === trackIndex && (
                                        <div className="track-content animate-fade-in mt-4 border-t border-divider pt-6">
                                            <div className="px-6 pb-8">
                                                <div className="courses-grid grid gap-4">
                                                    {track.courses.map((course, courseIndex) => (
                                                        <div key={courseIndex} className="course-item border border-divider/50 bg-dark/20 rounded-xl overflow-hidden shadow-sm">
                                                            <div 
                                                                className="course-header flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-dark/40 transition-colors"
                                                                onClick={() => toggleCourse(`${trackIndex}-${courseIndex}`)}
                                                            >
                                                                <div className="flex items-center gap-5">
                                                                    <div className="course-number text-3xl font-mono text-gold/30 font-bold opacity-70">
                                                                        {String(courseIndex + 1).padStart(2, '0')}
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="text-lg font-semibold text-white mb-1">{course.title}</h4>
                                                                        <p className="text-secondary text-sm md:text-base leading-relaxed">{course.description}</p>
                                                                    </div>
                                                                </div>
                                                                {expandedCourse === `${trackIndex}-${courseIndex}` ? (
                                                                    <ChevronUp size={20} className="text-secondary" />
                                                                ) : (
                                                                    <ChevronDown size={20} className="text-secondary" />
                                                                )}
                                                            </div>

                                                            {/* Course Materials */}
                                                            {expandedCourse === `${trackIndex}-${courseIndex}` && (
                                                                <div className="course-materials border-t border-divider p-4 bg-dark/20">
                                                                    <h5 className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Available Materials</h5>
                                                                    <div className="flex flex-wrap gap-3">
                                                                        {course.materials.map((material, matIndex) => (
                                                                            <div key={matIndex} className="material-tag flex items-center gap-2 px-3 py-2 bg-dark/50 rounded text-sm">
                                                                                {material.includes("Video") ? (
                                                                                    <Video size={14} className="text-blue" />
                                                                                ) : material.includes("PDF") || material.includes("Workbook") || material.includes("Guide") || material.includes("Template") || material.includes("Handbook") || material.includes("Sheet") ? (
                                                                                    <FileText size={14} className="text-gold" />
                                                                                ) : (
                                                                                    <Download size={14} className="text-secondary" />
                                                                                )}
                                                                                <span>{material}</span>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-16 text-center bg-dark/30 p-10 md:p-16 rounded-2xl border border-divider">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Program Availability</h3>
                            <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                                Track 1 is currently in development with the first courses releasing soon. 
                                Inquire below for curriculum details and early access information.
                            </p>
                            <a href="/contact" className="btn btn-primary btn-lg">
                                Inquire for Academic Details
                            </a>
                        </div>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
};

export default CoursesPage;
