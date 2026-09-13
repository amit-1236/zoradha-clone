import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialForm = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
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
    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:3002/login", {
        username: formData.username,
        password: formData.password,
      });

      const user = response.data.user || { username: formData.username };
      localStorage.setItem("zoradhaUser", JSON.stringify(user));

      setSuccess(response.data.message || "Login successful!");
      setFormData(initialForm);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .login-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #f8fafc 0%, #edf6ff 100%);
          padding: 24px;
        }

        .login-card {
          width: min(100%, 420px);
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
          padding: 30px 28px;
        }

        .login-card h2 {
          margin: 0 0 8px;
          text-align: center;
          color: #111827;
          font-size: 2rem;
        }

        .login-subtitle {
          margin: 0 0 24px;
          text-align: center;
          color: #6b7280;
          font-size: 0.95rem;
        }

        .login-form {
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
          box-sizing: border-box;
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-size: 0.96rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .field input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .login-btn {
          border: none;
          border-radius: 10px;
          padding: 12px 16px;
          background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
          color: white;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .login-btn:hover {
          opacity: 0.96;
          transform: translateY(-1px);
        }

        .login-btn:disabled {
          cursor: not-allowed;
          opacity: 0.75;
          transform: none;
        }

        .message {
          margin-top: 18px;
          text-align: center;
          font-size: 0.9rem;
        }

        .error {
          color: #b91c1c;
          font-weight: 600;
        }

        .success {
          color: #15803d;
          font-weight: 600;
        }

        .signup-link {
          margin-top: 18px;
          text-align: center;
          color: #4b5563;
          font-size: 0.92rem;
        }

        .signup-link a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }
      `}</style>

      <div className="login-page">
        <div className="login-card">
          <h2>Welcome back</h2>
          <p className="login-subtitle">Log in to your Zoradha account</p>

          <form className="login-form" onSubmit={handleSubmit}>
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
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="login-btn" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && <p className="message error">{error}</p>}
          {success && <p className="message success">{success}</p>}

          <p className="signup-link">
            Need an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;