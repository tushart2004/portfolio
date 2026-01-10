import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About & Skills" },
   // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll logic (UNCHANGED)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((n) => n.id);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (showLoader) {
    return (
      <Loader
        darkMode={darkMode}
        onFinish={() => {
          setShowLoader(false);
          setShowIntro(true);
          setTimeout(() => setShowIntro(false), 3000);
        }}
      />
    );
  }

  return (
    <div className={`portfolio-wrapper ${darkMode ? "dark" : "light"}`}>
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-content">
            <h1 className="intro-title">Welcome</h1>
            <p className="intro-subtitle">To My Portfolio</p>
          </div>
        </div>
      )}

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrolled={scrolled}
      />

      <Hero scrollToSection={scrollToSection} />
  <About />
<Projects />
<Contact />
<Footer />

      {/* NEXT: Hero, About, Experience, Projects, Contact */}
    </div>
  );
}

export default App;
