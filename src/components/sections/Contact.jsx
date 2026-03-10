import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Mail, Phone, MapPin, Send, Globe2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        country: '',
        inquiryType: 'Consulting',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for actual form submission logic
        alert("Thank you for your inquiry. Yasser will review and respond shortly.");
        setFormData({
            name: '', company: '', country: '', inquiryType: 'Consulting', message: ''
        });
    };

    return (
        <SectionWrapper id="contact" title="Engage Expertise" subtitle="Available for International Consulting Assignments & Technical Training Engagements.">
            <div className="contact-container mt-8">

                {/* Contact Information */}
                <div className="contact-info">
                    <div className="info-card card">
                        <h3 className="text-2xl font-bold mb-6 text-gradient">Global Authority. Direct Access.</h3>
                        <p className="text-secondary mb-8">
                            Connect directly with Yasser Mahmoud for full-lifecycle engineering solutions, risk assessments, or customized corporate training.
                        </p>

                        <div className="contact-methods">
                            <div className="method-item">
                                <div className="method-icon"><Mail className="text-blue" /></div>
                                <div className="method-details">
                                    <span className="method-label font-mono text-sm text-secondary">EMAIL</span>
                                    <a href="mailto:ymahmoud1980@gmail.com" className="method-value">ymahmoud1980@gmail.com</a>
                                </div>
                            </div>

                            <div className="method-item mt-6">
                                <div className="method-icon"><Phone className="text-gold" /></div>
                                <div className="method-details">
                                    <span className="method-label font-mono text-sm text-secondary">PHONE (KUWAIT)</span>
                                    <a href="tel:+96597516360" className="method-value">+965 97516360</a>
                                </div>
                            </div>

                            <div className="method-item mt-6">
                                <div className="method-icon"><Globe2 className="text-blue" /></div>
                                <div className="method-details">
                                    <span className="method-label font-mono text-sm text-secondary">LOCATIONS</span>
                                    <span className="method-value">Kuwait & Egypt (Worldwide Availability)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-wrapper card">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Full Name *</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company / Organization *</label>
                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="EPC Corp" />
                            </div>
                        </div>

                        <div className="form-row mt-4">
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="e.g. United Kingdom" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inquiryType">Inquiry Type</label>
                                <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                                    <option value="Consulting">Consulting Services</option>
                                    <option value="Engineering">Engineering Design</option>
                                    <option value="Training">Corporate Training</option>
                                    <option value="Speaking">Speaking / Workshops</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group mt-4">
                            <label htmlFor="message">Project Details / Message *</label>
                            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Describe your operational needs, facility type, or training requirements here..."></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn mt-6">
                            Transmit Inquiry <Send size={18} className="ml-2" />
                        </button>
                    </form>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default Contact;
