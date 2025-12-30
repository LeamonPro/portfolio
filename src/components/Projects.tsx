import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    title: "UmrahConnect",
    description:
      "A futuristic Umrah Booking website that implement a fully booking experience.",
    tech: ["ReactTS", "Express.js", "MySql", "WebGL"],
    github: "#",
    live: "https://www.mezriguivoyages.com",
    image: "src/assets/mezrigui.png",
  },
  {
    title: "Inspire Trade",
    description:
      "Real-time trading website that implement the capability to trade in forex, metals or crypto with the international plateforms MT4/MT5.",
    tech: ["Html", "Css", "Js", "Bootstrap", "Django", "Postgresql"],
    github: "https://github.com/FreelanceSL/InspireLimited2-Back-",
    live: "https://inspire-trade.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MAREALB GMAO",
    description:
      "GMAO specialized to MAREALB company that implement a fully company management system.",
    tech: ["React JS", "REST API", "Django", "Postgresql"],
    github: "https://github.com/LeamonPro/task_trucker/tree/main",
    live: "#",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="section-container"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "4rem", textAlign: "center" }}
      >
        <h2
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          <span className="text-gradient">Featured Work</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            maxWidth: "600px",
            margin: "0 auto",
            fontSize: "1.2rem",
          }}
        >
          Explore some of my recent projects where design meets technology.
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="project-card"
          >
            <div className="project-inner">
              {/* Front Face */}
              <div className="project-front">
                <div className="project-bar" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back Face */}
              <div
                className="project-back"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="project-overlay">
                  <h3
                    className="project-title"
                    style={{
                      color: "#fff",
                      textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{ margin: "2rem 0", display: "flex", gap: "1rem" }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.8rem 1.5rem",
                        background: "var(--bg-primary)",
                        borderRadius: "50px",
                        color: "white",
                      }}
                    >
                      <Github size={18} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.8rem 1.5rem",
                        background: "var(--accent-cyan)",
                        borderRadius: "50px",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
