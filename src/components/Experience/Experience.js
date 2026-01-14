
const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and improved code quality by 40%."
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "Built responsive user interfaces and implemented modern design systems. Reduced page load times by 60% through optimization techniques."
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Developed features for various client projects and collaborated with cross-functional teams to deliver high-quality solutions."
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">
          Work <span className="gradient-text">Experience</span>
        </h2>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>

              <p className="experience-description">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
