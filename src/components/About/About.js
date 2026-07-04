import React from "react";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Server,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";

const About = () => {
  const technicalSkills = [
    { name: "React", level: 95, icon: Code2, category: "Frontend" },
    { name: "JavaScript", level: 90, icon: TerminalSquare, category: "Frontend" },
    { name: "HTML/CSS", level: 100, icon: Layers, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, icon: Sparkles, category: "Frontend" },
    { name: "Node.js", level: 90, icon: Server, category: "Backend" },
    { name: "Express.js", level: 85, icon: Wrench, category: "Backend" },
    { name: "MongoDB", level: 80, icon: Database, category: "Database" },
    { name: "Python", level: 80, icon: TerminalSquare, category: "Programming" },
    { name: "Java", level: 80, icon: Code2, category: "Programming" },
    { name: "C++", level: 75, icon: Code2, category: "Programming" },
    { name: "Git/GitHub", level: 85, icon: GitBranch, category: "Tools" },
    { name: "VS Code", level: 90, icon: Wrench, category: "Tools" },
  ];

  const highlights = [
    { value: "MERN", label: "Primary stack" },
    { value: "12+", label: "Core skills" },
    { value: "Clean", label: "Code mindset" },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-kicker">Profile</div>
        <h2 className="section-title">
          About Me & <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card about-intro">
              <h3>Software development engineer in progress</h3>
              <p className="text-lg">
                I am an aspiring Software Development Engineer with hands-on
                experience building full-stack web applications using the MERN
                stack. I focus on React frontends, Node.js APIs, clean code,
                scalable structure, and user-centered product thinking.
              </p>
            </div>

            <div className="about-card about-values">
              <h3>How I work</h3>
              <p className="text-lg">
                I am a proactive learner, adaptable teammate, and consistent
                builder who enjoys turning ideas into reliable web experiences
                that are easy to use and maintain.
              </p>
            </div>

            <div className="about-stats">
              {highlights.map((item) => (
                <div className="stat" key={item.label}>
                  <span className="stat-number">{item.value}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-heading">Technical Skills</h3>

            <div className="skills-grid-technical">
              {technicalSkills.map((skill, idx) => {
                const SkillIcon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="skill-card-technical"
                    style={{ animationDelay: `${idx * 70}ms` }}
                  >
                    <div className="skill-progress-glow" />
                    <div className="skill-header">
                      <span className="skill-icon" aria-hidden="true">
                        <SkillIcon size={20} />
                      </span>
                      <span className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-category">{skill.category}</span>
                      </span>
                    </div>

                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label={`${skill.name} proficiency`}
                      >
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="additional-skills">
              <h4>Also comfortable with</h4>
              <div className="skill-tags">
                {["REST APIs", "Responsive UI", "Authentication", "Deployment", "Debugging"].map(
                  (skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
