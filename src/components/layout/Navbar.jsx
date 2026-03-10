import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Experience', href: '#experience' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScrollToSection = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 80; // 80 is navbar height
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass-header' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Yasser Mahmoud Consulting" className="logo-icon" />
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollToSection(e, link.href)}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact"
                        onClick={(e) => handleScrollToSection(e, '#contact')}
                        className="btn btn-primary ml-4">
                        Book Consultation
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleScrollToSection(e, link.href)}
                        className="mobile-nav-link"
                    >
                        {link.name}
                    </a>
                ))}
                <a href="#contact"
                    onClick={(e) => handleScrollToSection(e, '#contact')}
                    className="btn btn-primary mobile-btn">
                    Book Consultation
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
