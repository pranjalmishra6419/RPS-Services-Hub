import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Css/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      {/* Left Side */}
      <div className="login-left">

        <div className="login-brand">
          PRS <span>Services Hub</span>
        </div>

        <div className="login-left-content">
          <span className="login-small-title">
            WELCOME BACK
          </span>

          <h1>
            Your Services,
            <br />
            <span>All In One Place.</span>
          </h1>

          <p>
            Find trusted professionals and manage your everyday
            service needs easily with PRS Services Hub.
          </p>

          <div className="login-features">
            <div>
              <span>✓</span>
              Multiple services
            </div>

            <div>
              <span>✓</span>
              Easy service discovery
            </div>

            <div>
              <span>✓</span>
              Simple booking experience
            </div>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="login-card">
          <div className="login-card-header">           
            <p>
              Login to continue to your account
            </p>
          </div>


          <form>

            {/* Email */}
            <div className="login-input-group">
              <label>Email Address</label>

              <div className="login-input-box">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>


            {/* Password */}
            <div className="login-input-group">
              <label>Password</label>

              <div className="login-input-box">
                <span>🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>


            {/* Remember + Forgot */}
            
            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            {/* Login Button */}
            <button
              type="submit"
              className="login-btn">
              Login
              <span>→</span>
            </button>

          </form>


          {/* Divider */}
          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* Sign Up start */}
          <div className="login-signup">
            <p>
              Don't have an account?
            </p>
            <Link to="/signup">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
