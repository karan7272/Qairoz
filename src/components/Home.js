// src/components/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import whatsapp from '../images/whatsapp-icon.png';

const Home = () => {
    const testimonials = [
        { quote: "iGrows Technologies transformed our business with their innovative solutions!", client: "Client A" },
        { quote: "Their AI services have significantly improved our operational efficiency.", client: "Client B" },
    ];

    // Scroll animation logic
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-in');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });

            // Scroll progress bar
            const scrollProgress = document.querySelector(".scroll-progress-bar");
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            if (scrollProgress) scrollProgress.style.width = `${scrolled}%`;

            // Back to top button
            const backToTop = document.querySelector(".back-to-top");
            if (backToTop) backToTop.style.display = scrollTop > 300 ? 'block' : 'none';
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="home">
            {/* Scroll Progress Bar */}
            <div className="scroll-progress-bar"></div>

            {/* Hero Section */}
            <section className="hero parallax fade-in">
                <div className="hero-content">
                    <h1>Innovating with AI for Your Success</h1>
                    <Link to="/services">
                        <button className="cta-button-large">Discover Our Services</button>
                    </Link>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="highlights fade-in">
                <h2>Our Strengths</h2>
                <div className="highlight-cards">
                    <div className="highlight-card">
                        <h3>Fast Delivery</h3>
                        <p>We value your time with efficient project timelines.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Cutting-Edge AI</h3>
                        <p>Stay ahead with our innovative machine learning solutions.</p>
                    </div>
                    <div className="highlight-card">
                        <h3>Custom Solutions</h3>
                        <p>We tailor software specifically for your business needs.</p>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-us fade-in">
                <h2>About Qairoz Infotech</h2>
                <p>We are a leading IT solutions provider dedicated to helping businesses leverage technology for growth and success. Our team of experts specializes in AI, software development, and digital transformation.</p>
                <Link to="/about">
                    <button className="cta-button-large">Learn More</button>
                </Link>
            </section>

            {/* Why Choose Us */}
            <section className="why-choose-us fade-in">
                <h2>Why Choose Qairoz Infotech?</h2>
                <ul>
                    <li>Proven expertise in AI and full-stack development</li>
                    <li>Dedicated team of professionals</li>
                    <li>Transparent pricing and timely delivery</li>
                    <li>Ongoing support and maintenance</li>
                </ul>
            </section>

            {/* Testimonials */}
            <section className="testimonials fade-in">
                <h2>What Our Clients Say</h2>
                <div className="testimonial-carousel">
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial" key={index}>
                            <p>"{testimonial.quote}"</p>
                            <p>- {testimonial.client}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta fade-in">
                <h2>Ready to Elevate Your Business?</h2>
                <p>Partner with Qairoz Infotech to take your digital presence to the next level.</p>
                <Link to="/contact">
                    <button className="cta-button-large">Get a Free Consultation</button>
                </Link>
            </section>

            {/* Floating Contact Widget */}
            <div className="floating-widget">
                <Link to="/contact" className="contact-widget">Contact Us</Link>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/917218606072"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <img src={whatsapp} alt="WhatsApp" />
            </a>

            {/* Placeholder Chatbot */}
            {/* <div className="chatbot-placeholder">🤖 Chatbot Coming Soon!</div> */}

            {/* Back to Top Button */}
            <button className="back-to-top" onClick={scrollToTop}>⬆</button>
        </div>
    );
};

export default Home;
