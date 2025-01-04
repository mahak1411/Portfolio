import React, { useState } from "react";
import "../../Styles/Contact.css";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/connect", { // Ensure the correct backend URL here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset the form
      } else {
        toast.error(result.message || "Failed to send message.");
      }
    } catch (error) {
      toast.error("Error sending message: " + error.message);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="m-5">Connect With Me!</h1>
      <div className="form-card1">
        <div className="form-card2">
          <form className="form" onSubmit={handleSubmit}>
            <p className="form-heading">Get In Touch</p>

            <div className="form-field">
              <input
                required
                placeholder="Name"
                className="input-field"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Email"
                className="input-field"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <input
                required
                placeholder="Subject"
                className="input-field"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <textarea
                required
                placeholder="Message"
                cols="30"
                rows="3"
                className="input-field"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* ToastContainer is required to show the toasts */}
    </div>
  );
};

export default Contact;
