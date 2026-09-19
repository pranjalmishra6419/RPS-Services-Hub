import React, { useState } from "react";
import "../Pages/CSS/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `Thank you ${formData.name}! We will contact you shortly.`
    );
  };

  return (
    <section className="contact-page">

      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-tag">
            <span></span>
            Contact Me
          </div>

          <h1>
            Let’s make your
            <br />
            <span>service needs</span>
            <br />
            simple.
          </h1>

          <p className="contact-intro">
            Have a question, need a service, or want to book a
            professional? Get in touch with us and our team will
            help you find the right solution.
          </p>

          {/* FEATURES */}
          <div className="contact-features">

            <div className="contact-feature">
              <div className="feature-icon">✓</div>
              <div>
                <h3>Verified Professionals</h3>
                <p>Trusted and experienced service providers.</p>
              </div>
            </div>

            <div className="contact-feature">
              <div className="feature-icon">₹</div>
              <div>
                <h3>Transparent Pricing</h3>
                <p>No hidden charges or unnecessary fees.</p>
              </div>
            </div>

            <div className="contact-feature">
              <div className="feature-icon">24</div>
              <div>
                <h3>Quick Support</h3>
                <p>We are ready to help when you need us.</p>
              </div>
            </div>

          </div>

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <div className="contact-detail">
              <div className="detail-icon">☎</div>
              <div>
                <small>CALL US</small>
                <strong>+91 7388663365</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">@</div>
              <div>
                <small>EMAIL US</small>
                <strong>serviceshub@gmail.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="detail-icon">⌖</div>
              <div>
                <small>OUR LOCATION</small>
                <strong>Lucknow, Uttar Pradesh</strong>
              </div>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="contact-form-box">

          <div className="form-heading">
            <p>GET IN TOUCH</p>
            <h2>Send us a message</h2>
            <span>
              Fill in the details below and our team will get
              back to you shortly.
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* PHONE + EMAIL */}
            <div className="form-row">

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="98XXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* SERVICE */}
            <div className="form-group">
              <label>Service Needed</label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Plumbing">Plumbing Services</option>
                <option value="Cleaning">Cleaning Services</option>
                <option value="Electrical">Electrical Services</option>
                <option value="Home">Home Services</option>
                <option value="Vehicle">Vehicle Services</option>
                <option value="Technology">Tech Services</option>
                <option value="Other">Other Service</option>
              </select>
            </div>

            {/* DATE */}
            <div className="form-group">
              <label>Preferred Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <div className="form-group">
              <label>How can we help?</label>

              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your service requirement..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* BUTTON */}
            <button type="submit" className="contact-submit">
              Send Message
              <span>→</span>
            </button>

            <p className="form-note">
              Your information is safe with us and will only be
              used to contact you regarding your request.
            </p>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;