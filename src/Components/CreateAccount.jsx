import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Components/Css/CreateAccount.css"
import Footer from "./Footer";
import Header from "./Header";

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
    <Header/>
    <div className="signup-page">

      {/* LEFT SIDE */}
      <div className="signup-left">

        <div className="welcome-text">
          <span className="small-heading">
            • WELCOME TO SERVICES HUB
          </span>

          <h1>
            Your services.
            <br />
            <span>One simple place.</span>
          </h1>

          <p className="intro-text">
            Create your Services Hub account and easily manage your
            bookings, services and requests from one place.
          </p>
        </div>

        {/* FEATURES */}
        <div className="features">

          <div className="feature">
            <div className="feature-icon">✓</div>
            <div>
              <h3>Easy Service Booking</h3>
              <p>
                Book the right service with just a few clicks.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">⌂</div>
            <div>
              <h3>Manage Your Bookings</h3>
              <p>
                Keep track of your upcoming services easily.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">♧</div>
            <div>
              <h3>Quick Support</h3>
              <p>
                Get help whenever you need assistance.
              </p>
            </div>
          </div>

        </div>

        <div className="bottom-text">
          <p>Already a Services Hub member?</p>
          <Link to="/login">Login to your account.</Link>
        </div>

      </div>


      {/* RIGHT SIDE SIGNUP CARD */}
      <div className="signup-card">

        <div className="card-heading">
          <span>CREATE ACCOUNT</span>

          <h2>Get started!</h2>

          <p>
            Enter your details to create your account.
          </p>
        </div>


        {/* FULL NAME */}
        <div className="input-group">
          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
          />
        </div>


        {/* EMAIL */}
        <div className="input-group">
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>


        {/* PASSWORD */}
        <div className="input-group">
          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create your password"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>


        {/* CONFIRM PASSWORD */}
        <div className="input-group">
          <label>Confirm Password</label>

          <div className="password-box">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>


        {/* TERMS */}
        <div className="terms">
          <input type="checkbox" id="terms" />

          <label htmlFor="terms">
            I agree to the Terms & Conditions
          </label>
        </div>


        {/* SIGNUP BUTTON */}
        <button className="signup-btn">
          Create Account <span>→</span>
        </button>


        {/* DIVIDER */}
        <div className="divider">
          <span></span>
          <p>or</p>
          <span></span>
        </div>


        {/* SOCIAL LOGIN */}
        <div className="social-buttons">

          <button className="social-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <button className="social-btn">
            <span className="facebook-icon">f</span>
            Continue with Facebook
          </button>

        </div>


        {/* LOGIN */}
        <div className="login-link">
          <span>Already have an account?</span>
          <Link to="/loging"> Login</Link>
        </div>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default CreateAccount;