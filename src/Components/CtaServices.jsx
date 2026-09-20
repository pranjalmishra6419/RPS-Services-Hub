import React from 'react'
import '../Components/Css/CtaServices.css'

const CtaServices = () => {
  return (
    <>
    <section className="about-cta-section">
  <div className="about-cta">

    <div className="cta-content">
      <span className="cta-label">GET STARTED WITH CAREFLOW</span>

      <h2>
        Need a Service?
        <span> We've Got You Covered.</span>
      </h2>

      <p>
        Find the right service, choose a provider and book it
        easily — all in one place.
      </p>

      <div className="cta-buttons">
        <a href="/services" className="cta-primary">
          Explore Services <span>→</span>
        </a>

        <a href="/contact" className="cta-secondary">
          Contact Us
        </a>
      </div>
    </div>

    <div className="cta-visual">
      <div className="cta-circle circle-one"></div>
      <div className="cta-circle circle-two"></div>

      <div className="cta-icon">
        ✦
      </div>

      <div className="cta-floating-card card-top">
        <span>✓</span>
        <div>
          <strong>Easy Booking</strong>
          <small>Simple & Fast</small>
        </div>
      </div>

      <div className="cta-floating-card card-bottom">
        <span>⚡</span>
        <div>
          <strong>Save Your Time</strong>
          <small>Everything in one place</small>
        </div>
      </div>
    </div>

  </div>
</section>
    </>
  )
}

export default CtaServices