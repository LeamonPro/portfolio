import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, User, Send, Briefcase } from "lucide-react";
import { useSciFiSound } from "../hooks/useSciFiSound";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { playHover, playClick } = useSciFiSound();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: <User size={18} /> },
    { name: "Projects", href: "#projects", icon: <Code size={18} /> },
    { name: "Experience", href: "#experience", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Send size={18} /> },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="logo"
        >
          <span style={{ color: "var(--text-secondary)" }}>{"<"}</span>
          <span className="text-gradient">Aymen</span>
          <span style={{ color: "var(--text-secondary)" }}>{"/>"}</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
            >
              {link.icon}
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="mobile-toggle"
          onClick={() => {
            setIsOpen(!isOpen);
            playClick();
          }}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mobile-menu-container"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-item"
                onClick={() => {
                  setIsOpen(false);
                  playClick();
                }}
                onMouseEnter={() => playHover()}
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
