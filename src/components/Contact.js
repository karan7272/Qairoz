// src/components/Contact.js
import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact">

            <section className="contact-form">
                <h2>Get in Touch</h2>
                <form>
                    <label>Name:</label>
                    <input type="text" required />
                    <label>Email:</label>
                    <input type="email" required />
                    <label>Message:</label>
                    <textarea required></textarea>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
                <div className="contact-info">
                    <p>Company Address: 123 Tech Lane, Silicon Valley, CA 94043</p>
                    <p>Phone Number: +1 (555) 123-4567</p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
