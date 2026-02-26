import { useEffect, useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../Assets/images/hero1.jpg";
import Resume from "./Tushar_Resume.pdf"

const Hero = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
  ];

  // 🔁 Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Slider background */}
      <div className="slider-container">
        {sliderImages.map((img, idx) => (
          <motion.div
            key={idx}
            className={`slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
            initial={{ scale: 1.1 }}
            animate={{ scale: idx === currentSlide ? 1 : 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
        <div className="slider-overlay" />
      </div>

      {/* Hero content */}
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="hero-avatar"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="avatar-circle" style={{ overflow: "hidden" }}>
            <img
              src={heroImage}
              alt="Tushar Tikia"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="avatar-ring"></div>
        </motion.div>

        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Hi, I'm <span className="gradient-text">Tushar Tikia</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          variants={itemVariants}
        >
          Full Stack Developer & Creative Problem Solver
        </motion.p>

        <motion.div 
          className="hero-description"
          variants={itemVariants}
        >
          <p>
            Passionate about creating exceptional digital experiences with modern technologies.
            Specializing in React, Node.js, and the MERN stack.
          </p>
        </motion.div>

        <motion.div 
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="btn btn-primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>

          <motion.a
            href={Resume}
            download="Tushar_Tikia_Resume.pdf"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="scroll-btn"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Slider dots */}
      <div className="slider-dots">
        {sliderImages.map((_, idx) => (
          <motion.button
            key={idx}
            className={`dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Floating elements for visual appeal */}
      <div className="floating-elements">
        <motion.div 
          className="floating-circle floating-circle-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360] 
          }}
          transition={{ 
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        />
        <motion.div 
          className="floating-circle floating-circle-2"
          animate={{ 
            y: [0, 20, 0],
            rotate: [360, 0] 
          }}
          transition={{ 
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
