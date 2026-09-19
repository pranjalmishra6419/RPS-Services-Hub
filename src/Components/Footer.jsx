import React from 'react'
import '../Components/Css/Footer.css'

const Footer = () => {
  return (
    <>
    <footer className="cf-footer">

    <div className="cf-footer-main">

        <div className="cf-footer-brand">
            map..............
        </div>

        <div className="cf-footer-column">
            <h3>Our Services</h3>

            <a href="#">Home Services</a>
            <a href="#">Vehicle Services</a>
            <a href="#">Tech Services</a>
            <a href="#">Repair Services</a>
            <a href="#">Cleaning Services</a>
            <a href="#">Personal Care</a>
        </div>

        <div className="cf-footer-column">
            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">All Services</a>
            <a href="#">How It Works</a>
            <a href="#">Calculators</a>
            <a href="#">Contact Us</a>
        </div>


        <div className="cf-footer-column">
            <h3>For Providers</h3>

            <a href="#">Become a Provider</a>
            <a href="#">Provider Login</a>
            <a href="#">Provider Benefits</a>
            <a href="#">How It Works</a>
            <a href="#">Provider Support</a>
        </div>


        <div className="cf-footer-column cf-footer-contact">
            <h3>Get In Touch</h3>

            <p>📍 Lucknow, Uttar Pradesh</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ support@careflow.com</p>
          <div className="cf-footer-social">
                <a href="#">f</a>
                <a href="#">in</a>
                <a href="#">𝕏</a>
                <a href="#">◎</a>
            </div>
            
        </div>

    </div>

    
    

</footer>
    </>
  )
}

export default Footer