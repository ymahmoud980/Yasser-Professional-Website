import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import logo from '../../assets/logo_academy_v2.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <div className="footer-logo-container">
                        <img src={logo} alt="Yasser Mahmoud Global Engineering Academy" className="footer-logo-icon" />
                    </div>
                    <p className="footer-desc">
                        Senior Technical Authority & Educator. Precision Engineering. Functional Safety. Global Authority.
                    </p>
                </div>

                <div className="footer-links-group">
                    <h4>Navigation</h4>
                    <ul className="footer-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#about">About Yasser</a></li>
                        <li><a href="#academy">The Academy</a></li>
                        <li><a href="#resources">Resources</a></li>
                    </ul>
                </div>

                <div className="footer-links-group">
                    <h4>Resources</h4>
                    <ul className="footer-links">
                        <li><a href="#resources">Technical Guides</a></li>
                        <li><a href="#resources">PDF Checklists</a></li>
                        <li><a href="#resources">Pine Script Tools</a></li>
                        <li><a href="#newsletter">Newsletter</a></li>
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
                        <a href="mailto:ymahmoud1980@gmail.com">ymahmoud1980@gmail.com</a>
                    </div>
                    <div className="social-links mt-4">
                        <a href="#" className="social-icon" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Yasser A.R. Mahmoud. All Rights Reserved. | <a href="/studio" className="admin-link">Admin Login</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
