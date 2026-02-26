import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    
    setErrorMessage('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      // EmailJS configuration - Replace with your actual service details when setting up EmailJS
      // const templateParams = {
      //   from_name: formData.name,
      //   from_email: formData.email,
      //   message: formData.message,
      //   to_email: 'tushartikia@gmail.com'
      // };

      // You need to set up EmailJS service and get your service ID, template ID, and public key
      // For now, I'll simulate a successful email send
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Uncomment this when you set up EmailJS:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID', 
      //   'YOUR_TEMPLATE_ID', 
      //   templateParams, 
      //   'YOUR_PUBLIC_KEY'
      // );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Email send failed:', error);
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <motion.h2 
          className="section-title"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="contact-content">
          {/* Left side */}
          <motion.div 
            className="contact-info"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let's create something amazing together!
            </p>

            <div className="contact-links">
              <motion.a
                href="mailto:tushartikia@gmail.com"
                className="contact-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="contact-icon" />
                <span>tushartikia@gmail.com</span>
              </motion.a>

              <motion.a
                href="https://github.com/tushart2004"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="contact-icon" />
                <span>github.com/tushart2004</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/tushar-tikia-b050701b2/"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="contact-icon" />
                <span>linkedin.com/in/tushar-tikia-b050701b2</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div 
            className="contact-form"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {isSuccess && (
              <motion.div 
                className="success-message"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
              >
                <CheckCircle size={20} />
                Message sent successfully! I'll get back to you soon.
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
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="form-input form-textarea"
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <motion.button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                    Sending...
                  </div>
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
