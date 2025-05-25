// // mongodb+srv://lakkadiabhigna:tTn5MC0TBJtCUWv0@cluster0.ie67rev.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.message || "Login failed");
      } else {
        alert("Login successful");
        // You could save token in localStorage if needed
        navigate("/predict");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="heading">Welcome Back!!</h2>
        {/* inputs + show password */}
        <label htmlFor="email" className="label">Email</label>
        <input type="email" id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
        <label htmlFor="password" className="label">Password</label>
        <div style={{ position: "relative" }}>
          <input type={showPassword ? "text" : "password"} id="password" placeholder="Your password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" style={{ paddingRight: "2.5rem" }} />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="eye-button">
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" className="button">Login</button>
        <p className="redirect-text">
  Don’t have an account? <Link to="/signup" className="redirect-link">Sign up</Link>
</p>

      </form>
    </div>
  );
};

export default Login;
