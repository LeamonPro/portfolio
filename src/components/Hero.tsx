import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hologram from "./Hologram";
import { useSciFiSound } from "../hooks/useSciFiSound";
import "./Hero.css";

const Hero: React.FC = () => {
  const { playHover, playClick } = useSciFiSound();

  return (
    <section id="home" className="hero-section">
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />

      <div className="hero-content">
        <div className="hero-text">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-pre-title"
          >
            Welcome to the Future
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-title"
          >
            I'm <span className="text-gradient">Aymen</span>
            <br />
            <span className="text-white">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-subtitle"
            style={{ marginLeft: 0, marginRight: 0 }}
          >
            Building immersive digital experiences with cutting-edge web
            technologies. Specialized in Ai, Microservices, and high-performance
            applications.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="cta-button"
            onClick={() => {
              playClick();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => playHover()}
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              View My Work <ArrowRight size={20} />
            </span>
          </motion.button>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Hologram />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
