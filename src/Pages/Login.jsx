import React, { useState } from "react";
import "../Pages/CSS/Login.css";
import Header from '../Components/Header'

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
  };

  return (
    <>
    <Header/>
    <section className="login-page">

      <div className="login-wrapper">

        {/* LEFT SIDE */}
        <div className="login-left">

          <div className="login-tag">
            <span></span>
            WELCOME TO SERVICES HUB
          </div>

          <h1>
            Your services.
            <br />
            <span>One simple place.</span>
          </h1>

          <p className="login-intro">
            Login to your Services Hub account and easily manage
            your bookings, services and requests from one place.
          </p>

          <div className="login-features">

            <div className="login-feature">
              <div className="login-icon">✓</div>
              <div>
                <h3>Easy Service Booking</h3>
                <p>Book the services you need in just a few clicks.</p>
              </div>
            </div>

            <div className="login-feature">
              <div className="login-icon">⌂</div>
              <div>
                <h3>Manage Your Bookings</h3>
                <p>Keep track of your upcoming service requests.</p>
              </div>
            </div>

            <div className="login-feature">
              <div className="login-icon">24</div>
              <div>
                <h3>Quick Support</h3>
                <p>Get help whenever you need assistance.</p>
              </div>
            </div>

          </div>

          <div className="login-bottom-text">
            <span>New to Services Hub?</span>
            <strong>Create your account and get started.</strong>
          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="login-form-box">

          <div className="login-form-heading">
            <p>ACCOUNT LOGIN</p>

            <h2>Welcome back!</h2>

            <span>
              Enter your details to access your account.
            </span>
          </div>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className="login-form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>


            {/* PASSWORD */}
            <div className="login-form-group">

              <div className="password-label">
                <label>Password</label>

                <a href="#forgot">
                  Forgot password?
                </a>
              </div>

              <div className="password-input">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="show-password"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* REMEMBER */}
            <div className="remember-row">

              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-button"
            >
              Login
              <span>→</span>
            </button>


            {/* DIVIDER */}
            <div className="login-divider">
              <span>OR</span>
            </div>


            {/* SIGN UP */}
            <div className="signup-text">
              Don't have an account?
              <a href="#signup"> Create Account</a>
            </div>

          </form>

        </div>

      </div>

    </section>
    </>
  );
}

export default Login;