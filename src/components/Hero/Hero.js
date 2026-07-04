import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Download, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../Assets/images/hero1.jpg";
import Resume from "./Tushar_Resume.pdf";

const Hero = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1600&h=900&fit=crop",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="hero-section">
      <div className="slider-container" aria-hidden="true">
        {sliderImages.map((img, idx) => (
          <motion.div
            key={img}
            className={`slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            initial={{ scale: 1.08 }}
            animate={{ scale: idx === currentSlide ? 1 : 1.08 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
        <div className="slider-overlay" />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-eyebrow" variants={itemVariants}>
          <Sparkles size={16} />
          Available for web development opportunities
        </motion.div>

        <motion.div
          className="hero-avatar"
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="avatar-circle">
            <img src={heroImage} alt="Tushar Tikia" />
          </div>
          <div className="avatar-ring" />
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I'm <span className="gradient-text">Tushar Tikia</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          Full Stack Developer focused on MERN applications, clean interfaces,
          and practical problem solving.
        </motion.p>

        <motion.div className="hero-description" variants={itemVariants}>
          <p>
            I build responsive web experiences with React, Node.js, Express, and
            MongoDB, turning product ideas into polished, usable applications.
          </p>
        </motion.div>

        <motion.div className="hero-meta" variants={itemVariants}>
          <span>
            <MapPin size={16} />
            India
          </span>
          <span>React</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </motion.div>

        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="btn btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Work
            <ArrowRight size={18} />
          </motion.button>

          <motion.a
            href={Resume}
            download="Tushar_Tikia_Resume.pdf"
            className="btn btn-secondary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div className="hero-quick-stats" variants={itemVariants}>
          <div>
            <strong>MERN</strong>
            <span>Stack focus</span>
          </div>
          <div>
            <strong>API</strong>
            <span>Backend skills</span>
          </div>
          <div>
            <strong>UI</strong>
            <span>Responsive design</span>
          </div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="scroll-btn"
            aria-label="Scroll to about section"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="slider-dots" aria-label="Hero background slides">
        {sliderImages.map((_, idx) => (
          <motion.button
            key={idx}
            className={`dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Show slide ${idx + 1}`}
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 0.92 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
