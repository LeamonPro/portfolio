import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minimize, Maximize } from "lucide-react";
import { useSciFiSound } from "../hooks/useSciFiSound";
import "./CommandCenter.css";

const COMMANDS = {
  help: "Available commands: help, about, skills, social, clear, theme",
  about: "I am Aymen, a creative developer obsessed with building the future.",
  skills: "loading modules... [React, TypeScript, Three.js, Node.js, Next.js]",
  social:
    "Github: @LeamonPro | Twitter: @aymen_amri | LinkedIn: /in/aymen--amri",
  clear: "clearing buffer...",
  theme: "Switching quantum resonance frequency... (Color theme randomized)",
};

const CommandCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to AymenOS v2.0. Type 'help' to begin.",
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSciFiSound();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    playClick(); // Sound on submit

    const cmd = input.trim().toLowerCase();
    const response =
      COMMANDS[cmd as keyof typeof COMMANDS] ||
      `Command not found: ${cmd}. Type 'help' for assistance.`;

    setHistory([...history, `> ${input}`, response]);
    setInput("");

    if (cmd === "clear") {
      setTimeout(() => setHistory(["Buffer cleared."]), 500);
    }

    if (cmd === "theme") {
      changeTheme();
    }
  };

  const changeTheme = () => {
    const hues = [
      ["#00f2ff", "#bc13fe"], // Cyber
      ["#ff0055", "#ff9900"], // Sunset
      ["#00ff22", "#0099ff"], // Matrix
      ["#ffe600", "#ff00aa"], // Neon
    ];
    const random = hues[Math.floor(Math.random() * hues.length)];
    document.documentElement.style.setProperty("--accent-cyan", random[0]);
    document.documentElement.style.setProperty("--accent-purple", random[1]);
  };

  return (
    <>
      <motion.button
        className="terminal-toggle"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(!isOpen);
          playClick();
        }}
        onMouseEnter={() => playHover()}
      >
        <Terminal size={24} color="white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="terminal-overlay"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <div className="terminal-window glass-panel">
              <div className="terminal-header">
                <span className="terminal-title">AymenOS_Terminal</span>
                <div className="terminal-controls">
                  <Minimize size={16} />
                  <Maximize size={16} />
                  <X
                    size={16}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setIsOpen(false);
                      playClick();
                    }}
                  />
                </div>
              </div>

              <div className="terminal-body">
                {history.map((line, i) => (
                  <div
                    key={i}
                    className={`terminal-line ${
                      line.startsWith(">") ? "command-line" : "response-line"
                    }`}
                  >
                    {line}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleCommand} className="terminal-input-area">
                <span className="prompt">$</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="terminal-input"
                  autoFocus
                  placeholder="enter command..."
                />
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandCenter;
