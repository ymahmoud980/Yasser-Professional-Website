import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real implementation this would trigger an API call to a mailing list service
        if(email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <SectionWrapper id="newsletter" title="Join The Private Newsletter" subtitle="Get advanced IACS engineering insights, case studies, and Academy launch updates delivered straight to your inbox." className="bg-secondary">
            <div className="max-w-2xl mx-auto text-center mt-8 p-8 card border-gold border-dashed">
                <Mail size={48} className="text-gold mx-auto mb-6" />
                
                {!submitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your professional email address" 
                            className="w-full p-4 bg-dark border border-gray text-primary focus:outline-none focus:border-blue text-center rounded"
                            required 
                        />
                        <button type="submit" className="btn btn-primary w-full flex-center justify-center">
                            Subscribe Now <ArrowRight size={18} className="ml-2" />
                        </button>
                    </form>
                ) : (
                    <div className="animate-fade-in text-center py-4">
                        <CheckCircle size={48} className="text-blue mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">Subscription Confirmed</h3>
                        <p className="text-secondary">Thank you for joining. Keep an eye on your inbox for the next technical dispatch.</p>
                        <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-6">
                            Subscribe another email
                        </button>
                    </div>
                )}
                
                <p className="text-xs text-secondary mt-6 uppercase tracking-widest">
                    Zero spam. Strictly high-level engineering insights. Unsubscribe at any time.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default Newsletter;
