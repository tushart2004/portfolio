import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import heroImage from "../../Assets/images/hero1.jpg";
import Resume from "./Tushar_Resume.pdf"

const Hero = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderImages = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop",
  ];

  // 🔁 Auto slider (UNCHANGED)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section id="home" className="hero-section">
      {/* Slider background */}
      <div className="slider-container">
        {sliderImages.map((img, idx) => (
          <div
            key={idx}
            className={`slide ${idx === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="slider-overlay" />
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <div className="hero-avatar">
          <div className="avatar-circle" style={{ overflow: "hidden" }}>
            <img
              src={heroImage}
              alt="Avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">Tushar Tikia</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer & Creative Problem Solver
        </p>

        <div className="hero-buttons">
          <button
            onClick={() => scrollToSection("projects")}
            className="btn btn-primary"
          >
            View My Work
          </button>

          <a
            href={Resume}
            download="Tushar_Tikia_Resume.pdf"
            className="btn btn-secondary"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Slider dots */}
      <div className="slider-dots">
        {sliderImages.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
