import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css'; // Import the CSS file for styling
import AOS from 'aos';
import 'aos/dist/aos.css';



const Portfolio = () => {
    const navigate = useNavigate();

    useEffect(() => { AOS.init(); }, []);

    return (
        <div className="portfolio">
            <section className="project-showcase">
                <h2>Our Projects</h2>
                <div className="project-cards">
                    {[
                        { title: "Project A", description: "Custom e-commerce platform (30% sales increase)", image: "path/to/imageA.jpg" },
                        { title: "Project B", description: "AI-driven analytics tool for retail client", image: "path/to/imageB.jpg" },
                    ].map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button
                            className="cta-button"
                            onClick={() => navigate(`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
                            >
                            View Project
                            </button>

                        </div>
                    ))}
                </div>
            </section>

            {/* New Learn More Section */}
            <section className="learn-more-section">
                <div className="learn-more-content">
                    <h2>Want to Work With Us?</h2>
                    <p>We deliver high-quality software solutions tailored to your needs. Let's build something great together!</p>
                    <button className="learn-more-button" onClick={() => navigate('/contact')}>
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
