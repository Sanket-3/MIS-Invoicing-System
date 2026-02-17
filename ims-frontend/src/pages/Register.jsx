import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
  });

  const handleRegister = async () => {
    setError("");
    setMessage("");

    try {
      await register(user);

      setMessage(`"${user.name}" registered successfully`);

      // auto redirect after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (e) {
      setError(
        e?.response?.data?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <>
      <input
        placeholder="Full Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <input
        placeholder="Email address"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <select
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option>Admin</option>
        <option>Sales</option>
        <option>Manager</option>
      </select>

      {/* SUCCESS MESSAGE */}
      {message && <p className="success-text">{message}</p>}

      {/* ERROR MESSAGE */}
      {error && <p className="error-text">{error}</p>}

      <button className="primary-btn" onClick={handleRegister}>
        Create Account
      </button>

      <p className="switch-text">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </>
  );
}
