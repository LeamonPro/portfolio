import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section-container"
      style={{ padding: "100px 2rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gradient"
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel"
          style={{
            padding: "3rem",
            maxWidth: "800px",
            lineHeight: "1.8",
            color: "var(--text-secondary)",
            fontSize: "1.1rem",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            I am a passionate software engineer who builds visually appealing,
            high-performance applications. Driven by curiosity about the web,
            I’ve grown into developing AI-powered systems and intelligent
            solutions that help shape the future of the internet.
          </p>
          <p>
            I specialize in Python, React, and modern CSS, continuously
            exploring new technologies to stay ahead of the curve. When I'm not
            coding, I'm likely exploring new design trends or contributing to
            open source.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
