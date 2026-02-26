import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image1 from "../../Assets/images/Project1.jpg"; 

const Projects = () => {
  const projects = [
    {
      title: "Grocer Guru E-Commerce Platform",
      description:
        "A comprehensive full-stack e-commerce solution featuring real-time inventory management, secure payment integration, and an intuitive admin panel. Built with modern technologies to ensure scalability and optimal performance.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      image: Image1,
      link: "https://full-stack-ecommerce-gkwx.vercel.app/",
      github: "#", // Add your GitHub link
      featured: true,
    
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <motion.section 
      id="projects" 
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className={`project-card ${project.featured ? 'featured-project' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <Star size={16} />
                  <span>Featured</span>
                </div>
              )}

              {/* Image */}
              <div className="project-image-container">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.link}
                      className="project-link-overlay"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="project-link-overlay github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech, techIdx) => (
                    <motion.span 
                      key={tech} 
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIdx * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {project.stats && (
                  <div className="project-stats">
                    <div className="stat">
                      <span className="stat-value">{project.stats.users}</span>
                      <span className="stat-label">Active Users</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{project.stats.performance}</span>
                      <span className="stat-label">Performance</span>
                    </div>
                    <div className="stat">
                      <span className="stat-value">{project.stats.uptime}</span>
                      <span className="stat-label">Uptime</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <motion.a
            href="https://github.com/tushart2004"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
