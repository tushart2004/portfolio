import React from 'react';
import { Heart, ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        {/* Back to Top Button */}
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>

        {/* Footer Links */}
        <div className="footer-links">
          <motion.a
            href="mailto:tushartikia@gmail.com"
            className="footer-social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={18} />
          </motion.a>

          <motion.a
            href="https://github.com/tushart2004"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={18} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/tushar-tikia-b050701b2/"
            className="footer-social-link"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={18} />
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {currentYear} Tushar Tikia. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              <Heart size={14} color="#22c55e" fill="#22c55e" />
            </motion.span>{" "}
            and React
          </p>
          <p className="footer-tagline">
            Turning ideas into digital reality
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
