
const About = () => {
  const technicalSkills = [
    // Frontend Technologies
    { name: "React", level: 95, icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", level: 90, icon: "💛", category: "Frontend" },
    { name: "HTML/CSS", level: 100, icon: "🎨", category: "Frontend" },
    { name: "Tailwind CSS", level: 85, icon: "🎨", category: "Frontend" },
    
    // Backend Technologies
    { name: "Node.js", level: 90, icon: "🚀", category: "Backend" },
    { name: "Express.js", level: 85, icon: "🛠️", category: "Backend" },
    { name: "MongoDB", level: 80, icon: "🍃", category: "Database" },
    
    // Programming Languages
    { name: "Python", level: 80, icon: "🐍", category: "Programming" },
    { name: "Java", level: 80, icon: "☕", category: "Programming" },
    { name: "C++", level: 75, icon: "⚡", category: "Programming" },
    
    // Tools & Others
    { name: "Git/GitHub", level: 85, icon: "📚", category: "Tools" },
    { name: "VS Code", level: 90, icon: "💻", category: "Tools" },
  ];

  const education = [
    {
      degree: "M",
      field: "Computer Science Engineering", // Update with your actual field
      institution: "Your University Name", // Update with your actual university
      year: "2021-2025", // Update with your actual years
      grade: "CGPA: X.X/10" // Update with your actual grade
    }
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
