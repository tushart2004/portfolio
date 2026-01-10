const About = () => {
  const technicalSkills = [
    { name: "Node.js", level: 90, icon: "🟢" },
    { name: "HTML/CSS/Tailwind", level: 100, icon: "💻" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "React", level: 95, icon: "⚛️" },
    { name: "JavaScript", level: 90, icon: "🟨" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          About Me & <span className="gradient-text">Technical Skills</span>
        </h2>

        <div className="about-content">
          {/* About text */}
          <div className="about-text">
            <p className="text-lg">
Aspiring  Software  Development  Engineer  (SDE)    with  hands-on  experience  inbuilding  full-stack  web  applications  using  the  MERN  stack  (MongoDB,  Express.js,
React,  Node.js).  Strong  foundation  in  React-based  front-end  development  and
Node.js  backend  APIs,  with  a  focus  on  clean  code,  scalability,  and  user-centric
design.
            </p>

            <p className="text-lg">
              A  proactive  learner,  adaptable  team  player,  and  committed  to  delivering
reliable solutions within deadlines.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h3 className="skills-heading"># Technical Skills</h3>

            <div className="skills-grid-technical">
              {technicalSkills.map((skill, idx) => (
                <div
                  key={skill.name}
                  className="skill-card-technical"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>

                  <div className="skill-bar-container">
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="skill-percentage">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
