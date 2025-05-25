import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Signup failed");
      } else {
        alert("Signup successful!");
        navigate("/login");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-heading">Sign Up</h2>
        {error && <p className="signup-error">{error}</p>}
        {/* ...inputs... */}
        <label className="signup-label">Username</label>
        <input className="signup-input" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Enter username" />
        <label className="signup-label">Email</label>
        <input className="signup-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        <label className="signup-label">Password</label>
        <input className="signup-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" />
        <button className="signup-button" type="submit">Sign Up</button>
        <p className="redirect-text">
  Already have an account? <Link to="/login" className="redirect-link">Login</Link>
</p>

      </form>
    </div>
  );
}

export default Signup;
