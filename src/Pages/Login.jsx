
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Pages/Css/Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-left">

        <div className="login-left-content">

          <div className="login-brand">
            PRS <span>Services Hub</span>
          </div>

          <div>
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

        <div className="login-right">

          <div className="login-card">

            <div className="login-card-header">
              <h2>Welcome Back</h2>
              <p>Login to continue to your account</p>
            </div>

            <form>

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

              <div className="login-options">

                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <Link to="/forgot-password">
                  Forgot Password?
                </Link>

              </div>

              <button
                type="submit"
                className="login-btn"
              >
                Login
                <span>→</span>
              </button>

            </form>

            <div className="login-divider">
              <span>OR</span>
            </div>

            <div className="login-signup">
              <p>Don't have an account?</p>

              <Link to="/signup">
                Create Account
              </Link>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;