import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrorMessage("");

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
      const receiverEmail = process.env.REACT_APP_CONTACT_EMAIL || "tushartikia@gmail.com";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: receiverEmail,
        reply_to: formData.email,
      };

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        setSuccessMessage("Message sent successfully. I will get back to you soon.");
      } else {
        const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );
        window.location.href = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
        setSuccessMessage("Your email app opened with the message ready to send.");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => {
        setIsSuccess(false);
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setErrorMessage("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <div className="section-kicker">Contact</div>
        <motion.h2
          className="section-title"
          initial={{ y: -28, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-copy">
              <h3>Let's build something useful.</h3>
              <p className="text-lg">
                I am open to internships, junior developer roles, freelance work,
                and collaboration on web products. Send a message and I will get
                back as soon as I can.
              </p>
            </div>

            <div className="contact-links">
              <motion.a
                href="mailto:tushartikia@gmail.com"
                className="contact-link"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail className="contact-icon" />
                <span>
                  <strong>Email</strong>
                  tushartikia@gmail.com
                </span>
              </motion.a>

              <motion.a
                href="https://github.com/tushart2004"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="contact-icon" />
                <span>
                  <strong>GitHub</strong>
                  github.com/tushart2004
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/tushar-tikia/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, x: 4 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin className="contact-icon" />
                <span>
                  <strong>LinkedIn</strong>
                  linkedin.com/in/tushar-tikia-b050701b2
                </span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {isSuccess && (
              <motion.div
                className="success-message"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.35 }}
              >
                <CheckCircle size={20} />
                {successMessage}
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {errorMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <label className="form-field">
                <span>Your Name</span>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </label>

              <label className="form-field">
                <span>Your Email</span>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </label>

              <label className="form-field">
                <span>Message</span>
                <motion.textarea
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project or opportunity"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </label>

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.03 }}
                whileTap={{ scale: isLoading ? 1 : 0.97 }}
              >
                {isLoading ? (
                  <span className="loading-spinner">
                    <span className="spinner" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
