import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin, Twitter, Facebook, Instagram } from 'lucide-react';
import logo from '../../assets/ym_global_logo_2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="footer-logo-container mb-6">
                        <Link to="/" className="flex items-center gap-4 text-decoration-none">
                            <img src={logo} alt="YM Global" className="footer-logo-icon" style={{ height: '80px', width: 'auto', objectFit: 'contain' }} />
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-widest text-white mb-1">YM GLOBAL</span>
                                <span className="text-xs text-gold uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                                    <span className="w-3 h-[1px] bg-gold/50"></span>
                                    Engineering Academy
                                </span>
                            </div>
                        </Link>
                    </div>
                    <p className="footer-desc">
                        Chartered Instrumentation & Process Safety Engineering. World-Class Technical Education. Global Industry Excellence.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h4>Navigation</h4>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/courses">Programs</Link></li>
                        <li><Link to="/resources">Resources</Link></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4>Resources</h4>
                    <ul className="footer-links">
                        <li><Link to="/resources">Technical Papers</Link></li>
                        <li><Link to="/resources">PDF Guides</Link></li>
                        <li><Link to="/resources">Tools & Templates</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Connect</h4>
                    <div className="contact-item">
                        <MapPin size={16} className="text-gold" />
                        <span>Kuwait & Egypt</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={16} className="text-gold" />
                        <span>+965 97516360</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={16} className="text-gold" />
                        <a href="mailto:y.mahmoud@ymglobal.org">y.mahmoud@ymglobal.org</a>
                    </div>
                    <div className="social-links mt-4 flex gap-4">
                        <a href="#" className="social-icon text-secondary hover:text-gold transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="social-icon text-secondary hover:text-gold transition-colors" aria-label="X (Twitter)">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="social-icon text-secondary hover:text-gold transition-colors" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="social-icon text-secondary hover:text-gold transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} YM Global Engineering Academy. All Rights Reserved. | <a href="/studio" className="admin-link">Admin Login</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
