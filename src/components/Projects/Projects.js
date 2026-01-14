import { ExternalLink } from "lucide-react";
import Image1 from "../../Assets/images/Project1.jpg"; 

const Projects = () => {
  const projects = [
    {
      title: "Grocer Guru E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment integration. It has a fully enabled admin panel for managing products, orders, and users.",
      tech: ["React", "Node.js", "MongoDB","Express.js"],
      image:
        Image1,
      link: "https://full-stack-ecommerce-gkwx.vercel.app/",
    },
    
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              {/* Image */}
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <div className="project-overlay">
                  <a
                    href={project.link}
                    className="project-link-overlay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
