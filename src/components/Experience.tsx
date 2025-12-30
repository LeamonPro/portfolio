import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Rocket, Calendar, MapPin } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    role: "Software Engineer",
    company: "Medicacom",
    date: "2024 - Present",
    location: "Sfax, Tunisia",
    description: [
      "Led the migration of legacy visual systems to modern WebGL architectures.",
      "Implemented 3D visualization tools for data analysis.",
      "Implemented Ai tools in real projects.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Actia Engineering Services",
    date: "02/2024 - 06/2024",
    location: "Sfax, Tunisia",
    description: [
      "Built high-performance Angular applications with 99.9% uptime.",
      "Optimized customer services by 60% using advanced Ai LLM (LLAMA-2) and RAG system.",
      "Create a Microservices architecture.",
    ],
  },
  {
    role: "Web Freelancer",
    company: "LeamonOrg",
    date: "2024 - Present",
    location: "remote",
    description: [
      "Developed and deployed web applications for real-world business needs.",
      "Built robust desktop applications tailored to specific client requirements.",
      "Delivered customized software solutions to optimize workflows and improve efficiency.",
    ],
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="experience"
      className="section-container Experience-section"
      ref={containerRef}
    >
      <motion.div
        style={{ textAlign: "center", marginBottom: "4rem", opacity, scale }}
      >
        <span
          style={{
            color: "var(--accent-cyan)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          Career Trajectory
        </span>
        <h2
          className="text-gradient"
          style={{ fontSize: "3rem", fontWeight: "bold" }}
        >
          My Journey
        </h2>
      </motion.div>

      <div className="experience-container">
        {/* Central timeline line */}
        <div className="timeline-line" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            {/* Planet Marker */}
            <div className="planet-marker" />

            {/* Content Card */}
            <div className="glass-panel experience-card">
              <span className="experience-date">
                <Calendar
                  size={14}
                  style={{ display: "inline", marginRight: "5px" }}
                />
                {exp.date}
              </span>
              <h3 className="experience-role">{exp.role}</h3>
              <span className="experience-company">
                <Rocket
                  size={16}
                  style={{ display: "inline", marginRight: "5px" }}
                />
                {exp.company}
              </span>

              <ul className="experience-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
