import { useEffect, useState, useMemo } from "react";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";




function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = useMemo(() => [
    { id: "home", label: "Home" },
    { id: "about", label: "About & Skills" },
   // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ], []);

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
        }}
      />
    );
  }

  return (
    <div className={`portfolio-wrapper ${darkMode ? "dark" : "light"}`}>
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
