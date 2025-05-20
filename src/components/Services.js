import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode, FaCogs, FaCloud, FaBullhorn,
  FaChartLine, FaRobot, FaMobileAlt, FaLightbulb
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import './Services.css';

const serviceData = [
  { title: "Web & App Development", description: "Building responsive and scalable applications.", icon: <FaCode /> },
  { title: "Custom Software Solutions", description: "Tailored software to meet your business needs.", icon: <FaCogs /> },
  { title: "IT Consulting & Automation", description: "Optimizing your IT processes.", icon: <FaLightbulb /> },
  { title: "Scalable Cloud Services", description: "Flexible cloud solutions for your business.", icon: <FaCloud /> },
  { title: "Digital Marketing", description: "Enhancing your online presence.", icon: <FaBullhorn /> },
  { title: "Social Media Marketing", description: "Engaging your audience effectively.", icon: <FaChartLine /> },
  { title: "AI-Powered Analytics", description: "Data-driven insights for better decisions.", icon: <FaMobileAlt /> },
  { title: "Machine Learning Solutions", description: "Implementing AI to improve efficiency.", icon: <FaRobot /> },
  { title: "Chatbot Development", description: "Automating customer interactions.", icon: <MdSupportAgent /> },
];

const Services = () => {
  return (
    <div className="services">
      <section className="service-overview">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="service-cards">
          {serviceData.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
  className="service-icon"
  initial={{ scale: 0 }}
  whileInView={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 100, damping: 10 }}
  viewport={{ once: true }}
>
  {service.icon}
</motion.div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="cta-button">Learn More</button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
