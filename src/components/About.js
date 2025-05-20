import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import missionImg from '../images/mission.avif'; // adjust path as needed
import photo from '../images/karan.jpeg';
import './About.css';

const teamMembers = [
    {
        name: "Karan Chaughule",
        role: "Founder",
        description: "Karan has over 2 years of experience in the tech industry.",
        photo: photo
    },
    {
        name: "Jane Smith",
        role: "CTO",
        description: "Jane is an expert in AI and machine learning.",
        photo: "path/to/photo2.jpg"
    },
    // Add more team members as needed
];

const About = () => {
    return (
        <div className="about">
      <section className="about-hero">
        <h1>Creating a Better Tomorrow<br />with Innovative Ideas.</h1>
      </section>

      <motion.section
        className="company-overview"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <FaLightbulb className="about-icon" />
        <h2>About iGrowz Technologies</h2>
        <p>
          iGrowz stands out as a vibrant and innovative technology company, dedicated to crafting custom
          solutions that cater specifically to the diverse requirements of both businesses and individual
          clients. Established by a group of visionary software aficionados, our company has evolved into a
          versatile entity, proudly recognized as the best app development company in Pune. Our commitment to
          excellence and adaptability in technology makes us a leading choice in the industry.
        </p>
      </motion.section>

      <motion.section
  className="mission-vision-modern"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="mission-content">
    <div className="mission-text">
      <h2>Our Mission & Vision</h2>
      <p>
        At iGrowz Technologies, our mission is to revolutionize the digital experience through innovation, commitment, and client-first solutions. 
        We envision a future where businesses of every size thrive through accessible and impactful technology.
      </p>
    </div>
    <div className="mission-image">
    <img src={missionImg} alt="Mission and Vision" />
    </div>
  </div>
</motion.section>



            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-cards">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <img src={member.photo} alt={member.name} />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="core-values">
                <h2>Our Core Values</h2>
                <ul>
                    <li>Innovation: We strive to be at the forefront of technology.</li>
                    <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li>Customer-Centricity: Our customers are at the heart of everything we do.</li>
                    <li>Excellence: We pursue excellence in every aspect of our business.</li>
                </ul>
            </section>

            <section className="stats">
                <h2>Our Achievements</h2>
                <div className="stats-cards">
                    <div className="stat-card"><h3>5+</h3><p>Years in Business</p></div>
                    <div className="stat-card"><h3>50+</h3><p>Projects Delivered</p></div>
                    <div className="stat-card"><h3>20+</h3><p>Happy Clients</p></div>
                    <div className="stat-card"><h3>10+</h3><p>Expert Developers</p></div>
                </div>
            </section>
        </div>
    );
};

export default About;
