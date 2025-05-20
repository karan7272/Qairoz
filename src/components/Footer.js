// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer>
            <p>Contact: info@qairoz.com | +1 (555) 123-4567</p>
            <p>Follow us on social media!</p>
            <div className="social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* Add more social media links as needed */}
            </div>
        </footer>
    );
};

export default Footer;