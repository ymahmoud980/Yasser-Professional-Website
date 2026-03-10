import React from 'react';

const SectionWrapper = ({ id, className = '', children, title, subtitle }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header">
                        {title && <h2 className="section-title">{title}</h2>}
                        {subtitle && <p className="section-subtitle mt-4">{subtitle}</p>}
                    </div>
                )}
                <div className="section-content animate-fade-in">
                    {children}
                </div>
            </div>
        </section>
    );
};

export default SectionWrapper;
