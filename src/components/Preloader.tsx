import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

interface PreloaderProps {
  onComplete: () => void;
}

const bootSequence = [
  "Initializing AymenOS kernel v2.0.4...",
  "Loading visuals modules... [OK]",
  "Connecting to neural interface... [OK]",
  "Optimizing particle systems... [OK]",
  "Establishing secure connection...",
  "ACCESS GRANTED",
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentLine = 0;

    // Add lines one by one
    const lineInterval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      }
    }, 400); // Speed of text lines

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(lineInterval);
          setTimeout(onComplete, 800); // Wait a bit after 100% before closing
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="preloader-container"
      exit={{ opacity: 0, y: -2000 }} // Slide up out of view like a curtain or just fade
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="boot-text"
          >
            <span style={{ color: "#555", marginRight: "10px" }}>
              {`00${index + 1}`.slice(-3)}:
            </span>
            {line}
          </motion.div>
        ))}
      </div>

      <div className="loading-bar-container">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: "0.8rem",
          fontFamily: "monospace",
        }}
      >
        SYSTEM READY_ <span className="blink">_</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
