import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import SectionWrapper from '../components/layout/SectionWrapper';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        inquiryType: 'general',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inquiryTypes = [
        { value: 'general', label: 'General Inquiry' },
        { value: 'curriculum', label: 'Curriculum Details' },
        { value: 'corporate', label: 'Corporate Training' },
        { value: 'partnership', label: 'Partnership Opportunities' },
        { value: 'technical', label: 'Technical Consultation' }
    ];

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <main>
                <SectionWrapper id="contact" title="Contact Us" subtitle="Request technical information about the Academy's programs and services.">
                    <div className="container mt-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <div className="card p-8">
                                    <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <MapPin size={24} className="text-gold flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Location</h4>
                                                <p className="text-secondary">Kuwait & Egypt</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Phone size={24} className="text-gold flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Phone</h4>
                                                <p className="text-secondary">+965 97516360 (Kuwait)</p>
                                                <p className="text-secondary">+201507147034 (Egypt)</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Mail size={24} className="text-gold flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Email</h4>
                                                <a href="mailto:y.mahmoud@ymglobal.org" className="text-blue hover:underline">
                                                    y.mahmoud@ymglobal.org
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Linkedin size={24} className="text-gold flex-shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">LinkedIn</h4>
                                                <a href="#" className="text-blue hover:underline">
                                                    Connect on LinkedIn
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-divider">
                                        <h4 className="font-semibold mb-2">Response Time</h4>
                                        <p className="text-secondary text-sm">
                                            We aim to respond to all inquiries within 2-3 business days. 
                                            For urgent matters, please indicate in your message subject.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div>
                                <div className="card p-8">
                                    {!submitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-3 bg-dark border border-divider rounded text-primary focus:outline-none focus:border-blue"
                                                    placeholder="Enter your full name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                    Professional Email *
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full p-3 bg-dark border border-divider rounded text-primary focus:outline-none focus:border-blue"
                                                    placeholder="your.email@company.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                                                    Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    id="organization"
                                                    name="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    className="w-full p-3 bg-dark border border-divider rounded text-primary focus:outline-none focus:border-blue"
                                                    placeholder="Company or institution name"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                                                    Inquiry Type *
                                                </label>
                                                <select
                                                    id="inquiryType"
                                                    name="inquiryType"
                                                    value={formData.inquiryType}
                                                    onChange={handleChange}
                                                    className="w-full p-3 bg-dark border border-divider rounded text-primary focus:outline-none focus:border-blue"
                                                >
                                                    {inquiryTypes.map((type) => (
                                                        <option key={type.value} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows="5"
                                                    className="w-full p-3 bg-dark border border-divider rounded text-primary focus:outline-none focus:border-blue resize-none"
                                                    placeholder="Please describe your inquiry in detail..."
                                                ></textarea>
                                            </div>

                                            <button type="submit" className="btn btn-primary w-full flex-center justify-center gap-2">
                                                <Send size={18} />
                                                Submit Inquiry
                                            </button>

                                            <p className="text-xs text-secondary text-center">
                                                By submitting this form, you agree to our privacy policy. 
                                                We will only use your information to respond to your inquiry.
                                            </p>
                                        </form>
                                    ) : (
                                        <div className="text-center py-8 animate-fade-in">
                                            <CheckCircle size={64} className="text-blue mx-auto mb-6" />
                                            <h3 className="text-2xl font-bold mb-4">Inquiry Submitted</h3>
                                            <p className="text-secondary mb-6">
                                                Thank you for your inquiry. Our team will review your request 
                                                and respond within 2-3 business days.
                                            </p>
                                            <button 
                                                onClick={() => {
                                                    setSubmitted(false);
                                                    setFormData({
                                                        name: '',
                                                        email: '',
                                                        organization: '',
                                                        inquiryType: 'general',
                                                        message: ''
                                                    });
                                                }}
                                                className="btn btn-outline"
                                            >
                                                Submit Another Inquiry
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
