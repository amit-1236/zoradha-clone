import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const initialForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      setSuccess(response.data.message || "Signup successful!");
      setFormData(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .signup-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #f4f8fb 0%, #eaf3ff 100%);
          padding: 24px;
        }

        .signup-card {
          width: min(100%, 440px);
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
          padding: 32px 28px;
        }

        .signup-card h2 {
          margin: 0 0 8px;
          font-size: 1.8rem;
          color: #111827;
          text-align: center;
        }

        .signup-subtitle {
          margin: 0 0 24px;
          color: #6b7280;
          font-size: 0.95rem;
          text-align: center;
        }

        .signup-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .field label {
          font-size: 0.86rem;
          font-weight: 600;
          color: #374151;
        }

        .field input {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 0.96rem;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .field input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .submit-btn {
          border: none;
          border-radius: 10px;
          padding: 12px 16px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .submit-btn:hover {
          opacity: 0.96;
          transform: translateY(-1px);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .message {
          margin-top: 12px;
          font-size: 0.9rem;
          text-align: center;
        }

        .error {
          color: #b91c1c;
          font-weight: 600;
        }

        .success {
          color: #15803d;
          font-weight: 600;
        }

        .login-link {
          margin-top: 18px;
          text-align: center;
          color: #4b5563;
          font-size: 0.92rem;
        }

        .login-link a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>

      <div className="signup-page">
        <div className="signup-card">
          <h2>Create Account</h2>
          <p className="signup-subtitle">Open your Zoradha trading account</p>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>

            <div className="field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          {error && <p className="message error">{error}</p>}
          {success && <p className="message success">{success}</p>}

          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
