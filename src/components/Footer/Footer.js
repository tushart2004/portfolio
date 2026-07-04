import React from "react";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowUp size={20} />
        </motion.button>

        <div className="footer-brand">
          <span>Tushar Tikia</span>
          <p>Full Stack Developer</p>
        </div>

        <div className="footer-links">
          <motion.a
            href="mailto:tushartikia@gmail.com"
            className="footer-social-link"
            aria-label="Email Tushar"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <Mail size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/tushart2004"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/tushar-tikia-b050701b2/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile"
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
          >
            <Linkedin size={18} />
          </motion.a>
        </div>

        <div className="footer-copyright">
          <p>
            (c) {currentYear} Tushar Tikia. Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-flex" }}
            >
              <Heart size={14} color="#34d399" fill="#34d399" />
            </motion.span>{" "}
            and React.
          </p>
          <p className="footer-tagline">Turning ideas into digital reality.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
