import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error-text">{error}</p>}

      <button className="primary-btn" onClick={handleLogin}>
        Sign In
      </button>

      <div className="trust-text">
        🔒 Secured with enterprise-grade encryption
      </div>

      <p className="switch-text">
        New here? <Link to="/register">Create Account</Link>
      </p>
    </>
  );
}
