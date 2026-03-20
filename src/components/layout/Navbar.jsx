import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/ym_global_logo_2.png';
import './Navbar.css';

const NavLink = ({ to, children, className, onClick }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === to;

    const handleClick = () => {
        if (onClick) onClick();
        navigate(to);
    };

    return (
        <Link to={to} className={`${className} ${isActive ? 'active' : ''}`} onClick={handleClick}>
            {children}
        </Link>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/courses' },
        { name: 'Resources', path: '/resources' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled glass-header' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo flex items-center gap-4" onClick={closeMobileMenu}>
                    <img src={logo} alt="YM Global" className="logo-icon h-14 w-auto" style={{ maxHeight: '70px', objectFit: 'contain' }} />
                    <div className="navbar-brand-text hidden sm:flex flex-col justify-center border-l border-divider/50 pl-4 py-1">
                        <span className="text-xl font-black tracking-widest text-white mb-0.5">YM GLOBAL</span>
                        <span className="text-[11px] text-gold uppercase tracking-[0.2em] font-medium flex items-center gap-2">
                            <span className="w-2 h-[1px] bg-gold/50"></span>
                            Engineering Academy
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="nav-link"
                            onClick={closeMobileMenu}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary ml-4" onClick={closeMobileMenu}>
                        Inquire
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                    >
                        {link.name}
                    </NavLink>
                ))}
                <Link to="/contact" className="btn btn-primary mobile-btn" onClick={closeMobileMenu}>
                    Inquire
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
