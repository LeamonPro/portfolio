import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="section-container"
      style={{
        padding: "100px 2rem",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-gradient"
          style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem" }}
        >
          Get In Touch
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            marginBottom: "3rem",
            fontSize: "1.2rem",
          }}
        >
          Have a project in mind or just want to say hi? I'd love to hear from
          you.
        </p>

        <motion.a
          href="mailto:amriaymen221@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "1rem 3rem",
            background: "var(--accent-purple)",
            color: "white",
            borderRadius: "50px",
            fontWeight: "bold",
            fontSize: "1.2rem",
            boxShadow: "0 0 30px rgba(188, 19, 254, 0.4)",
            cursor: "pointer",
          }}
        >
          <Mail /> Say Hello
        </motion.a>
      </motion.div>
    </section>
  );
};
export default Contact;
