import { ExternalLink } from "lucide-react";
import Image1 from "./project1.jpg"; 

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        Image1,
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms with beautiful visualizations.",
      tech: ["React", "D3.js", "Firebase", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team communication features.",
      tech: ["React", "WebSocket", "PostgreSQL", "Express"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      link: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content creation tool that helps users generate creative content using machine learning.",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      link: "#",
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
