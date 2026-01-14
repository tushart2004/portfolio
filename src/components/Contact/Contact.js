import { Mail, Github, Linkedin } from "lucide-react";


const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>

        <div className="contact-content">
          {/* Left side */}
          <div className="contact-info">
            <p className="text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-links">
              <a
                href="mailto:tushartikia@gmail.com"
                className="contact-link"
              >
              <Mail className="contact-icon" />
                <span>tushartikia@gmail.com</span>
              </a>

              <a
                href="https://github.com/tushart2004"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="contact-icon" />
                <span>github.com/tushart2004</span>
              </a>

              <a
                href="https://www.linkedin.com/in/tushar-tikia-b050701b2/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="contact-icon" />
                <span>linkedin.com/in/tushar-tikia-b050701b2</span>
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="form-input form-textarea"
            />

            <button
              onClick={() => alert("Message sent!")}
              className="btn btn-primary btn-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
