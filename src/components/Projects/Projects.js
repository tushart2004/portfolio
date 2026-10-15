import React from "react";
import { ArrowRight, ExternalLink, Github, ShoppingCart, Star, Brain, Blocks } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../Assets/images/Project1.jpg";
import Image2 from "../../Assets/images/Project2.jpg";
import Image3 from "../../Assets/images/Project3.jpg";

const Projects = () => {
  const projectIcons = {
    ShoppingCart: ShoppingCart,
    Brain: Brain,
    Blocks: Blocks,
  };

  const projects = [
    {
      title: "AI Interview Preparation Platform",
      description:
        "A full-stack AI interview platform with 15 modules, 40+ backend files, 25+ REST API endpoints, and 7 MongoDB collections. Features 6 specialized AI agents with an AI orchestrator for question generation, answer evaluation, feedback, and adaptive difficulty. Includes JWT auth, RBAC, speech recognition, webcam emotion tracking, coding assessments, and analytics.",
      tech: ["React 18", "Redux Toolkit", "Node.js", "MongoDB", "Express.js", "Multi-Agent AI"],
      image: Image2,
      link: "https://ai-interview-platform-bci4.vercel.app/",
      github: "https://github.com/tushart2004/AI-Interview-Platform",
      featured: true,
      icon: "Brain",
      stats: {
        scope: "Full Stack",
        focus: "AI / ML",
        stack: "MERN + AI",
      },
    },
    {
      title: "AI Software Architect",
      description:
        "An AI-powered platform converting natural language ideas into software requirements, system architecture, database schemas, and API designs. Features an interactive architecture designer with components, connections, and system diagrams. Includes AI architecture reviews covering scalability, security, reliability, maintainability, and cost analysis.",
      tech: ["React", "Node.js", "AI Integration", "System Design", "REST APIs"],
      image: Image3,
      link: "https://client-lilac-zeta-95.vercel.app/",
      github: "https://github.com/tushart2004/AI-Software-Architect",
      featured: true,
      icon: "Blocks",
      stats: {
        scope: "Full Stack",
        focus: "AI / Design",
        stack: "MERN + AI",
      },
    },
    {
      title: "Grocer Guru E-Commerce Platform",
      description:
        "A full-stack grocery commerce platform with product browsing, cart flow, admin-ready structure, and a responsive shopping experience built around the MERN stack.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: Image1,
      link: "https://full-stack-ecommerce-gkwx.vercel.app/",
      github: "https://github.com/tushart2004",
      featured: false,
      icon: "ShoppingCart",
      stats: {
        scope: "Full Stack",
        focus: "Commerce",
        stack: "MERN",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.18,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 44, opacity: 0 },
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
    <motion.section
      id="projects"
      className="section projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="section-kicker">Selected work</div>
        <motion.h2
          className="section-title"
          initial={{ y: -28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className={`project-card ${project.featured ? "featured-project" : ""}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.25 },
              }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star size={16} />
                  <span>Featured</span>
                </div>
              )}

              <div className="project-image-container">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.35 }}
                />

                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.link}
                      className="project-link-overlay"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.92 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="project-link-overlay github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Open GitHub profile"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-heading-row">
                  <span className="project-icon" aria-hidden="true">
                    {(() => { const IconComp = projectIcons[project.icon]; return IconComp ? <IconComp size={20} /> : null; })()}
                  </span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: techIdx * 0.06 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-value">{project.stats.scope}</span>
                    <span className="stat-label">Scope</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{project.stats.focus}</span>
                    <span className="stat-label">Focus</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{project.stats.stack}</span>
                    <span className="stat-label">Stack</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <p>Explore more code, experiments, and practice projects on GitHub.</p>
          <motion.a
            href="https://github.com/tushart2004"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
          >
            <Github size={20} />
            View All Projects
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
