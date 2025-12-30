import React from "react";
import { motion } from "framer-motion";
import { Award, Code, GitCommit, Shield, Star, Zap } from "lucide-react";
import { useSciFiSound } from "../hooks/useSciFiSound";
import "./Achievements.css";

const badges = [
  {
    title: "Hackathon Winner",
    category: "Award",
    description: "1st Place at TechNova 2024 for Best AI Application.",
    icon: <Award size={24} />,
  },
  {
    title: "Open Source Hero",
    category: "Community",
    description: "Contributed to 2 major libraries with over 1k stars.",
    icon: <GitCommit size={24} />,
  },
  {
    title: "Full Stack Master",
    category: "Certification",
    description: "Certified Full Stack Developer by HackerRank.",
    icon: <Code size={24} />,
  },
  {
    title: "Bug Bounty Hunter",
    category: "Security",
    description: "Identified and patched 3 critical vulnerabilities.",
    icon: <Shield size={24} />,
  },
  {
    title: "High Performance",
    category: "Optimization",
    description: "Optimized legacy app to achieve 99/100 Lighthouse score.",
    icon: <Zap size={24} />,
  },
  {
    title: "Mentor",
    category: "Leadership",
    description: "Mentored 10+ junior developers to promotion.",
    icon: <Star size={24} />,
  },
];

const Achievements: React.FC = () => {
  const { playHover } = useSciFiSound();

  return (
    <section id="achievements" className="section-container">
      <motion.div
        style={{ textAlign: "center", marginBottom: "3rem" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-gradient"
          style={{ fontSize: "3rem", fontWeight: "bold" }}
        >
          Unlocked Achievements
        </h2>
        <p style={{ color: "var(--text-secondary)" }}>
          Milestones reached in the simulation.
        </p>
      </motion.div>

      <div className="achievements-grid">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => playHover()}
          >
            <div className="achievement-category">{badge.category}</div>
            <div className="achievement-icon-box">{badge.icon}</div>
            <div className="achievement-info">
              <h3>{badge.title}</h3>
              <p>{badge.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
