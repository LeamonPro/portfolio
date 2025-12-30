import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements"; // New Component
import Contact from "./components/Contact";
import CommandCenter from "./components/CommandCenter";
import Starfield from "./components/Starfield";
import Preloader from "./components/Preloader"; // Boot Sequence

import Cursor from "./components/Cursor";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Starfield />
          <Cursor />
          <CommandCenter />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Achievements />
            <Projects />
            <Contact />
          </main>

          <footer
            style={{
              textAlign: "center",
              padding: "2rem",
              borderTop: "1px solid var(--glass-border)",
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              background: "var(--bg-secondary)",
            }}
          >
            <p>© {new Date().getFullYear()} Aymen. All rights reserved.</p>
            <p style={{ marginTop: "0.5rem", opacity: 0.6 }}>
              Designed & Built with React & Framer Motion
            </p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
